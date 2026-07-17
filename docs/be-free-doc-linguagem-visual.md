# Be Free Tours — Doc de Linguagem Visual
### Extraído dos mockups de tour page (mobile 390 · desktop 1440), Claude Design, jul/2026

> **O que é isto.** Regras, não pixels. Os mockups foram o meio; este documento é o produto. É contra ele que o CC implementa — o CC **nunca** vê o HTML do Claude Design, porque aquele markup não conhece o schema, os headings nem as âncoras de keyword da Be Free.
>
> **Escopo.** Nasceu da tour page, mas é a linguagem de todos os templates. Onde uma regra for específica da tour page, está marcado.
>
> **Autoridade.** `tokens.css` manda. Onde este doc e o token divergirem, o token vence — e a divergência vira issue, não exceção silenciosa.

---

## 1. Princípios (o "porquê", que sobrevive quando a regra não cobrir o caso)

1. **Ritmo por superfície, não por espaçamento.** A página se orienta por troca de fundo, não por padding maior. Bone contínuo por vinte telas foi o defeito original.
2. **Densidade variável.** Seções não têm todas a mesma cadência. A que importa respira; a de consulta comprime.
3. **Alinhamento à esquerda é o default.** Centralizado é exceção com motivo (CTA final, e olhe lá).
4. **Borda e filete, nunca sombra.** Card é definido por `1px solid var(--color-border)`, não por elevação.
5. **Âmbar é ação de reserva. Três por página, no máximo.** Nunca decorativo.
6. **Layout cede a conteúdo real.** Contagens variam por tour e por locale; o template renderiza o que existe.
7. **Mobile é decisão, não consequência.** Cada seção declara o que faz em 390. Empilhar o desktop não é uma decisão.

---

## 2. Sequência de superfícies

**A regra:** nenhuma superfície corre por mais de duas seções seguidas. Toda página alterna.

Ordem canônica da tour page (validada nos dois viewports):

| # | Seção | Superfície |
|---|---|---|
| 1 | Nav | `--color-surface` (branco) |
| 2 | Breadcrumbs | `--color-base` (bone) |
| 3 | Hero | gradiente `--color-blue` → `--color-ink` |
| 4 | Trust bar | `--color-surface` |
| 5 | Corpo (overview, itinerário, incluídos, good-to-know) | `--color-base` |
| 6 | Prova (fotos de cliente) | `--color-base` |
| 7 | Depoimentos | `--color-surface` |
| 8 | FAQ + policies | `--color-base` |
| 9 | Related | `--color-surface` |
| 10 | Booking form | `--color-base-dark` |
| 11 | CTA final | `--color-blue` |
| 12 | Footer | `--color-base-dark` |

**Notas duras:**
- **Trust bar nunca encosta em superfície escura.** Faixa branca separando hero e corpo. (Defeito corrigido da v1: azul colado no navy empasta.)
- **Hero é gradiente, não chapado:** `linear-gradient(120deg, #2A4F91 0%, #1c3563 45%, #0E1A2B 100%)`. Sob foto, o gradiente vira overlay.
- **`--color-base-dark` (`#0E1A2B`) é navy constante** — não inverte com o tema. Footer, booking form, hero de pillar. Já existe em `tokens.css` (commit `2e0fce5f`).
- **Banda escura fecha a página.** Form navy → CTA azul → footer navy é o encerramento; três superfícies escuras seguidas são permitidas **só** aqui.

---

## 3. Tipografia

**Famílias.** Newsreader (serif) em `h1`, `h2`, `h3`, preço, e ênfase itálica. Plus Jakarta Sans em corpo, UI, rótulo, botão. Sem exceção.

**Escala fluida.** Todos os pares medidos nos dois mockups. `rem` sempre; `px` só em borda de 1px e no raio.

| Papel | 390px | 1440px | `font-size` |
|---|---|---|---|
| H1 hero | 33px | 56px | `clamp(2.0625rem, 1.529rem + 2.19vw, 3.5rem)` |
| Preço hero | 38px | 44px | `clamp(2.375rem, 2.236rem + 0.571vw, 2.75rem)` |
| H2 de seção | 26px | 32px | `clamp(1.625rem, 1.486rem + 0.571vw, 2rem)` |
| Lead do overview | 15px | 19px | `clamp(0.9375rem, 0.8446rem + 0.381vw, 1.1875rem)` |
| Corpo | 15px | 17px | `clamp(0.9375rem, 0.8911rem + 0.19vw, 1.0625rem)` |
| Título de parada | 15px | 18px | `clamp(0.9375rem, 0.8679rem + 0.286vw, 1.125rem)` |
| Nota / secundário | 12.5px | 14px | `clamp(0.78125rem, 0.7464rem + 0.143vw, 0.875rem)` |
| Eyebrow | 10px | 11px | `clamp(0.625rem, 0.6018rem + 0.0952vw, 0.6875rem)` |

> Os valores foram derivados de 390→1440. Se `tokens.css` já tiver token equivalente, **use o token** e registre a divergência.

**Pesos e entrelinhas:**
- H1: `font-weight: 400`, `line-height: 1.02–1.06` (mais apertado no desktop), `letter-spacing: -.02em`, `text-wrap: pretty`
- H2: `font-weight: 500`, `letter-spacing: -.01em`
- Corpo: `font-weight: 500` (Jakarta pede 500 para ler como regular), `line-height: 1.55`
- Eyebrow: `font-weight: 700`, `letter-spacing: .14em`, caixa alta, cor `--color-text-muted` ou `--color-blue`. **Nunca âmbar.**
- Itálico Newsreader é ferramenta de ênfase editorial, não decoração: "The *Essential* Rio", "What's *included*", "Good to *know*". Um por título, no máximo.

---

## 4. Gramática de header de seção

Duas partes, sempre nesta ordem vertical:

```
EYEBROW EM CAIXA ALTA          ← 11px, tracking .14em, muted ou blue
H2 em Newsreader                ← 26→32px, peso 500
```

Quando a seção tiver ação ou indicador (SWIPE, contador, link), ele vai **à direita, na linha do H2**, alinhado à baseline. Título à esquerda, suporte à direita. Nunca centralizado, nunca com filete decorativo embaixo.

---

## 5. Card

- `background: var(--color-surface)`
- `border: 1px solid var(--color-border)`
- `border-radius: 6px`
- **`box-shadow: none`** — sem exceção
- Padding interno: `1.25rem` mobile, `1.5rem` desktop

**Card com foto:** imagem sangra até a borda do card (sem padding em volta), texto abaixo com padding. Nada de imagem flutuando dentro de moldura.

**Painel escuro** (booking card, form): `background: var(--color-base-dark)`, `border: 1px solid color-mix(in srgb, var(--color-on-blue) 12%, transparent)`.

---

## 6. Grade e largura

**Desktop (≥1024px):**
- Corpo da tour page: `grid-template-columns: 1fr 22rem`, gap `4rem`. Coluna esquerda = conteúdo; direita = booking card **sticky**.
- Itinerário, incluídos, good-to-know: `1fr 1fr` dentro da coluna esquerda.
- Related: `repeat(3, 1fr)`.
- Prova: `repeat(4, 1fr)` — retratos lado a lado, sem trilho.
- Depoimentos: `repeat(3, 1fr)`.
- Prosa longa: `max-width: 42rem`. Texto não corre a largura toda.

**Mobile (<1024px):** tudo uma coluna. O booking card **deixa de ser sticky** e vira seção normal, na posição do seletor de grupo.

**Container:** `.container` é token global compartilhado com a home. **Não alterar em isolamento.**

---

## 7. Trilho horizontal (mobile)

O padrão de mobile da linguagem. Substitui grade sempre que houver ≥2 itens homogêneos.

```css
display: flex;
overflow-x: auto;
scroll-snap-type: x mandatory;
gap: 0.75rem;
scrollbar-width: none;              /* + ::-webkit-scrollbar { height: 0 } */
```
Cada item: `scroll-snap-align: start`, largura ~78% do viewport (o próximo item "espia" e revela que há mais).

**Indicador:** `SWIPE →` à direita do H2, mesma linha. Cor muted, **nunca âmbar**.

No desktop, o trilho vira grade. Não existe trilho em ≥1024px.

---

## 8. Regras de degradação por contagem

**O template é dinâmico: 12 tours × 3 locales, e as contagens variam.** Nada de layout que assuma número fixo.

**Fotos** (`highlights` alimenta, mas o acervo é indexado por atração — ver §12):

| Contagem | Mobile | Desktop |
|---|---|---|
| 0 | seção não renderiza | idem |
| 1 | imagem única, sem trilho, sem indicador | imagem única, largura contida |
| 2–3 | trilho, sem indicador | grade de 2–3 |
| 4+ | trilho + `SWIPE →` | `repeat(4, 1fr)` |

**Listas** (`highlights` 3–6 · `included` 3–8 · `notIncluded` 2–3 · `faqs` 2–5 · `tips` 2–5):
- Desktop: `1fr 1fr` a partir de 4 itens; uma coluna com 3 ou menos.
- Mobile: sempre uma coluna.
- Array vazio ou ausente → seção não renderiza. Nunca "nenhum item" em tela.

**Numeração** (`01`, `02`…): dígito em Newsreader, `--color-blue`, à esquerda do título. Zero-padded até 9.

---

## 9. Preço — quatro formatos

O componente renderiza **as chaves que existem**. Nunca faixa fixa 1–12.

| Formato | Dado | Comportamento |
|---|---|---|
| **A — tabela por grupo** (8 tours) | `{from, priceTable}`, mapa `"1".."12"` → preço | Chips de 1 a N, onde **N = maior chave presente**. Um tour vai só até 6. Preço ao vivo. Âncora: `From US$ {from} / group`. |
| **B — barco, em faixas** (Ilha Grande) | `{standard, lopesMendes}`, mapa `"1-4"`/`"5-10"` | Duas opções de barco + faixa de grupo. Sem `from` — âncora é `getFromPrice()` = mínimo. |
| **C — sob consulta** (Búzios, Custom) | `{custom: true, displayText}` | **Sem preço, sem chips.** Exibe `displayText`. CTA = orçamento/contato, **sem âmbar**. Sem `Offer` no schema. |
| **D — por pessoa** (4 experiences) | `{perPerson}` | Preço único por pessoa. Âncora diz **por pessoa**, não por grupo. |

**Regra dura de honestidade:** a âncora nunca mostra "por pessoa" nos formatos A e B. É preço de grupo, e a página diz isso — *"total, not per person"*.

---

## 10. Âmbar — a regra dura

**Exatamente três instâncias por tour page**, todas ação de reserva:
1. Nav `Book`
2. Hero `Book this tour`
3. `Reserve` do seletor de grupo

Tudo o mais é outline ou ghost: CTA final, WhatsApp, `Request this date`, `Read the full description`.

**Nunca âmbar em:** eyebrow, borda decorativa, ícone, rótulo, indicador de swipe, número de parada, preço.

No formato C (sob consulta) **não há âmbar de reserva** — o CTA é contato, e é outline.

**Botão âmbar:** `background: var(--color-amber)`, `color: var(--color-on-amber)`, raio 6px, `min-height: 2.75rem`.
**Botão outline sobre escuro:** `background: transparent`, `border: 1px solid rgba(255,255,255,.55)`.
**Botão outline sobre claro:** `background: transparent`, `border: 1px solid var(--color-border)`, texto `--color-blue`.

---

## 11. Read-more (overview)

Regra de SEO, não de estilo. O `fullDescription` tem ~900 palavras em 9 parágrafos.

- **Primeiro parágrafo sempre visível.** Não três linhas — o parágrafo inteiro.
- Resto colapsado via `max-height` + fade. **O texto fica sempre no DOM.** Nunca renderização condicional, nunca `display:none` no servidor.
- Gatilho: `<button aria-expanded="false">`, nunca `<div>` clicável. Rótulo alterna ("Read the full description" / "Show less").
- `max-width: 42rem` na prosa.
- Sem âmbar.

---

## 12. Fotografia

**O acervo real são ~46 fotos de clientes com o guia** — não cartão-postal. Uso autorizado. 29 retrato × 17 paisagem.

**Papéis separados:**
- **Hero = marco.** Paisagem, monumento, full-bleed com overlay de gradiente. Ancora o tour.
- **Prova = gente.** Seção própria, retrato, mais abaixo. Não se chama "galeria" — galeria promete cenário. Chama-se prova, e a legenda diz: *"Real client photos — the tour, not a postcard."*

**Retrato é o formato dominante.** No mobile isso é vantagem: trilho de retratos funciona. No desktop, `repeat(4, 1fr)` lado a lado — nunca esticar retrato em contêiner paisagem.

**Legenda por foto** (não `alt` — legenda visível), curta, factual: "Family at Christ the Redeemer", "Group with their guide, Sugarloaf".

> **Dependência aberta:** não existe manifest arquivo→atração. Sem ele, a prova não pode ser indexada por tour. Trabalho pendente e não bloqueante para a linguagem.

---

## 13. Acessibilidade (herda o B3, não renegocia)

- Alvo de toque: `min-height: 2.75rem` (≡44px em raiz 16px)
- Foco: sistema de anel duplo já implementado em `global.css`. **Não tocar.**
- Acordeão: `<button aria-expanded>` + região com `id`/`aria-controls`. **Todos fechados por default.**
- Tipografia em `rem` — obrigatório: quem aumenta a fonte do navegador precisa ser acompanhado.
- Contraste AA em todo par. `--color-on-blue` sobre `--color-blue`; `--color-on-amber` sobre `--color-amber`.

---

## 14. O que a linguagem proíbe

Lista de defeitos, não de gostos. Cada item aqui causou o problema que motivou o redesign.

- Seção centralizada por default
- Espaçamento vertical uniforme em toda a página
- Grade simétrica de 3 cards repetida página abaixo
- Sombra em card
- Ícone genérico em círculo colorido
- Filete decorativo sob título
- Mobile como desktop empilhado
- Bone correndo por mais de duas seções
- Âmbar decorativo
- `px` em tipografia
- Layout que assume contagem fixa
- Comparação numérica com marketplace **(decisão comercial — risco de penalização por canal de distribuição)**

---

## 15. Ordem de implementação

1. **Tour page** (`ProductDetailPage.astro` — arquivo único, 1057 linhas, CSS scoped 486 linhas, tier bridge). Cobre 12 tours + 4 experiences × 3 locales de uma vez. Converge bridge → puro no mesmo passe.
2. **Home** — re-skin, e a cost-wedge sai aqui.
3. **Pillars** (`dt-`, `hd-`, `pg-`) — o D1/D2/D3 é absorvido, não executado antes.
4. **Blog** — herda o registro editorial, é o mais barato.

Cada passo: escopo CSS-only por default; mudança de markup é **exceção nomeada**, revisada no diff. Gate antes de merge: head byte-a-byte contra baseline (único delta tolerado = hash do bundle CSS), schema visível com conteúdo correspondente, contagem de âmbar, alvos ≥2.75rem. Verificação em browser real, 390 e 1440 — screenshot escalado não conta.

---

## Anexo — pendências que não bloqueiam a linguagem

- Manifest arquivo→atração para as 46 fotos (identificação é trabalho do operador)
- Correção de conteúdo em `rebuild/v2`: tirar "Entry to both is included" e "All entrance tickets are included" do `fullDescription` do Essential Rio (Reading Room e Catedral são **gratuitas**, não incluídas); `recommendations` → "Start at 6:30 AM for minimal crowds… Start at 11:30 AM or later to catch the sunset"; passe de revisão nos outros 11 `recommendations` (dado morto hoje, será publicado)
- `recommendations` é dado morto: existe, nunca foi renderizado. O redesign o publica como "Best time to go"
- Varredura de comparação com marketplace (recon #4 em andamento) — resultado define o escopo de remoção
