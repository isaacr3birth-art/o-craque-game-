import fs from 'node:fs';
const root=new URL('../',import.meta.url).pathname;
const d=JSON.parse(fs.readFileSync(root+'data/craques-mini.json','utf8'));
const players=d.players;
const years=Array.from({length:d.end-d.start+1},(_,i)=>d.start+i);
const find=n=>players.find(p=>p[0]===n);
const active=(n,y)=>find(n)?.[4]?.some(s=>s[3]==='p'&&y>=s[0]&&y<=s[1]);
if(d.start!==1996||d.end!==2026||years.length!==31) throw new Error('timeline invalida');
if(players.length<30) throw new Error('catalogo historico insuficiente');
for(const [y,n] of [[1996,'Ronaldo Nazário'],[2004,'Lionel Messi'],[2009,'Cristiano Ronaldo'],[2018,'Kylian Mbappé'],[2026,'Kevin De Bruyne'],[2026,'Lionel Messi'],[2026,'Vinícius Júnior']]) if(!active(n,y)) throw new Error(n+' ausente em '+y);
for(const p of players){if(!p[0]||!p[1]||!p[2]||!Array.isArray(p[4])||!p[4].length) throw new Error('registro invalido: '+p[0]);for(const s of p[4]) if(!Number.isInteger(s[0])||!Number.isInteger(s[1])||s[0]>s[1]) throw new Error('intervalo invalido: '+p[0]);}
console.log('OK: '+players.length+' craques, '+players.reduce((n,p)=>n+p[4].length,0)+' periodos de clubes, '+years.length+' anos.');
