const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const messages=require('../i18n/es-page.json');
const input=fs.readFileSync(path.join(root,'index.html'),'utf8').replace(/\r\n/g,'\n');
const outputPath=path.join(root,'es','index.html');
const translate=value=>Object.hasOwn(messages,value)?messages[value]:value;
const html=input
  .replace(/<[^>]+>|[^<]+/g,token=>{
    if(token.startsWith('<')){
      return token
        .replace(/\b(aria-label|title|placeholder|content|value|alt)="([^"]*)"/g,(_,key,value)=>`${key}="${translate(value)}"`)
        .replace(/\b(src|href)="(assets\/[^"]+|[\w-]+\.(?:css|js))"/g,(_,key,value)=>`${key}="../${value==='catalog-data.js'?'catalog-data-es.js':value}"`);
    }
    if(token.trim()==='Un projecte d’')return token.replace('Un projecte d’','Un proyecto de ');
    return token.replace(/^(\s*)(.*?)(\s*)$/s,(_,start,value,end)=>start+translate(value)+end);
  })
  .replace('<html lang="ca">','<html lang="es">')
  .replace('<script defer src="../releases.js"></script>','<script defer src="../releases.js"></script><script defer src="../i18n/es-releases.js"></script>')
  .replace('href="./" hreflang="ca" lang="ca" aria-current="page"','href="../" hreflang="ca" lang="ca"')
  .replace('href="es/" hreflang="es" lang="es"','href="./" hreflang="es" lang="es" aria-current="page"');
const result='<!-- Generat amb node tools/build-ui.cjs. Editeu index.html i i18n/es-page.json. -->\n'+html;
if(process.argv.includes('--check')){
  if(!fs.existsSync(outputPath)||fs.readFileSync(outputPath,'utf8').replace(/\r\n/g,'\n')!==result){
    console.error('Actualitza es/index.html amb node tools/build-ui.cjs.');
    process.exitCode=1;
  }
}else{
  fs.mkdirSync(path.dirname(outputPath),{recursive:true});
  fs.writeFileSync(outputPath,result);
}
