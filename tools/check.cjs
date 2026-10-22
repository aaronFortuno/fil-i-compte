const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..'),data=JSON.parse(fs.readFileSync(path.join(root,'data/catalog.json'),'utf8')),C=require('../core.js');
let checks=0;const check=(name,run)=>{try{run();checks++;console.log('OK · '+name);}catch(e){console.error('ERROR · '+name);throw e;}};
const all=data.exercises,base={scope:'sheet',level:'',difficulty:'',features:{}};
// Small dependency-free validator for exactly the JSON Schema keywords used here.
const schema=JSON.parse(fs.readFileSync(path.join(root,'data/catalog.schema.json'),'utf8'));
function validate(value,rule,location='$') {
  if(rule.$ref)return validate(value,rule.$ref.split('/').slice(1).reduce((a,k)=>a[k],schema),location);
  if(rule.oneOf){assert.equal(rule.oneOf.filter(r=>{try{validate(value,r,location);return true;}catch{return false;}}).length,1,location+' oneOf');return;}
  if('const'in rule)assert.deepEqual(value,rule.const,location+' const');
  if(rule.enum)assert(rule.enum.includes(value),location+' enum');
  if(rule.type){const valid={object:()=>value!==null&&typeof value==='object'&&!Array.isArray(value),array:()=>Array.isArray(value),string:()=>typeof value==='string',integer:()=>Number.isInteger(value),number:()=>typeof value==='number'&&Number.isFinite(value)};assert(valid[rule.type](),location+' type '+rule.type);}
  if(typeof value==='string'){if(rule.minLength)assert(value.length>=rule.minLength,location);if(rule.pattern)assert(new RegExp(rule.pattern).test(value),location);}
  if(typeof value==='number'){if('minimum'in rule)assert(value>=rule.minimum,location);if('maximum'in rule)assert(value<=rule.maximum,location);if('exclusiveMinimum'in rule)assert(value>rule.exclusiveMinimum,location);}
  if(Array.isArray(value)){if(rule.minItems)assert(value.length>=rule.minItems,location);if(rule.maxItems)assert(value.length<=rule.maxItems,location);if(rule.uniqueItems)assert.equal(new Set(value.map(x=>JSON.stringify(x))).size,value.length,location);value.forEach((item,i)=>{const r=rule.prefixItems?.[i]||rule.items;if(r)validate(item,r,location+'['+i+']');});}
  else if(value&&typeof value==='object'){for(const key of rule.required||[])assert(Object.hasOwn(value,key),location+' missing '+key);for(const [key,item]of Object.entries(value)){if(rule.additionalProperties===false)assert(Object.hasOwn(rule.properties,key),location+' unknown '+key);if(rule.properties?.[key])validate(item,rule.properties[key],location+'.'+key);}}
}
check('Els blocs i el catàleg compleixen l’esquema i tenen 24 identificadors únics',()=>{
  validate(data,schema);
  const packs=fs.readdirSync(path.join(root,'data/packs')).filter(file=>/^bloc-\d+\.json$/.test(file)).sort().map(file=>JSON.parse(fs.readFileSync(path.join(root,'data/packs',file),'utf8')));
  packs.forEach(pack=>validate(pack,schema));
  assert.equal(new Set(packs.map(pack=>pack.pack.id)).size,packs.length);
  assert.deepEqual(all,packs.flatMap(pack=>pack.exercises));assert.equal(all.length,24);assert.equal(new Set(all.map(e=>e.id)).size,all.length);
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
const expected=[17,183,22,66,8,105,66,276,8.3,50,52,45,433,147,432,42,4.35,36,144,45,39,12.95,81,14];
check('Les 24 respostes coincideixen amb els càlculs exactes i les referències independents',()=>all.forEach((e,i)=>{const r=C.evaluate(e.solution.calculation),a=C.numberRatio(e.solution.answer);assert.deepEqual(r,a,e.id);assert.equal(e.solution.answer,expected[i],e.id);}));
check('L’aritmètica evita errors de decimals i detecta divisions o arrels invàlides',()=>{assert.deepEqual(C.evaluate(['add',0.1,0.2]),{n:3,d:10});assert.deepEqual(C.evaluate(['div',23,7]),{n:23,d:7});assert.throws(()=>C.evaluate(['div',2,0]));assert.throws(()=>C.evaluate(['sqrt',23]));});
check('Les etiquetes reflecteixen les operacions de la resolució i els intermedis',()=>all.forEach(e=>{
  let steps=0;const walk=node=>{if(!Array.isArray(node))return;steps++;const [op,...args]=node;const tags={add:'suma-resta',sub:'suma-resta',mul:'multiplicacio-divisio',div:'multiplicacio-divisio',pow:'potencies',sqrt:'arrels'};assert(e.features.includes(tags[op]),e.id+' '+op);const result=C.evaluate(node);if(e.numeric.intermediate==='naturals')assert(result.d===1&&result.n>=0,e.id+' intermedi');args.forEach(walk);};walk(e.solution.calculation);
  assert.equal(e.features.includes('combinades'),steps>1,e.id);
  for(const [type,feature]of [['decimals','decimals'],['fraccions','fraccions']])if(Object.values(e.numeric).includes(type))assert(e.features.includes(feature),e.id+' '+type);
  if(e.numeric.result==='naturals')assert(Number.isInteger(e.solution.answer)&&e.solution.answer>=0,e.id);
  assert.equal(e.features.includes('parentesis'),e.solution.expression.includes('('),e.id+' parèntesis');
}));
check('Els dibuixos corresponen a les quantitats i les parts indicades',()=>all.forEach(e=>{const v=e.solution.visual;if(!v)return;if(v.type==='fraction'){assert(v.filled<=v.parts);assert.equal(v.total%v.parts,0);}if(v.type==='objects'){assert(v.removed<=v.groups*v.perGroup);assert.equal(v.groups*v.perGroup-v.removed,e.solution.answer);}if(v.type==='grid'){assert(v.removed<=v.side**2);assert.equal(v.side**2-v.removed,e.solution.answer);}}));
check('La còpia per obrir el web sense servidor coincideix amb el JSON original',()=>{const context={};vm.createContext(context);vm.runInContext(fs.readFileSync(path.join(root,'catalog-data.js'),'utf8'),context);assert.equal(JSON.stringify(context.EXERCISE_CATALOG),JSON.stringify(data));});
const excluded={...base,features:{fraccions:'exclude',decimals:'exclude',potencies:'exclude',arrels:'exclude'}};
check('Les exclusions eliminen tots els problemes que treballen els continguts vetats',()=>{assert.deepEqual(all.filter(e=>C.eligible(e,excluded)).map(e=>e.id),['P001','P002','P003','P004','P007','P008','P013','P014','P015','P016','P020','P021']);const r=C.compose(all,excluded,4);assert(!r.error);assert.equal(C.selectionIssues(all.filter(e=>r.ids.includes(e.id)),excluded,4).length,0);});
check('Vuit problemes d’una sola operació permeten compondre fitxes sense combinades',()=>{
  const filters={...base,features:{combinades:'exclude'}};
  assert.deepEqual(all.filter(e=>C.eligible(e,filters)).map(e=>e.id),['P013','P014','P015','P016','P017','P018','P023','P024']);
  const r=C.compose(all,filters,8);assert(!r.error);assert.equal(C.selectionIssues(r.ids.map(id=>all.find(e=>e.id===id)),filters,8).length,0);
});
check('Obligatori al full cobreix fraccions i percentatges sense exigir-los en cada problema',()=>{const filters={...base,features:{fraccions:'require',percentatges:'require',decimals:'exclude'}};for(let i=0;i<20;i++){const r=C.compose(all,filters,4);assert(!r.error);assert.equal(C.selectionIssues(all.filter(e=>r.ids.includes(e.id)),filters,4).length,0);}});
check('Obligatori en cada problema i filtres incompatibles no es relaxen',()=>{const filters={scope:'each',features:{fraccions:'require',percentatges:'require'}};assert.equal(all.filter(e=>C.eligible(e,filters)).length,0);assert(C.compose(all,filters,4).error);assert(C.compose(all,{...base,level:'mitja',difficulty:'3'},4).error);});
check('Una nova proposta canvia la selecció si hi ha alternatives compatibles',()=>{const previous=['P001','P002','P003','P004'];const r=C.compose(all,base,4,previous);assert(!r.error);assert.equal(new Set(r.ids).size,4);assert(r.ids.some(id=>!previous.includes(id)));});
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
check('La selecció detecta problemes incompatibles i continguts obligatoris absents',()=>{assert(C.selectionIssues(all.slice(0,4),{...base,features:{decimals:'require'}},4).some(x=>x.includes('Falta')));assert(C.selectionIssues([all[8],...all.slice(0,3)],{...base,features:{decimals:'exclude'}},4).some(x=>x.includes('P009')));});
console.log(`\n${checks} grups de comprovacions superats.`);
