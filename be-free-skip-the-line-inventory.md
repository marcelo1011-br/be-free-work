# Inventário Skip-the-Line — para aprovação (READ-ONLY, nada editado)
**Data:** 2026-06-12 · **Branch lida:** `rebuild/v2` (`d60787a3`) · **Escopo:** 6 tours com Pão de Açúcar × 3 locales

> **Regra da correção:** "skip-the-line" (sem fila / sin fila) fica **SÓ** na menção ao **Pão de Açúcar (bondinho)**. Tirar de **Cristo / Corcovado / "the summit" / "the statue" / "ambas as atrações" / genérico**. O ingresso do Cristo é entrada normal (incluída, mas **com fila**). Tours sem Pão de Açúcar (island-escape, petrópolis, niterói, modern-rio, custom) **não entram** — e não devem ter nenhuma menção a skip-the-line.
>
> **59 menções** no total. Destas: **~12 já estão corretas** (só Pão — manter) e **~47 são over-claim/misto** (corrigir). Listas/highlights de inclusão já estão corretas; o problema vive nas **narrativas** (fullDescription/FAQ/tips).
>
> As correções abaixo são **propostas** (prose nativa por locale, ES "tú"). Aprovar/ajustar antes de eu reescrever.

**Legenda:** ❌ OVER-CLAIM (corrigir) · ⚠️ MISTO Pão+Cristo (separar) · ✅ OK-Pão (manter, sem ação) · 🟡 borderline (sua decisão)

---

## [0] essential-rio · es=`essential-rio` · pt=`rio-essencial`

### EN
- ❌ **`desc`** (parágrafo do **Cristo/Corcovado**)
  - **Atual:** "Your **skip-the-line** tickets mean you reach the summit without queuing — critical on busy days when the lines can stretch to 90 minutes."
  - **Proposta:** "Your tickets are included and arranged in advance, so there's no ticket-office stop at the summit — though on busy days the entry line itself can stretch to 90 minutes." *(remove skip-the-line do Cristo; assume que há fila)*
- ❌→✅ **`desc`** (parágrafo do **Pão de Açúcar** — na verdade correto, só o "too" sobra)
  - **Atual:** "**Skip-the-line** tickets are included here too."
  - **Proposta:** "**Skip-the-line** tickets for the Sugarloaf cable car are included." *(mantém skip no Pão; tira "too" que referenciava o Cristo)*
- ⚠️ **`faq[1].a`**
  - **Atual:** "Yes, **skip-the-line** cable car tickets for Sugarloaf Mountain are included in the tour price, along with Christ the Redeemer entrance fees. You won't need to queue or purchase anything separately at **either attraction**."
  - **Proposta:** "Yes, **skip-the-line** cable car tickets for Sugarloaf Mountain are included, along with Christ the Redeemer entrance tickets. You won't need to buy anything separately — and at Sugarloaf you skip the ticket line." *(tira o "no queue at either attraction"; skip só no Pão)*
- ✅ **`faq[1].q`** "Are the skip-the-line tickets for Sugarloaf really included?" — manter.
- ✅ **`included[3]`** "Skip-the-line tickets for Sugarloaf included." — manter.

### ES
- ❌ **`desc`** (Cristo/cima): **Atual:** "Tus **entradas sin fila (skip-the-line)** significan que llegas a la cima sin esperas — algo crítico en días ocupados cuando las colas pueden llegar a 90 minutos." → **Proposta:** "Tus entradas están incluidas y gestionadas con antelación, así no hay que parar a comprar boletos en la cima — aunque en días concurridos la fila de entrada puede llegar a 90 minutos."
- ❌→✅ **`desc`** (Pão): **Atual:** "Las **entradas sin fila** también están incluidas aquí." → **Proposta:** "Las **entradas sin fila** del teleférico del Pan de Azúcar están incluidas."
- ✅ **`faq[1].q`** "¿Las entradas sin filas al Pan de Azúcar están realmente incluidas?" — manter. *(a resposta ES não menciona skip-the-line)*

### PT-BR
- ❌ **`desc`** (Cristo/cume): **Atual:** "Seus **ingressos skip-the-line** significam que você chega ao cume sem esperar em fila — algo crítico em dias movimentados, quando as filas podem chegar a 90 minutos." → **Proposta:** "Seus ingressos já estão incluídos e organizados com antecedência, então não há parada para comprar bilhete no cume — embora, em dias cheios, a fila de entrada possa chegar a 90 minutos."
- ❌→✅ **`desc`** (Pão): **Atual:** "Os **ingressos skip-the-line** também estão incluídos aqui." → **Proposta:** "Os **ingressos skip-the-line** do bondinho do Pão de Açúcar estão incluídos."
- ✅ **`faq[1].q`** "Os ingressos sem fila para o Pão de Açúcar estão mesmo incluídos?" — manter.

---

## [1] rio-express · es=`rio-express` · pt=`passeio-expresso-rio-5-horas-cristo-pao-acucar`

### EN
- ❌ **`desc`** (Cristo): "**Skip-the-line** tickets are included — on peak days, the queues without them can consume an hour alone." → **Proposta:** "Your Christ the Redeemer tickets are included — on peak days the entry line can still consume the better part of an hour, so we time the visit to avoid the worst of it."
- ❌→✅ **`desc`** (Pão): "**Skip-the-line** access is included here too." → **Proposta:** "**Skip-the-line** access to the Sugarloaf cable car is included."
- ❌ **`desc`**: "Everything is included: ... **skip-the-line entrance tickets to both attractions**, and complimentary bottled water." → **Proposta:** "Everything is included: ... **skip-the-line cable car tickets for Sugarloaf** plus entrance tickets for Christ the Redeemer, and complimentary bottled water."
- ❌ **`faq[0].a`**: "...with a private guide and **skip-the-line access**. Without queues and with a dedicated driver..." → **Proposta:** "...with a private guide and **skip-the-line access at Sugarloaf**. With a dedicated driver and no cable-car queue, you spend the time on the views..."
- ✅ **`faq[1].a`** "...Christ the Redeemer entrance and Sugarloaf Mountain cable car **with skip-the-line access**." — já correto (skip só no bondinho). Manter.
- ✅ **`highlights[2]`** "Skip-the-line tickets for Sugarloaf included." — manter.

### ES
- ❌ **`desc`** (Cristo): "Las **entradas sin fila** están incluidas — en días de mayor afluencia, las colas sin ellas pueden consumir una hora por sí solas." → **Proposta:** "Tus entradas al Cristo Redentor están incluidas — en días de mucha afluencia la fila de entrada puede consumir casi una hora, por eso programamos la visita para evitar lo peor."
- ❌→✅ **`desc`** (Pão): "El **acceso sin fila** también está incluido." → **Proposta:** "El **acceso sin fila** al teleférico del Pan de Azúcar está incluido."
- ❌ **`desc`**: "...**entradas sin fila a ambas atracciones** y agua embotellada de cortesía." → **Proposta:** "...**entradas sin fila al teleférico del Pan de Azúcar** y entradas al Cristo Redentor, y agua embotellada de cortesía."
- ❌ **`faq[0].a`**: "...con guía privado y **acceso sin filas**. Sin colas y con conductor dedicado..." → **Proposta:** "...con guía privado y **acceso sin fila en el Pan de Azúcar**. Con conductor dedicado y sin cola en el teleférico, aprovechas las vistas..."

### PT-BR
- ❌ **`desc`** (Cristo): "Os **ingressos skip-the-line** estão incluídos — em dias de maior movimento, as filas sem eles podem consumir uma hora sozinhas." → **Proposta:** "Seus ingressos para o Cristo Redentor estão incluídos — em dias de muito movimento a fila de entrada pode consumir quase uma hora, por isso programamos a visita para evitar o pior."
- ❌→✅ **`desc`** (Pão): "O **acesso sem fila** também está incluído." → **Proposta:** "O **acesso sem fila** ao bondinho do Pão de Açúcar está incluído."
- ❌ **`desc`**: "...**ingressos skip-the-line para as duas atrações** e água mineral de cortesia." → **Proposta:** "...**ingressos skip-the-line para o bondinho do Pão de Açúcar** e ingressos para o Cristo Redentor, e água mineral de cortesia."
- ❌ **`faq[0].a`**: "...com guia privado e **acesso sem fila**. Sem esperas e com motorista dedicado..." → **Proposta:** "...com guia privado e **acesso sem fila no Pão de Açúcar**. Com motorista dedicado e sem fila no bondinho, você aproveita as vistas..."

---

## [2] first-light-sunrise · es=`amanecer-rio` · pt=`nascer-sol-pao-acucar-cristo-redentor-passeio-privado`

### EN
- ❌ **`desc`**: "**Skip-the-line** tickets are included at **both attractions**." → **Proposta:** "**Skip-the-line** tickets are included for the Sugarloaf cable car, and entrance tickets for Christ the Redeemer."
- ⚠️ **`desc`** (linha "Included:"): "...**skip-the-line entrance tickets to Sugarloaf Mountain and Christ the Redeemer**, and complimentary bottled water." → **Proposta:** "...**skip-the-line entrance to Sugarloaf Mountain**, entrance tickets to Christ the Redeemer, and complimentary bottled water."

### ES
- ❌ **`desc`**: "Las **entradas sin fila** están incluidas en **ambas atracciones**." → **Proposta:** "Las **entradas sin fila** están incluidas para el teleférico del Pan de Azúcar, y las entradas al Cristo Redentor."
- ⚠️ **`desc`**: "...**entradas sin fila al Pan de Azúcar y al Cristo Redentor**, y agua embotellada de cortesía." → **Proposta:** "...**entrada sin fila al Pan de Azúcar**, entrada al Cristo Redentor, y agua embotellada de cortesía."

### PT-BR
- ❌ **`desc`**: "Os **ingressos skip-the-line** estão incluídos **nas duas atrações**." → **Proposta:** "Os **ingressos skip-the-line** estão incluídos para o bondinho do Pão de Açúcar, e os ingressos para o Cristo Redentor."
- ⚠️ **`desc`**: "...**ingressos skip-the-line para o Pão de Açúcar e o Cristo Redentor**, e água mineral de cortesia." → **Proposta:** "...**ingresso skip-the-line para o Pão de Açúcar**, ingresso para o Cristo Redentor, e água mineral de cortesia."
- 🟡 **`desc`**: "Sem multidões, sem grupos, **sem filas**." — *contexto: descreve o cume vazio ao amanhecer, não um ticket. Provavelmente OK manter (é a vibe do nascer do sol). Sua decisão.*

---

## [3] golden-hour-rio · es=`hora-dorada-rio` · pt=`passeio-por-do-sol-rio-cristo-redentor-pao-acucar`

### EN
- ❌ **`desc`**: "**Skip-the-line** tickets are included — the same fast-track access that applies to the Essential Rio full-day tour..." → **Proposta:** "**Skip-the-line** access to the Sugarloaf cable car is included — the same fast-track that applies on the Essential Rio tour, because golden-hour timing is too precise to risk a long cable-car queue."
- ⚠️ **`desc`**: "...**skip-the-line entrance tickets to both Christ the Redeemer and Sugarloaf Mountain**..." → **Proposta:** "...**skip-the-line cable car tickets for Sugarloaf Mountain** plus entrance tickets for Christ the Redeemer..."
- ❌ **`faq[3].q`**: "Are **skip-the-line tickets included for both attractions**?" → **Proposta:** "Are **skip-the-line tickets for Sugarloaf** included?"
- ⚠️ **`faq[3].a`**: "Yes, **skip-the-line tickets for both Christ the Redeemer and Sugarloaf Mountain cable car** are included..." → **Proposta:** "Yes — **skip-the-line tickets for the Sugarloaf cable car** are included, along with Christ the Redeemer entrance tickets. Skipping the Sugarloaf line matters here because the sunset window is tight."
- ❌ **`tips[4]`**: "...**skip-the-line tickets are included** specifically to ensure you reach the summit before the light changes." → **Proposta:** "...**skip-the-line tickets for Sugarloaf are included** specifically so you reach the top before the light changes."

### ES
- ❌ **`desc`**: "Las **entradas sin fila** están incluidas — el mismo acceso rápido que aplica al tour completo..." → **Proposta:** "El **acceso sin fila** al teleférico del Pan de Azúcar está incluido — el mismo acceso rápido del tour Essential Rio, porque el timing de la hora dorada es demasiado preciso para arriesgar una cola larga en el teleférico."
- ⚠️ **`desc`**: "...**entradas sin fila al Cristo Redentor y al Pan de Azúcar**..." → **Proposta:** "...**entradas sin fila al teleférico del Pan de Azúcar** y entradas al Cristo Redentor..."
- ❌ **`faq[3].q`**: "¿Las **entradas sin filas están incluidas para ambas atracciones**?" → **Proposta:** "¿Las **entradas sin fila al Pan de Azúcar** están incluidas?"
- ⚠️ **`faq[3].a`**: "Sí, las **entradas sin filas para el Cristo Redentor y el teleférico del Pan de Azúcar** están incluidas..." → **Proposta:** "Sí — las **entradas sin fila del teleférico del Pan de Azúcar** están incluidas, junto con las entradas al Cristo Redentor. Saltarte la cola del Pan de Azúcar importa porque la ventana del atardecer es ajustada."
- ❌ **`tips[4]`**: "...las **entradas sin fila están incluidas** específicamente para que llegues a la cima antes de que cambie la luz." → **Proposta:** "...las **entradas sin fila al Pan de Azúcar están incluidas** específicamente para que llegues a la cima antes de que cambie la luz."

### PT-BR
- ❌ **`desc`**: "Os **ingressos skip-the-line** estão incluídos — o mesmo acesso rápido que se aplica ao passeio completo..." → **Proposta:** "O **acesso sem fila** ao bondinho do Pão de Açúcar está incluído — o mesmo acesso rápido do Essential Rio, porque o timing da hora dourada é preciso demais para arriscar uma fila longa no bondinho."
- ⚠️ **`desc`**: "...**ingressos skip-the-line para o Cristo Redentor e o Pão de Açúcar**..." → **Proposta:** "...**ingressos skip-the-line para o bondinho do Pão de Açúcar** e ingressos para o Cristo Redentor..."
- ❌ **`faq[3].q`**: "Os **ingressos sem fila estão incluídos para as duas atrações**?" → **Proposta:** "Os **ingressos sem fila para o Pão de Açúcar** estão incluídos?"
- ⚠️ **`faq[3].a`**: "Sim, os **ingressos sem fila para o Cristo Redentor e o bondinho do Pão de Açúcar** estão incluídos..." → **Proposta:** "Sim — os **ingressos sem fila do bondinho do Pão de Açúcar** estão incluídos, junto com os ingressos para o Cristo Redentor. Pular a fila do Pão de Açúcar importa porque a janela do pôr do sol é curta."
- ❌ **`tips[4]`**: "...os **ingressos sem fila estão incluídos** especificamente para garantir que você chegue ao topo antes de a luz mudar." → **Proposta:** "...os **ingressos sem fila para o Pão de Açúcar estão incluídos** especificamente para garantir que você chegue ao topo antes de a luz mudar."

---

## [4] sunset-culture-roxy · es=`atardecer-cultura-roxy` · pt=`por-do-sol-cultura-roxy`

### EN
- ❌ **`desc`** (contexto Cristo/"the statue"): "**Skip-the-line** tickets are included, and your pickup time is confirmed based on that day's sunset data to ensure you arrive at the statue when the conditions are at their peak." → **Proposta:** "**Skip-the-line** tickets for Sugarloaf are included, and your pickup time is confirmed from that day's sunset data so you reach the statue when conditions peak."
- ⚠️ **`desc`**: "...**skip-the-line tickets to Christ the Redeemer and Sugarloaf Mountain**, Roxy Dinner Show ticket..." → **Proposta:** "...**skip-the-line tickets for Sugarloaf Mountain** plus entrance tickets for Christ the Redeemer, the Roxy Dinner Show ticket..."

### ES
- ❌ **`desc`**: "Las **entradas sin fila** están incluidas, y tu hora de recogida se confirma en función de los datos del atardecer..." → **Proposta:** "Las **entradas sin fila al Pan de Azúcar** están incluidas, y tu hora de recogida se confirma según los datos del atardecer de ese día para que llegues a la estatua en el punto máximo."
- ⚠️ **`desc`**: "...**entradas sin fila al Cristo Redentor y al Pan de Azúcar**, entrada al Roxy Dinner Show..." → **Proposta:** "...**entradas sin fila al Pan de Azúcar** y entradas al Cristo Redentor, entrada al Roxy Dinner Show..."

### PT-BR
- ❌ **`desc`**: "Os **ingressos skip-the-line** estão incluídos, e seu horário de busca é confirmado com base nos dados do pôr do sol..." → **Proposta:** "Os **ingressos skip-the-line para o Pão de Açúcar** estão incluídos, e seu horário de busca é confirmado com base nos dados do pôr do sol daquele dia para você chegar à estátua no ponto máximo."
- ⚠️ **`desc`**: "...**ingressos skip-the-line para o Cristo Redentor e o Pão de Açúcar**, ingresso para o Roxy Dinner Show..." → **Proposta:** "...**ingressos skip-the-line para o Pão de Açúcar** e ingressos para o Cristo Redentor, ingresso para o Roxy Dinner Show..."

---

## [7] tijuca-rainforest · es=`bosque-tijuca` · pt=`pao-acucar-floresta-tijuca-jardim-botanico-passeio`

### EN
- ❌ **`desc`**: "**Skip-the-line** tickets are included." → **Proposta:** "**Skip-the-line** entry to the Sugarloaf cable car is included; the Botanical Garden and Tijuca National Park are standard entries." *(neste tour só o Pão é bondinho/skip; Jardim Botânico e Tijuca são entradas de parque)*
- ✅ **`desc`** (linha "Included:"): "...**skip-the-line entrance to Sugarloaf Mountain**, Botanical Garden entrance, Tijuca National Park access..." — **já correto** (skip só no Pão). Manter.

### ES
- ❌ **`desc`**: "Las **entradas sin fila** están incluidas." → **Proposta:** "La **entrada sin fila** al teleférico del Pan de Azúcar está incluida; el Jardín Botánico y el Parque Nacional de Tijuca son entradas estándar."
- ✅ **`desc`**: "...**entrada sin fila al Pan de Azúcar**, entrada al Jardín Botánico..." — manter.

### PT-BR
- ❌ **`desc`**: "Os **ingressos skip-the-line** estão incluídos." → **Proposta:** "O **ingresso skip-the-line** do bondinho do Pão de Açúcar está incluído; o Jardim Botânico e o Parque Nacional da Tijuca são entradas comuns."
- ✅ **`desc`**: "...**ingresso skip-the-line para o Pão de Açúcar**, entrada no Jardim Botânico..." — manter.

---

## Resumo de ação (para você aprovar)

| Tour | ❌/⚠️ a corrigir (por locale) | ✅ manter |
|---|---|---|
| essential-rio | EN 3 · ES 2 · PT 3 | faq.q, included[3] (Pão) |
| rio-express | EN 4 · ES 4 · PT 4 | faq[1].a, highlights[2] (Pão) |
| first-light-sunrise | EN 2 · ES 2 · PT 2 (+1 🟡 "sem filas") | — |
| golden-hour-rio | EN 5 · ES 5 · PT 5 | — |
| sunset-culture-roxy | EN 2 · ES 2 · PT 2 | — |
| tijuca-rainforest | EN 1 · ES 1 · PT 1 | desc "Included:" (Pão) |

**~47 frases a corrigir + ~12 já-corretas a manter.** Padrões recorrentes:
1. **"both attractions / ambas atracciones / as duas atrações"** → separar: skip-the-line no **Pão**, entrada normal no **Cristo**.
2. **Genérico "skip-the-line tickets are included"** em contexto do Cristo/cume/estátua → tirar o skip do Cristo (ou atribuir explicitamente ao Pão se o contexto for o bondinho).
3. **"...here too / también aquí / também aqui"** (Pão) → manter o skip no Pão, remover o "too" que referenciava o Cristo.
4. **FAQ "both attractions"** → reformular pergunta+resposta para o Pão.

**Nada foi editado.** Após sua aprovação (ou ajustes de tom), aplico numa branch `feat/skip-the-line`, com verificação de que o delta de render é exatamente essas frases.
