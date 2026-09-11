(()=>{
'use strict';
const KEY='craque-sss-v8';
function read(){try{return JSON.parse(localStorage.getItem(KEY)||'null')}catch{return null}}
function write(s){try{localStorage.setItem(KEY,JSON.stringify(s));return true}catch{return false}}
function repair(){const s=read();if(!s)return;let changed=false;s.national=s.national||{};s.worldCup=s.worldCup||{};const cupGames=Math.max(0,Math.floor(Number(s.worldCup.gamesPlayed)||0));if(cupGames>0&&Number(s.national.games||0)<cupGames){s.national.games=cupGames;changed=true}if(cupGames>0&&Number(s.national.caps||0)!==cupGames){s.national.caps=cupGames;changed=true}if(changed)write(s)}
setInterval(repair,500);repair();
})();
