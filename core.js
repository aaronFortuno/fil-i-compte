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
  function eligible(exercise, filters={}) {
    if(filters.level && exercise.level!==filters.level) return false;
    if(filters.difficulty && exercise.difficulty!==Number(filters.difficulty)) return false;
    const query=(filters.query||'').toLocaleLowerCase('ca').trim();
    if(query && ![exercise.id,exercise.title,exercise.statement,exercise.question].join(' ').toLocaleLowerCase('ca').includes(query)) return false;
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
    if(![4,6].includes(count))return {error:'Tria 4 o 6 problemes per preparar dues pàgines equilibrades.'};
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
  function pageGroups(exercises) {const middle=Math.ceil(exercises.length/2);return [exercises.slice(0,middle),exercises.slice(middle)];}
  function sameExerciseContent(saved,current) {
    if(!saved||!current||Array.isArray(saved)||typeof saved!=='object')return false;
    // Editorial status alone does not invalidate an exported selection.
    const ordered=value=>Array.isArray(value)?value.map(ordered):value&&typeof value==='object'?Object.fromEntries(Object.keys(value).sort().map(key=>[key,ordered(value[key])])):value;
    return JSON.stringify(ordered({...saved,status:undefined}))===JSON.stringify(ordered({...current,status:undefined}));
  }
  return {FEATURES,LEVELS,DIFFICULTIES,evaluate,numberRatio,eligible,missingCoverage,selectionIssues,compose,pageGroups,sameExerciseContent};
});
