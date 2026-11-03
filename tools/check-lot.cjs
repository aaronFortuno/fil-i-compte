const assert=require('node:assert/strict');
const C=require('../core.js');
const Lot=require('../lot-code.js');
const id=n=>'P'+String(n).padStart(4,'0');
const sample={pageCount:2,perPage:2,ids:[id(60),id(3),id(17),id(1)]};
const code=Lot.encode(sample);
assert.deepEqual(Lot.decode(code.toLowerCase().replaceAll('-',' ')),sample);
assert.notEqual(Lot.encode({...sample,ids:[...sample.ids].reverse()}),code);
assert.notEqual(Lot.encode({...sample,pageCount:1,perPage:4}),code);
for(const pageCount of C.PAGE_COUNTS)for(const perPage of C.PER_PAGE){
  for(const largest of [60,10000,Number.MAX_SAFE_INTEGER]){
    const lot={pageCount,perPage,ids:Array.from({length:pageCount*perPage},(_,i)=>id(largest-i))};
    assert.deepEqual(Lot.decode(Lot.encode(lot)),lot);
  }
}
for(const [i,char] of [...code].entries()){
  if(char==='-')continue;
  assert.throws(()=>Lot.decode(code.slice(0,i)+(char==='2'?'3':'2')+code.slice(i+1)));
}
assert.throws(()=>Lot.decode(code.slice(0,-1)));
assert.throws(()=>Lot.encode({...sample,ids:[id(1),id(1),id(2),id(3)]}));
console.log('Codis de lot: formats, ordre, paginació, identificadors grans i errors de transcripció comprovats.');
