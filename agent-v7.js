(()=>{
'use strict';
const KEY='craque-sss-v7';
function read(){try{return JSON.parse(localStorage.getItem(KEY)||'null')}catch{return null}}
function syncAgentView(){const s=read();if(!s)return;document.querySelectorAll('[data-agent]').forEach(b=>b.classList.toggle('active',b.dataset.agent===s.contract?.agent));const label=document.querySelector('#agentLabel');if(label&&s.contract?.agent)label.textContent=s.contract.agent}
document.addEventListener('click',e=>{
  const btn=e.target.closest('[data-agent]');
  if(!btn)return;
  e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();
  const s=read();
  if(!s)return;
  const agent=btn.dataset.agent==='Agressivo'?'Agressivo':'Conservador';
  s.contract=s.contract||{yearsLeft:0,agent:'Conservador',clause:0};
  s.contract.agent=agent;
  if(agent==='Agressivo'&&s.player?.salary) s.player.salary=Math.round(s.player.salary*1.08);
  localStorage.setItem(KEY,JSON.stringify(s));
  location.reload();
},true);
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',syncAgentView);else syncAgentView();
})();
