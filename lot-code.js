/* V1: header (ID width and layout), ordered IDs, and a CRC-10. */
((root)=>{
  'use strict';
  const alphabet='0123456789ABCDEFGHJKMNPQRSTVWXYZ';
  // These tables are part of the format; keep them stable across releases.
  const pages=[1,2,4,6], rows=[2,3,4];
  const digit=n=>alphabet[n];
  function checksum(value){
    let crc=0;
    for(const char of value){
      crc^=alphabet.indexOf(char)<<5;
      for(let bit=0;bit<5;bit++)crc=((crc<<1)^((crc&512)?0x233:0))&1023;
    }
    return digit(crc>>5)+digit(crc&31);
  }
  function encode({pageCount,perPage,ids}){
    const page=pages.indexOf(pageCount),row=rows.indexOf(perPage);
    if(page<0||row<0||ids.length!==pageCount*perPage||new Set(ids).size!==ids.length)throw Error('El lot no està complet.');
    const numbers=ids.map(id=>{
      const n=Number(id.slice(1));
      if(!Number.isSafeInteger(n)||n<1||id!=='P'+String(n).padStart(4,'0'))throw Error('Identificador no vàlid.');
      return BigInt(n);
    });
    const width=Math.max(...numbers.map(n=>n.toString(2).length));
    const header=(width-1)*16+page*3+row;
    let bits=numbers.reduce((value,n)=>(value<<BigInt(width))|n,0n),payload='';
    for(let i=0;i<Math.ceil(width*ids.length/5);i++,bits>>=5n)payload=digit(Number(bits&31n))+payload;
    const body='1'+digit(header>>5)+digit(header&31)+payload;
    return (body+checksum(body)).match(/.{1,5}/g).join('-');
  }
  function decode(input){
    const code=input.toUpperCase().replace(/[\s-]/g,'').replace(/O/g,'0').replace(/[IL]/g,'1');
    const invalid=()=>Error('El codi del lot no és vàlid. Comprova que l’has copiat sencer.');
    if(code.length<6||code.length>260||[...code].some(c=>!alphabet.includes(c)))throw invalid();
    if(code[0]!=='1')throw Error('Aquesta versió del codi del lot no és compatible.');
    const body=code.slice(0,-2);
    if(checksum(body)!==code.slice(-2))throw invalid();
    const header=alphabet.indexOf(code[1])*32+alphabet.indexOf(code[2]);
    const width=(header>>4)+1,layout=header&15,pageCount=pages[Math.floor(layout/3)],perPage=rows[layout%3];
    if(!pageCount||width>53||body.length!==3+Math.ceil(width*pageCount*perPage/5))throw invalid();
    let bits=[...body.slice(3)].reduce((value,c)=>(value<<5n)|BigInt(alphabet.indexOf(c)),0n);
    const ids=[],mask=(1n<<BigInt(width))-1n;
    for(let i=0;i<pageCount*perPage;i++,bits>>=BigInt(width)){
      const n=bits&mask;
      if(!n)throw invalid();
      ids.unshift('P'+String(n).padStart(4,'0'));
    }
    if(bits||new Set(ids).size!==ids.length)throw invalid();
    return {pageCount,perPage,ids};
  }
  const api={encode,decode};
  if(typeof module==='object'&&module.exports)module.exports=api;
  else root.LotCode=api;
})(globalThis);
