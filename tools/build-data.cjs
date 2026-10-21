const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..');
const data=JSON.parse(fs.readFileSync(path.join(root,'data','catalog.json'),'utf8'));
fs.writeFileSync(path.join(root,'catalog-data.js'),'/* Generat des de data/catalog.json amb node tools/build-data.cjs. */\nglobalThis.EXERCISE_CATALOG = '+JSON.stringify(data,null,2)+';\n','utf8');
const core=require('../core.js');
const review=['# Bloc 01 · Dotze maneres de pensar','', '12 problemes estàtics amb una possible resolució. Càlculs comprovats i problemes validats en la revisió del projecte. Els dibuixos es poden veure al web.','','Aquest document es genera a partir de data/catalog.json; les correccions es fan al catàleg original.','',...data.exercises.flatMap(e=>[
  `## ${e.id} · ${e.title}`,'',`${core.LEVELS[e.level]} · ${core.DIFFICULTIES[e.difficulty]} · Estructura: ${e.structure}`,'',e.statement,'',`**${e.question}**`,'',`Continguts: ${e.features.map(f=>core.FEATURES[f]).join(', ')}.`,'','**Una possible resolució**','',...e.solution.steps.map((s,i)=>`${i+1}. ${s}`),'',`Expressió: ${e.solution.expression}`,'',`**${e.solution.response}**`,'',...(e.solution.visual?[`Representació visual: ${e.solution.visual.caption}`,'']:[]),e.solution.note,'','---',''
])].join('\n');
fs.writeFileSync(path.join(root,'BLOC-01.md'),review,'utf8');
console.log(`Catàleg preparat: ${data.exercises.length} problemes. El web també es pot obrir sense servidor.`);
