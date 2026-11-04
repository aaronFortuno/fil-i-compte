'use strict';
const assert=require('node:assert/strict');
const {create}=require('../analytics.js');
const website='00000000-0000-4000-8000-000000000000';
const context={problem:'P0140',section:'solution',version:1};
const storage=()=>{
  const data=new Map();
  return {getItem:key=>data.get(key),setItem:(key,value)=>data.set(key,value),removeItem:key=>data.delete(key)};
};
const accepted=()=>({ok:true,json:async()=>({cache:'confirmed'})});
function fixture({id=website,navigator={},protocol='https:',receive=accepted,load}={}){
  const calls=[];
  let loads=0;
  const env={
    location:{hostname:'filicompte.ortogra.fi',protocol,pathname:'/index.html?secret=test#lot=PRIVATE'},
    navigator,localStorage:storage(),sessionStorage:storage(),AbortController,
    document:{referrer:'https://classroom.example/PRIVATE'},
    loadUmamiScript:async()=>{loads++;if(load)await load();env.umami={track(){}};},
    fetch:async(url,request)=>{calls.push(JSON.parse(request.body).payload);return receive(calls.length);}
  };
  return {api:create(env,id),env,calls,loads:()=>loads};
}
(async()=>{
  for(const options of [{id:''},{protocol:'http:'},{navigator:{globalPrivacyControl:true}},{navigator:{doNotTrack:'1'}}]){
    const f=fixture(options);
    assert.equal(await f.api.start(),false);
    assert.equal(await f.api.allowTemporarily(),false);
    assert.equal(f.loads(),0);
    assert.equal(f.calls.length,0);
  }
  const f=fixture();
  assert(await f.api.start());
  assert.equal(f.calls[0].url,'/index.html');
  assert.equal(f.calls[0].referrer,'');
  assert(await f.api.track('print-requested',{document:'solutions',pages:2,per_page:3}));
  assert.equal(await f.api.track('print-requested',{document:'solutions',pages:2,per_page:3,group:'PRIVATE'}),false);
  assert.equal(await f.api.track('worksheet-proposed',{pages:2}),false);
  assert(await f.api.track('worksheet-proposed',{pages:2,per_page:3}));
  assert.deepEqual(await Promise.all([f.api.reportProblem(context),f.api.reportProblem(context)]),[true,false]);
  assert.deepEqual(f.calls[3].data,{problem_id:'P0140',section:'solution',version:1});
  assert(await f.api.reportProblem({...context,section:'statement'}));
  assert(await f.api.reportProblem({...context,version:2}));
  assert.equal(create(f.env,website).reportState(context),'sent');
  assert.equal(await f.api.reportProblem({...context,problem:'PRIVATE'}),false);
  assert(await f.api.track('problem-selected',{problem_id:'P0140'}));
  assert.deepEqual(f.calls.at(-1).data,{problem_id:'P0140'});
  assert.equal(await f.api.track('problem-selected',{problem_id:'PRIVATE'}),false);
  for(const action of ['create','open','rename','update','delete']){
    assert(await f.api.track('template-action',{action}));
    assert.deepEqual(f.calls.at(-1).data,{action});
  }
  assert.equal(await f.api.track('template-action',{action:'open',name:'PRIVATE'}),false);
  assert.equal(await f.api.track('template-action',{action:'cancel'}),false);
  f.api.disable();
  assert.equal(await f.api.track('worksheet-proposed',{pages:2,per_page:3}),false);
  assert(await f.api.allowTemporarily());
  assert.equal(f.env.localStorage.getItem('umami.disabled'),'1');
  assert(!JSON.stringify(f.calls).includes('PRIVATE'));
  const blocked=fixture({load:()=>{throw Error('Blocked');}});
  assert.equal(await blocked.api.start(),false);
  assert.equal(blocked.api.getState().status,'unavailable');
  assert.equal(blocked.calls.length,0);
  const rejected=fixture({receive:n=>n===1?accepted():{ok:true,json:async()=>({disabled:true})}});
  assert(await rejected.api.start());
  assert.equal(await rejected.api.reportProblem(context),false);
  assert.equal(rejected.api.reportState(context),'idle');
  assert.equal(rejected.api.getState().status,'unavailable');
  console.log('Analítica comprovada amb un receptor simulat. Privacitat, accions, errors i avisos duplicats.');
})().catch(error=>{console.error(error);process.exitCode=1;});
