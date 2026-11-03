const assert = require('node:assert/strict');
const {spawn} = require('node:child_process');
const child = spawn(process.execPath,['--require',require('node:path').join(__dirname,'github-strategy-fixture.cjs'),'app.js'],{cwd:process.cwd(),env:{...process.env,GITHUB_CLIENT_ID:'fixture',GITHUB_CLIENT_SECRET:'fixture'},stdio:['ignore','pipe','pipe']});
const base='http://127.0.0.1:3000';
async function req(path,cookie) {const r=await fetch(base+path,{redirect:'manual',headers:cookie?{Cookie:cookie}:{}});const text=await r.text();return {status:r.status,location:r.headers.get('location'),cookie:r.headers.get('set-cookie')?.split(';')[0],text};}
(async()=>{
 try {
  for(let i=0;i<60;i++){try{await req('/');break;}catch{await new Promise(r=>setTimeout(r,50));}}
  assert.equal((await req('/account')).location,'/login');
  assert.equal((await req('/login')).status,200);
  const login=await req('/auth/github/callback');assert.equal(login.status,302);assert.equal(login.location,'/');assert.ok(login.cookie);
  const account=await req('/account',login.cookie);assert.equal(account.status,200);assert.ok(account.text.includes('fixture'));
  const logout=await req('/logout',login.cookie);assert.equal(logout.status,302);assert.equal(logout.location,'/');
  assert.equal((await req('/account',login.cookie)).location,'/login');
  if(logout.cookie)assert.equal((await req('/account',logout.cookie)).location,'/login');
  assert.equal((await req('/logout')).status,302);
  console.log('PASS unauthenticated guard, login fixture/session, authenticated account, callback logout, old and new cookies rejected after logout');
 } finally {child.kill();}
})().catch(e=>{console.error(e);process.exitCode=1;});
