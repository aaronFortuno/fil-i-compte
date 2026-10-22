(function(root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.MatesCore = api;
})(globalThis, function() {
  'use strict';
  const FEATURES = {
    'suma-resta':'Suma i resta', 'multiplicacio-divisio':'Multiplicació i divisió',
    'combinades':'Operacions combinades', 'parentesis':'Parèntesis',
    'fraccions':'Fraccions', 'percentatges':'Percentatges', 'decimals':'Decimals',
    'potencies':'Potències', 'arrels':'Arrels', 'distractors':'Dades per despistar'
  };
  const LEVELS = {mitja:'Cicle mitjà', superior:'Cicle superior', eso:'Inici d’ESO'};
  const DIFFICULTIES = {1:'Accessible',2:'Intermedi',3:'Repte'};
  // Editorial orientation, not a calibrated measure of student ability.
  // Each cycle advances one step: CM repte = CS intermedi = ESO accessible.
  const LEVEL_OFFSET = {mitja:0,superior:1,eso:2};
  const PAGE_COUNTS=[1,2,4,6],PER_PAGE=[2,3,4];
  const exerciseParts=exercise=>exercise.parts||[{question:exercise.question,solution:exercise.solution}];
  function normalizeId(id) {
    if(typeof id!=='string'||!/^p\d+$/i.test(id))return null;
    const number=Number(id.slice(1));
    return Number.isSafeInteger(number)&&number>0?'P'+String(number).padStart(4,'0'):null;
  }
  function normalizeSelectionIds(ids) {
    if(!Array.isArray(ids))throw Error('Tria no vàlida.');
    const normalized=ids.map(normalizeId);
    if(normalized.includes(null)||new Set(normalized).size!==normalized.length)throw Error('Codis de la tria no vàlids o repetits.');
    return normalized;
  }
  function parseSearch(value='') {
    const text=String(value).trim();
    const codeLike=text&&(/^[p\d\s,+-]+$/i.test(text)||/^p\d/i.test(text)||/^\d+\s*-/.test(text));
    if(!codeLike)return {kind:'text',text:text.toLocaleLowerCase('ca')};
    const invalid=error=>({kind:'invalid',error});
    if(text.length>2000)return invalid('El rang és massa llarg.');
    const ranges=[];
    for(const part of text.split(',')){
      const token=part.trim(),single=/^p?(\d+)$/i.exec(token),range=/^(?:p?(\d+))?\s*-\s*(?:p?(\d+))?$/i.exec(token);
      if(!single&&(!range||(!range[1]&&!range[2])))return invalid('Fes servir codis o rangs com -4, 5-7,9-10 o 13-.');
      const from=Number(single?single[1]:(range[1]||1)),to=single?from:range[2]?Number(range[2]):null;
      if(!Number.isSafeInteger(from)||from<1||(to!==null&&(!Number.isSafeInteger(to)||to<1)))return invalid('Els codis han de ser nombres enters positius.');
      if(to!==null&&from>to)return invalid('El codi inicial no pot ser més gran que el final.');
      ranges.push({from,to});
    }
    ranges.sort((a,b)=>a.from-b.from);
    const merged=[];
    for(const range of ranges){
      const last=merged[merged.length-1];
      if(last&&(last.to===null||range.from<=last.to+1))last.to=last.to===null||range.to===null?null:Math.max(last.to,range.to);
      else merged.push({...range});
    }
    const code=n=>'P'+String(n).padStart(4,'0');
    const canonical=merged.map(({from,to})=>to===from?code(from):to===null?code(from)+'-':code(from)+'-'+code(to)).join(',');
    return canonical.length<=2000?{kind:'codes',ranges:merged,canonical}:invalid('El rang és massa llarg.');
  }
  function matchesCodes(id,search) {
    const normalized=normalizeId(id);if(!normalized||search.kind!=='codes')return false;
    const number=Number(normalized.slice(1));
    return search.ranges.some(({from,to})=>number>=from&&(to===null||number<=to));
  }
  function sheetLayout(settings) {
    if(!settings||typeof settings!=='object')throw Error('Configuració de pàgines no vàlida.');
    // Migrate the original two-page worksheets without losing selected problems.
    if(settings.pageCount===undefined&&settings.perPage===undefined&&[4,5,6].includes(settings.count))return {pageCount:2,perPage:settings.count===4?2:3};
    if(!PAGE_COUNTS.includes(settings.pageCount)||!PER_PAGE.includes(settings.perPage))throw Error('Configuració de pàgines no vàlida.');
    return {pageCount:settings.pageCount,perPage:settings.perPage};
  }
  const gcd = (a,b) => { a = Math.abs(a); b = Math.abs(b); while(b) [a,b]=[b,a%b]; return a || 1; };
  function rational(n,d=1) {
    if (!Number.isSafeInteger(n) || !Number.isSafeInteger(d) || !d) throw Error('Nombre fora del rang segur o divisió per zero');
    const g=gcd(n,d), sign=d<0?-1:1; return {n:sign*n/g,d:sign*d/g};
  }
  function numberRatio(value) {
    if (typeof value!=='number' || !Number.isFinite(value)) throw Error('Nombre invàlid');
    const text=String(value); if (text.includes('e')) throw Error('Notació exponencial no admesa');
    const decimals=(text.split('.')[1]||'').length;
    return rational(Math.round(value*10**decimals),10**decimals);
  }
  function evaluate(node) {
    if (typeof node==='number') return numberRatio(node);
    if (!Array.isArray(node)) throw Error('Càlcul invàlid');
    const [op,...nodes]=node;
    if (nodes.length!==(op==='sqrt'?1:2)) throw Error('Nombre d’arguments incorrecte');
    const a=evaluate(nodes[0]), b=nodes.length===2?evaluate(nodes[1]):null;
    switch(op) {
      case 'add':return rational(a.n*b.d+b.n*a.d,a.d*b.d);
      case 'sub':return rational(a.n*b.d-b.n*a.d,a.d*b.d);
      case 'mul':return rational(a.n*b.n,a.d*b.d);
      case 'div':return rational(a.n*b.d,a.d*b.n);
      case 'pow':if(b.d!==1 || b.n<0 || b.n>8) throw Error('Exponent no admès'); return rational(a.n**b.n,a.d**b.n);
      case 'sqrt':{
        const n=Math.sqrt(a.n),d=Math.sqrt(a.d);
        if(!Number.isInteger(n)||!Number.isInteger(d)) throw Error('Arrel no exacta');
        return rational(n,d);
      }
      default:throw Error('Operació desconeguda: '+op);
    }
  }
  function matchesOrientation(exercise,filters) {
    const score=LEVEL_OFFSET[exercise.level]+Number(exercise.difficulty);
    const levels=filters.level?[filters.level]:Object.keys(LEVELS);
    const difficulties=filters.difficulty?[Number(filters.difficulty)]:[1,2,3];
    // An unspecified field accepts the union of its cells in the matrix.
    return levels.some(level=>Object.hasOwn(LEVEL_OFFSET,level)&&difficulties.some(difficulty=>Object.hasOwn(DIFFICULTIES,difficulty)&&score===LEVEL_OFFSET[level]+difficulty));
  }
  function eligible(exercise, filters={}) {
    if(!matchesOrientation(exercise,filters))return false;
    if(filters.codes&&!matchesCodes(exercise.id,parseSearch(filters.codes)))return false;
    const search=parseSearch(filters.query||'');
    if(search.kind==='invalid'||(search.kind==='codes'&&!matchesCodes(exercise.id,search)))return false;
    if(search.kind==='text'&&search.text&&![exercise.title,exercise.statement,...exerciseParts(exercise).map(part=>part.question)].join(' ').toLocaleLowerCase('ca').includes(search.text))return false;
    for(const [feature,mode] of Object.entries(filters.features||{})) {
      if(mode==='exclude' && exercise.features.includes(feature)) return false;
      if(mode==='require' && filters.scope!=='sheet' && !exercise.features.includes(feature)) return false;
    }
    return true;
  }
  function missingCoverage(exercises,filters) {
    return Object.entries(filters.features||{}).filter(([f,m])=>m==='require'&&!exercises.some(e=>e.features.includes(f))).map(([f])=>f);
  }
  function selectionIssues(exercises, filters, count) {
    const issues=[];
    if(exercises.length!==count) issues.push(`Cal seleccionar ${count} problemes (ara n’hi ha ${exercises.length}).`);
    const invalid=exercises.filter(e=>!eligible(e,filters));
    if(invalid.length) issues.push(`${invalid.map(e=>e.id).join(', ')} no compleixen els filtres actuals.`);
    const missing=missingCoverage(exercises,filters);
    if(missing.length) issues.push('Falta treballar: '+missing.map(f=>FEATURES[f]).join(', ')+'.');
    return issues;
  }
  // Bounded exhaustive search: the small initial catalogue makes coverage exact.
  // Larger packs use early pruning and stop at the first valid combination.
  function compose(catalog,filters,count,previous=[]) {
    if(!PAGE_COUNTS.some(pages=>PER_PAGE.some(perPage=>pages*perPage===count)))return {error:'Tria un nombre de pàgines i una distribució vàlids.'};
    const candidates=catalog.filter(e=>eligible(e,filters));
    if(candidates.length<count) return {error:`Només hi ha ${candidates.length} problemes compatibles per a ${count} places. Amplia els filtres o redueix la quantitat.`};
    const pool=candidates.map(e=>({e,r:Math.random()})).sort((a,b)=>a.r-b.r).map(x=>x.e);
    const required=Object.entries(filters.features||{}).filter(([,m])=>m==='require').map(([f])=>f);
    if(required.some(f=>!candidates.some(e=>e.features.includes(f)))) return {error:'El catàleg no cobreix tots els continguts obligatoris amb aquests filtres.'};
    let attempts=0;
    function search(index,chosen,avoidSame) {
      if(++attempts>150000) return null;
      if(chosen.length===count) {
        if(missingCoverage(chosen,filters).length) return null;
        if(avoidSame && chosen.every(e=>previous.includes(e.id))) return null;
        return chosen;
      }
      if(chosen.length+pool.length-index<count) return null;
      if(required.some(f=>!chosen.some(e=>e.features.includes(f))&&!pool.slice(index).some(e=>e.features.includes(f)))) return null;
      // Prefer different structures without ever relaxing the requested filters.
      const order=pool.slice(index).map((e,k)=>({e,k:index+k,repeat:chosen.some(c=>c.structure===e.structure)})).sort((a,b)=>Number(a.repeat)-Number(b.repeat));
      for(const {e,k} of order) {
        const found=search(k+1,[...chosen,e],avoidSame); if(found)return found;
      }
      return null;
    }
    let found=search(0,[],true); attempts=0;
    if(!found)found=search(0,[],false);
    return found?{ids:found.map(e=>e.id)}:{error:'No es poden cobrir tots els continguts obligatoris en aquest nombre de problemes. Amplia els filtres o tria més places.'};
  }
  function pageGroups(exercises,pageCount,perPage) {
    sheetLayout({pageCount,perPage});
    if(exercises.length>pageCount*perPage)throw Error('La selecció supera les places disponibles.');
    return Array.from({length:pageCount},(_,page)=>exercises.slice(page*perPage,(page+1)*perPage));
  }
  function sameExerciseContent(saved,current) {
    if(!saved||!current||Array.isArray(saved)||typeof saved!=='object')return false;
    const id=normalizeId(saved.id);
    if(!id||id!==normalizeId(current.id))return false;
    // Editorial status and code padding alone do not invalidate a selection.
    const ordered=value=>Array.isArray(value)?value.map(ordered):value&&typeof value==='object'?Object.fromEntries(Object.keys(value).sort().map(key=>[key,ordered(value[key])])):value;
    return JSON.stringify(ordered({...saved,id,status:undefined}))===JSON.stringify(ordered({...current,id,status:undefined}));
  }
  return {FEATURES,LEVELS,DIFFICULTIES,PAGE_COUNTS,PER_PAGE,exerciseParts,normalizeId,normalizeSelectionIds,parseSearch,sheetLayout,evaluate,numberRatio,eligible,missingCoverage,selectionIssues,compose,pageGroups,sameExerciseContent};
});
