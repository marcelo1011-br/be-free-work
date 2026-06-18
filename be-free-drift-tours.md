# Auditoria de Drift — tours.js / experiences.js
**Data:** 2026-06-11 · **Branch lida:** `rebuild/v2` (`ed4a1e00`) · **Modo:** READ-ONLY (zero alteração de dado)

> Compara **fatos invariantes** (que DEVEM ser idênticos nos 3 locales) entre EN / ES / PT-BR.
> Diferenças de **prose** (título, descrição, fraseado de highlights/FAQ, slug, quais itens cada locale destaca) foram **excluídas por design** — não são drift. Quando um fato vinha embutido na prose, o fato foi extraído e comparado (não as palavras).

---

## Resumo executivo

**O dataset está notavelmente limpo.** A triplicação preservou os fatos com fidelidade quase total.

| Severidade | Qtde | Onde |
|---|---|---|
| **P0** (preço / priceTable / basis / estrutura de grupo) | **0** | — nenhum drift |
| **P1** (inclusão factual / duração / itinerário) | **1** | `essential-rio`: água engarrafada listada só no EN |
| **P2** (contagens / granularidade) | **1** | `essential-rio`: nº de inclusões 6/4/4 (mesma causa-raiz do P1) |

**Pior caso (único real):** `essential-rio` — EN lista "Complimentary bottled water" como inclusão; ES e PT **não listam água**. Baixa severidade (não afeta preço/Offer). Tudo o mais — preços, tabelas, slots, datas bloqueadas, cutoff, durações (fato), categorias, status ativo, inclusões e lugares do itinerário — é **idêntico** nos 3 idiomas, nos 11 tours e nas 4 experiences.

---

## DRIFT por tour (só onde os 3 locales divergem em FATO)

### `essential-rio` (es=`essential-rio`, pt=`rio-essencial`) — índice [0]

**[P1] Conjunto de inclusões diverge — "água engarrafada"**

| | included (itens-fato) |
|---|---|
| **EN** | transporte · guia · **Christ the Redeemer tickets** · **Skip-the-line tickets for Sugarloaf** · pickup/drop-off · **Complimentary bottled water** |
| **ES** | transporte · guía · **Todas las entradas incluidas** · recogida/regreso |
| **PT** | transporte · guia · **Todos os ingressos incluídos** · busca/retorno |

- **Fato que diverge:** EN inclui **água engarrafada** como item; ES/PT **não listam água**.
- **Por quê é fato (não prose):** "está incluído água, sim/não" é um fato sobre o que o cliente recebe — invariante por idioma.
- **Sinal de fonte mais atual:** ambíguo. *2 locales concordam* (ES+PT, sem água) *vs 1* (EN, com água) — pela heurística "2 batem", o EN seria o desviante. **PORÉM** a `fullDescription` (EN) afirma "Complimentary bottled water is provided throughout" — corroborando que a água **é** fornecida. Então o mais provável é que **ES/PT perderam o item** num passe de consolidação, não que o EN inventou.
- **Canônico recomendado:** **incluir água nos 3** (EN + descrição corroboram o fato). *Decisão do dono:* se a água deixou de ser cortesia, então remover do EN também — mas a descrição precisaria ser atualizada junto.
- **Severidade:** baixa (item menor; não toca preço nem Offer schema).

**[P2 / nota — não é drift de fato] Itemização dos ingressos**
EN itemiza em 2 linhas (**Christ** + **Skip-the-line Sugarloaf**); ES/PT consolidam em 1 linha ("todas as entradas/ingressos incluídos"). **O fato é o mesmo nos 3** (ingressos das atrações incluídos). Diferença só de granularidade/ênfase → **não é drift**. Observação: o benefício **"skip-the-line"** é afirmado explicitamente só no EN; ES/PT não o destacam. Se for um diferencial de marketing, vale o dono decidir surfar nos 3 — mas nenhum locale **contradiz** o outro, então fica como nota P2, não como correção obrigatória.

> Isto explica também o **[P2] nº de inclusões 6 / 4 / 4**: a diferença vem inteiramente da água (+1) e do split de ingressos em 2 linhas (+1) no EN. Mesma causa-raiz; não é um item de produto a mais.

---

## Falsos positivos verificados (checados manualmente → **limpos**, não entram como drift)

Um detector de palavra-chave inicial sinalizou "tickets" divergindo em `petropolis-imperial`, `tijuca-rainforest`, `niteroi-mac-museum`, `modern-rio-museum-tomorrow` (EN sem "tickets", ES/PT com). **Leitura manual confirma que é wording, não fato:**

| Tour | EN | ES | PT |
|---|---|---|---|
| petropolis | "Museum entrance fees" | "Entradas a museos" | "Ingressos para museus" |
| tijuca | "All entrance fees" | "Todas las entradas" | "Todas as entradas" |
| niteroi | "Museum and fort entrance" | "Entrada al museo y fuertes" | "Entrada no museu e fortes" |
| modern-rio | "All museum entrance fees" | "Todas las entradas" | "Todas as entradas" |

EN usa **"entrance fees"** (que o detector não casou); o fato — **ingressos/entradas incluídos** — é **idêntico nos 3**. Registrado aqui só para constar que foram inspecionados e estão consistentes.

---

## Consistente / SEM drift (cobertura do que foi checado)

**Tours (11 ativos) — todos idênticos nos 3 locales, exceto o item acima:**

- **[P0] Preço:** `pricing` completo — `from`, `priceTable` (cada chave→valor), `standard` (faixas), `perPerson`, `custom` — **byte-a-byte idêntico** nos 11 tours. `basis` (derivado) idêntico por consequência. **Zero drift de preço.** (custom-tour: só o `displayText` difere = prose intencional.)
- **[P0] Estrutura de grupo:** chaves do `priceTable` / grupo máximo — idênticas.
- **[P1] Duração:** o **número é idêntico** nos 3 (ex.: `8`/`8`/`8`); só a palavra da unidade traduz ("hours"→"horas"). **Não é drift** (fato igual).
- **[P1] Horários:** `bookingTimeSlots`, `startTime`, `bookingBlockedDates`, `bookingCutoffDays` — idênticos.
- **[P1] Itinerário (lugares):** o **conjunto de landmarks** nos highlights é idêntico nos 3 em **todos os 11 tours** (Christ, Sugarloaf, Selarón, Santa Teresa, Catedral, Real Gabinete, Petrópolis, Tijuca, Jardim Botânico, Niterói/MAC, Museu do Amanhã, Roxy…). Sem drift de paradas/sequência.
- **[P1] notIncluded:** conjunto consistente (refeições/bebidas/gorjetas; niteroi inclui "tours opcionais de helicóptero/barco" nos 3).
- **Categoria** (`city-tours`/`day-trips`/…): idêntica.
- **Status ativo/desativado:** **11 ativos / 11 / 11**, mesma ordem, 1:1 via `tourSlugMap`. Os desativados (Búzios + 4 walking tours migrados pra experiences) estão comentados **nos 3 locales** consistentemente. Sem inconsistência ativo-vs-comentado.
- **`isFeatured` / `isCustom`:** idênticos.

**Experiences (4 ativas) — ZERO drift de fato:**

- `pricing` (`perPerson`) idêntico; `bookingTimeSlots`/`startTime`/`bookingBlockedDates`/`bookingCutoffDays`/`category` idênticos.
- Conjunto de inclusões idêntico; contagens de `included`/`highlights`/`faqs` idênticas (4/4/4, etc.).
- Duração: só tradução da unidade ("4 hours"→"4 horas"); fato igual.
- Slugs: `rio-food-walking-tour`/`tour-gastronomico-rio`/`food-walking-tour-rio` etc. — localização intencional, não drift.

---

## Recomendação de canônico (decisão do dono)

| Item | Canônico sugerido | Confiança | Nota |
|---|---|---|---|
| `essential-rio` · água engarrafada | **Incluir nos 3** | Média | EN + fullDescription afirmam que é fornecida; ES/PT provavelmente perderam no consolidação. Confirmar com a operação se a cortesia ainda existe. |
| `essential-rio` · skip-the-line (Christ/Sugarloaf) | **Opcional surfar nos 3** | Baixa (não é contradição) | EN destaca; ES/PT consolidam em "todas as entradas". Decisão de marketing, não correção de fato. |

**Para o refactor single-source (próximo passo):** como os fatos já estão ~100% alinhados, a migração "fato-uma-vez + prose-por-locale" é de **baixo risco** — o único ponto de atenção factual é a água do `essential-rio`. Tudo o resto pode ser promovido a fonte única sem decisão de valor (os 3 locales já concordam).

---

## Metodologia

- Pareamento cross-locale por **posição no array** (11 tours em ordem paralela, confirmada via `tourSlugMap` de `i18n/hreflang.js`).
- Campos estruturados comparados por igualdade profunda (JSON). Campos em prose (inclusões, itinerário) tiveram o **fato extraído** por classificação multilíngue (ingressos/transporte/guia/pickup/água/refeição; landmarks canônicos) e os falsos positivos foram **inspecionados manualmente** linha a linha.
- **Nada foi alterado** em `tours.js`/`experiences.js`. Decisões de valor canônico são do dono.
