# Documento de Visão

- [1. Introdução](#1-introdução)
  * [1.1. Finalidade](#11-finalidade)
  * [1.2. Escopo](#12-escopo)
  * [1.3. Visão geral](#13-visão-geral)
  * [1.4. Referências](#14-referências)
- [2. Posicionamento](#2-posicionamento)
  * [2.1. Oportunidade de Negócios](#21-oportunidade-de-negõcios)
  * [2.2. Descrição do problema](#22-descrição-do-problema)
  * [2.3. Sentença de Posição do Produto](#23-sentença-de-posição-do-produto)
- [3. Descrição dos Envolvidos e dos Usuários](#3-descrição-dos-envolvidos-e-dos-usuários)
  * [3.1. Resumo dos Envolvidos](#31-resumo-dos-envolvidos)
  * [3.2. Resumo dos Usuários](#32-resumo-dos-usuários)
  * [3.3. Ambiente do Usuário](#33-ambiente-do-usuário)
  * [3.4. Perfis dos Envolvidos](#34-perfis-dos-envolvidos)
  * [3.5. Perfis dos Usuários](#35-perfis-dos-usuários)
  * [3.6. Alternativas e concorrência](#36-alternativas-e-concorrência)
- [4. Visão Geral do Produto](#4-visão-geral-do-produto)
  * [4.1. Perspectiva do produto](#41-perspectiva-do-produto)
  * [4.2. Resumo dos recursos](#42-resumo-dos-recursos)
- [5. Recursos do Produto](#5-recursos-do-produto)
- [6. Restrições](#6-restrições)
  * [6.1. Restrições de Design](#61-restrições-de-design)
  * [6.2. Restrições de Implementação](#62-restrições-de-implementação)
  * [6.3. Restrições de Segurança](#63-restrições-de-segurança)
  * [6.4. Restrições de Uso](#64-restrições-de-uso)
- [7. Intervalos de Qualidade](#7-intervalos-de-qualidade)
- [Histórico de Versões](#_histórico-de-versões)

## 1. Introdução

### 1.1. Finalidade

<p align="justify">&emsp;&emsp; Este documento tem por objetivo a apresentação do SmartVit, um produto para monitoramento de viticulturas, determinando sua utilidade e funcionalidades, abordando sua capacidade, recursos e relação com o usuário. Com esse propósito, será realizada uma exposição detalhada do projeto, de modo a abranger as inovações ofertadas pela aplicação, através de tópicos relativos à descrição do problema, oportunidade de negócios, descrição dos envolvidos, restrições do projeto e outros. Espera-se, desta forma, que o leitor seja capaz de entender a proposta e as suas aplicabilidades, sendo este investidor ou usuário do sistema. </p>

### 1.2. Escopo

<p align="justify">&emsp;&emsp; A inserção de maquinário tecnológico com o intuito de possibilitar o controle de aspectos ambientais e meteorológicos, conhecido como  agricultura de precisão tem ganhado espaço entre os produtores. Dentro do contexto da viticultura esse fato se mantém, esta modalidade é conhecida como viticultura de precisão e pode ser entendida como a gestão da variabilidade temporal e espacial do vinhedo com o objetivo de melhorar o rendimento da atividade agrícola, seja pelo aumento na produtividade, seja pela redução dos custos de produção, trazendo consigo o possibilidade ao produtor de entender o processo do seu vinhedo e acompanhar a produção, permitindo a mitigação de problemas que possuem a capacidade de reduzir a qualidade de seu produto. </p>
<p align="justify">&emsp;&emsp; Tendo em vista tal fato, este projeto objetiva a criação de um sistema de monitoramento de viticultura de precisão de pequena escala. Dentre as sua principais funcionalidades estão sistema de suporte que permite melhor irrigação e monitoramento do vinhedo, coleta e disponibilização de dados sobre solo, água e ar dentro do vinhedo. </p>

### 1.3. Visão geral

<p align="justify">&emsp;&emsp; O documento apresenta informações essenciais relacionadas ao projeto, organizadas de modo a fornecer ao leitor a melhor forma de visualizá-las. Dessa forma, a início é descrito o contexto no qual o projeto foi planejado, expondo os envolvidos e a equipe responsável por desenvolver o software e gerir toda a produção. Por fim, o documento foca nas especificações do projeto, em termos de requisitos e funcionalidades do sistema. </p>

### 1.4. Referências

BRAGA, Ricardo. **Viticultura de Precisão**. Associação dos Jovens Agricultores de Portugal, 2009. Disponível em:  http://agrinov.ajap.pt/images/diapositivos/Diapositivos_Viticultura_de_Precisao.pdf. Acesso em: 17/04/2020.

URSKA. **Why to implement IoT in the vineyard?**. eVineyard, 2018. Disponível em: https://www.evineyardapp.com/blog/2018/08/23/why-to-implement-iot-in-the-vineyard/. Acesso em: 26/03/2020.

IBM Knowledge Center. **Documento de Visão**. IBM. Disponível em: https://www.ibm.com/support/knowledgecenter/pt-br/SSWMEQ_4.0.6/com.ibm.rational.rrm.help.doc/topics/r_vision_doc.html. Acesso em: 26/04/2020.

## 2. Posicionamento

### 2.1. Oportunidade de Negócios

<p align="justify">&emsp;&emsp; A utilização do projeto em vinícolas de uvas tem como objetivos aumentar a produtividade e a eficiência das lavouras, melhorando a qualidade do plantio e manter o sabor da fruta. E, visando a adaptabilidade dos elementos externos, como chuva, temperatura, sensibilidade luminosa, umidade, pragas e controle solar. Além disso, essa aplicação possibilita que a produção seja inteligente e sustentável e aumente a produção e as suas vendas. </p>

### 2.2. Descrição do problema

|**O problema de**| qualidade de safras de uvas e condições climáticas que não favorecem o plantio|
|:---:|:---:|
|**afeta**|Fazendeiros e Consumidores de Uvas|
|**cujo impacto é**|a produção e venda da fruta.|
|**uma boa solução seria**|um aparelho eletrônico e aplicação para dispositivo móvel, para monitorar as condições climáticas de plantio e controle do sistema de irrigação na produção de uvas.|

### 2.3. Sentença de Posição do Produto

|**Para** |Agricultores de plantio de videiras |
|:---:|:---:|
|**Que** |necessitam de aumento de produção e eficiência de suas lavouras.|
|**O SmartVit**|é uma aplicação para dinamizar o plantio.|
|**Que**|monitora as condições climáticas e controla o sistema de irrigação.|
|**Diferente de**|outros paradigmas de plantio que às vezes são pouco eficazes.|
|**Nosso produto**|é uma solução para chegar a cultivo de qualidade na produção de uvas.|

## 3. Descrição dos Envolvidos e dos Usuários

### 3.1. Resumo dos Envolvidos

|Nome|Descrição|Responsabilidade|
|:--:|:--:|:--:|
| Desenvolvedores e Gestores | Estudantes de Software do projeto Smartvit da disciplina Projeto Integrador de Engenharia 2 da Universidade de Brasília - Campus Gama | Desenvolvimento, documentação, implementação, testes, identificar erros e *bugs* e instruir caminhos e soluções para um bom desempenho. |
| Alunos das Engenharias Aeroespacial, Automotiva, de Energia e Eletrônica | Estudantes das demais Engenharias da Universidade de Brasília - Campus Gama que também fazem parte do projeto SmartVit| Gerir o desenvolvimento do produto, identificar erros e *bugs* da parte de software e fazer sugestões que satisfaçam todas as áreas. |
| Professores | Professores da disciplina de Projeto Integrador de Engenharia 2  da Universidade de Brasília Campus Gama | Avaliar e orientar os estudantes. |

### 3.2. Resumo dos Usuários

|Nome|Descrição|
|:-:|:-:|
| Agricultores de Uvas | <p align = "justify"> Agricultores que trabalham com plantações de videiras e conhecem todo o procedimento e cuidados que devem etr para tal plantio. |

### 3.3. Ambiente do Usuário

<p align="justify">&emsp;&emsp; A aplicação será utilizada em dispositivos móveis, onde será desenvolvido o sistema para leitura e controle remoto
dos dados coletados.</p>

### 3.4. Perfis dos Envolvidos

#### 3.4.1 Equipe de Gestão e Desenvolvimento do Projeto

|Representantes |Adrianne Silva, João Lucas e Lucas Vítor|
|:-:|:-:|
|**Tipo**|Estudantes de Engenharia de software, cursando a disciplina de Projeto Integrador de Engenharia 2 da Universidade de Brasília.|
|**Responsabilidade**|Desenvolvimento, Testes, Documentação, Implementação, Gestão e garantir o melhor processo para o desenvolvimento do produto. |
|**Critérios de Sucesso**|Manter a equipe focada no projeto, manter o grupo ativo nos princípios ágeis, gerência dos riscos associados ao projeto, realizar entregas dentro dos prazos e finalizar o desenvolvimento do projeto.|
|**Envolvimento**|Alto.|
|**Problemas/Comentários**|Certificar que a resolução desenvolvida de software seja eficaz e se encaixe com os componentes das demais engenharias.|

#### 3.4.2 Cliente

|Representantes |Comerciantes|
|:-:|:-:|
|**Descrição**|Comerciantes de frutas e em específico o de uvas.|
|**Tipo**|Cliente.|
|**Critérios de Sucesso**| Auxiliar no estabelecimento do escopo, validar a solução do time.|
|**Envolvimento**|Alto.|

### 3.5. Perfis dos Usuários

|Representante| Agricultores |
|:-:|:-:|
|**Descrição**|Cultivadores de videiras.|
|**Tipo**|Usuários do Sistema|
|**Responsabilidade**| Utilizar o aparelho para o propósito.|
|**Critérios de Sucesso**| Conseguir usar o produto e o mesmo traga benefícios no plantio na sua utilização.|
|**Envolvimento**|Alto.|

### 3.6. Alternativas e concorrência

<p align = "justify"> &emsp;&emsp; Existem projetos semelhantes de Vinícolas Inteligentes tendo como principais objetivos aumentar também a produtividade e a eciência das lavouras, melhorando
a qualidade do serviço ao cliente e a adaptabilidade
a elementos externos. O exemplo é o Kit de cultivo da equipe Olivetti. </p>

## 4. Visão Geral do Produto

<p align="justify">&emsp;&emsp; Este tópico consiste na definição de nível macro do que será o SmartVit, trazendo os principais recursos e perspectivas acerca do mesmo.

### 4.1. Perspectiva do produto

<p align="justify">&emsp;&emsp; O sistema SmartVit possui como principal objetivo fornecer os dados de monitoramento de vinícolas, obtidos a partir dos sensores componentes do kit SmartVit, como informação utilizável ao responsável pelo monitoramento da safra. Tendo em vista que serão medidos aspectos do solo, temperatura e água, o produto se propõe a qualificar a situação da plantação, fornecendo avisos de criticidade, de intemperies na região e das ações automáticas oriundas da gestão inteligente fornecida pelo kit SmartVit. Deve-se salientar que o kit físico se propõe a atuar em caso de necessidade de irrigação e extensão do fio que sustenta a uva, caso o peso das mesmas esteja atrapalhando a recepção da energia solar.

De modo geral, o SmartVit se propõe a possibilitar o gerenciamento e monitoramento de vinícolas sem que haja real necessidade da presença física do responsável no local. Essa atuação possui o potencial de modificar o modo como é praticado o cultivo e melhorar os resultados obtidos durante as safras, resultando em uvas de melhor qualidade. Dessa forma, auxilia no controle da qualidade da uva e consequentemente do vinho a ser produzido.


### 4.2. Resumo dos recursos

| Benefício para os usuários | Recursos do suporte |
| --- | --- |
| Facilidade no acompanhamento da safra | Acesso à dashboard com indicadores claros e de fácil acesso |
| Acompanhamento transparente das ações tomadas pelo sistema | Notificação das ações automáticas tomadas pelo sistema físico SmartVit |
| Acionamento de irrigação à distância | Envio de sinal ao sistema físico para acionar a irrigação a distância |
| Previsibilidade quanto à qualidade da safra | Análise preditiva |
| Fácil comunicação com a equipe de suporte | Registro de solicitações à SmartVit |


## 5. Recursos do Produto

<p align="justify">&emsp;&emsp; A aplicação permitirá ao usuário apenas acompanhar a safra, acessando indicadores de qualidade do solo, água e temperatura por meio de dashboards dinâmicos. Além disso poderá, diante de adversidades acionar por conta própria a irrigação do solo. Abaixo há uma listagem dos principais recursos:

* Visualizar indicadores de umidade, temperatura e qualidade do solo
* Gerenciar vinícolas cadastradas
* Ativar o monitoramento do sistema para as vinícolas
* Filtrar vinícolas cadastradas
* Remover vinícolas do monitoramento
* Visualizar dados brutos em formato gráfico
* Feedback de acionamento físico do SmartVit
* Visualização de alertas de intemperies na região das vinícolas
* Visualizar dados dos sistemas instalados na vinícola
* Alertar sistema quanto à pragas
* Envio de feedback do usuário

## 6. Restrições

### 6.1. Restrições de Design

- O design deve ser simples e intuitivo;
- Respeitar as cores da palheta definida;
- Itens devem ser agrupados por proximidade das informações.

### 6.2. Restrições de Implementação

- Arquitetura deve seguir o modelo cliente-servidor;
- O sistema deve ser desenvolvido utilizando os frameworks Django e React;
- O sistema de ser capaz de se comunicar com os sensores dispostos na vinícola.

### 6.3. Restrições de Uso

- O usuário deve ter um navegador compatível com a aplicação. As versões suportadas são Google Chrome 76.0.3809.100 ou superior e Mozilla Firefox 75 ou superior.


## 7. Intervalos de Qualidade

<p align="justify">&emsp;&emsp; Para total desempenho e aproveitamento por parte dos usuários devem ser respeitados os seguintes intervalos de qualidade:

<p align="justify">&emsp;&emsp; Usabilidade: O Sistema deve ser intuitivo, possuir um baixo número de passos para alcançar o objetivo, ser fácil de compreender.

<p align="justify">&emsp;&emsp; Disponibilidade: O Sistema deve estar disponível na maior parte do tempo, utilizando-se as madrugadas para manutenção, ou seja, 20 horas por dia e 7 dias por semana.

<p align="justify">&emsp;&emsp; Manutenção: O Sistema deve ter boa manutenabilidade, a fim de facilitar futuras evoluções e correções por equipes diferentes da original. Assim, esses aspectos de qualidade devem ser observados no código entregue.
