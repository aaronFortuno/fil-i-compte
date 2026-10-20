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
check('El catàleg compleix l’esquema i té 12 identificadors únics',()=>{validate(data,schema);assert.equal(all.length,12);assert.equal(new Set(all.map(e=>e.id)).size,12);});
const expected=[17,183,22,66,8,105,66,276,8.3,50,52,45];
check('Les 12 respostes coincideixen amb els càlculs exactes i els resultats revisats',()=>all.forEach((e,i)=>{const r=C.evaluate(e.solution.calculation),a=C.numberRatio(e.solution.answer);assert.deepEqual(r,a,e.id);assert.equal(e.solution.answer,expected[i],e.id);}));
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
check('Les exclusions eliminen tots els problemes que treballen els continguts vetats',()=>{assert.deepEqual(all.filter(e=>C.eligible(e,excluded)).map(e=>e.id),['P001','P002','P003','P004','P007','P008']);const r=C.compose(all,excluded,4);assert(!r.error);assert.equal(C.selectionIssues(all.filter(e=>r.ids.includes(e.id)),excluded,4).length,0);});
check('Obligatori al full cobreix fraccions i percentatges sense exigir-los en cada problema',()=>{const filters={...base,features:{fraccions:'require',percentatges:'require',decimals:'exclude'}};for(let i=0;i<20;i++){const r=C.compose(all,filters,4);assert(!r.error);assert.equal(C.selectionIssues(all.filter(e=>r.ids.includes(e.id)),filters,4).length,0);}});
check('Obligatori en cada problema i filtres incompatibles no es relaxen',()=>{const filters={scope:'each',features:{fraccions:'require',percentatges:'require'}};assert.equal(all.filter(e=>C.eligible(e,filters)).length,0);assert(C.compose(all,filters,4).error);assert(C.compose(all,{...base,level:'mitja'},4).error);});
check('Una nova proposta canvia la selecció si hi ha alternatives compatibles',()=>{const previous=['P001','P002','P003','P004'];const r=C.compose(all,base,4,previous);assert(!r.error);assert.equal(new Set(r.ids).size,4);assert(r.ids.some(id=>!previous.includes(id)));});
check('Només es proposen 4 o 6 problemes, distribuïts en 2+2 o 3+3',()=>{for(const count of [4,6]){const r=C.compose(all,base,count);assert.equal(new Set(r.ids).size,count);assert.deepEqual(C.pageGroups(all.slice(0,count)).map(g=>g.length),count===4?[2,2]:[3,3]);}assert(C.compose(all,base,5).error);assert(C.compose(all,base,8).error);});
check('La selecció detecta problemes incompatibles i continguts obligatoris absents',()=>{assert(C.selectionIssues(all.slice(0,4),{...base,features:{decimals:'require'}},4).some(x=>x.includes('Falta')));assert(C.selectionIssues([all[8],...all.slice(0,3)],{...base,features:{decimals:'exclude'}},4).some(x=>x.includes('P009')));});
console.log(`\n${checks} grups de comprovacions superats. Revisió docent encara pendent.`);
