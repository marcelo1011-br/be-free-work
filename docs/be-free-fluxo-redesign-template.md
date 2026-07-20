# Fluxo de Redesign de Template — Be Free (Project Midnight)
### Playbook: como levar um template do estado atual à linguagem "mar e sol" em uma tacada

Companheiro de `be-free-doc-linguagem-visual.md`. Aquele diz **qual** é a linguagem; este diz **como** implementá-la sem virar dez rodadas. Destilado do redesign da tour page (`ProductDetailPage.astro`), que saiu num único prompt de build.

---

## A regra de ouro

**A unidade de trabalho é o ARQUIVO, nunca a seção.**

O template é um componente (`.astro`) — reescreva o arquivo inteiro num único prompt de build. Fatiar em "agora o hero, agora os cards, agora o footer" multiplica idas ao CC por seção e é a causa nº 1 de lentidão. A segurança não vem do pedaço ser pequeno; vem dos **gates e STOPs**. Com eles, o arquivo inteiro é tão seguro quanto uma seção, e muito mais rápido.

**Sinal de alerta:** se saíram dois prompts de CC para o mesmo arquivo sem um diff completo revisado no meio, o fluxo escorregou para o modo seção. Corrija: "arquivo inteiro, não seção".

---

## A sequência (5 passos)

### 1. Recon read-only do template atual — **Sonnet**
Antes de qualquer linha de código. Descobre, para o arquivo-alvo:
- caminho, nº de linhas, é 1 componente ou vários?
- props que chegam (dos wrappers/páginas)
- ordem das seções que renderiza hoje; o que é inline vs. componente
- onde o `<head>`/schema é montado (normalmente fora do componente — confirmar)
- que dados de `tours.js`/`siteData.js`/etc. alimentam cada seção; **contagens reais** (variam por tour e por locale)
- CSS: scoped próprio? quanto é tier **bridge** vs. **puro**? quem são os componentes compartilhados (efeito colateral)

O prompt de build **nasce certo** porque não há adivinhação dentro dele. Recon barato agora evita rodada cara depois.

### 2. Mockup no Claude Design → **para o chat, nunca para o CC**
Gerar mockup do template baseado num template já pronto (Essential Rio é a âncora de linguagem: cores, tipografia, superfícies). Mobile primeiro, desktop depois.

**Crítico:** o mockup vai para o **chat** (o Claude lê o HTML e extrai *regras* — escala, superfícies, espaçamento, breakpoints). **Nunca** para o CC. O CC recebe regra + conteúdo real, não o markup do Claude Design — aquele markup não conhece o schema, os headings nem as âncoras de keyword do site. Mandar o mockup ao CC (ou usar "Send to Claude Code") reintroduz o problema que o redesign conserta.

O Claude renderiza o HTML do mockup (Playwright, 390 e 1440px), mede os valores e escreve/atualiza as regras. Screenshot escalado deturpa espaçamento — o browser é autoridade.

### 3. Elemento novo? → decidir e **anotar no doc de linguagem** antes do build
Se o template introduz algo que o doc ainda não cobre (um componente, um padrão de seção), decidir o tratamento **agora** e registrar em `be-free-doc-linguagem-visual.md`. Senão cada template futuro reabre a mesma discussão. Este é o passo que a tour page não precisou (ela *definiu* a linguagem) mas que os templates seguintes precisam ao *estender* ela.

### 4. Reescrita única — **um** prompt de build, **Opus**
Um prompt, o arquivo inteiro, contra o doc de linguagem. Estrutura do prompt:
- **Modelo Opus** (design é julgamento, não mecânica)
- **Arquivos autorizados nominais** + lista de **proibidos** (schema, `[slug]`/páginas wrapper, `seoHelpers.js`, `BaseLayout`, `tokens.css`, `global.css`, componentes compartilhados). Isso mantém o head intacto **por construção**, não por promessa.
- Manda **ler o doc de linguagem inteiro antes de escrever**
- **Recon embutido** ou referência ao recon do passo 1
- Estrutura nova seção a seção (o que dissolve, o que expõe, o que vira placeholder por falta de dado)
- Regras que vêm do dado: **degradação por contagem** (array vazio → seção não renderiza), **formatos de preço** (A tabela / B barco / C sob-consulta-sem-âmbar / D por-pessoa via `getFromPrice()`)
- Invariantes: âmbar = ação de reserva, máx. definido por página; skip-the-line só no Pão de Açúcar; preço por grupo; sem comparação com marketplace
- CSS: `rem` em tipografia (`px` só em borda 1px e raio); `clamp()` fluido com os valores medidos; converter bridge→puro no mesmo passe; zero `box-shadow`; prefixo de classe próprio
- Se um token necessário não existir → **STOP**, não criar token nem cravar literal

**Partir do estado atual do arquivo**, não do baseline — se parte já foi construída, consolidar, não sobrescrever cego.

### 5. Gates → revisão do diff real → commit
O prompt termina com o arquivo **modificado no working tree, não commitado**. Gates obrigatórios antes de reportar sucesso:
- **Head byte-a-byte com CONTROLE NEGATIVO**: swap via `git show HEAD:` ou `git stash` → build baseline → compara → restaura. Único delta tolerado = hash do bundle CSS. "0 falhas" só conta com o baseline em mãos.
- **Contagem de âmbar** por `grep -o … | wc -l` (não `grep -c`, que conta linhas)
- **Schema visível**: cada `@type` emitido tem seção correspondente
- **Alvos de toque** ≥ `2.75rem`
- **Build** sem erro, todas as páginas

Então: **Claude revisa o DIFF REAL** (nunca o resumo do CC — já pegou coisas que o resumo escondia) → autoriza → **Marcelo** roda `git add` por caminho explícito + `git commit` no terminal (CC nunca commita nem faz push) → apaga artefatos de review (`.diff`, `.zip`) senão travam o próximo STOP.

---

## Divisão de modelos
- **Sonnet:** recon read-only, tarefas mecânicas bem escopadas
- **Opus:** design, schema, git arriscado, qualquer mudança global

## STOPs que funcionam (manter explícitos nos prompts)
O CC deve parar — e parou corretamente várias vezes — quando: working tree inesperado (arquivo extra tipo `gallery.zip`/`nav-h.diff`), contagem divergente do previsto, token necessário ausente, arquivo proibido exigido pela tarefa, qualquer comando com erro. STOP significa parar de verdade e reportar, não contornar.

## Por que isto é mais rápido, não menos seguro
A tentação de fatiar vem de "pedaço pequeno = risco pequeno". Mas o risco é controlado pelos **gates**, não pelo tamanho do pedaço. Arquivo inteiro + gate de head + STOPs = mesma segurança, uma fração das idas ao CC. Foi o que a tour page provou: 1057→1199 linhas, um prompt, head idêntico byte-a-byte.

---

## Ordem dos templates (contexto do projeto)
Tour page ✓ (feita). Depois: nav+footer (globais, tratados juntos), home (cost-wedge sai aqui), pillars (`dt-`/`hd-`/`pg-` — D1/D2/D3 morre absorvido), blog (herda editorial, mais barato). Cada template começa já no modo arquivo — nunca por seção.

## Sobre continuar no mesmo chat vs. abrir novo
O fluxo cabe em qualquer chat que tenha este playbook + o doc de linguagem + o handoff de estado. Chat muito longo degrada a qualidade da resposta (contexto pesado); quando isso começar, migrar para chat novo colando os três documentos é melhor que insistir. O playbook existe para que o método não dependa da memória de uma conversa específica.
