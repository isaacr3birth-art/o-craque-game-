# ⚽ O Craque da Bola — Sistema SSS v8.1

Simulador de carreira em estilo RPG/manhwa em que o protagonista começa em **1996**, escolhe sua nacionalidade e cresce enquanto enfrenta craques históricos e rouba fragmentos de talentos.

## O que existe

- Linha do tempo **1996 → 2026**.
- Escolha de nacionalidade entre **44 seleções**.
- Base histórica com **32 craques e 166 períodos de clube**.
- Consulta histórica por ano com distinção de empréstimos.
- Treino limitado a **3 sessões por semana** e descanso limitado.
- Leve: +1, 100% sucesso, sem lesão.
- Pesado: +3, 50% sucesso, 15% fadiga física temporária.
- Espartano: +6, 20% sucesso, 25% lesão grave por 3–10 partidas.
- Teto de potencial e queda física após os 31.
- Uma partida por semana com escolhas de abordagem.
- Moral, forma, energia, fadiga, confiança do treinador e química.
- Duelos SSS e fragmentos `1/3 → 2/3 → 3/3`.
- Talentos completos ampliam o teto do atributo relacionado para 99.
- Rivalidades persistentes, desafios e conquistas.
- Convocação internacional, Copa do Mundo e ranking de seleções.
- Mercado de transferências e empresário Conservador/Agressivo.
- Patrocínios e Hall da Fama.
- New Game+ com talentos completos.
- Catálogo de clubes com busca/filtro; **ABC Futebol Clube (Natal/RN)** está incluído.

## Correções de integridade da v8.1

- Dificuldade fica bloqueada após o início da carreira para impedir exploração de Pontos de Cópia.
- Convocação não deve contar como partida internacional; `national.games` e `national.caps` são separados.
- Patrocínio usa `finance.wealth`, sem inflar `career.value`.
- O mesmo patrocinador não pode ser conquistado duas vezes.
- Desafios de rival registram corretamente vitória/derrota do rival.
- Dados de save são normalizados e limitados antes de serem aceitos.
- O módulo extra agora funciona como bootstrap para separar Copa/rivalidades/patrocínios do guard de integridade.

## Arquitetura

```text
index.html
styles-v6.css
styles-v8.css
game-v8.js               # engine principal
game-v8-extra.js         # bootstrap
game-v8-extra-core.js    # Copa, ranking, rivais e patrocínios
game-v8-integrity.js     # proteção de estado/exploits
data/
  clubs.generated.json
  craques-mini.json
scripts/
  validate-game.mjs
  test-history.mjs
  test-integrity.mjs
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

## Próxima grande camada

O próximo salto recomendado é substituir o cálculo simplificado de partida por um motor contextual de futebol: escalação, formação, elenco, adversário, posição, atributos relevantes, mando de campo, eventos de jogo e competições completas. Depois disso, ampliar o arquivo histórico de craques e transformar cada clube em uma entidade jogável.

## Aviso

Sem afiliação com nenhuma liga, federação, clube ou jogador. Nomes são usados apenas para identificação e homenagem. A cronologia histórica é uma camada narrativa simplificada por ano.
