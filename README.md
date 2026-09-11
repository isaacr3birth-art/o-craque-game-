# ⚽ O Craque da Bola — Sistema SSS

Simulador de carreira em estilo RPG/manhwa, agora com uma linha do tempo histórica que começa em **1996** e avança temporada por temporada.

## Linha do tempo histórica

- Ponto inicial: **1996** (30 anos antes de 2026).
- Janela jogável: **1996 → 2026**.
- Banco compacto com **32 craques históricos** e **166 períodos de clube**.
- O arquivo `data/craques-mini.json` guarda nacionalidade, posição, ano de nascimento, período e clube.
- A tela **Mundo** só apresenta o craque quando existe vínculo profissional naquele ano.
- Empréstimos são marcados separadamente para não confundir com o clube principal.

## Criação do jogador

Antes do despertar do Sistema, o jogador escolhe:

- nome;
- nacionalidade entre **44 seleções**;
- posição;
- dificuldade Normal ou SSS.

A nacionalidade acompanha a carreira internacional e define a seleção que pode convocar o jogador.

## Sistema SSS

- Pontos de Cópia finitos.
- Duelos contra craques ativos da época.
- Talentos em fragmentos `1/3 → 2/3 → 3/3`.
- Talento completo aumenta o teto do atributo relacionado para **99**.
- O alvo do duelo muda conforme o ano da carreira.

## Desenvolvimento

- Exatamente **3 sessões de treino por semana**.
- **Leve:** +1, 100% de sucesso, sem lesão.
- **Pesado:** +3, 50% de sucesso, 15% de fadiga física temporária.
- **Espartano:** +6, 20% de sucesso, 25% de lesão grave por 3–10 partidas.
- Nenhum treino ultrapassa o teto potencial.
- Depois dos 31 anos, atributos físicos sofrem queda por temporada.

## Carreira e mundo

- Partidas semanais, forma, moral, energia e fadiga.
- Tática e desempenho influenciam os resultados.
- Mercado de transferências, contratos e empresário.
- Convocações para a seleção e Copas do Mundo.
- Promoções de categoria e aposentadoria.
- Catálogo de clubes com busca e filtros; **ABC Futebol Clube (Natal/RN)** está presente.
- Salvamento local com validação de dados.

## Arquitetura

```text
index.html
styles-v6.css
game-v6.js
data/
  clubs.generated.json
  craques-mini.json
scripts/
  validate-game.mjs
  test-history.mjs
```

## Executar

```bash
npm start
```

Abra `http://localhost:8080`.

Validação automatizada:

```bash
npm test
```

## Aviso

Sem afiliação com nenhuma liga, federação, clube ou jogador. Nomes são usados apenas para identificação e homenagem. A cronologia do jogo é uma camada histórica simplificada por ano.
