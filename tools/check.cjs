const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..'),data=JSON.parse(fs.readFileSync(path.join(root,'data/catalog.json'),'utf8')),C=require('../core.js');
let checks=0;const check=(name,run)=>{try{run();checks++;console.log('OK · '+name);}catch(e){console.error('ERROR · '+name);throw e;}};
const all=data.exercises,base={scope:'sheet',level:'',difficulty:'',features:{}};
// Small dependency-free validator for exactly the JSON Schema keywords used here.
const schema=JSON.parse(fs.readFileSync(path.join(root,'data/catalog.schema.json'),'utf8'));
function validate(value,rule,location='$') {
  if(typeof rule==='boolean'){assert(rule,location+' forbidden');return;}
  if(rule.$ref)return validate(value,rule.$ref.split('/').slice(1).reduce((a,k)=>a[k],schema),location);
  if(rule.oneOf)assert.equal(rule.oneOf.filter(r=>{try{validate(value,r,location);return true;}catch{return false;}}).length,1,location+' oneOf');
  if('const'in rule)assert.deepEqual(value,rule.const,location+' const');
  if(rule.enum)assert(rule.enum.includes(value),location+' enum');
  if(rule.type){const valid={object:()=>value!==null&&typeof value==='object'&&!Array.isArray(value),array:()=>Array.isArray(value),string:()=>typeof value==='string',integer:()=>Number.isInteger(value),number:()=>typeof value==='number'&&Number.isFinite(value)};assert(valid[rule.type](),location+' type '+rule.type);}
  if(typeof value==='string'){if(rule.minLength)assert(value.length>=rule.minLength,location);if(rule.pattern)assert(new RegExp(rule.pattern).test(value),location);}
  if(typeof value==='number'){if('minimum'in rule)assert(value>=rule.minimum,location);if('maximum'in rule)assert(value<=rule.maximum,location);if('exclusiveMinimum'in rule)assert(value>rule.exclusiveMinimum,location);}
  if(Array.isArray(value)){if(rule.minItems)assert(value.length>=rule.minItems,location);if(rule.maxItems)assert(value.length<=rule.maxItems,location);if(rule.uniqueItems)assert.equal(new Set(value.map(x=>JSON.stringify(x))).size,value.length,location);value.forEach((item,i)=>{const r=rule.prefixItems?.[i]||rule.items;if(r)validate(item,r,location+'['+i+']');});}
  else if(value&&typeof value==='object'){for(const key of rule.required||[])assert(Object.hasOwn(value,key),location+' missing '+key);for(const [key,item]of Object.entries(value)){if(rule.additionalProperties===false)assert(Object.hasOwn(rule.properties,key),location+' unknown '+key);if(rule.properties&&Object.hasOwn(rule.properties,key))validate(item,rule.properties[key],location+'.'+key);}}
}
check('Els blocs i el catàleg compleixen l’esquema i tenen 36 identificadors únics',()=>{
  validate(data,schema);
  const packs=fs.readdirSync(path.join(root,'data/packs')).filter(file=>/^bloc-\d+\.json$/.test(file)).sort().map(file=>JSON.parse(fs.readFileSync(path.join(root,'data/packs',file),'utf8')));
  packs.forEach(pack=>validate(pack,schema));
  assert.equal(new Set(packs.map(pack=>pack.pack.id)).size,packs.length);
  assert.deepEqual(all,packs.flatMap(pack=>pack.exercises));assert.equal(all.length,36);assert.equal(new Set(all.map(e=>e.id)).size,all.length);all.forEach(e=>assert.equal(e.id,C.normalizeId(e.id)));
  assert.equal(data.schemaVersion,2);packs.filter(pack=>pack.exercises.some(e=>e.parts)).forEach(pack=>assert.equal(pack.schemaVersion,2));
});
check('Els blocs publicats respecten el seu estat de revisió i no inclouen esborranys',()=>all.forEach((e,i)=>assert.equal(e.status,i<12?'validat':'pendent-docent',e.id)));
check('Les tries antigues admeten canvis editorials però rebutgen enunciats o solucions diferents',()=>{
  const current=all[0],legacy=JSON.parse(JSON.stringify(current));legacy.status='pendent-docent';
  assert(C.sameExerciseContent(legacy,current));
  assert(!C.sameExerciseContent({...legacy,statement:legacy.statement+' Modificat.'},current));
  assert(!C.sameExerciseContent({...legacy,solution:{...legacy.solution,answer:99}},current));
  assert(!C.sameExerciseContent({...legacy,version:legacy.version+1},current));
  assert(!C.sameExerciseContent(null,current));
});
check('Els codis de quatre xifres migren tries antigues sense perdre contingut ni acceptar duplicats',()=>{
  assert.deepEqual(C.normalizeSelectionIds(['P001','P013','P100','P9999','P10000']),['P0001','P0013','P0100','P9999','P10000']);
  assert.throws(()=>C.normalizeSelectionIds(['P013','P0013']));assert.throws(()=>C.normalizeSelectionIds(['P0']));assert.throws(()=>C.normalizeSelectionIds(['P9007199254740992']));
  for(const current of all){const legacy={...current,id:'P'+String(Number(current.id.slice(1))).padStart(3,'0')};assert(C.sameExerciseContent(legacy,current));assert(!C.sameExerciseContent({...legacy,question:legacy.question+' Canvi'},current));}
  assert(!C.sameExerciseContent({...all[0],id:'P002'},all[0]));
});
check('La cerca admet codis i rangs d’impressió inclusius, combinats i oberts',()=>{
  const ids=query=>all.filter(e=>C.eligible(e,{...base,query})).map(e=>e.id);
  assert.deepEqual(ids('-4'),['P0001','P0002','P0003','P0004']);
  assert.deepEqual(ids('5-7,9-10'),['P0005','P0006','P0007','P0009','P0010']);
  assert.deepEqual(ids('p0013-'),all.slice(12).map(e=>e.id));
  assert.deepEqual(ids('P013'),['P0013']);assert.deepEqual(ids('13'),['P0013']);assert.deepEqual(ids('P0013-P0015'),['P0013','P0014','P0015']);
  assert.deepEqual(ids('5-7,6-9,5'),['P0005','P0006','P0007','P0008','P0009']);
  assert.deepEqual(ids(' 5 - 7 , 9 - 10 '),ids('5-7,9-10'));
  assert.deepEqual(ids('37-'),[]);assert(ids('pomes').includes('P0001'));assert.equal(C.parseSearch('25 %').kind,'text');
  const many=C.parseSearch(Array.from({length:50},(_,i)=>i*2+1).join(','));assert.equal(many.kind,'codes');assert(many.canonical.length>200);assert.deepEqual(C.parseSearch(many.canonical),many);
  const large=[999,1000,9999,10000].map(n=>({...all[0],id:C.normalizeId('P'+n)}));
  assert.deepEqual(large.filter(e=>C.eligible(e,{query:'1000-9999'})).map(e=>e.id),['P1000','P9999']);
  for(const query of ['7-5','-','0-4','5,,7','P13-abc','1-2-3','P9007199254740992-']){assert.equal(C.parseSearch(query).kind,'invalid',query);assert.deepEqual(ids(query),[],query);}
});
check('Els rangs restringeixen proposta i revisió i es combinen amb els altres filtres',()=>{
  const filters={...base,codes:C.parseSearch('13-').canonical,features:{combinades:'exclude'}};
  const result=C.compose(all,filters,8);assert(!result.error);assert(result.ids.every(id=>Number(id.slice(1))>=13));
  assert.deepEqual(C.selectionIssues(result.ids.map(id=>all.find(e=>e.id===id)),filters,8),[]);
  assert(!C.eligible(all[0],filters));assert(C.selectionIssues([all[0]],filters,1).some(issue=>issue.includes('P0001')));
  assert(C.compose(all,{...base,codes:'7-5'},4).error);
  assert.deepEqual(all.filter(e=>C.eligible(e,{...filters,level:'superior',difficulty:'2'})).map(e=>e.id),['P0024']);
});
const expected=[17,183,22,66,8,105,66,276,8.3,50,52,45,433,147,432,42,4.35,36,144,45,39,12.95,81,14];
const expectedParts={P0025:[72,[7]],P0026:[4,[102,96]],P0027:[20.4,22.8,2.4],P0028:[9,3],P0029:[4.5,13.5,[40.5,0.5]],P0030:[336,114,[112,2]],P0031:[49,37],P0032:[15,60,[5]],P0033:[96,54],P0034:[13,[6]],P0035:[6,1.2],P0036:[60,60,[20,60]]};
const numericChecks=s=>s.kind==='justification'?s.evidence:[s];
check('Totes les respostes i les evidències de justificació coincideixen amb referències independents',()=>all.forEach((e,i)=>C.exerciseParts(e).forEach(({solution:s},index)=>{
  numericChecks(s).forEach(item=>assert.deepEqual(C.evaluate(item.calculation),C.numberRatio(item.answer),e.id+' '+index));
  const reference=e.parts?expectedParts[e.id][index]:expected[i];
  if(s.kind==='justification')assert.deepEqual(s.evidence.map(item=>item.answer),reference,e.id);else assert.equal(s.answer,reference,e.id);
})));
check('Els apartats tenen preguntes i solucions completes i la cerca cobreix totes les preguntes',()=>{
  const batch=all.slice(24);assert.equal(batch.reduce((n,e)=>n+e.parts.length,0),29);
  assert.equal(batch.filter(e=>e.parts.length===3).length,5);
  const exercise=all.find(e=>e.id==='P0036');assert(C.eligible(exercise,{query:'70 %'}));
  const changed=JSON.parse(JSON.stringify(exercise));changed.parts[2].question+=' Canvi';assert(!C.sameExerciseContent(changed,exercise));
  assert.throws(()=>validate({...exercise,question:'Pregunta duplicada'},schema.$defs.exercise));
  assert.throws(()=>validate({...exercise,id:'incorrecte'},schema.$defs.exercise));
  assert.throws(()=>validate({...exercise,parts:[exercise.parts[0]]},schema.$defs.exercise));
  assert.throws(()=>validate({...exercise,parts:[{question:'Falta solució'}]},schema.$defs.exercise));
});
check('L’aritmètica evita errors de decimals i detecta divisions o arrels invàlides',()=>{assert.deepEqual(C.evaluate(['add',0.1,0.2]),{n:3,d:10});assert.deepEqual(C.evaluate(['div',23,7]),{n:23,d:7});assert.throws(()=>C.evaluate(['div',2,0]));assert.throws(()=>C.evaluate(['sqrt',23]));});
check('Les etiquetes reflecteixen les operacions de la resolució i els intermedis',()=>all.forEach(e=>{
  let combined=false,parentheses=false;
  for(const {solution:s} of C.exerciseParts(e)){
    parentheses=parentheses||!!s.expression?.includes('(');
    for(const item of numericChecks(s)){
      let steps=0;const walk=node=>{if(!Array.isArray(node))return;steps++;const [op,...args]=node;const tags={add:'suma-resta',sub:'suma-resta',mul:'multiplicacio-divisio',div:'multiplicacio-divisio',pow:'potencies',sqrt:'arrels'};assert(e.features.includes(tags[op]),e.id+' '+op);const result=C.evaluate(node);if(e.numeric.intermediate==='naturals')assert(result.d===1&&result.n>=0,e.id+' intermedi');args.forEach(walk);};walk(item.calculation);combined=combined||steps>1;
      if(e.numeric.result==='naturals')assert(Number.isInteger(item.answer)&&item.answer>=0,e.id);
    }
  }
  assert.equal(e.features.includes('combinades'),combined,e.id);
  for(const [type,feature]of [['decimals','decimals'],['fraccions','fraccions']])if(Object.values(e.numeric).includes(type))assert(e.features.includes(feature),e.id+' '+type);
  assert.equal(e.features.includes('parentesis'),parentheses,e.id+' parèntesis');
}));
check('Els dibuixos corresponen a les quantitats i les parts indicades',()=>all.forEach(e=>C.exerciseParts(e).forEach(({solution:s})=>{const v=s.visual;if(!v)return;if(v.type==='fraction'){assert(v.filled<=v.parts);assert.equal(v.total%v.parts,0);}if(v.type==='objects'){assert(v.removed<=v.groups*v.perGroup);assert.equal(v.groups*v.perGroup-v.removed,s.answer);}if(v.type==='grid'){assert(v.removed<=v.side**2);assert.equal(v.side**2-v.removed,s.answer);}})));
check('La còpia per obrir el web sense servidor coincideix amb el JSON original',()=>{const context={};vm.createContext(context);vm.runInContext(fs.readFileSync(path.join(root,'catalog-data.js'),'utf8'),context);assert.equal(JSON.stringify(context.EXERCISE_CATALOG),JSON.stringify(data));});
const excluded={...base,features:{fraccions:'exclude',decimals:'exclude',potencies:'exclude',arrels:'exclude'}};
check('Les exclusions eliminen tots els problemes que treballen els continguts vetats',()=>{assert.deepEqual(all.filter(e=>C.eligible(e,excluded)).map(e=>e.id),['P0001','P0002','P0003','P0004','P0007','P0008','P0013','P0014','P0015','P0016','P0020','P0021','P0025','P0026','P0030','P0034','P0036']);const r=C.compose(all,excluded,4);assert(!r.error);assert.equal(C.selectionIssues(all.filter(e=>r.ids.includes(e.id)),excluded,4).length,0);});
check('Vuit problemes d’una sola operació permeten compondre fitxes sense combinades',()=>{
  const filters={...base,features:{combinades:'exclude'}};
  assert.deepEqual(all.filter(e=>C.eligible(e,filters)).map(e=>e.id),['P0013','P0014','P0015','P0016','P0017','P0018','P0023','P0024']);
  const r=C.compose(all,filters,8);assert(!r.error);assert.equal(C.selectionIssues(r.ids.map(id=>all.find(e=>e.id===id)),filters,8).length,0);
});
check('Obligatori al full cobreix fraccions i percentatges sense exigir-los en cada problema',()=>{const filters={...base,features:{fraccions:'require',percentatges:'require',decimals:'exclude'}};for(let i=0;i<20;i++){const r=C.compose(all,filters,4);assert(!r.error);assert.equal(C.selectionIssues(all.filter(e=>r.ids.includes(e.id)),filters,4).length,0);}});
check('Obligatori en cada problema i filtres incompatibles no es relaxen',()=>{const filters={scope:'each',features:{fraccions:'require',percentatges:'require'}};assert.equal(all.filter(e=>C.eligible(e,filters)).length,0);assert(C.compose(all,filters,4).error);assert(C.compose(all,{...base,level:'mitja',difficulty:'1'},4).error);});
check('Nivell i dificultat admeten exactament les diagonals equivalents de la matriu',()=>{
  const cells=[
    {level:'mitja',difficulty:1,band:1},{level:'mitja',difficulty:2,band:2},{level:'mitja',difficulty:3,band:3},
    {level:'superior',difficulty:1,band:2},{level:'superior',difficulty:2,band:3},{level:'superior',difficulty:3,band:4},
    {level:'eso',difficulty:1,band:3},{level:'eso',difficulty:2,band:4},{level:'eso',difficulty:3,band:5}
  ];
  for(const level of ['',...Object.keys(C.LEVELS)])for(const difficulty of ['','1','2','3']){
    const filters={...base,level,difficulty},bands=new Set(cells.filter(cell=>(!level||cell.level===level)&&(!difficulty||cell.difficulty===Number(difficulty))).map(cell=>cell.band));
    for(const cell of cells)assert.equal(C.eligible({...all[0],level:cell.level,difficulty:cell.difficulty},filters),bands.has(cell.band),JSON.stringify({filters,cell}));
  }
  const intermediate={...base,level:'superior',difficulty:'2'};
  assert(C.eligible({...all[0],level:'mitja',difficulty:3},intermediate));
  assert(C.eligible({...all[0],level:'eso',difficulty:1},intermediate));
  assert(!C.eligible({...all[0],level:'eso',difficulty:2},intermediate));
  assert(!C.eligible({...all[0],level:'mitja',difficulty:1},intermediate));
});
check('La proposta i la revisió comparteixen les equivalències i respecten els continguts',()=>{
  const sample=[
    {...all[0],id:'M3',level:'mitja',difficulty:3,features:['suma-resta']},
    {...all[0],id:'S2',level:'superior',difficulty:2,features:['multiplicacio-divisio']},
    {...all[0],id:'E1',level:'eso',difficulty:1,features:['fraccions']},
    {...all[0],id:'E2',level:'eso',difficulty:2,features:['fraccions']}
  ];
  const filters={...base,level:'superior',difficulty:'2',features:{fraccions:'exclude', 'suma-resta':'require'}};
  const result=C.compose(sample,filters,2);assert(!result.error);assert.deepEqual([...result.ids].sort(),['M3','S2']);
  assert.deepEqual(C.selectionIssues(result.ids.map(id=>sample.find(e=>e.id===id)),filters,2),[]);
  assert(!C.eligible(sample[2],filters));
  assert(!C.eligible(sample[1],{...filters,scope:'each'}));
  const equivalent={...base,level:'mitja',difficulty:'3'},target={...base,level:'superior',difficulty:'2'};
  assert.deepEqual(all.filter(e=>C.eligible(e,equivalent)),all.filter(e=>C.eligible(e,target)));
  const real=C.compose(all,target,4);assert(!real.error);assert.deepEqual(C.selectionIssues(real.ids.map(id=>all.find(e=>e.id===id)),target,4),[]);
});
check('Una nova proposta canvia la selecció si hi ha alternatives compatibles',()=>{const previous=['P0001','P0002','P0003','P0004'];const r=C.compose(all,base,4,previous);assert(!r.error);assert.equal(new Set(r.ids).size,4);assert(r.ids.some(id=>!previous.includes(id)));});
check('Les 12 combinacions de pàgines i distribució conserven l’ordre i no repeteixen problemes',()=>{
  const large=Array.from({length:24},(_,i)=>({...all[i%all.length],id:'T'+i}));
  for(const pageCount of [1,2,4,6])for(const perPage of [2,3,4]){
    const count=pageCount*perPage,result=C.compose(large,base,count);assert(!result.error);assert.equal(new Set(result.ids).size,count);
    const chosen=result.ids.map(id=>large.find(e=>e.id===id)),groups=C.pageGroups(chosen,pageCount,perPage);
    assert.equal(groups.length,pageCount);assert(groups.every(group=>group.length===perPage));assert.deepEqual(groups.flat(),chosen);
  }
  assert(C.compose(all,base,5).error);assert(C.compose(all.slice(0,12),base,24).error.includes('12'));
  assert.throws(()=>C.pageGroups(all,1,2));assert.throws(()=>C.pageGroups([],3,2));
});
check('Les tries antigues migren a dues pàgines i es rebutgen configuracions no admeses',()=>{
  assert.deepEqual(C.sheetLayout({count:4}),{pageCount:2,perPage:2});
  for(const count of [5,6])assert.deepEqual(C.sheetLayout({count}),{pageCount:2,perPage:3});
  assert.deepEqual(C.pageGroups(all.slice(0,5),2,3).map(g=>g.length),[3,2]);
  assert.deepEqual(C.pageGroups([],6,4).map(g=>g.length),[0,0,0,0,0,0]);
  for(const settings of [{count:8},{pageCount:3,perPage:2},{pageCount:2,perPage:5},{pageCount:'2',perPage:2},null])assert.throws(()=>C.sheetLayout(settings));
});
check('La selecció detecta problemes incompatibles i continguts obligatoris absents',()=>{assert(C.selectionIssues(all.slice(0,4),{...base,features:{decimals:'require'}},4).some(x=>x.includes('Falta')));assert(C.selectionIssues([all[8],...all.slice(0,3)],{...base,features:{decimals:'exclude'}},4).some(x=>x.includes('P0009')));});
console.log(`\n${checks} grups de comprovacions superats.`);
