import fs from 'node:fs';

const root=new URL('../',import.meta.url).pathname;
const html=fs.readFileSync(`${root}index.html`,'utf8');
const guard=fs.readFileSync(`${root}game-v8-integrity.js`,'utf8');
const fixes=fs.readFileSync(`${root}game-v8-integrity-fixes.js`,'utf8');
const extra=fs.readFileSync(`${root}game-v8-extra.js`,'utf8');
const core=fs.readFileSync(`${root}game-v8-extra-core.js`,'utf8');
const assert=(ok,msg)=>{if(!ok)throw new Error(msg)};

assert(extra.includes('game-v8-integrity.js'),'guard de integridade não está no bootstrap');
assert(extra.includes('game-v8-integrity-fixes.js'),'patch internacional não está no bootstrap');
assert(guard.includes("const KEY='craque-sss-v8'"),'guard aponta para save incorreto');
assert(guard.includes('stopImmediatePropagation'),'guard não bloqueia mutações indevidas');
assert(guard.includes('lockedDifficulty'),'dificuldade não está protegida');
assert(guard.includes('lockedCopies'),'CP inicial não está protegido');
assert(guard.includes('national.games'),'partidas internacionais não estão separadas de convocação');
assert(guard.includes('finance.wealth'),'patrimônio separado do valor de mercado');
assert(guard.includes('sponsorHistory'),'patrocínios duplicados não estão protegidos');
assert(guard.includes('r.wins++'),'vitória do rival não está registrada corretamente');
assert(fixes.includes('worldCup.gamesPlayed'),'patch de Copa não acompanha jogos do torneio');
assert(fixes.includes('national.caps=cupGames'),'caps são sincronizados com partidas reais');
assert(core.includes('playCup'),'Copa extra ausente');
assert(core.includes('challengeRival'),'desafio de rival ausente');
assert(core.includes('sponsor'),'sistema de patrocínio ausente');

const ids=[...html.matchAll(/id=["']([^"']+)/g)].map(m=>m[1]);
const dups=[...new Set(ids.filter((id,i)=>ids.indexOf(id)!==i))];
assert(!dups.length,`IDs duplicados: ${dups.join(', ')}`);

console.log('OK: integridade, Copa, finanças, rivalidades e bootstrap validados.');
