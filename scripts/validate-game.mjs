import fs from 'node:fs';

const root = new URL('../', import.meta.url).pathname;
const html = fs.readFileSync(`${root}index.html`, 'utf8');
const js = fs.readFileSync(`${root}game-v8.js`, 'utf8');
const extra = fs.readFileSync(`${root}game-v8-extra.js`, 'utf8');
const data = JSON.parse(fs.readFileSync(`${root}data/craques-mini.json`, 'utf8'));

const assert = (ok, message) => { if (!ok) throw new Error(message); };
assert(html.includes('game-v8.js'), 'index.html deve carregar game-v8.js');
assert(html.includes('game-v8-extra.js'), 'index.html deve carregar game-v8-extra.js');
assert(html.includes('styles-v8.css'), 'index.html deve carregar styles-v8.css');
assert(html.includes('startNationality'), 'seletor de nacionalidade ausente');
assert(html.includes('historyYear'), 'seletor histórico ausente');
assert(html.includes('generateOffers'), 'ação de mercado ausente');

const ids = [...html.matchAll(/id=["']([^"']+)/g)].map(m => m[1]);
const duplicateIds = [...new Set(ids.filter((id, i) => ids.indexOf(id) !== i))];
assert(!duplicateIds.length, `IDs duplicados: ${duplicateIds.join(', ')}`);

const requiredIds = ['copyTop','year','season','week','topFlag','topNat','retiredPill','playerName','name','playerNat','ovr','age','position','category','playerClub','energy','fatigue','morale','form','salary','marketValue','loyalty','starterChance','managerTrust','trophies','careerContractClub','careerContractYears','agentLabel','contractClause','matchStatus','duelBtn','nextOpponent','opponentOvr','targetTalent','duelChance','duelBar','weekBtn','talents','attrs','tactic','clubState','historyLog','restBtn','trainRemain','nationalFlag','nationalName','nationalName2','nationalRole','nationalCaps','nationalOvr','selectionStatus','nextCup','historyYear','historySearch','historyYears','historyYearLabel','historyCount','historyPlayers','generateOffers','marketOffers','contractClub','contractSalary','contractYears','clubSearch','clubCountry','clubSort','clubCount','clubList','systemLevel','copiesUsed','difficultyLabel','systemLog','achievements','ngpBtn','newGameBtn','onboarding','startName','startNationality','startPosition','startDifficulty','startBtn','toast'];
for (const id of requiredIds) assert(ids.includes(id), `ID ausente: ${id}`);

assert(Array.isArray(data.players) && data.players.length >= 30, 'base histórica pequena');
assert(data.start === 1996 && data.end === 2026, 'janela histórica deve ser 1996–2026');
for (const p of data.players) {
  assert(p[0] && p[1] && p[2] && Array.isArray(p[4]), `craque inválido: ${p[0]}`);
  for (const s of p[4]) assert(Number.isInteger(s[0]) && Number.isInteger(s[1]) && s[0] <= s[1], `intervalo inválido: ${p[0]}`);
}

for (const needle of [
  "const SAVE_KEY='craque-sss-v8'", 'START=1996', 'MAX_TRAIN=3', 'localStorage',
  'cupCheck', 'injuredMatches', 'temporaryPhysicalPenalty', 'callSelection',
  'generateOffers', 'startCareer', 'newGame', 'newGamePlus', 'setAgent', 'rivals', 'rest()', 'match(mode)'
]) assert(js.includes(needle), `regra ausente: ${needle}`);
for (const needle of ['game-v8-extra', 'playCup', 'challengeRival', 'sponsor', 'RANKING DAS SELEÇÕES']) assert(extra.includes(needle), `módulo extra ausente: ${needle}`);

console.log(`OK: ${data.players.length} craques, ${data.players.reduce((n,p)=>n+p[4].length,0)} períodos de clubes, ${data.end-data.start+1} anos.`);
