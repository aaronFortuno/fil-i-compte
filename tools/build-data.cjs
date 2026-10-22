const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),core=require('../core.js'),directory=path.join(root,'data','packs');
const files=fs.readdirSync(directory).filter(name=>/^bloc-\d+\.json$/.test(name)).sort();
assert(files.length,'Cal almenys un bloc de problemes.');
const packs=files.map(file=>({file,data:JSON.parse(fs.readFileSync(path.join(directory,file),'utf8'))}));
const exercises=packs.flatMap(({data})=>data.exercises);
exercises.forEach(e=>assert.equal(e.id,core.normalizeId(e.id),'Cal un codi canònic positiu de quatre xifres o més: '+e.id));
assert.equal(new Set(exercises.map(e=>e.id)).size,exercises.length,'Hi ha identificadors repetits entre blocs.');
const data={schemaVersion:Math.max(...packs.map(p=>p.data.schemaVersion)),pack:{id:'fil-i-compte',title:'Banc de problemes contextualitzats',language:'ca',version:packs.reduce((sum,p)=>sum+p.data.pack.version,0),authorship:'Contingut original creat per a aquest projecte',review:packs.map(({file,data})=>`${file}: ${data.pack.review}`).join(' ')},exercises};
fs.writeFileSync(path.join(root,'data','catalog.json'),JSON.stringify(data,null,2)+'\n','utf8');
fs.writeFileSync(path.join(root,'catalog-data.js'),'/* Generat des de data/packs/ amb node tools/build-data.cjs. */\nglobalThis.EXERCISE_CATALOG = '+JSON.stringify(data,null,2)+';\n','utf8');
for(const {file,data:pack} of packs){
  const number=file.match(/\d+/)[0];
  const review=[`# Bloc ${number} · ${pack.pack.title}`,'',`${pack.exercises.length} problemes estàtics amb una possible resolució. ${pack.pack.review}`,'',`Aquest document es genera a partir de data/packs/${file}; les correccions es fan al bloc original.`,'',...pack.exercises.flatMap(e=>[
    `## ${e.id} · ${e.title}`,'',`${core.LEVELS[e.level]} · ${core.DIFFICULTIES[e.difficulty]} · Estructura: ${e.structure}`,'',e.statement,'',...core.exerciseParts(e).flatMap(({question,solution:s},index)=>[
      `**${e.parts?String.fromCharCode(97+index)+') ':''}${question}**`,'',`Continguts: ${e.features.map(f=>core.FEATURES[f]).join(', ')}.`,'','**Una possible resolució**','',...s.steps.map((step,i)=>`${i+1}. ${step}`),'',...(s.expression?[`Expressió: ${s.expression}`,'']:[]),`**${s.response}**`,'',...(s.visual?[`Representació visual: ${s.visual.caption}`,'']:[]),s.note,''
    ]),'---',''
  ])].join('\n');
  fs.writeFileSync(path.join(root,`BLOC-${number}.md`),review,'utf8');
}
console.log(`Catàleg preparat: ${exercises.length} problemes en ${packs.length} blocs. El web també es pot obrir sense servidor.`);
