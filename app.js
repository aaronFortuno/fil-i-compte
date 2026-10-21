/* Fil i compte — compositor local, sense serveis externs. */
(() => {
  'use strict';
  const C=MatesCore, catalogue=EXERCISE_CATALOG.exercises, $=id=>document.getElementById(id);
  const STORAGE='fil-i-compte-v1';
  const LEVEL_SHORT={mitja:'CM',superior:'CS',eso:'ESO'};
  const FEATURE_MODES=[{id:'allow',label:'Permès',icon:'·'},{id:'require',label:'Obligatori',icon:'✓'},{id:'exclude',label:'Exclòs',icon:'×'}];
  const initial=()=>({pageCount:2,perPage:2,ids:['P001','P003','P005','P009'],filters:{features:{},scope:'sheet',level:'',difficulty:''},title:'Problemes per pensar',group:'',showBrand:true});
  let state=initial(), query='', solutionView=false, visualSequence=0, printMode=null;
  let reviewStep=false, previewScale=1, fitPreview=true, zoomTarget=1, zoomFrame=0, pan=null;
  try {const saved=JSON.parse(localStorage.getItem(STORAGE));if(saved)state=validateState(saved);}catch{}
  const escape=text=>String(text).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const selected=()=>state.ids.map(id=>catalogue.find(e=>e.id===id)).filter(Boolean);
  const capacity=()=>state.pageCount*state.perPage;
  const persist=()=>{try{localStorage.setItem(STORAGE,JSON.stringify(state));}catch{}};
  function validateState(s) {
    const layout=C.sheetLayout(s);
    if(!Array.isArray(s.ids)||new Set(s.ids).size!==s.ids.length||s.ids.length>layout.pageCount*layout.perPage||s.ids.some(id=>!catalogue.some(e=>e.id===id)))throw Error('Tria no vàlida.');
    if(!s.filters||!['sheet','each'].includes(s.filters.scope)||!s.filters.features||Array.isArray(s.filters.features)||typeof s.filters.features!=='object')throw Error('Filtres no vàlids.');
    for(const [f,m] of Object.entries(s.filters.features))if(!C.FEATURES[f]||!['allow','require','exclude'].includes(m))throw Error('Contingut de filtre desconegut.');
    if(!['',...Object.keys(C.LEVELS)].includes(s.filters.level)||!['','1','2','3'].includes(s.filters.difficulty))throw Error('Nivell o dificultat desconeguts.');
    if(typeof s.title!=='string'||typeof s.group!=='string'||s.title.length>65||s.group.length>30)throw Error('Títol o grup no vàlids.');
    if(s.showBrand!==undefined&&typeof s.showBrand!=='boolean')throw Error('Opció de marca no vàlida.');
    return {...layout,ids:[...s.ids],filters:{scope:s.filters.scope,level:s.filters.level,difficulty:s.filters.difficulty,features:{...s.filters.features}},title:s.title,group:s.group,showBrand:s.showBrand===undefined?true:s.showBrand};
  }
  function message(text,kind='info') {$('message').className=text?'message '+kind:'';$('message').textContent=text;if(text)$('catalogue-scroll').scrollTop=0;}
  function makeFilters() {
    $('feature-filters').innerHTML=Object.entries(C.FEATURES).map(([id,label])=>`<button type="button" class="feature-chip" id="feature-${id}" data-feature="${id}" aria-describedby="feature-instructions"><span class="feature-name">${escape(label)}</span><span class="feature-state" aria-hidden="true"></span></button>`).join('');
    syncControls();
  }
  function syncFeatures() {
    Object.entries(C.FEATURES).forEach(([id,label])=>{
      const mode=state.filters.features[id]||'allow',index=FEATURE_MODES.findIndex(item=>item.id===mode),current=FEATURE_MODES[index],next=FEATURE_MODES[(index+1)%FEATURE_MODES.length],control=$('feature-'+id);
      control.dataset.mode=mode;
      control.querySelector('.feature-state').textContent=current.icon;
      control.setAttribute('aria-label',label+': '+current.label.toLocaleLowerCase('ca'));
      control.title=current.label+' · Clica per canviar a '+next.label.toLocaleLowerCase('ca');
    });
  }
  function setFeature(id,mode) {
    state.filters.features[id]=mode;syncFeatures();message('');update();
    $('feature-status').textContent=C.FEATURES[id]+': '+FEATURE_MODES.find(item=>item.id===mode).label.toLocaleLowerCase('ca')+'.';
  }
  function cycleFeature(id,direction=1) {
    const index=FEATURE_MODES.findIndex(mode=>mode.id===(state.filters.features[id]||'allow'));
    const next=FEATURE_MODES[(index+direction+FEATURE_MODES.length)%FEATURE_MODES.length];
    setFeature(id,next.id);
  }
  function syncControls() {
    $('page-count').value=state.pageCount;$('per-page').value=state.perPage;$('level').value=state.filters.level;$('difficulty').value=state.filters.difficulty;$('scope').value=state.filters.scope;
    syncFeatures();
    $('feature-status').textContent='';
    $('sheet-title').value=state.title;$('sheet-group').value=state.group;$('show-brand').checked=state.showBrand;
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
  function solutionHTML(e) {
    const s=e.solution;
    return `<p class="solution-expression">${escape(s.expression)}</p><ol class="solution-steps">${s.steps.map(x=>`<li>${escape(x)}</li>`).join('')}</ol>${visual(s.visual,e.id)}<p class="solution-answer">${escape(s.response)}</p>${s.note?`<p class="solution-note">${escape(s.note)}</p>`:''}`;
  }
  function renderCards() {
    const matches=catalogue.filter(e=>C.eligible(e,{...state.filters,query}));
    $('empty').hidden=matches.length>0;
    const existing=[...$('cards').children];
    if(existing.length===matches.length&&existing.every((el,i)=>el.dataset.id===matches[i].id)){
      existing.forEach(el=>{const checked=state.ids.includes(el.dataset.id);el.classList.toggle('is-selected',checked);el.querySelector('input').checked=checked;});
      return;
    }
    $('cards').innerHTML=matches.map(e=>{
      const isSelected=state.ids.includes(e.id);
      return `<article class="exercise-card ${isSelected?'is-selected':''}" data-id="${e.id}"><header class="card-header"><div class="card-meta"><span class="exercise-code">${e.id}</span><abbr class="level-tag" title="${escape(C.LEVELS[e.level])}">${LEVEL_SHORT[e.level]}</abbr><span class="difficulty" title="${C.DIFFICULTIES[e.difficulty]}" aria-label="Dificultat: ${C.DIFFICULTIES[e.difficulty]}"><span aria-hidden="true">${'●'.repeat(e.difficulty)}${'○'.repeat(3-e.difficulty)}</span></span>${e.features.map(f=>`<span class="tag ${['decimals','fraccions','percentatges','potencies','arrels'].includes(f)?'tag-accent':''}">${escape(C.FEATURES[f])}</span>`).join('')}</div><label class="card-select"><input type="checkbox" data-select="${e.id}" ${isSelected?'checked':''}><span class="sr-only">Inclou ${e.id} a la fitxa</span></label></header><h2><label for="select-${e.id}">${escape(e.title)}</label></h2><p class="statement">${escape(e.statement)}</p><p class="question">${escape(e.question)}</p></article>`;
    }).join('');
    document.querySelectorAll('[data-select]').forEach(input=>input.id='select-'+input.dataset.select);
    animateElements([...$('cards').children],[{opacity:0,transform:'translateY(5px)'},{opacity:1,transform:'translateY(0)'}]);
  }
  function issues() {return C.selectionIssues(selected(),state.filters,capacity());}
  function selectionHint(candidates) {
    if(!issues().length||!$('empty').hidden||!candidates)return '';
    if(candidates<capacity())return `Hi ha ${candidates} problemes compatibles per a ${capacity()} places. Amplia els filtres o redueix les places.`;
    if(selected().some(e=>!C.eligible(e,state.filters)))return 'Actualitza la tria amb els filtres actuals o prem «Proposa una fitxa nova».';
    const missing=capacity()-state.ids.length;
    if(missing>0)return missing===1?'Tria un problema més per completar la fitxa.':`Tria ${missing} problemes més per completar la fitxa.`;
    return 'Inclou els continguts obligatoris: '+C.missingCoverage(selected(),state.filters).map(f=>C.FEATURES[f]).join(', ')+'.';
  }
  function update(animatePreview=false) {
    persist();renderCards();
    const problems=issues(),candidates=catalogue.filter(e=>C.eligible(e,state.filters)).length;
    $('preview-button').disabled=problems.length>0;
    $('preview-button').title=problems.length?'Completa una tria que compleixi els filtres per revisar la fitxa.':'';
    $('compose').disabled=candidates<capacity();
    const hint=selectionHint(candidates);$('selection-status').hidden=!hint;$('selection-status').textContent=hint;
    if(reviewStep&&problems.length){setStep(false);return;}
    if(reviewStep)renderPreview(animatePreview);
  }
  function pagesHTML(solutions=false,screen=false) {
    const chosen=selected(),groups=C.pageGroups(chosen,state.pageCount,state.perPage);
    let number=0;
    return groups.map((group,index)=>{
      const title=state.title.trim();
      const header=title||state.showBrand?`<header class="sheet-header ${title?'has-title':''}"><div>${state.showBrand?`<span class="sheet-brand">fil i compte ${solutions?'· SOLUCIONARI':''}</span>`:''}${title?`<h2>${escape(title)}</h2>`:''}</div><span class="sheet-number">${index+1} / ${state.pageCount}</span></header>`:'';
      const sheet=`<section class="sheet ${state.perPage===4?'sheet-grid':''} ${solutions?'solution-sheet':'exercise-sheet'}">${header}${solutions?'<p class="sheet-subtitle">Una possible resolució. Altres estratègies correctes també són vàlides.</p>':`<div class="student-fields"><span>Nom: <span class="name-line"></span></span><span>Data: <span class="date-line"></span></span>${state.group?`<span>Grup: ${escape(state.group)}</span>`:''}</div>`}<div class="sheet-problems">${group.map(e=>{number++;return `<article class="paper-problem"><div class="paper-title"><span>${String(number).padStart(2,'0')}</span><h3>${escape(e.title)}</h3><small>${e.id}</small></div>${solutions?solutionHTML(e):`<p>${escape(e.statement)}</p><p class="paper-question">${escape(e.question)}</p><div class="working-space"><span>Pensa, dibuixa, calcula…</span></div><div class="response-space">Resposta: <span></span></div>`}</article>`;}).join('')}</div></section>`;
      return screen?`<div class="page-frame" aria-label="Pàgina ${index+1} de ${state.pageCount}">${sheet}</div>`:sheet;
    }).join('');
  }
  function renderPreview(animate=false) {
    stopZoom();
    renderOrder();
    $('pages').style.setProperty('--preview-columns',Math.min(2,state.pageCount));
    $('pages').innerHTML=pagesHTML(solutionView,true);
    $('view-exercises').setAttribute('aria-pressed',String(!solutionView));$('view-solutions').setAttribute('aria-pressed',String(solutionView));$('answer-note').hidden=!solutionView;
    if(animate)animateElements([...$('pages').children],[{opacity:.35},{opacity:1}]);
    requestAnimationFrame(()=>resizePreview());
  }
  function setStep(review) {
    if(review&&issues().length)return;
    if(review===reviewStep)return;
    stopZoom();
    reviewStep=review;
    document.querySelector('.app-shell').classList.toggle('show-preview',review);
    $('bank-step').inert=review;$('bank-step').setAttribute('aria-hidden',String(review));
    $('preview').inert=!review;$('preview').setAttribute('aria-hidden',String(!review));
    $('bank-actions').hidden=review;$('review-actions').hidden=!review;
    $('close-preview').toggleAttribute('aria-current',!review);$('preview-button').toggleAttribute('aria-current',review);
    (review?$('preview-button'):$('close-preview')).setAttribute('aria-current','step');
    const skip=document.querySelector('.skip');skip.href=review?'#preview-title':'#catalogue';skip.textContent=review?'Salta a la revisió de la fitxa':'Salta al banc de problemes';
    update();
    (review?$('preview-title'):$('catalogue-title')).focus({preventScroll:true});
  }
  function motionDuration(){return matchMedia('(prefers-reduced-motion: reduce)').matches?0:parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--motion-duration'))||220;}
  function animateElements(elements,keyframes){const duration=motionDuration();if(duration)elements.forEach(el=>el.animate(keyframes,{duration,easing:'cubic-bezier(.22,.68,.25,1)'}));}
  function renderOrder(){
    const list=$('problem-order'),before=new Map([...list.children].map(el=>[el.dataset.orderRow,el.getBoundingClientRect().top]));
    list.innerHTML=selected().map((e,index)=>`<li data-order-row="${e.id}"><span class="order-index">${index+1}</span><span class="order-title"><small>${e.id}</small>${escape(e.title)}</span><div class="order-actions"><button data-order="${e.id}" data-shift="-1" aria-label="Puja ${e.id}" title="Puja" ${index===0?'disabled':''}>↑</button><button data-order="${e.id}" data-shift="1" aria-label="Baixa ${e.id}" title="Baixa" ${index===state.ids.length-1?'disabled':''}>↓</button></div></li>`).join('');
    for(const el of list.children){const old=before.get(el.dataset.orderRow),dy=old===undefined?0:old-el.getBoundingClientRect().top;if(Math.abs(dy)>1)animateElements([el],[{transform:`translateY(${dy}px)`},{transform:'translateY(0)'}]);}
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
    if(pan||event.button!==0)return;stopZoom();
    pan={id:event.pointerId,x:event.clientX,y:event.clientY,left:canvas.scrollLeft,top:canvas.scrollTop};
    canvas.setPointerCapture(event.pointerId);canvas.classList.add('is-panning');event.preventDefault();
  });
  canvas.addEventListener('pointermove',event=>{if(pan&&pan.id===event.pointerId){canvas.scrollLeft=pan.left-event.clientX+pan.x;canvas.scrollTop=pan.top-event.clientY+pan.y;}});
  function endPan(event){if(!pan||pan.id!==event.pointerId)return;pan=null;canvas.classList.remove('is-panning');if(canvas.hasPointerCapture(event.pointerId))canvas.releasePointerCapture(event.pointerId);}
  canvas.addEventListener('pointerup',endPan);canvas.addEventListener('pointercancel',endPan);canvas.addEventListener('lostpointercapture',endPan);
  canvas.addEventListener('dragstart',event=>event.preventDefault());
  function download(name,content) {
    const url=URL.createObjectURL(new Blob([JSON.stringify(content,null,2)],{type:'application/json;charset=utf-8'}));
    const a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1500);
  }
  function print(solutions) {
    if(issues().length)return;
    printMode=solutions;
    $('print-root').innerHTML=pagesHTML(solutions);
    document.title=(state.title.trim()||'Fitxa de matemàtiques')+(solutions?' — solucionari':' — exercicis');
    window.print();
  }
  $('feature-filters').addEventListener('click',event=>{const button=event.target.closest('button[data-feature]');if(button)cycleFeature(button.dataset.feature);});
  $('feature-filters').addEventListener('keydown',event=>{
    const button=event.target.closest('button[data-feature]');if(!button||!['ArrowLeft','ArrowRight'].includes(event.key))return;
    event.preventDefault();cycleFeature(button.dataset.feature,event.key==='ArrowLeft'?-1:1);
  });
  for(const id of ['level','difficulty','scope'])$(id).addEventListener('change',()=>{state.filters[id]=$(id).value;message('');update();});
  for(const [id,key] of [['page-count','pageCount'],['per-page','perPage']])$(id).addEventListener('change',()=>{
    state[key]=Number($(id).value);state.ids=state.ids.slice(0,capacity());
    fitPreview=true;message('');update();
  });
  $('search').addEventListener('input',()=>{query=$('search').value;update();});
  $('reset').addEventListener('click',()=>{state.filters=initial().filters;query='';$('search').value='';syncControls();message('Filtres netejats. La teva selecció es conserva.');update();});
  $('compose').addEventListener('click',()=>{
    const result=C.compose(catalogue,state.filters,capacity(),state.ids);
    if(result.error){message(result.error);return;}
    state.ids=result.ids;query='';$('search').value='';message('Fitxa proposada. Pots canviar-la marcant i desmarcant problemes.','success');update();
  });
  $('cards').addEventListener('change',event=>{
    const input=event.target.closest('input[data-select]');if(!input)return;
    const id=input.dataset.select;
    if(input.checked && state.ids.length>=capacity()){input.checked=false;message(`Ja tens ${capacity()} problemes. Desmarca’n un abans d’afegir-ne un altre.`,'error');return;}
    if(input.checked)state.ids.push(id);else state.ids=state.ids.filter(x=>x!==id);
    message('');update();document.querySelector(`[data-select="${id}"]`)?.focus({preventScroll:true});
  });
  $('preview-button').addEventListener('click',()=>setStep(true));
  $('close-preview').addEventListener('click',()=>setStep(false));
  $('zoom-in').addEventListener('click',()=>manualZoom(zoomTarget+.1));
  $('zoom-out').addEventListener('click',()=>manualZoom(zoomTarget-.1));
  $('zoom-fit').addEventListener('click',()=>{fitPreview=true;resizePreview(true);});
  $('view-exercises').addEventListener('click',()=>{solutionView=false;renderPreview(true);});$('view-solutions').addEventListener('click',()=>{solutionView=true;renderPreview(true);});
  $('show-brand').addEventListener('change',()=>{state.showBrand=$('show-brand').checked;persist();renderPreview(true);});
  $('problem-order').addEventListener('click',event=>{
    const button=event.target.closest('button[data-order]');if(!button)return;
    const index=state.ids.indexOf(button.dataset.order),target=index+Number(button.dataset.shift);
    if(index<0||target<0||target>=state.ids.length)return;
    [state.ids[index],state.ids[target]]=[state.ids[target],state.ids[index]];update(true);
    const row=$('problem-order').querySelector(`[data-order-row="${button.dataset.order}"]`);
    const same=row.querySelector(`[data-shift="${button.dataset.shift}"]`);(same.disabled?row.querySelector('button:not(:disabled)'):same).focus({preventScroll:true});
  });
  for(const [id,key] of [['sheet-title','title'],['sheet-group','group']])$(id).addEventListener('input',()=>{state[key]=$(id).value;persist();renderPreview();});
  $('print-exercises').addEventListener('click',()=>print(false));$('print-solutions').addEventListener('click',()=>print(true));
  window.addEventListener('beforeprint',()=>{
    if(issues().length){$('print-root').innerHTML='<section class="sheet"><h2>La fitxa encara no està preparada</h2><p>Completa una tria que compleixi els filtres abans d’imprimir.</p></section>';return;}
    const solutions=printMode===null?(reviewStep&&solutionView):printMode;
    $('print-root').innerHTML=pagesHTML(solutions);
    document.title=(state.title.trim()||'Fitxa de matemàtiques')+(solutions?' — solucionari':' — exercicis');
  });
  window.addEventListener('afterprint',()=>{printMode=null;document.title='Fil i compte · Banc de problemes';});
  $('save').addEventListener('click',()=>download('fil-i-compte-tria.json',{format:'fil-i-compte-selection',version:2,state,exercises:selected()}));
  $('load').addEventListener('change',async event=>{
    const file=event.target.files[0];if(!file)return;
    try {
      if(file.size>1000000)throw Error('El fitxer és massa gran.');
      const saved=JSON.parse(await file.text());
      if(saved.format!=='fil-i-compte-selection'||![1,2].includes(saved.version))throw Error('Aquest fitxer no és una tria de Fil i compte.');
      const next=validateState(saved.state);
      if(!Array.isArray(saved.exercises)||saved.exercises.length!==next.ids.length||next.ids.some((id,index)=>!C.sameExerciseContent(saved.exercises[index],catalogue.find(e=>e.id===id))))throw Error('El contingut desat no coincideix amb aquesta versió del catàleg. Conserva el fitxer per revisar-lo.');
      state=next;query='';$('search').value='';syncControls();message('Tria recuperada amb els mateixos problemes.','success');update();
    }catch(error){message('No s’ha pogut recuperar la tria. '+error.message,'error');}
    event.target.value='';
  });
  $('export-catalog').addEventListener('click',()=>download('fil-i-compte-cataleg.json',EXERCISE_CATALOG));
  function setupHistory() {
    const releases=FIL_I_COMPTE_RELEASES,dialog=$('history-dialog'),trigger=$('version-history');
    trigger.textContent='v'+releases[0].version+' · Novetats';
    trigger.setAttribute('aria-label','Versió '+releases[0].version+'. Obre l’historial de canvis');
    $('release-list').innerHTML=releases.map((release,index)=>`<li><div class="release-meta"><span class="release-version">v${escape(release.version)}</span>${index===0?'<span class="release-current">Versió actual</span>':''}</div><h3>${escape(release.title)}</h3><ul>${release.changes.map(change=>`<li>${escape(change)}</li>`).join('')}</ul></li>`).join('');
    bindDialog(dialog,trigger,$('close-history'));
  }
  function bindDialog(dialog,trigger,closeButton,{onOpen=()=>{},onClose=()=>{}}={}) {
    let closing=false;
    const close=async()=>{
      if(closing||!dialog.open)return;
      closing=true;
      if(motionDuration())await dialog.animate([{opacity:1,transform:'translateY(0)'},{opacity:0,transform:'translateY(8px)'}],{duration:motionDuration(),easing:'cubic-bezier(.22,.68,.25,1)'}).finished.catch(()=>{});
      dialog.close();closing=false;
    };
    trigger.addEventListener('click',()=>{
      if(dialog.open)return;
      dialog.showModal();dialog.querySelector('.history-scroll').scrollTop=0;
      onOpen();
      animateElements([dialog],[{opacity:0,transform:'translateY(8px)'},{opacity:1,transform:'translateY(0)'}]);
    });
    closeButton.addEventListener('click',close);
    dialog.addEventListener('close',onClose);
    dialog.addEventListener('cancel',event=>{event.preventDefault();close();});
    dialog.addEventListener('click',event=>{
      const r=dialog.getBoundingClientRect();
      if(event.target===dialog&&(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom))close();
    });
  }
  function setupHelp() {
    const example=catalogue[0],demo=$('help-filter-demo'),button=$('help-filter'),pointer=$('help-demo-pointer'),caption=$('help-demo-state');
    $('help-example-title').textContent=example.title;$('help-example-statement').textContent=example.statement;$('help-example-question').textContent=example.question;
    $('help-example-select').addEventListener('change',event=>$('help-example').classList.toggle('is-selected',event.target.checked));
    let index=0,timer=null,clickTimer=null,releaseTimer=null;
    const render=()=>{
      const mode=FEATURE_MODES[index];button.dataset.mode=mode.id;button.querySelector('.feature-state').textContent=mode.icon;
      button.setAttribute('aria-label','Fraccions: '+mode.label.toLocaleLowerCase('ca')+'. Exemple de filtre');caption.textContent=mode.label;
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
  $('catalogue-motto').textContent=new Intl.NumberFormat('ca').format(catalogue.length)+' problemes per pensar, practicar i aprendre';
  setupHistory();setupHelp();makeFilters();update();
})();
