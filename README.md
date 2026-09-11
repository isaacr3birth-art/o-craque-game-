# ⚽ O Craque da Bola — Sistema SSS v8

Simulador de carreira em estilo RPG/manhwa em que o protagonista começa em **1996**, escolhe sua nacionalidade e cresce enquanto enfrenta craques históricos e rouba fragmentos de talentos.

## O que a v8 adiciona

- Linha do tempo jogável **1996 → 2026**.
- Escolha de nacionalidade entre **44 seleções** no despertar.
- Base histórica com **32 craques e 166 períodos de clube**.
- O Mundo só mostra um craque quando ele possui vínculo profissional no ano consultado.
- Treino com limite rígido de **3 sessões por semana**.
- Leve: +1, 100% sucesso, sem lesão.
- Pesado: +3, 50% sucesso, 15% chance de fadiga física temporária.
- Espartano: +6, 20% sucesso, 25% chance de lesão grave por 3–10 partidas.
- Teto de potencial impede evolução infinita.
- Queda física de 2–4 pontos por temporada a partir dos 31 anos.
- Uma partida por semana, com tática Seguro / Equilibrado / Protagonista.
- Moral, forma, energia, fadiga, confiança do treinador e química.
- Duelos SSS com pontos de cópia finitos e fragmentos 1/3 → 2/3 → 3/3.
- Talento completo amplia o teto do atributo para 99 e sobe o nível do Sistema.
- Rivalidades persistentes com relações e desafios.
- Convocação internacional ligada à nacionalidade escolhida.
- Copa do Mundo com partidas interativas em 1998, 2002, 2006, 2010, 2014, 2018, 2022 e 2026.
- Ranking das principais seleções.
- Mercado de transferências com propostas, salários, duração e empresário.
- Empresário Conservador/Agressivo.
- Patrocínios liberados conforme popularidade.
- Histórico da carreira e Hall da Fama.
- New Game+ carregando talentos completos.
- Catálogo de clubes com busca/filtro; **ABC Futebol Clube (Natal/RN)** está incluído.
- Save local com normalização e limites contra dados inválidos.

## Arquitetura

```text
index.html
styles-v6.css
styles-v8.css
game-v6.js       # versão anterior / histórico
game-v7.js       # versão anterior / histórico
game-v8.js       # engine principal atual
game-v8-extra.js # Copa, rivalidades, ranking e patrocínios
data/
  clubs.generated.json
  craques-mini.json
scripts/
  validate-game.mjs
  test-history.mjs
.github/workflows/test.yml
```

## Executar

```bash
npm start
```

Abra `http://localhost:8080`.

Validação:

```bash
npm test
```

## Regras importantes

O jogo evita grind infinito: treinos são limitados por semana, descanso também possui limite semanal e uma partida só pode ser jogada uma vez por semana. A progressão respeita o teto potencial e a condição física.

## Aviso

Sem afiliação com nenhuma liga, federação, clube ou jogador. Nomes são usados apenas para identificação e homenagem. A cronologia histórica é uma camada narrativa simplificada por ano.