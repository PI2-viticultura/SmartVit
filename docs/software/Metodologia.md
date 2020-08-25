# Metodologia de desenvolvimento

* [1. Introdução](#_1-Introdução)
* [2. Fases de desenvolvimento](#_2-Fases-de-desenvolvimento)
* [3. Papéis](#_3-Papéis)
    * [3.1. Divisão dos papéis](#_31-Divisão-dos-papéis)
* [4. Rituais](#_4-Rituais)
* [5. Planejamento](#_5-Planejamento)
* [6. Gerenciamento](#_6-Gerenciamento)
- [ Histórico de revisão](#_histórico-de-revisão)

# 1. Introdução

Este documento tem por objetivo descrever a metodologia aplicada no projeto SmartVit. A metodologia aplicada consiste na junção dos princípios de frameworks Ágeis - mais especificamente Scrum, Kanban e XP (eXtreme Programming) - e fases do framework RUP (Rational Unified Process).

As metodologias ágeis são conjuntos de práticas que proporcionam uma forma de gerenciar projetos mais adaptável às mudanças. Abaixo são descritas as principais caracterísiticas das metodologias adotadas no projeto:

**Scrum**: é um framework que preza pela entrega de valor ao cliente de maneira rápida, criativa, onde sua equipe trabalha de forma produtiva. Este preza por equipe auto-organizáveis e multifuncionais e consiste em um grupo composto por Product owner, Scrum Master e Desenvolvedores.

**Kanban**: Kanban propõe uma abordagem não focada em grandes mudanças, onde pequenas melhorias são integradas na prestação de um serviço ou desenvolvimento de um produto, focando sempre no fluxo contínuo, visualizando o trabalho e otimizando o tempo entre idéias e recursos executáveis. Basea-se em um controle visual, utilizando um quadro Kanban, onde devem constar colunas (dependendo da complexidade do processo),por onde suas tarefas devem passar.

**XP**: XP tem por objetivo levar ao extremo o conjunto de boas-práticas na engenharia de software. A exemplo se tem os teste, onde é dito: "se é bom testar, que todos testem o tempo todo".

As fases do RUP compreendem todo o ciclo de desenvolvimento do software e são dividas em quatro, estas são:

**Iniciação ou Concepção**: ênfase no escopo do sistema;

**Elaboração**: ênfase na arquitetura;

**Construção**: ênfase no desenvolvimento;

**Transição**: ênfase na implantação.

Nos tópicos seguintes serão especificados rituais de cada framework utilizado.

# 2. Fases de desenvolvimento

O desenvolvimento do projeto SmartVit possuirá as fases descritas no framework RUP, ou seja, concepção, elaboração e construção, com o adcional de maleabilidade advinda da metodologia ágil, o que permite uma transição entre fases de forma não abrupta, logo é possível criar interatividade entre diferente fases, como por exemplo, evolução de requisitos na fase se construção.

# 3. Papéis

Os papéis utilizados no presente projeto respeitam o framework Scrum, com a adição dos papéis de arquiteto e DevOps, com o objetivo de manter uma infraestrutura estável e evolutiva. Além disto, os papéis serão compartilhados devido à quantidade de membros da equipe e ao contexto de isolamento devido ao COVID-19, o que permite o melhor aproveitamento dos membros. As atribuições dos papéis utilizados pode ser conferida a seguir:

### Product Owner

- Garantir que o <i>Product Backlog</i> esteja de forma clara;
- Assegurar que os Desenvolvedores entendam o <i>Product Backlog</i> no nível de especificação necessário;
- Trabalhar a venda do produto de software;
- Fazer o intermédio entre cliente e equipe;
- Mostrar a visão do produto em documentos.

### Scrum Master

- Garantir que o <i>Product Backlog</i> seja feito, de acordo com a priorização do <i>Product Owner</i>, pelos Desenvolvedores;
- Certificar-se que os rituais ageís sejam realizados por toda a equipe da forma como foi descrito;
- Mapear o progresso da equipe e do desenvolvimento do produto, assim como suas falhas e questões a melhorar;
- Documentar o processo de cada <i>Sprint</i>.

### Arquiteto

- Mapear, juntamente ao <i>Product Owner</i> e DevOps, a arquitetura necessária para o desenvolvimento do produto;
- Desenhar e diagramar a arquitetura do produto;
- Garantir que a arquitetura seja implementada pelos Desenvolvedores.

### DevOps

- Desenhar, juntamente com o Arquiteto, as pipelines do produto de software;
- Implementar a integração contínua;
- Garantir o deploy contínuo;
- Facilitar a configuração do ambiente de desenvolvimento da equipe.

### Desenvolvedores

- Desenvolver as funcionalidades priorizadas pelo <i>Product Owner</i> e selecionadas pelo <i>Scrum Master</i> dentro da <i>Sprint</i>;
- Manter a qualidade do produto em relação a código.


## 3.1 Divisão dos papéis

A divisão da equipe quanto aos papéis ocorre de acordo com o a seguinte especificação:

| Papel           | Responsável                               |
| :--------:      | :----:                                    | 
| Product Owner   | Adrianne Silva e João Lucas               |
| Scrum Master    | Adrianne Silva                            |
| Arquiteto       | João Lucas, Adrianne e Lucas Vitor        |
| DevOps          | Luciano dos Santos                        |
| Desenvolvedores | Adrianne Silva, João Lucas, Lucas Vitor e Luciano |


# 4. Rituais

### Sprints:

- Sprints
    - São ciclos previstos no Scrum que possuem uma duração determinadas e são realizadas atividades pré-determinadas.
    - Duração adotada: 7 dias (uma semana)

- Daily Meeting
    - É uma reunião diária, curta, onde todos falam sobre atividades do dia anterior, eventuais problemas e o que pretendem fazer nesse dia.
    - As dailies da equipe são realizadas diariamente por meio do telegram, exceto um dia por semana onde é realizada presencialmente.

- Sprint Review
    - Reunião onde a equipe envolvida no projeto apresenta ao grupo as funcionalidades que foram implementadas durante a Sprint em foco.
    - Ocorre ao fim de cada Sprint.

- Sprint Planning
    - Reunião de planejamento para definir as atividades a serem desenvolvidas durante a Sprint.
    - Ocorre no início de cada Sprint.

# 5. Planejamento

- Issues

As issues serão criadas para todos os tipos de contribuição com o projeto, a fim de registrar o trabalho da equipe. Sendo pontuadas e designada a cada sprint.

- Milestones

As milestones serão utilizadas para identificar as sprints, visto que considera-se que a cada sprint tem-se uma entrega de funcionalidades/incrementos, é possível caracterizá-las como macros do projeto. Assim, as issues planejadas devem ser mapeadas para as milestones referentes.

- Épicos

Os épicos serão utilizados para associar issues de um mesmo módulo ou para representar issues que possuam um alto nível de complexidade/dificuldade, a fim de facilitar o desenvolvimento.

- Priorização

A priorização Seguirá o padrão MoSCoW (Must, Should, Could, Would).


# 6. Gerenciamento

- Velocity

O velocity atuará como ferramenta para análise da capacidade de desenvolvimento da equipe. Ele será elaborado ao fim de cada sprint e será consultado pelo Scrum Master no planejamento da sprint seguinte.

- Burndown

Para monitorar as atividades entregues, o Scrum Master utilizará também o burndown, gerado pelo kanban usado pela equipe. Ele irá utilizá-lo inclusive ao longo das sprints para garantir as entregas.

# Histórico de revisão

| O quê | Quem  | Quando |
| - | - | - |
| Primeira versão do documento | Lucas Vitor | 24/04/2020 |
| Revisão entrega | Adrianne Alves | 22/05/2020 |
| Adição de histórico e edição de mudanças devido adição de membro na equipe | Adrianne Alves da Silva | 25/08/2020 |