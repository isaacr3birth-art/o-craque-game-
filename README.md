# ⚽ O Craque da Bola — Sistema SSS

Simulador de carreira de futebol em estilo **power fantasy / manhwa**, no qual o protagonista começa com atributos modestos e desperta um sistema capaz de roubar talentos.

## O que já está jogável

- Carreira em 5 estágios: **Sub-15 → Sub-17 → Estreante Profissional → Europa → Seleção Principal**.
- Loop de temporada de **10 semanas**.
- **3 sessões de treino por semana**, com energia e fadiga.
- Treinos **Leve / Pesado / Espartano**, com probabilidades e risco de lesão.
- Nenhum treino passa do **teto potencial** do atributo.
- Partidas semanais com três abordagens: **seguro, equilibrado e protagonista**.
- Pontos de Cópia como recurso limitado.
- Duelos para roubar **3 fragmentos** e completar talentos SSS.
- Talento completo amplia o teto do atributo para **99** e libera uma passiva permanente.
- Eventos de reação quando o overall sobe de forma anormalmente rápida.
- Promoções, recordes, títulos e histórico de carreira.
- Mercado de transferências com janelas, propostas, salários, contratos, lealdade e perfil de empresário.
- Envelhecimento: depois dos 31 anos, atributos físicos sofrem queda por temporada.
- Salvamento automático com `localStorage`.
- Dois visuais: **Dashboard de Gestão** e **HUD de Webtoon/Manhwa**.
- Catálogo pesquisável de clubes, com **ABC Futebol Clube (Natal/RN)** explicitamente priorizado.
- Layout responsivo para desktop e celular.

## Estrutura

```text
index.html
README.md
package.json
```

O MVP é deliberadamente autocontido em `index.html`, permitindo publicar como site estático sem backend obrigatório.

## Rodar localmente

```bash
python3 -m http.server 8080
```

Abra `http://localhost:8080`.

Também é possível executar `npm start` quando Node/npm estiver disponível.

## Regras de design do jogo

O objetivo é evitar a sensação de números infinitos e manter decisões com custo. Por isso, treino é limitado por semana; energia, fadiga, forma e lesões alteram o ritmo; e os Pontos de Cópia são um recurso escasso.

O sistema foi construído para aceitar futuras expansões como banco de dados, autenticação, elenco completo, competições, calendário real, IA narrativa e motor de partidas mais profundo.

## Nomes e identidade

Nomes de clubes e jogadores reais são usados apenas para referência narrativa/identificação. O projeto não utiliza logos oficiais, fotografias ou uniformes oficiais.

> **Aviso:** Sem afiliação com nenhuma liga, federação, clube ou jogador. Nomes usados apenas para identificação e homenagem.
