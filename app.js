/* Fil i compte — compositor local, sense serveis externs. */
(() => {
  'use strict';
  const {language,t}=FilI18n;
  const pageTitle=document.title;
  const assets=language==='es'?'../assets/':'assets/';
  const C=MatesCore, catalogue=EXERCISE_CATALOG.exercises, $=id=>document.getElementById(id);
  const STORAGE='fil-i-compte-v1';
  const LEVEL_SHORT={mitja:'CM',superior:'CS',eso:'ESO'};
  const FEATURE_MODES=[{id:'allow',label:t('Permès'),icon:'·'},{id:'require',label:t('Obligatori'),icon:'✓'},{id:'exclude',label:t('Exclòs'),icon:'×'}];
  const REASONING_HINTS={
    'treballar-cap-enrere':t('Parteix del resultat i desfés els canvis per recuperar el que hi havia al principi o un pas desconegut.'),
    'interpretar-residu':t('Decideix què fer amb el que sobra en un repartiment o una agrupació.'),
    'identificar-tot':t('Identifica a quina quantitat es refereix cada fracció o percentatge.'),
    'comparar-estrategies':t('Compara dos camins per resoldre el problema i valora quan convé cadascun.')
  };
  const WORK_PATTERNS=['dots','grid','lines','blank'];
  const defaultTitle='Problemes per pensar';
  const initial=()=>({pageCount:2,perPage:2,ids:['P0001','P0003','P0005','P0009'],filters:{features:{},scope:'sheet',level:'',difficulty:''},title:t(defaultTitle),titleIsDefault:true,group:'',showBrand:true,workPattern:'dots',repeatHeader:false});
  let state=initial(), query='', solutionView=false, visualSequence=0, printMode=null;
  let reviewStep=false, previewScale=1, fitPreview=true, zoomTarget=1, zoomFrame=0, pan=null;
  try {const saved=JSON.parse(localStorage.getItem(STORAGE));if(saved)state=validateState(saved);}catch{}
  // Code ranges survive switching languages. Ordinary visits begin with an empty search.
  const languageView=/^#view=(bank|exercises|solutions)$/.exec(location.hash)?.[1];
  if(languageView)query=state.filters.codes||'';else delete state.filters.codes;
  const escape=text=>String(text).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const selected=()=>state.ids.map(id=>catalogue.find(e=>e.id===id)).filter(Boolean);
  const capacity=()=>state.pageCount*state.perPage;
  const persist=()=>{try{localStorage.setItem(STORAGE,JSON.stringify(state));}catch{}};
  function validateState(s) {
    const layout=C.sheetLayout(s);
    const ids=C.normalizeSelectionIds(s.ids);
    if(ids.length>layout.pageCount*layout.perPage||ids.some(id=>!catalogue.some(e=>e.id===id)))throw Error(t('Tria no vàlida.'));
    if(!s.filters||!['sheet','each'].includes(s.filters.scope)||!s.filters.features||Array.isArray(s.filters.features)||typeof s.filters.features!=='object')throw Error(t('Filtres no vàlids.'));
    for(const [f,m] of Object.entries(s.filters.features))if(!C.FEATURES[f]||!['allow','require','exclude'].includes(m))throw Error(t('Contingut de filtre desconegut.'));
    if(!['',...Object.keys(C.LEVELS)].includes(s.filters.level)||!['','1','2','3'].includes(s.filters.difficulty))throw Error(t('Nivell o dificultat desconeguts.'));
    if(typeof s.title!=='string'||typeof s.group!=='string'||s.title.length>65||s.group.length>30)throw Error(t('Títol o grup no vàlids.'));
    if(s.showBrand!==undefined&&typeof s.showBrand!=='boolean')throw Error(t('Opció de marca no vàlida.'));
    const codes=s.filters.codes===undefined?'':s.filters.codes;
    if(typeof codes!=='string'||(codes&&C.parseSearch(codes).kind!=='codes'))throw Error(t('Rang de codis no vàlid.'));
    const titleIsDefault=typeof s.titleIsDefault==='boolean'?s.titleIsDefault:s.title===defaultTitle;
    return {...layout,ids,filters:{scope:s.filters.scope,level:s.filters.level,difficulty:s.filters.difficulty,features:{...s.filters.features},...(codes?{codes:C.parseSearch(codes).canonical}:{})},title:titleIsDefault?t(defaultTitle):s.title,titleIsDefault,group:s.group,showBrand:s.showBrand===undefined?true:s.showBrand,workPattern:WORK_PATTERNS.includes(s.workPattern)?s.workPattern:'dots',repeatHeader:s.repeatHeader===true};
  }
  function message(text,kind='info') {
    $('bank-feedback').dataset.kind=kind;
    $('bank-feedback').textContent=text;
  }
  function makeFilters() {
    for(const [container,features] of [['feature-filters',C.CONTENT_FEATURES],['reasoning-filters',C.REASONING_FEATURES]]){
      $(container).innerHTML=Object.entries(features).map(([id,label])=>{
        const hint=REASONING_HINTS[id];
        return `<button type="button" class="feature-chip" id="feature-${id}" data-feature="${id}" ${hint?`data-reasoning="${id}"`:''} aria-describedby="feature-instructions${hint?` hint-${id}`:''}"><span class="feature-name">${escape(label)}</span><span class="feature-state" aria-hidden="true"></span>${hint?`<span class="sr-only" id="hint-${id}">${escape(hint)}</span>`:''}</button>`;
      }).join('');
    }
    syncControls();
  }
  function syncFeatures() {
    Object.entries(C.FEATURES).forEach(([id,label])=>{
      const mode=state.filters.features[id]||'allow',index=FEATURE_MODES.findIndex(item=>item.id===mode),current=FEATURE_MODES[index],next=FEATURE_MODES[(index+1)%FEATURE_MODES.length],control=$('feature-'+id);
      control.dataset.mode=mode;
      control.querySelector('.feature-state').textContent=current.icon;
      control.setAttribute('aria-label',label+': '+current.label.toLocaleLowerCase(language));
      if(!REASONING_HINTS[id])control.title=current.label+' · '+t('Clica per canviar a {0}',next.label.toLocaleLowerCase(language));
    });
    for(const [count,features] of [['contents-count',C.CONTENT_FEATURES],['reasoning-count',C.REASONING_FEATURES]]){
      const active=Object.keys(features).filter(id=>['require','exclude'].includes(state.filters.features[id])).length;
      $(count).textContent=active===1?t('1 filtre actiu'):active>1?t('{0} filtres actius',active):'';
    }
  }
  function setFeature(id,mode) {
    state.filters.features[id]=mode;syncFeatures();message('');update();
    $('feature-status').textContent=C.FEATURES[id]+': '+FEATURE_MODES.find(item=>item.id===mode).label.toLocaleLowerCase(language)+'.';
  }
  function cycleFeature(id,direction=1) {
    const index=FEATURE_MODES.findIndex(mode=>mode.id===(state.filters.features[id]||'allow'));
    const next=FEATURE_MODES[(index+direction+FEATURE_MODES.length)%FEATURE_MODES.length];
    setFeature(id,next.id);
  }
  function syncControls() {
    $('search').value=query;
    $('page-count').value=state.pageCount;$('per-page').value=state.perPage;$('level').value=state.filters.level;$('difficulty').value=state.filters.difficulty;$('scope').value=state.filters.scope;
    syncFeatures();
    $('feature-status').textContent='';
    $('sheet-title').value=state.title;$('sheet-group').value=state.group;$('show-brand').checked=state.showBrand;
    $('work-pattern').value=state.workPattern;
    $('repeat-header').checked=state.repeatHeader;
  }
  function visual(v,id) {
    if(!v)return '';
    const pattern='hatch-'+id+'-'+(++visualSequence);
    const head=`<svg viewBox="0 0 560 150" role="img" aria-label="${escape(v.caption)}" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="${pattern}" width="7" height="7" patternUnits="userSpaceOnUse"><path d="M0 7L7 0" stroke="#567c70" stroke-width="1"/></pattern></defs>`;
    let shapes='';
    if(v.type==='fraction') {
      const w=480/v.parts;
      for(let i=0;i<v.parts;i++)shapes+=`<rect x="${40+i*w}" y="25" width="${w}" height="68" fill="${i<v.filled?'url(#'+pattern+')':'white'}" stroke="#243d35" stroke-width="2"/><text x="${40+(i+.5)*w}" y="122" text-anchor="middle">${v.total/v.parts}</text>`;
    } else if(v.type==='objects') {
      for(let g=0;g<v.groups;g++) {
        const x=12+g*137;
        shapes+=`<rect x="${x}" y="10" width="125" height="110" rx="14" fill="none" stroke="#6e776e" stroke-dasharray="4 3"/>`;
        for(let j=0;j<v.perGroup;j++) {
          const cx=x+25+(j%3)*37,cy=40+Math.floor(j/3)*48,removed=g*v.perGroup+j<v.removed;
          shapes+=`<circle cx="${cx}" cy="${cy}" r="12" fill="white" stroke="#243d35" stroke-width="2"/>`;
          if(removed)shapes+=`<path d="M${cx-15} ${cy+15}L${cx+15} ${cy-15}" stroke="#243d35" stroke-width="2"/>`;
        }
      }
    } else if(v.type==='grid') {
      const size=15,start=220;
      for(let row=0;row<v.side;row++)for(let col=0;col<v.side;col++) {
        const x=start+col*size,y=8+row*size;
        shapes+=`<rect x="${x}" y="${y}" width="${size}" height="${size}" fill="white" stroke="#243d35"/>`;
        if(row*v.side+col<v.removed)shapes+=`<path d="M${x} ${y+size}L${x+size} ${y}" stroke="#243d35"/>`;
      }
    } else if(v.type==='rectangle') {
      shapes=`<rect x="120" y="35" width="280" height="85" fill="none" stroke="#243d35" stroke-width="2"/><text x="260" y="23" text-anchor="middle">${escape(v.widthLabel)}</text><text x="414" y="84">${escape(v.heightLabel)}</text>`;
    } else if(v.type==='square') {
      shapes=`<path d="M250 123H210V23H310V123H282" fill="none" stroke="#243d35" stroke-width="2"/><text x="260" y="13" text-anchor="middle">${escape(v.sideLabel)}</text><text x="260" y="80" text-anchor="middle">${escape(v.areaLabel)}</text><text x="330" y="126">${escape(v.gapLabel)}</text>`;
    }
    return `<figure class="solution-visual">${head+shapes}</svg><figcaption>${escape(v.caption)}</figcaption></figure>`;
  }
  function questionsHTML(e,paper=false) {
    if(!e.parts)return `<p class="${paper?'paper-question':'question'}">${escape(e.question)}</p>`;
    return `<ol class="part-questions ${paper?'paper-questions':'card-questions'}" type="a">${e.parts.map(part=>`<li>${escape(part.question)}</li>`).join('')}</ol>`;
  }
  function solutionHTML(e) {
    return C.exerciseParts(e).map(({solution:s},index)=>`${e.parts?`<section class="solution-part"><span class="part-label">${String.fromCharCode(97+index)})</span>`:''}${s.expression?`<p class="solution-expression">${escape(s.expression)}</p>`:''}<ol class="solution-steps">${s.steps.map(x=>`<li>${escape(x)}</li>`).join('')}</ol>${visual(s.visual,e.id)}<p class="solution-answer">${escape(s.response)}</p>${s.note?`<p class="solution-note">${escape(s.note)}</p>`:''}${e.parts?'</section>':''}`).join('');
  }
  function responseHTML(e) {
    if(!e.parts)return `<div class="response-space ${e.solution.kind==='justification'?'reasoning-response':''}"><span class="response-label">${t('Resposta:')}</span><span class="response-line"></span></div>`;
    return `<div class="part-responses">${e.parts.map((part,index)=>`<div class="response-space ${part.solution.kind==='justification'?'reasoning-response':''}"><span class="response-label">${String.fromCharCode(97+index)})</span><span class="response-line"></span></div>`).join('')}</div>`;
  }
  const reportContext=control=>({problem:control.dataset.problem,version:Number(control.dataset.version),section:control.dataset.section,language});
  let reportTooltipAnchor=null,reportTooltipTimer;
  function reportHTML(e,section){
    const label=section==='solution'?t('al solucionari'):t('a l’enunciat');
    return `<span class="report-control" data-problem="${e.id}" data-version="${e.version}" data-section="${section}"><button type="button" class="report-flag" aria-disabled="true" data-report aria-label="${t('Notifica un error {0} de {1}',label,e.id)}"><img class="ui-icon" src="${assets}lucide/flag.svg" alt="" width="16" height="16"><span class="report-sent" aria-hidden="true" hidden>✓</span></button></span>`;
  }
  function hideReportTooltip(){
    clearTimeout(reportTooltipTimer);
    reportTooltipAnchor?.removeAttribute('aria-describedby');
    reportTooltipAnchor=null;
    if($('report-tooltip').matches(':popover-open'))$('report-tooltip').hidePopover();
  }
  function showReportTooltip(button){
    if(!button.dataset.tooltip)return;
    clearTimeout(reportTooltipTimer);
    if(reportTooltipAnchor!==button)reportTooltipAnchor?.removeAttribute('aria-describedby');
    const tooltip=$('report-tooltip');
    reportTooltipAnchor=button;
    button.setAttribute('aria-describedby',tooltip.id);
    tooltip.textContent=button.dataset.tooltip;
    if(!tooltip.matches(':popover-open'))tooltip.showPopover();
    positionPopover(tooltip,button);
  }
  function refreshReports(root=document,analyticsState=FilAnalytics.getState()){
    for(const control of root.querySelectorAll('.report-control')){
      const state=FilAnalytics.reportState(reportContext(control)),flag=control.querySelector('[data-report]');
      flag.setAttribute('aria-disabled',String(analyticsState.status!=='ready'||state!=='idle'));
      flag.querySelector('img').hidden=state==='sent';
      flag.querySelector('.report-sent').hidden=state!=='sent';
      flag.dataset.tooltip=state==='sent'?t('Avís enviat.'):state==='sending'?t('Enviant l’avís…'):analyticsState.status==='ready'?t('Notifica un error. Més informació a «Privacitat» a la capçalera.'):t('Els avisos no estan disponibles. Obre «Privacitat» a la capçalera per saber-ne més.');
      if(flag===reportTooltipAnchor)showReportTooltip(flag);
    }
  }
  function renderCards() {
    const matches=catalogue.filter(e=>C.eligible(e,{...state.filters,query}));
    const search=C.parseSearch(query),invalid=search.kind==='invalid';
    $('search').setAttribute('aria-invalid',String(invalid));
    $('search-error').textContent=invalid?search.error:'';$('search-error').hidden=!invalid;
    $('search-status').textContent=invalid?search.error:t('{0} problemes trobats.',matches.length);
    $('empty').querySelector('h2').textContent=invalid?t('Revisa el rang de codis.'):search.kind==='codes'?t('No hi ha problemes amb aquests codis.'):search.text?t('No hem trobat cap problema.'):t('Encara no tenim aquesta combinació.');
    $('empty').querySelector('p').textContent=invalid?search.error:search.kind==='codes'?t('Prova un altre rang o amplia els filtres.'):search.text?t('Prova un altre text o amplia els filtres.'):t('Amplia els filtres per trobar més problemes del catàleg.');
    $('empty').hidden=matches.length>0;
    const existing=[...$('cards').children];
    if(existing.length===matches.length&&existing.every((el,i)=>el.dataset.id===matches[i].id)){
      existing.forEach(el=>{
        const checked=state.ids.includes(el.dataset.id),blocked=!checked&&state.ids.length>=capacity(),input=el.querySelector('input');
        el.classList.toggle('is-selected',checked);el.classList.toggle('is-unavailable',blocked);input.checked=checked;input.disabled=blocked;
        el.title=blocked?t('Desmarca un problema de la tria per afegir-ne un altre.'):'';
      });
      return;
    }
    if($('cards').contains(reportTooltipAnchor))hideReportTooltip();
    $('cards').innerHTML=matches.map(e=>{
      const isSelected=state.ids.includes(e.id),blocked=!isSelected&&state.ids.length>=capacity();
      return `<article class="exercise-card ${isSelected?'is-selected':''} ${blocked?'is-unavailable':''}" data-id="${e.id}" ${blocked?`title="${escape(t('Desmarca un problema de la tria per afegir-ne un altre.'))}"`:''}><header class="card-header"><div class="card-meta"><span class="exercise-code">${e.id}</span><abbr class="level-tag" title="${escape(C.LEVELS[e.level])}">${LEVEL_SHORT[e.level]}</abbr><span class="difficulty" title="${C.DIFFICULTIES[e.difficulty]}" aria-label="${t('Dificultat: {0}',C.DIFFICULTIES[e.difficulty])}"><span aria-hidden="true">${'●'.repeat(e.difficulty)}${'○'.repeat(3-e.difficulty)}</span></span>${e.features.map(f=>`<span class="tag ${['decimals','fraccions','percentatges','potencies','arrels'].includes(f)?'tag-accent':''}" ${REASONING_HINTS[f]?`data-reasoning="${f}"`:''}>${escape(C.FEATURES[f])}</span>`).join('')}</div><div class="card-tools">${reportHTML(e,'statement')}<label class="card-select"><input type="checkbox" data-select="${e.id}" ${isSelected?'checked':''} ${blocked?'disabled':''} aria-describedby="selection-status"><span class="sr-only">${t('Inclou {0} a la fitxa',e.id)}</span></label></div></header><h2><label for="select-${e.id}">${escape(e.title)}</label></h2><p class="statement">${escape(e.statement)}</p>${questionsHTML(e)}</article>`;
    }).join('');
    document.querySelectorAll('[data-select]').forEach(input=>input.id='select-'+input.dataset.select);
    refreshReports($('cards'));
    animateElements([...$('cards').children],[{opacity:0,transform:'translateY(5px)'},{opacity:1,transform:'translateY(0)'}]);
  }
  function issues() {const problems=C.selectionIssues(selected(),state.filters,capacity());if(C.parseSearch(query).kind==='invalid')problems.push(t('Revisa el rang de codis.'));return problems;}
  function update(animatePreview=false) {
    persist();renderCards();
    const problems=issues(),candidates=catalogue.filter(e=>C.eligible(e,state.filters)).length;
    $('lot-input').value=problems.length?'':LotCode.encode(state);
    $('lot-copy').disabled=problems.length>0;
    $('lot-input').removeAttribute('aria-invalid');
    $('code-status').textContent='';
    $('preview-button').disabled=problems.length>0;
    $('preview-button').title=problems.length?t('Completa una tria que compleixi els filtres per revisar la fitxa.'):'';
    $('compose').disabled=candidates<capacity()||C.parseSearch(query).kind==='invalid';
    $('selection-status').textContent=t('{0}/{1} triats',state.ids.length,capacity());
    for(const id of ['print-exercises','print-options-toggle','print-solutions'])$(id).disabled=!reviewStep||problems.length>0;
    $('selection-badge').textContent=state.ids.length;
    $('selection-toggle').setAttribute('aria-label',t('Veure la tria: {0} problemes seleccionats',state.ids.length));
    if($('selection-popover').matches(':popover-open'))renderSelectionList();
    if(reviewStep&&problems.length){setStep(false);return;}
    if(reviewStep)renderPreview(animatePreview);
  }
  function renderSelectionList() {
    const chosen=selected();
    $('selection-total').textContent=t('{0} de {1} problemes',chosen.length,capacity());
    $('selection-empty').hidden=chosen.length>0;
    $('selection-list').hidden=!chosen.length;
    $('selection-list').innerHTML=chosen.map((e,index)=>`<li><span class="selection-index">${index+1}</span><div class="selection-item-title">${escape(e.title)}${C.eligible(e,state.filters)?'':`<small>${t('Fora dels filtres')}</small>`}</div><button class="selection-remove" data-remove-selection="${e.id}" aria-label="${escape(t('Treu de la tria: {0}',e.title))}" title="${t('Treu de la tria')}">×</button></li>`).join('');
  }
  function positionSelectionPopover() {
    positionPopover($('selection-popover'),$('selection-toggle'));
  }
  function positionPopover(popup,trigger) {
    const anchor=trigger.getBoundingClientRect(),width=popup.offsetWidth,height=popup.offsetHeight;
    popup.style.left=Math.max(12,Math.min(anchor.right-width,innerWidth-width-12))+'px';
    const below=anchor.bottom+8;
    popup.style.top=Math.max(12,Math.min(below+height<=innerHeight-12?below:anchor.top-height-8,innerHeight-height-12))+'px';
  }
  function setupReasoningHints() {
    const tooltip=$('reasoning-tooltip');
    let anchor,timer;
    const hide=()=>{
      clearTimeout(timer);anchor=null;
      if(tooltip.matches(':popover-open'))tooltip.hidePopover();
    };
    const show=()=>{
      if(!anchor?.isConnected)return;
      tooltip.textContent=REASONING_HINTS[anchor.dataset.reasoning];
      if(!tooltip.matches(':popover-open'))tooltip.showPopover();
      positionPopover(tooltip,anchor);
    };
    const leave=()=>{
      clearTimeout(timer);
      timer=setTimeout(()=>{
        if(!anchor?.matches(':hover, :focus-visible')&&!tooltip.matches(':hover'))hide();
      },160);
    };
    document.addEventListener('pointerover',event=>{
      const target=event.target.closest('[data-reasoning]');
      if(!target||target.contains(event.relatedTarget)||event.pointerType==='touch')return;
      if(target===anchor&&tooltip.matches(':popover-open')){clearTimeout(timer);return;}
      hide();anchor=target;timer=setTimeout(show,450);
    });
    document.addEventListener('pointerout',event=>{
      if(anchor?.contains(event.target)&&!anchor.contains(event.relatedTarget))leave();
    });
    tooltip.addEventListener('pointerleave',leave);
    document.addEventListener('focusin',event=>{
      hide();
      const target=event.target.closest('[data-reasoning]:focus-visible');
      if(target){anchor=target;show();}
    });
    document.addEventListener('focusout',event=>{if(anchor===event.target)hide();});
    document.addEventListener('keydown',event=>{if(event.key==='Escape')hide();});
    document.addEventListener('scroll',()=>{
      if(anchor?.matches(':focus-visible')&&tooltip.matches(':popover-open'))positionPopover(tooltip,anchor);
      else hide();
    },true);
    window.addEventListener('resize',hide);
  }
  function setupLanguageMenu() {
    const menu=$('language-menu'),trigger=$('language-toggle');
    if(location.protocol==='file:'){
      for(const link of menu.querySelectorAll('a'))link.href=new URL('index.html',link.href).href;
    }
    const position=()=>positionPopover(menu,trigger);
    menu.addEventListener('toggle',event=>{
      if(event.newState!=='open')return;
      const next=menu.querySelector('a:not([aria-current])');
      next.hash='view='+(!reviewStep?'bank':solutionView?'solutions':'exercises');
      position();
    });
    window.addEventListener('resize',()=>{if(menu.matches(':popover-open'))position();});
  }
  function applySearch(value) {
    query=value;$('search').value=value;
    const search=C.parseSearch(query);
    if(search.kind==='codes')state.filters.codes=search.canonical;else delete state.filters.codes;
    message('');update();$('catalogue-scroll').scrollTop=0;
  }
  function setupSearchHelp() {
    const popup=$('search-help'),trigger=$('search-help-toggle');
    popup.addEventListener('toggle',event=>{if(event.newState==='open'){positionPopover(popup,trigger);animateElements([popup],[{opacity:0,transform:'translateY(-4px)'},{opacity:1,transform:'translateY(0)'}]);}});
    popup.addEventListener('click',event=>{
      const button=event.target.closest('[data-search-example]');if(!button)return;
      applySearch(button.dataset.searchExample);popup.hidePopover();$('search').focus({preventScroll:true});
    });
    window.addEventListener('resize',()=>{if(popup.matches(':popover-open'))positionPopover(popup,trigger);});
    document.addEventListener('scroll',event=>{if(popup.matches(':popover-open')&&!popup.contains(event.target))positionPopover(popup,trigger);},true);
  }
  function setupSelectionPopover() {
    const popup=$('selection-popover');
    popup.addEventListener('beforetoggle',event=>{
      if(event.newState!=='open')return;
      renderSelectionList();
      const anchor=$('selection-toggle').getBoundingClientRect();
      popup.style.left=Math.max(12,anchor.left)+'px';popup.style.top=anchor.bottom+8+'px';
    });
    popup.addEventListener('toggle',event=>{
      if(event.newState==='open'){
        positionSelectionPopover();$('close-selection').focus({preventScroll:true});
        animateElements([popup],[{opacity:0,transform:'translateY(-4px)'},{opacity:1,transform:'translateY(0)'}]);
      }
    });
    $('selection-list').addEventListener('click',event=>{
      const button=event.target.closest('[data-remove-selection]');if(!button)return;
      const index=state.ids.indexOf(button.dataset.removeSelection);
      state.ids=state.ids.filter(id=>id!==button.dataset.removeSelection);message('');update();
      const buttons=popup.querySelectorAll('[data-remove-selection]');
      (buttons[Math.min(index,buttons.length-1)]||$('close-selection')).focus({preventScroll:true});
      positionSelectionPopover();
    });
    window.addEventListener('resize',()=>{if(popup.matches(':popover-open'))positionSelectionPopover();});
    document.addEventListener('scroll',event=>{if(popup.matches(':popover-open')&&!popup.contains(event.target))positionSelectionPopover();},true);
  }
  function pagesHTML(solutions=false,screen=false) {
    const chosen=selected(),groups=C.pageGroups(chosen,state.pageCount,state.perPage);
    const lotLabel=chosen.length===capacity()?`<span class="sheet-lot">${t('Codi:')} <code>${LotCode.encode(state)}</code></span>`:'';
    let number=0;
    return groups.map((group,index)=>{
      const showHeader=index===0||state.repeatHeader;
      const title=showHeader?state.title.trim():'';
      const brand=showHeader&&state.showBrand;
      const studentFields=showHeader&&!solutions?`<div class="student-fields"><span>${t('Nom:')} <span class="name-line"></span></span><span>${t('Data:')} <span class="date-line"></span></span>${state.group?`<span class="student-group">${t('Grup:')} ${escape(state.group)}</span>`:''}</div>`:'';
      const heading=title||studentFields?`<div class="sheet-heading-row">${title?`<h2>${escape(title)}</h2>`:''}${studentFields}</div>`:'';
      const header=heading||brand||lotLabel?`<header class="sheet-header ${title?'has-title':''}"><div class="sheet-topline">${brand?`<span class="sheet-brand">fil i compte ${solutions?'· '+t('SOLUCIONARI'):''}</span>`:''}${lotLabel}</div>${heading}</header>`:'';
      const sheet=`<section class="sheet ${state.perPage===4?'sheet-grid':''} ${solutions?'solution-sheet':'exercise-sheet'}">${header}${showHeader&&solutions?`<p class="sheet-subtitle">${t('Una possible resolució. Altres estratègies correctes també són vàlides.')}</p>`:''}<div class="sheet-problems" style="--problem-rows:${state.perPage}">${group.map(e=>{number++;return `<article class="paper-problem ${e.parts?'has-parts':''}"><div class="paper-title"><span>${String(number).padStart(2,'0')}</span><h3>${escape(e.title)}</h3><small>${e.id}</small>${screen&&solutions?reportHTML(e,'solution'):''}</div>${solutions?solutionHTML(e):`<p>${escape(e.statement)}</p>${questionsHTML(e,true)}<div class="working-space" data-pattern="${state.workPattern}"><span>${t('Pensa, dibuixa, calcula…')}</span></div>${responseHTML(e)}`}</article>`;}).join('')}</div></section>`;
      const page=sheet.slice(0,-10)+`<div class="sheet-bottom"><span class="sheet-number">${index+1} / ${state.pageCount}</span></div></section>`;
      return screen?`<div class="page-frame" aria-label="${t('Pàgina {0} de {1}',index+1,state.pageCount)}">${page}</div>`:page;
    }).join('');
  }
  function renderPreview(animate=false) {
    stopZoom();
    if($('pages').contains(reportTooltipAnchor))hideReportTooltip();
    $('pages').style.setProperty('--preview-columns',Math.min(2,state.pageCount));
    $('pages').innerHTML=pagesHTML(solutionView,true);
    refreshReports($('pages'));
    renderOrderControls();
    $('view-exercises').setAttribute('aria-pressed',String(!solutionView));$('view-solutions').setAttribute('aria-pressed',String(solutionView));$('answer-note').hidden=!solutionView;
    if(animate)animateElements([...$('pages').children],[{opacity:.35},{opacity:1}]);
    requestAnimationFrame(()=>resizePreview());
  }
  function setStep(review) {
    if(review&&issues().length)return;
    if(review===reviewStep)return;
    if($('selection-popover').matches(':popover-open'))$('selection-popover').hidePopover();
    if($('search-help').matches(':popover-open'))$('search-help').hidePopover();
    if($('print-options').matches(':popover-open'))$('print-options').hidePopover();
    stopZoom();
    reviewStep=review;
    document.querySelector('.app-shell').classList.toggle('show-preview',review);
    $('bank-step').inert=review;$('bank-step').setAttribute('aria-hidden',String(review));
    $('preview').inert=!review;$('preview').setAttribute('aria-hidden',String(!review));
    $('close-preview').toggleAttribute('aria-current',!review);$('preview-button').toggleAttribute('aria-current',review);
    (review?$('preview-button'):$('close-preview')).setAttribute('aria-current','step');
    const skip=document.querySelector('.skip');skip.href=review?'#preview-title':'#catalogue';skip.textContent=review?t('Salta a la revisió de la fitxa'):t('Salta al banc de problemes');
    update();
    (review?$('preview-title'):$('catalogue-title')).focus({preventScroll:true});
  }
  function motionDuration(){return matchMedia('(prefers-reduced-motion: reduce)').matches?0:parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--motion-duration'))||220;}
  function animateElements(elements,keyframes){const duration=motionDuration();if(duration)elements.forEach(el=>el.animate(keyframes,{duration,easing:'cubic-bezier(.22,.68,.25,1)'}));}
  function renderOrderControls(){
    let index=0;
    for(const frame of $('pages').children){
      const paper=frame.querySelector('.sheet');
      const page=paper.getBoundingClientRect();
      for(const exercise of paper.querySelectorAll('.paper-problem')){
        const id=state.ids[index],title=exercise.querySelector('h3').textContent;
        const box=exercise.getBoundingClientRect(),overlay=document.createElement('div');
        const top=solutionView?exercise.querySelector('.paper-title').getBoundingClientRect().bottom:box.top;
        // Keep the overlay aligned when zoom changes, without scaling the buttons.
        overlay.className='preview-order';
        overlay.dataset.orderRow=id;
        overlay.style.cssText=`left:${(box.left-page.left)/page.width*100}%;top:${(top-page.top)/page.height*100}%;width:${box.width/page.width*100}%;height:${(box.bottom-top)/page.height*100}%`;
        const button=(shift,label)=>`<button type="button" data-shift="${shift}" aria-label="${label} ${escape(title)}" title="${label}"><img class="ui-icon" src="${assets}lucide/arrow-right.svg" alt="" width="16" height="16"></button>`;
        overlay.innerHTML=`<div class="preview-order-actions">${index>0?button(-1,t('Puja')):''}${index<state.ids.length-1?button(1,t('Baixa')):''}</div>`;
        frame.append(overlay);index++;
      }
    }
  }
  function stopZoom(){if(zoomFrame)cancelAnimationFrame(zoomFrame);zoomFrame=0;zoomTarget=previewScale;$('zoom-out').disabled=previewScale<=.05;$('zoom-in').disabled=previewScale>=2;}
  function zoomAnchor(point){
    const canvas=$('preview-canvas'),paper=$('pages').querySelector('.page-frame');if(!paper)return null;
    const box=canvas.getBoundingClientRect(),frame=paper.getBoundingClientRect();
    const x=point?point.clientX-box.left-canvas.clientLeft:canvas.clientWidth/2;
    const y=point?point.clientY-box.top-canvas.clientTop:canvas.clientHeight/2;
    return {x,y,docX:(x-frame.left+box.left+canvas.clientLeft)/previewScale,docY:(y-frame.top+box.top+canvas.clientTop)/previewScale};
  }
  function applyPreviewScale(scale,anchor=null,reset=false) {
    const canvas=$('preview-canvas');
    previewScale=Math.max(.05,Math.min(2,scale));
    $('pages').style.setProperty('--page-scale',previewScale);
    const percentage=Math.round(previewScale*100)+' %';if($('zoom-value').textContent!==percentage)$('zoom-value').textContent=percentage;
    $('zoom-out').disabled=zoomTarget<=.05;$('zoom-in').disabled=zoomTarget>=2;
    $('zoom-fit').setAttribute('aria-pressed',String(fitPreview));
    if(reset){canvas.scrollLeft=0;canvas.scrollTop=0;}
    else if(anchor){
      const frame=$('pages').querySelector('.page-frame').getBoundingClientRect(),box=canvas.getBoundingClientRect();
      canvas.scrollLeft+=frame.left-box.left-canvas.clientLeft+anchor.docX*previewScale-anchor.x;
      canvas.scrollTop+=frame.top-box.top-canvas.clientTop+anchor.docY*previewScale-anchor.y;
    }
  }
  function startZoom(scale,point=null,reset=false){
    stopZoom();zoomTarget=Math.max(.05,Math.min(2,scale));
    const from=previewScale,to=zoomTarget,anchor=zoomAnchor(point),duration=motionDuration(),start=performance.now();
    if(!duration||Math.abs(to-from)<.0001){applyPreviewScale(to,anchor,reset);return;}
    const tick=time=>{const t=Math.min(1,(time-start)/duration);applyPreviewScale(from+(to-from)*(1-(1-t)**3),anchor);if(t<1)zoomFrame=requestAnimationFrame(tick);else{zoomFrame=0;if(reset){$('preview-canvas').scrollLeft=0;$('preview-canvas').scrollTop=0;}}};
    zoomFrame=requestAnimationFrame(tick);
  }
  function resizePreview(animate=false) {
    if(!reviewStep)return;
    const canvas=$('preview-canvas'),paper=$('pages').querySelector('.sheet');
    if(!paper||!canvas.clientWidth||!canvas.clientHeight)return;
    if(!fitPreview){applyPreviewScale(previewScale);return;}
    const css=getComputedStyle(paper),container=getComputedStyle($('pages')),box=canvas.getBoundingClientRect(),canvasCSS=getComputedStyle(canvas);
    const paddingX=parseFloat(container.paddingLeft)+parseFloat(container.paddingRight);
    const paddingY=parseFloat(container.paddingTop)+parseFloat(container.paddingBottom);
    // Use the canvas interior without transient scrollbars left over from a larger zoom.
    const availableWidth=box.width-parseFloat(canvasCSS.borderLeftWidth)-parseFloat(canvasCSS.borderRightWidth);
    const availableHeight=box.height-parseFloat(canvasCSS.borderTopWidth)-parseFloat(canvasCSS.borderBottomWidth);
    const gap=parseFloat(container.getPropertyValue('--page-gap'))||20;
    const columns=Math.min(2,state.pageCount),rows=Math.ceil(state.pageCount/columns);
    const width=(availableWidth-paddingX-2)/(columns*parseFloat(css.width)+(columns-1)*gap);
    const height=(availableHeight-paddingY-2)/(rows*parseFloat(css.height)+(rows-1)*gap);
    const scale=Math.floor(Math.min(width,height,1.5)*1000)/1000;
    if(animate)startZoom(scale,null,true);else{stopZoom();zoomTarget=Math.max(.05,Math.min(2,scale));applyPreviewScale(scale,null,true);}
  }
  function manualZoom(scale,point=null) {fitPreview=false;startZoom(scale,point);}
  new ResizeObserver(()=>{if(fitPreview)requestAnimationFrame(()=>resizePreview());}).observe($('preview-canvas'),{box:'border-box'});
  const canvas=$('preview-canvas');
  canvas.addEventListener('wheel',event=>{
    if(!reviewStep||pan)return;event.preventDefault();
    const delta=event.deltaY*(event.deltaMode===1?16:event.deltaMode===2?canvas.clientHeight:1);
    manualZoom(zoomTarget*Math.exp(-delta*.0015),event);
  },{passive:false});
  canvas.addEventListener('pointerdown',event=>{
    if(pan||event.button!==0||event.target.closest('button'))return;stopZoom();
    pan={id:event.pointerId,x:event.clientX,y:event.clientY,left:canvas.scrollLeft,top:canvas.scrollTop};
    canvas.setPointerCapture(event.pointerId);canvas.classList.add('is-panning');event.preventDefault();
  });
  canvas.addEventListener('pointermove',event=>{if(pan&&pan.id===event.pointerId){canvas.scrollLeft=pan.left-event.clientX+pan.x;canvas.scrollTop=pan.top-event.clientY+pan.y;}});
  function endPan(event){if(!pan||pan.id!==event.pointerId)return;pan=null;canvas.classList.remove('is-panning');if(canvas.hasPointerCapture(event.pointerId))canvas.releasePointerCapture(event.pointerId);}
  canvas.addEventListener('pointerup',endPan);canvas.addEventListener('pointercancel',endPan);canvas.addEventListener('lostpointercapture',endPan);
  canvas.addEventListener('dragstart',event=>event.preventDefault());
  function print(solutions) {
    if(!reviewStep||issues().length)return;
    printMode=solutions;
    $('print-root').innerHTML=pagesHTML(solutions);
    document.title=(state.title.trim()||t('Fitxa de matemàtiques'))+(solutions?t(' — solucionari'):t(' — exercicis'));
    void FilAnalytics.track('print-requested',{document:solutions?'solutions':'exercises',pages:state.pageCount,per_page:state.perPage});
    window.print();
  }
  const filterSections=['contents-title','reasoning-title'].map($);
  const compactFilters=matchMedia('(max-width: 900px), (max-height: 580px)');
  function setFilterSection(button,open){
    $(button.getAttribute('aria-controls')).hidden=!open;
    button.setAttribute('aria-expanded',String(open));
  }
  filterSections.forEach(button=>button.addEventListener('click',()=>{
    const open=button.getAttribute('aria-expanded')==='false';
    if(open&&compactFilters.matches)setFilterSection(filterSections.find(other=>other!==button),false);
    setFilterSection(button,open);
  }));
  compactFilters.addEventListener('change',()=>{
    if(compactFilters.matches&&filterSections.every(button=>button.getAttribute('aria-expanded')==='true')){
      setFilterSection(filterSections[0],false);
    }
  });
  $('filter-options').addEventListener('click',event=>{const button=event.target.closest('button[data-feature]');if(button)cycleFeature(button.dataset.feature);});
  $('filter-options').addEventListener('keydown',event=>{
    const button=event.target.closest('button[data-feature]');if(!button||!['ArrowLeft','ArrowRight'].includes(event.key))return;
    event.preventDefault();cycleFeature(button.dataset.feature,event.key==='ArrowLeft'?-1:1);
  });
  for(const id of ['level','difficulty','scope'])$(id).addEventListener('change',()=>{state.filters[id]=$(id).value;message('');update();});
  for(const [id,key] of [['page-count','pageCount'],['per-page','perPage']])$(id).addEventListener('change',()=>{
    state[key]=Number($(id).value);state.ids=state.ids.slice(0,capacity());
    fitPreview=true;message('');update();
  });
  $('search').addEventListener('input',()=>applySearch($('search').value));
  $('reset').addEventListener('click',()=>{state.filters=initial().filters;query='';$('search').value='';syncControls();message(t('Filtres netejats. La teva selecció es conserva.'));update();});
  $('compose').addEventListener('click',()=>{
    const result=C.compose(catalogue,state.filters,capacity(),state.ids);
    if(result.error){message(result.error);return;}
    void FilAnalytics.track('worksheet-proposed',{pages:state.pageCount,per_page:state.perPage});
    state.ids=result.ids;query=state.filters.codes||'';$('search').value=query;message(t('Fitxa proposada. Pots canviar-la marcant i desmarcant problemes.'),'success');update();
  });
  $('cards').addEventListener('change',event=>{
    const input=event.target.closest('input[data-select]');if(!input)return;
    const id=input.dataset.select;
    if(input.checked && state.ids.length>=capacity()){input.checked=false;message(t('Ja tens {0} problemes. Desmarca’n un abans d’afegir-ne un altre.',capacity()),'error');return;}
    if(input.checked){
      state.ids.push(id);
      void FilAnalytics.track('problem-selected',{problem_id:id});
    }else state.ids=state.ids.filter(x=>x!==id);
    message('');update();document.querySelector(`[data-select="${id}"]`)?.focus({preventScroll:true});
  });
  $('preview-button').addEventListener('click',()=>setStep(true));
  $('close-preview').addEventListener('click',()=>setStep(false));
  $('zoom-in').addEventListener('click',()=>manualZoom(zoomTarget+.1));
  $('zoom-out').addEventListener('click',()=>manualZoom(zoomTarget-.1));
  $('zoom-fit').addEventListener('click',()=>{fitPreview=true;resizePreview(true);});
  $('view-exercises').addEventListener('click',()=>{solutionView=false;renderPreview(true);});$('view-solutions').addEventListener('click',()=>{solutionView=true;renderPreview(true);});
  $('show-brand').addEventListener('change',()=>{state.showBrand=$('show-brand').checked;persist();renderPreview(true);});
  $('repeat-header').addEventListener('change',()=>{state.repeatHeader=$('repeat-header').checked;persist();renderPreview(true);});
  $('work-pattern').addEventListener('change',()=>{
    const pattern=$('work-pattern').value;
    if(!WORK_PATTERNS.includes(pattern))return;
    state.workPattern=pattern;persist();renderPreview();
  });
  $('pages').addEventListener('click',event=>{
    const button=event.target.closest('.preview-order button');if(!button)return;
    const id=button.closest('.preview-order').dataset.orderRow;
    const index=state.ids.indexOf(id),target=index+Number(button.dataset.shift);
    if(index<0||target<0||target>=state.ids.length)return;
    [state.ids[index],state.ids[target]]=[state.ids[target],state.ids[index]];update(true);
    const row=$('pages').querySelector(`[data-order-row="${id}"]`);
    const next=row.querySelector(`[data-shift="${button.dataset.shift}"]`)||row.querySelector('button');
    next.focus({preventScroll:true});
    next.scrollIntoView({block:'nearest',inline:'nearest'});
    $('order-status').textContent=t('{0}: posició {1} de {2}.',catalogue.find(e=>e.id===id).title,target+1,state.ids.length);
  });
  for(const [id,key] of [['sheet-title','title'],['sheet-group','group']])$(id).addEventListener('input',()=>{
    state[key]=$(id).value;
    if(key==='title')state.titleIsDefault=false;
    persist();renderPreview();
  });
  const printOptions=$('print-options'),printAnchor=$('print-options-toggle').parentElement;
  const positionPrintOptions=()=>positionPopover(printOptions,printAnchor);
  printOptions.addEventListener('toggle',event=>{
    if(event.newState!=='open')return;
    positionPrintOptions();
    animateElements([printOptions],[{opacity:0,transform:'translateY(4px)'},{opacity:1,transform:'translateY(0)'}]);
  });
  window.addEventListener('resize',()=>{if(printOptions.matches(':popover-open'))positionPrintOptions();});
  $('print-exercises').addEventListener('click',()=>print(false));
  $('print-solutions').addEventListener('click',()=>{
    printOptions.hidePopover();
    print(true);
  });
  window.addEventListener('beforeprint',()=>{
    if(issues().length){$('print-root').innerHTML=`<section class="sheet"><h2>${t('La fitxa encara no està preparada')}</h2><p>${t('Completa una tria que compleixi els filtres abans d’imprimir.')}</p></section>`;return;}
    const solutions=printMode===null?(reviewStep&&solutionView):printMode;
    $('print-root').innerHTML=pagesHTML(solutions);
    document.title=(state.title.trim()||t('Fitxa de matemàtiques'))+(solutions?t(' — solucionari'):t(' — exercicis'));
  });
  window.addEventListener('afterprint',()=>{printMode=null;document.title=pageTitle;});
  function setupPrivacy() {
    const analytics=FilAnalytics,help=FilPrivacyHelp,browser=$('privacy-browser');
    const trigger=$('privacy-open'),temporary=$('privacy-temporary'),disable=$('privacy-disable');
    let browserChosen=false;
    const messages={
      ready:t('Umami està disponible. Pots notificar errors amb la bandera.'),
      loading:t('Connectant amb Umami…'),
      unavailable:t('Umami no està disponible. Si el bloquejador ho permet, habilita Umami només en aquest web i prem «Permet temporalment» per reintentar-ho.'),
      development:t('Els avisos només es poden enviar des del web públic.'),
      insecure:t('Els avisos es podran enviar quan el domini tingui HTTPS.'),
      unconfigured:t('Umami encara està pendent d’activació. Els avisos es podran enviar quan estigui configurat.'),
      disabled:t('L’analítica està desactivada. Si ho vols, pots permetre-la temporalment per a aquesta pestanya.')
    };
    const updatePrivacy=state=>{
      const browserSignal=['gpc','dnt'].includes(state.reason);
      $('privacy-state').textContent=browserSignal?t('Els avisos estan desactivats pel senyal de privacitat del navegador.'):messages[state.status];
      temporary.disabled=browserSignal||!['disabled','unavailable'].includes(state.status);
      disable.disabled=!['ready','loading','unavailable'].includes(state.status);
      const showHelp=browserSignal||state.status==='unavailable';
      $('privacy-browser-help').hidden=!showHelp;
      if(showHelp){
        const guide=help.guide(browser.value,state,navigator);
        $('privacy-help-intro').textContent=guide.intro;
        $('privacy-help-steps').replaceChildren(...guide.steps.map(text=>{const item=document.createElement('li');item.textContent=text;return item;}));
        $('privacy-help-scope').textContent=guide.scope;
        const source=$('privacy-help-source');source.hidden=!guide.source;
        if(guide.source)source.href=guide.source;
      }
    };
    browser.value=help.browserFor(navigator);
    browser.addEventListener('change',()=>{browserChosen=true;updatePrivacy(analytics.getState());});
    if(navigator.brave?.isBrave)navigator.brave.isBrave().then(isBrave=>{
      if(isBrave&&!browserChosen){browser.value='brave';updatePrivacy(analytics.getState());}
    }).catch(()=>{});
    bindDialog($('privacy-dialog'),trigger,$('privacy-close'),{onOpen:()=>{hideReportTooltip();void analytics.refresh();updatePrivacy(analytics.getState());}});
    analytics.subscribe(state=>{updatePrivacy(state);refreshReports(document,state);});
    temporary.addEventListener('click',()=>{void analytics.allowTemporarily();});
    disable.addEventListener('click',()=>analytics.disable());
    window.addEventListener('storage',event=>{if(event.key==='umami.disabled'||event.key===null)void analytics.refresh();});
    window.addEventListener('focus',()=>{void analytics.refresh();});
    document.addEventListener('visibilitychange',()=>{if(!document.hidden)void analytics.refresh();});
    const tooltip=$('report-tooltip');
    const scheduleTooltipClose=()=>{
      clearTimeout(reportTooltipTimer);
      reportTooltipTimer=setTimeout(()=>{
        if(!reportTooltipAnchor?.matches(':hover, :focus')&&!tooltip.matches(':hover'))hideReportTooltip();
      },120);
    };
    document.addEventListener('pointerover',event=>{
      const button=event.target.closest('[data-report]');
      if(button&&event.pointerType!=='touch')showReportTooltip(button);
    });
    document.addEventListener('pointerout',event=>{
      if(reportTooltipAnchor?.contains(event.target)&&!reportTooltipAnchor.contains(event.relatedTarget))scheduleTooltipClose();
    });
    tooltip.addEventListener('pointerleave',scheduleTooltipClose);
    document.addEventListener('focusin',event=>{
      const button=event.target.closest('[data-report]');
      if(button)showReportTooltip(button);else hideReportTooltip();
    });
    document.addEventListener('pointerdown',event=>{
      if(!event.target.closest('[data-report]')&&!tooltip.contains(event.target))hideReportTooltip();
    });
    document.addEventListener('keydown',event=>{if(event.key==='Escape')hideReportTooltip();});
    document.addEventListener('scroll',hideReportTooltip,true);
    window.addEventListener('resize',hideReportTooltip);
    document.addEventListener('click',async event=>{
      const button=event.target.closest('[data-report]');
      if(!button)return;
      if(button.getAttribute('aria-disabled')==='true'){showReportTooltip(button);return;}
      const context=reportContext(button.closest('.report-control'));
      const status=$('report-status');
      status.textContent='';
      const sent=await analytics.reportProblem(context);
      status.textContent=sent?t('Avís de {0} enviat.',context.problem):t('No s’ha pogut enviar l’avís. Consulta Privacitat i avisos.');
    });
  }
  function setupHistory() {
    const translations=globalThis.FIL_I_COMPTE_RELEASES_ES;
    const releases=FIL_I_COMPTE_RELEASES.map(release=>{
      const translated=translations?.[release.version];
      return translated?{version:release.version,title:translated[0],changes:translated.slice(1)}:release;
    }),dialog=$('history-dialog'),trigger=$('version-history');
    trigger.textContent='v'+releases[0].version;trigger.title=t('Historial de versions');
    trigger.setAttribute('aria-label',t('Versió {0}. Obre l’historial de canvis',releases[0].version));
    $('release-list').innerHTML=releases.map((release,index)=>`<li><div class="release-meta"><span class="release-version">v${escape(release.version)}</span>${index===0?`<span class="release-current">${t('Versió actual')}</span>`:''}</div><h3>${escape(release.title)}</h3><ul>${release.changes.map(change=>`<li>${escape(change)}</li>`).join('')}</ul></li>`).join('');
    bindDialog(dialog,trigger,$('close-history'));
  }
  function bindDialog(dialog,trigger,closeButton,{onOpen=()=>{},onClose=()=>{},offset='translateY(8px)'}={}) {
    let closing=false;
    let backdropPress=false;
    const isBackdrop=event=>{
      const r=dialog.getBoundingClientRect();
      return event.target===dialog&&(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom);
    };
    const close=async()=>{
      if(closing||!dialog.open)return;
      closing=true;
      if(motionDuration())await dialog.animate([{opacity:1,transform:'none'},{opacity:0,transform:offset}],{duration:motionDuration(),easing:'cubic-bezier(.22,.68,.25,1)'}).finished.catch(()=>{});
      dialog.close();closing=false;
    };
    trigger.addEventListener('click',()=>{
      if(dialog.open)return;
      backdropPress=false;
      dialog.showModal();dialog.querySelector('.history-scroll').scrollTop=0;
      onOpen();
      animateElements([dialog],[{opacity:0,transform:offset},{opacity:1,transform:'none'}]);
    });
    closeButton.addEventListener('click',close);
    dialog.addEventListener('close',onClose);
    dialog.addEventListener('cancel',event=>{event.preventDefault();close();});
    dialog.addEventListener('pointerdown',event=>{backdropPress=isBackdrop(event);});
    dialog.addEventListener('click',event=>{
      if(backdropPress&&isBackdrop(event))close();
      backdropPress=false;
    });
  }
  function setupHelp() {
    const example=catalogue[0],demo=$('help-filter-demo'),button=$('help-filter'),pointer=$('help-demo-pointer'),caption=$('help-demo-state');
    $('help-example-title').textContent=example.title;$('help-example-statement').textContent=example.statement;$('help-example-question').textContent=example.question;
    $('help-example-select').addEventListener('change',event=>$('help-example').classList.toggle('is-selected',event.target.checked));
    let index=0,timer=null,clickTimer=null,releaseTimer=null;
    const render=()=>{
      const mode=FEATURE_MODES[index];button.dataset.mode=mode.id;button.querySelector('.feature-state').textContent=mode.icon;
      button.setAttribute('aria-label',t('Fraccions: {0}. Exemple de filtre',mode.label.toLocaleLowerCase(language)));caption.textContent=mode.label;
    };
    const advance=(direction=1)=>{index=(index+direction+FEATURE_MODES.length)%FEATURE_MODES.length;render();};
    const stop=()=>{clearInterval(timer);clearTimeout(clickTimer);clearTimeout(releaseTimer);timer=clickTimer=releaseTimer=null;demo.classList.remove('is-clicking');pointer.hidden=true;};
    const manual=direction=>{stop();caption.setAttribute('aria-live','polite');advance(direction);animateElements([button],[{transform:'translateY(1px)'},{transform:'translateY(0)'}]);};
    button.addEventListener('focus',stop);
    button.addEventListener('click',()=>manual(1));
    button.addEventListener('keydown',event=>{if(!['ArrowLeft','ArrowRight'].includes(event.key))return;event.preventDefault();manual(event.key==='ArrowLeft'?-1:1);});
    bindDialog($('help-dialog'),$('help-toggle'),$('close-help'),{
      onOpen:()=>{
        stop();index=0;render();caption.setAttribute('aria-live','off');$('help-example-select').checked=false;$('help-example').classList.remove('is-selected');
        if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
        pointer.hidden=false;
        timer=setInterval(()=>{
          demo.classList.add('is-clicking');clickTimer=setTimeout(()=>advance(),150);releaseTimer=setTimeout(()=>demo.classList.remove('is-clicking'),440);
        },1800);
      },
      onClose:stop
    });
    render();
  }
  $('catalogue-motto').textContent=t('{0} problemes -i sumant- per pensar, practicar i aprendre',new Intl.NumberFormat(language).format(catalogue.length));
  function setupLots(){
    const dialog=$('lot-dialog'), status=$('lot-status'), input=$('lot-input'),codeStatus=$('code-status');
    const templateKey='fil-i-compte-templates-v1';
    const readTemplates=()=>JSON.parse(localStorage.getItem(templateKey)||'[]');
    const saveTemplates=templates=>localStorage.setItem(templateKey,JSON.stringify(templates));
    const snapshotTemplate=name=>{
      const {ids,...configuration}=state;
      return {name,code:LotCode.encode(state),configuration};
    };
    const sameName=(a,b)=>a.toLocaleLowerCase(language)===b.toLocaleLowerCase(language);
    const templateList=$('template-list');
    const templateSummary=({code,configuration})=>{
      let size='';
      try{
        const {pageCount,ids}=LotCode.decode(code);
        size=`<p class="template-size">${pageCount} ${pageCount===1?t('pàgina'):t('pàgines')} · ${ids.length} ${t('exercicis')}</p>`;
      }catch{/* Keep an unreadable template visible so it can be removed. */}
      const filters=configuration?.filters?.features||{};
      const summary=(mode,label)=>{
        const names=Object.entries(C.FEATURES).filter(([id])=>filters[id]===mode).map(([,name])=>name);
        return names.length?`<p><strong>${label}:</strong> ${escape(names.join(', '))}</p>`:'';
      };
      return size+summary('require',t('Obligatoris'))+summary('exclude',t('Exclosos'));
    };
    const renderTemplates=(editingName,action)=>{
      const templates=readTemplates();
      const ready=!issues().length;
      $('template-empty').hidden=templates.length>0;
      templateList.innerHTML=templates.map(template=>{
        const name=escape(template.name);
        const actions=`<div class="utility-actions">
          <button type="button" class="secondary" data-template-action="open" aria-label="${t('Obre {0}',name)}">${t('Obre')}</button>
          <button type="button" class="secondary" data-template-action="rename" aria-label="${t('Canvia el nom de {0}',name)}">${t('Canvia el nom')}</button>
          <button type="button" class="secondary" data-template-action="replace" aria-label="${t('Actualitza {0} amb la fitxa actual',name)}" ${ready?'':'disabled'}>${t('Actualitza amb la fitxa actual')}</button>
          <button type="button" class="secondary" data-template-action="delete" aria-label="${t('Elimina {0}',name)}">${t('Elimina')}</button>
        </div>`;
        const editor=editingName===template.name?`<form class="template-save template-editor" data-template-edit="${action}">
          ${action==='rename'
            ?`<label for="template-rename">${t('Nom nou')}</label><input id="template-rename" value="${name}" maxlength="80" required>`
            :`<p>${t('Vols substituir els exercicis i la configuració de «{0}» pels de la fitxa actual?',name)}</p>`}
          <div class="utility-actions">
            <button type="submit" class="primary">${action==='rename'?t('Desa el nom'):t('Confirma l’actualització')}</button>
            <button type="button" class="secondary" data-template-action="cancel">${t('Cancel·la')}</button>
          </div>
          <p class="template-error" role="alert"></p>
        </form>`:'';
        return `<li data-template-name="${name}"><div class="template-summary"><strong>${name}</strong><code>${escape(template.code)}</code>${templateSummary(template)}</div>${editor||actions}</li>`;
      }).join('');
    };
    const focusTemplateAction=(name,action)=>{
      const row=Array.from(templateList.children).find(row=>row.dataset.templateName===name);
      row?.querySelector(`[data-template-action="${action}"]`)?.focus();
    };
    const refresh=()=>{
      const ready=!issues().length;
      $('template-save').hidden=!ready;
      $('template-incomplete').hidden=ready;
    };
    const restore=(code,configuration={workPattern:state.workPattern,repeatHeader:state.repeatHeader})=>{
      const lot=LotCode.decode(code);
      if(lot.ids.some(id=>!catalogue.some(e=>e.id===id)))throw Error(t('Aquest lot conté exercicis que no són al catàleg actual.'));
      const restored={...initial(),...configuration,...lot};
      if(Object.hasOwn(configuration,'title')&&!Object.hasOwn(configuration,'titleIsDefault'))delete restored.titleIsDefault;
      state=validateState(restored);query=state.filters.codes||'';solutionView=false;
      message('');syncControls();update();setStep(true);
    };
    bindDialog(dialog,$('templates-open'),$('lot-close'),{offset:'none',onOpen:()=>{
      status.textContent='';refresh();
      try{renderTemplates();}catch{status.textContent=t('No s’han pogut llegir les plantilles d’aquest navegador.');}
    }});
    $('template-save').addEventListener('submit',event=>{
      event.preventDefault();
      const name=$('template-name').value.trim();
      if(!name||issues().length){status.textContent=t('Posa un nom i completa la tria abans de desar-la.');return;}
      try{
        const templates=readTemplates();
        if(templates.some(t=>sameName(t.name,name))){
          status.textContent=t('Ja tens una plantilla amb aquest nom. Tria’n un altre.');return;
        }
        saveTemplates([...templates,snapshotTemplate(name)]);
        void FilAnalytics.track('template-action',{action:'create'});
        $('template-name').value='';renderTemplates();status.textContent=t('Plantilla desada.');
        $('template-name').focus({preventScroll:true});
      }catch{status.textContent=t('No s’ha pogut desar la plantilla en aquest navegador.');}
    });
    templateList.addEventListener('click',event=>{
      const button=event.target.closest('[data-template-action]');
      if(!button)return;
      const name=button.closest('li').dataset.templateName;
      const action=button.dataset.templateAction;
      try{
        const templates=readTemplates(),i=templates.findIndex(t=>t.name===name);
        const template=templates[i];if(!template)return;
        if(action==='open'){
          restore(template.code,template.configuration);
          void FilAnalytics.track('template-action',{action:'open'});
          dialog.close();$('preview-title').focus();
        }else if(action==='rename'||action==='replace'){
          status.textContent='';
          renderTemplates(name,action);
          (action==='rename'?$('template-rename'):templateList.querySelector('[data-template-action="cancel"]')).focus();
        }else if(action==='cancel'){
          const edit=button.form.dataset.templateEdit;
          renderTemplates();focusTemplateAction(name,edit);
        }else if(confirm(t('Vols eliminar la plantilla «{0}»?',template.name))){
          saveTemplates(templates.filter((_,index)=>index!==i));
          void FilAnalytics.track('template-action',{action:'delete'});
          renderTemplates();
          $('template-title').focus();status.textContent=t('Plantilla eliminada.');
        }
      }catch(error){status.textContent=t('No s’ha pogut completar l’acció. ')+error.message;}
    });
    templateList.addEventListener('submit',event=>{
      event.preventDefault();
      const form=event.target;
      const error=form.querySelector('.template-error');
      const previousName=form.closest('li').dataset.templateName;
      const action=form.dataset.templateEdit;
      const rename=action==='rename';
      const field=form.querySelector('input');
      const name=rename?field.value.trim():previousName;
      try{
        const templates=readTemplates(),index=templates.findIndex(t=>t.name===previousName);
        if(index<0)throw Error(t('Aquesta plantilla ja no està disponible.'));
        if(rename&&(!name||templates.some((t,i)=>i!==index&&sameName(t.name,name)))){
          error.textContent=name?t('Ja tens una plantilla amb aquest nom. Tria’n un altre.'):t('Escriu un nom per a la plantilla.');
          field.focus();
          return;
        }
        if(!rename&&issues().length)throw Error(t('Completa la tria abans d’actualitzar la plantilla.'));
        templates[index]=rename?{...templates[index],name}:snapshotTemplate(name);
        saveTemplates(templates);
        void FilAnalytics.track('template-action',{action:rename?'rename':'update'});
        renderTemplates();focusTemplateAction(name,action);
        status.textContent=rename?t('Nom actualitzat.'):t('Plantilla actualitzada amb la fitxa actual.');
      }catch(cause){error.textContent=t('No s’ha pogut modificar la plantilla. ')+cause.message;}
    });
    const codeError=error=>{input.setAttribute('aria-invalid','true');codeStatus.textContent=error.message;input.focus();};
    input.addEventListener('input',()=>{input.removeAttribute('aria-invalid');codeStatus.textContent='';});
    $('lot-form').addEventListener('submit',event=>{
      event.preventDefault();
      try{restore(input.value);$('preview-title').focus();}
      catch(error){codeError(error);}
    });
    $('lot-copy').addEventListener('click',()=>copyLotText(LotCode.encode(state),input,codeStatus,t('Codi copiat.')));
    const recoverFromLink=()=>{
      const shared=new URLSearchParams(location.hash.slice(1)).get('lot');
      if(shared===null)return;
      try{
        restore(shared);
        if(dialog.open){dialog.close();$('preview-title').focus();}
        try{const url=new URL(location.href);url.hash='';history.replaceState(null,'',url.href);}catch{}
      }catch(error){input.value=shared;codeError(error);}
    };
    addEventListener('hashchange',recoverFromLink);
    recoverFromLink();
  }
  async function copyLotText(value,field,status,success){
    try{await navigator.clipboard.writeText(value);status.textContent=success;}
    catch{field.value=value;field.focus();field.select();status.textContent=t('Text seleccionat. Copia’l manualment.');}
  }
  setupHistory();setupHelp();setupLanguageMenu();setupSelectionPopover();setupSearchHelp();setupReasoningHints();makeFilters();update();setupLots();
  if(languageView){
    if(languageView!=='bank'){solutionView=languageView==='solutions';setStep(true);}
    try{const url=new URL(location.href);url.hash='';history.replaceState(null,'',url.href);}catch{}
  }
  bindDialog($('v4v-dialog'),$('v4v-open'),$('v4v-close'));setupPrivacy();
  $('v4v-copy').addEventListener('click',()=>copyLotText($('v4v-address').value,$('v4v-address'),$('v4v-status'),t('Adreça copiada.')));
})();
