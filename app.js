/* Fil i compte — compositor local, sense serveis externs. */
(() => {
  'use strict';
  const C=MatesCore, catalogue=EXERCISE_CATALOG.exercises, $=id=>document.getElementById(id);
  const STORAGE='fil-i-compte-v1';
  const LEVEL_SHORT={mitja:'CM',superior:'CS',eso:'ESO'};
  const initial=()=>({count:4,ids:['P001','P003','P005','P009'],filters:{features:{},scope:'sheet',level:'',difficulty:''},title:'Problemes per pensar',group:''});
  let state=initial(), query='', solutionView=false, visualSequence=0, printMode=null;
  let reviewStep=false, previewScale=1, fitPreview=true;
  try {const saved=JSON.parse(localStorage.getItem(STORAGE));if(saved)state=validateState(saved);}catch{}
  const escape=text=>String(text).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const selected=()=>state.ids.map(id=>catalogue.find(e=>e.id===id)).filter(Boolean);
  const persist=()=>{try{localStorage.setItem(STORAGE,JSON.stringify(state));}catch{}};
  function validateState(s) {
    // Keep older five-problem selections: migrate to six places without losing a problem.
    if(!s||![4,5,6].includes(s.count)||!Array.isArray(s.ids)||new Set(s.ids).size!==s.ids.length||s.ids.length>s.count||s.ids.some(id=>!catalogue.some(e=>e.id===id)))throw Error('Tria no vàlida.');
    if(!s.filters||!['sheet','each'].includes(s.filters.scope)||!s.filters.features||Array.isArray(s.filters.features)||typeof s.filters.features!=='object')throw Error('Filtres no vàlids.');
    for(const [f,m] of Object.entries(s.filters.features))if(!C.FEATURES[f]||!['allow','require','exclude'].includes(m))throw Error('Contingut de filtre desconegut.');
    if(!['',...Object.keys(C.LEVELS)].includes(s.filters.level)||!['','1','2','3'].includes(s.filters.difficulty))throw Error('Nivell o dificultat desconeguts.');
    if(typeof s.title!=='string'||typeof s.group!=='string'||s.title.length>65||s.group.length>30)throw Error('Títol o grup no vàlids.');
    return {count:s.count===5?6:s.count,ids:[...s.ids],filters:{scope:s.filters.scope,level:s.filters.level,difficulty:s.filters.difficulty,features:{...s.filters.features}},title:s.title,group:s.group};
  }
  function message(text,kind='info') {$('message').className=text?'message '+kind:'';$('message').textContent=text;if(text)$('catalogue-scroll').scrollTop=0;}
  function makeFilters() {
    $('feature-filters').innerHTML=Object.entries(C.FEATURES).map(([id,label])=>`<div class="feature-row"><label for="feature-${id}">${escape(label)}</label><select id="feature-${id}" data-feature="${id}"><option value="allow">Permès</option><option value="require">Obligatori</option><option value="exclude">Exclòs</option></select></div>`).join('');
    syncControls();
  }
  function syncControls() {
    $('count').value=state.count;$('level').value=state.filters.level;$('difficulty').value=state.filters.difficulty;$('scope').value=state.filters.scope;
    Object.keys(C.FEATURES).forEach(f=>{const el=$('feature-'+f);el.value=state.filters.features[f]||'allow';el.dataset.mode=el.value;});
    $('sheet-title').value=state.title;$('sheet-group').value=state.group;
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
    $('match-count').textContent=matches.length;$('empty').hidden=matches.length>0;
    $('cards').innerHTML=matches.map(e=>{
      const isSelected=state.ids.includes(e.id);
      return `<article class="exercise-card ${isSelected?'is-selected':''}" data-id="${e.id}"><header class="card-header"><div class="card-meta"><span class="exercise-code">${e.id}</span><abbr class="level-tag" title="${escape(C.LEVELS[e.level])}">${LEVEL_SHORT[e.level]}</abbr><span class="difficulty" title="${C.DIFFICULTIES[e.difficulty]}" aria-label="Dificultat: ${C.DIFFICULTIES[e.difficulty]}"><span aria-hidden="true">${'●'.repeat(e.difficulty)}${'○'.repeat(3-e.difficulty)}</span></span>${e.features.map(f=>`<span class="tag ${['decimals','fraccions','percentatges','potencies','arrels'].includes(f)?'tag-accent':''}">${escape(C.FEATURES[f])}</span>`).join('')}</div><label class="card-select"><input type="checkbox" data-select="${e.id}" ${isSelected?'checked':''}><span class="sr-only">Inclou ${e.id} a la fitxa</span></label></header><h2><label for="select-${e.id}">${escape(e.title)}</label></h2><p class="statement">${escape(e.statement)}</p><p class="question">${escape(e.question)}</p></article>`;
    }).join('');
    document.querySelectorAll('[data-select]').forEach(input=>input.id='select-'+input.dataset.select);
  }
  function issues() {return C.selectionIssues(selected(),state.filters,state.count);}
  function update() {
    persist();renderCards();
    const problems=issues();
    $('selection-count').textContent=`${state.ids.length} de ${state.count} problemes`;
    $('selection-caption').textContent=problems.length?problems[0]:reviewStep?`Pas 2 de 2 · ${solutionView?'Solucionari':'Exercicis'} · dues pàgines A4`:'Pas 1 de 2 · Tria els problemes.';
    $('selection-caption').classList.toggle('has-issues',problems.length>0);
    $('preview-button').disabled=state.ids.length===0;
    if(reviewStep)renderPreview();
  }
  function pagesHTML(solutions=false,screen=false) {
    const chosen=selected(),groups=C.pageGroups(chosen);
    let number=0;
    return groups.map((group,index)=>{
      const sheet=`<section class="sheet ${solutions?'solution-sheet':'exercise-sheet'}"><header class="sheet-header"><div><span class="sheet-brand">fil i compte ${solutions?'· SOLUCIONARI':''}</span><h2>${escape(state.title.trim()||'Problemes per pensar')}</h2></div><span class="sheet-number">${index+1} / 2</span></header>${solutions?'<p class="sheet-subtitle">Una possible resolució. Altres estratègies correctes també són vàlides.</p>':`<div class="student-fields"><span>Nom: <span class="name-line"></span></span><span>Data: <span class="date-line"></span></span>${state.group?`<span>Grup: ${escape(state.group)}</span>`:''}</div>`}<div class="sheet-problems">${group.map(e=>{number++;return `<article class="paper-problem"><div class="paper-title"><span>${String(number).padStart(2,'0')}</span><h3>${escape(e.title)}</h3><small>${e.id}</small></div>${solutions?solutionHTML(e):`<p>${escape(e.statement)}</p><p class="paper-question">${escape(e.question)}</p><div class="working-space"><span>Pensa, dibuixa, calcula…</span></div><div class="response-space">Resposta: <span></span></div>`}</article>`;}).join('')}</div><footer class="sheet-footer"><span>${solutions?'Bloc 01 · Referència per a l’autocorrecció':'Explica el teu camí. Un dibuix també és una manera de pensar.'}</span><span>${chosen.map(e=>e.id).join(' · ')}</span></footer></section>`;
      return screen?`<div class="page-frame" aria-label="Pàgina ${index+1} de 2">${sheet}</div>`:sheet;
    }).join('');
  }
  function renderPreview() {
    $('pages').innerHTML=pagesHTML(solutionView,true);
    $('view-exercises').setAttribute('aria-pressed',String(!solutionView));$('view-solutions').setAttribute('aria-pressed',String(solutionView));$('answer-note').hidden=!solutionView;
    const problems=issues();
    $('preview-issues').className=problems.length?'message error':'';
    $('preview-issues').textContent=problems.join(' ');
    $('print-exercises').disabled=problems.length>0;$('print-solutions').disabled=problems.length>0;
    if(!problems.length)$('selection-caption').textContent=`Pas 2 de 2 · ${solutionView?'Solucionari':'Exercicis'} · dues pàgines A4`;
    requestAnimationFrame(resizePreview);
  }
  function setStep(review) {
    reviewStep=review;
    document.querySelector('.app-shell').classList.toggle('show-preview',review);
    $('bank-step').inert=review;$('bank-step').setAttribute('aria-hidden',String(review));
    $('preview').inert=!review;$('preview').setAttribute('aria-hidden',String(!review));
    $('bank-actions').hidden=review;$('review-actions').hidden=!review;$('close-preview').hidden=!review;
    $('step-icon').textContent=review?'02':'01';
    const skip=document.querySelector('.skip');skip.href=review?'#preview-title':'#catalogue';skip.textContent=review?'Salta a la revisió de la fitxa':'Salta al banc de problemes';
    update();
    (review?$('preview-title'):$('preview-button')).focus({preventScroll:true});
  }
  function applyPreviewScale(scale,reset=false) {
    const canvas=$('preview-canvas');
    const centerX=(canvas.scrollLeft+canvas.clientWidth/2)/Math.max(1,canvas.scrollWidth);
    const centerY=(canvas.scrollTop+canvas.clientHeight/2)/Math.max(1,canvas.scrollHeight);
    previewScale=Math.max(.05,Math.min(2,scale));
    $('pages').style.setProperty('--page-scale',previewScale);
    $('zoom-value').textContent=Math.round(previewScale*100)+' %';
    $('zoom-range').value=Math.round(previewScale*100);
    $('zoom-out').disabled=previewScale<=.05;$('zoom-in').disabled=previewScale>=2;
    $('zoom-fit').setAttribute('aria-pressed',String(fitPreview));
    canvas.scrollLeft=reset?0:centerX*canvas.scrollWidth-canvas.clientWidth/2;
    canvas.scrollTop=reset?0:centerY*canvas.scrollHeight-canvas.clientHeight/2;
  }
  function resizePreview() {
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
    const width=(availableWidth-paddingX-parseFloat(container.columnGap)-2)/(2*parseFloat(css.width));
    const height=(availableHeight-paddingY-2)/parseFloat(css.height);
    applyPreviewScale(Math.floor(Math.min(width,height,1.5)*1000)/1000,true);
  }
  function manualZoom(scale) {fitPreview=false;applyPreviewScale(scale);}
  new ResizeObserver(()=>{if(fitPreview)requestAnimationFrame(resizePreview);}).observe($('preview-canvas'));
  function download(name,content) {
    const url=URL.createObjectURL(new Blob([JSON.stringify(content,null,2)],{type:'application/json;charset=utf-8'}));
    const a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1500);
  }
  function print(solutions) {
    if(issues().length)return;
    printMode=solutions;
    $('print-root').innerHTML=pagesHTML(solutions);
    document.title=(state.title.trim()||'Problemes per pensar')+(solutions?' — solucionari':' — exercicis');
    window.print();
  }
  $('feature-filters').addEventListener('change',event=>{const el=event.target;state.filters.features[el.dataset.feature]=el.value;el.dataset.mode=el.value;message('');update();});
  for(const id of ['level','difficulty','scope'])$(id).addEventListener('change',()=>{state.filters[id]=$(id).value;message('');update();});
  $('count').addEventListener('change',()=>{
    const count=Number($('count').value);
    state.count=count;
    state.ids=state.ids.slice(0,count);
    message('');update();
  });
  $('search').addEventListener('input',()=>{query=$('search').value;renderCards();});
  $('reset').addEventListener('click',()=>{state.filters=initial().filters;query='';$('search').value='';syncControls();message('Filtres netejats. La teva selecció es conserva.');update();});
  $('compose').addEventListener('click',()=>{
    const result=C.compose(catalogue,state.filters,state.count,state.ids);
    if(result.error){message(result.error,'error');return;}
    state.ids=result.ids;query='';$('search').value='';message('Fitxa proposada. Pots canviar-la marcant i desmarcant problemes.','success');update();
  });
  $('cards').addEventListener('change',event=>{
    const input=event.target.closest('input[data-select]');if(!input)return;
    const id=input.dataset.select;
    if(input.checked && state.ids.length>=state.count){input.checked=false;message(`Ja tens ${state.count} problemes. Desmarca’n un abans d’afegir-ne un altre.`,'error');return;}
    if(input.checked)state.ids.push(id);else state.ids=state.ids.filter(x=>x!==id);
    message('');update();document.querySelector(`[data-select="${id}"]`)?.focus({preventScroll:true});
  });
  $('preview-button').addEventListener('click',()=>setStep(true));
  $('close-preview').addEventListener('click',()=>setStep(false));
  $('zoom-in').addEventListener('click',()=>manualZoom((Math.round(previewScale*100)+10)/100));
  $('zoom-out').addEventListener('click',()=>manualZoom((Math.round(previewScale*100)-10)/100));
  $('zoom-range').addEventListener('input',()=>manualZoom(Number($('zoom-range').value)/100));
  $('zoom-fit').addEventListener('click',()=>{fitPreview=true;resizePreview();});
  $('view-exercises').addEventListener('click',()=>{solutionView=false;renderPreview();});$('view-solutions').addEventListener('click',()=>{solutionView=true;renderPreview();});
  for(const [id,key] of [['sheet-title','title'],['sheet-group','group']])$(id).addEventListener('input',()=>{state[key]=$(id).value;persist();renderPreview();});
  $('print-exercises').addEventListener('click',()=>print(false));$('print-solutions').addEventListener('click',()=>print(true));
  window.addEventListener('beforeprint',()=>{
    if(issues().length){$('print-root').innerHTML='<section class="sheet"><h2>Revisa la selecció abans d’imprimir</h2><p>'+escape(issues().join(' '))+'</p></section>';return;}
    const solutions=printMode===null?(reviewStep&&solutionView):printMode;
    $('print-root').innerHTML=pagesHTML(solutions);
    document.title=(state.title.trim()||'Problemes per pensar')+(solutions?' — solucionari':' — exercicis');
  });
  window.addEventListener('afterprint',()=>{printMode=null;document.title='Fil i compte · Banc de problemes';});
  $('save').addEventListener('click',()=>download('fil-i-compte-tria.json',{format:'fil-i-compte-selection',version:1,state,exercises:selected()}));
  $('load').addEventListener('change',async event=>{
    const file=event.target.files[0];if(!file)return;
    try {
      if(file.size>1000000)throw Error('El fitxer és massa gran.');
      const saved=JSON.parse(await file.text());
      if(saved.format!=='fil-i-compte-selection'||saved.version!==1)throw Error('Aquest fitxer no és una tria de Fil i compte.');
      const next=validateState(saved.state);
      if(!Array.isArray(saved.exercises)||saved.exercises.length!==next.ids.length||next.ids.some((id,index)=>JSON.stringify(saved.exercises[index])!==JSON.stringify(catalogue.find(e=>e.id===id))))throw Error('El contingut desat no coincideix amb aquesta versió del catàleg. Conserva el fitxer per revisar-lo.');
      state=next;query='';$('search').value='';syncControls();message('Tria recuperada amb els mateixos problemes.','success');update();
    }catch(error){message('No s’ha pogut recuperar la tria. '+error.message,'error');}
    event.target.value='';
  });
  $('export-catalog').addEventListener('click',()=>download('fil-i-compte-cataleg.json',EXERCISE_CATALOG));
  $('help-toggle').addEventListener('click',()=>{const show=$('help').hidden;$('help').hidden=!show;$('help-toggle').setAttribute('aria-expanded',String(show));});
  makeFilters();update();
})();
