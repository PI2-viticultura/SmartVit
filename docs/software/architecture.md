# Documento de Arquitetura

- [1. Introdução](#_1-introdução)
  * [1.1. Objetivos](#_11-objetivos)
  * [1.2. Escopo do documento](#_12-escopo-do-documento)
- [2. Representação da Arquitetura](#_2-representação-da-arquitetura)
- [3. Restrições e Metas Arquiteturais](#_3-restrições-e-metas-arquiteturais)
  * [3.1. Restrições](#_31-restrições)
  * [3.2. Metas Arquiteturais](#_32-metas-arquiteturais)
- [4. Visão de Casos de Uso](#_4-visão-de-casos-de-uso)
  * [4.1. Diagrama de Casos de Uso](#_41-Diagrama-de-Casos-de-Uso)
  * [4.2. Descrição dos Casos de Uso](#_42-Descrição-dos-Casos-de-Uso)
- [5. Visão Lógica](#_5-visão-lógica)
  * [5.1. Visão Geral: Pacotes e Camadas](#_51-visão-geral-pacotes-e-camadas)
  * [5.2. Visão Geral: Banco de Dados](#_53-visão-geral-banco-de-dados)

- [6. Desempenho](#_6-desempenho)

- [7. Qualidade](#_7-qualidade)

## 1. Introdução

### 1.1. Objetivos

 <p align = "justify"> Este documento tem como finalidade fornecer, de maneira detalhada, a arquitetura empregada na plataforma SmartVit, utilizando para isso representações arquiteturais, como a visão lógica e de casos de uso, com o objetivo de facilitar o entendimento dos processos e funcionamento de todo o sistema. Dessa forma, nesse documento está uma descrição técnica do modo como a plataforma SmartVit se estrutura, no que diz respeito à organização, comunicação e definição dos seus componentes e dado. Assim, espera-se que os interessados sejam capazes de visualizar as possíveis consequências, em termos de software, da arquitetura escolhida. </p>

###  1.2. Escopo

<p align="justify"> A SmartVit consiste em uma plataforma desenvolvida para facilitar o processo de acompanhamento de vinícolas durante todo o ciclo de vida. Para isso, ela fornece os dados coletados pelo sistema eletrônico inteligente instalado na plantação, obtidos por meio dos sensores de solo e água, como informação utilizável pelo agrônomo responsável na tomada de decisões. Em termos técnicos, este documento abordará toda a lógica de construção da plataforma, abordando os casos de uso, diagramas de pacote, informações sobre desempenho, banco de dados e qualidade do software. </p>

## 2. Representação da Arquitetura

<p align="justify"> A arquitetura adotada possui organização em três camadas: módulo eletrônico, onde os dados serão coletados e transmitidos; API, onde os dados serão requisitados, tratados e distribuídos; e front-end, onde os dados serão entregues ao usuário de forma inteligível. </p>

<p align="justify"> O principal relacionamento do projeto é implementado como um cliente-servidor. O servidor, implementado em Django Rest Framework, será responsável pela manutenção e processamento dos dados, enquanto ao cliente, representado pelo front-end e implementado em ReactJS, será encarregada a função de fornecer os dados dos usuários. </p>

### 2.1. Diagrama de Relações

<p align="justify"> Abaixo estão descritos os módulos que integram o sistema e suas relações. </p>

![img](imgs/arquitetura.png)

#### 2.1.1. Módulo Eletrônico

<p align="justify"> Módulo físico responsável por captar dados como umidade, pH do solo, umidade e irrigação das vinícolas cadastradas. </p>

#### 2.1.2. API

<p align="justify"> A API é a unidade da arquitetura responsável por receber, processar e armazenar dados do módulo eletrônico. Neste ambiente serão realizadas as análises preditivas e de safra, gerenciamento das vinícolas e acionamento de sistemas (recebendo a entrada do usuário e repassando para o módulo eletrônico responsável). </p>

#### 2.1.3. Aplicação Web

<p align="justify"> A aplicação web é a unidade responsável por criar a ponte entre o usuário e a API, enviando dados para requisições e recebendo dados para então formulá-los de forma inteligível ao usuário. </p>

#### 2.1.4. Banco de Dados

<p align="justify"> Unidade responsável por armazenar os dados recebidos e processados pela API. </p>

### 2.2. Tecnologias

* HTML/CSS:	Utilizado no desenvolvimento Web de forma padrão e estruturado.
* Python: Linguagem de programação de alto nível, interpretada, de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte.
* Django REST Framework: Biblioteca para o Framework Django que disponibiliza funcionalidades para desenvolvimento de APIs que seguem o estilo arquitetural REST.
* JavaScript: Linguagem de programação que permite a implementação de itens complexos em páginas web de forma dinâmica.
* ReactJS: Biblioteca JavaScript para construção de interfaces de usuários.
* MongoDB: Banco NOSQL orientado a documentos (document database) no formato JSON.

## 3. Restrições e Metas Arquiteturais

### 3.1. Restrições

- O sistema depende de conexão com internet;
- O sistema deve ser utilizado em ambiente web;
- Somente a API terá acesso direto ao banco de dados;

### 3.2. Metas Arquiteturais

- Deve garantir a privacidade dos dados inseridos em seu banco de dados;
- Deve conseguir responder às requisições em poucos segundos e ter alta disponibilidade;
- Deverá atender aos requisitos não funcionais, como disponibilidade, segurança, usabilidade, escalabilidade, garantir a manutenibilidade do sistema;
- Possuir desacoplamento e independência entre outros serviços.

## 4. Visão de Casos de Uso
Esta seção traz as situações de ações e uso do sistema, em termos de funcionalidades, descrevendo de modo sucinto como o mesmo será utilizado pelos atores ou usuários.

### 4.1. Diagrama de Casos de Uso
O diagrama de caso de uso descreve as funcionalidades propostas para um sistema, utilizando como princípio a atuação dos atores. Abaixo segue a primeira versão do diagrma elaborado.

![img](imgs/diagrama-casos-uso.png)

### 4.2. Descrição dos Casos de Uso

#### UC 01 - Logar no sistema
| | |
| -- | -- |
| Descrição | Usuário realiza login no sistema. |
| Atores | Usuário |
| Pré-condições | Usuário deve acessar a página inicial do sistema em um navegador com internet |
| Pós-condições | Usuário deve ter acesso às funcionalidades que caibam ao seu perfil |
| Fluxo principal | 1. Usuário acessa página inicial da plataforma <br> 2. Usuário digita login e senha <br> 3. Usuário clica em "Entrar"|
| Fluxo de exceção | [UC 19] Caso a vinícola ainda não esteja cadastrada o usuário não possuirá login na plataforma. |

#### UC 02 - Visualizar notificações de criticidade
| | |
| -- | -- |
| Descrição | O agrônomo visualizará as notificações recebidas sobre quaisquer indicadores críticos relacionados à safra |
| Atores | Agrônomo |
| Pré-condições | Usuário deve possuir perfil de agrônomo no sistema |
| Pós-condições | O usuário deve receber notificações sempre que a vinícola apresentar algum indicador fora do intervalo esperado, via email e através do próprio sistema |
| Fluxo principal | 1. Sistema decta indicador fora do intervalo <br> 2. Usuário recebe email sobre a criticidade de um indicador <br> 3. Usuário entra no sistema <br> 4.Usuário clica nas notificações |
| Fluxo de exceção | |

#### UC 03 - Acompanhar indicadores da situação da safra
| | |
| -- | -- |
| Descrição | O usuário poderá visualizar um dashboard com os principais indicadores da safra |
| Atores | Agrônomo e agricultor |
| Pré-condições | O usuário deve estar logado no sistema |
| Pós-condições | O usuário deve visualizar todos os indicadores da safra |
| Fluxo principal | 1. Usuário realiza login no sistema <br> 2. Sistema abre na dashboard <br> |
| Fluxo de exceção | |

#### UC 04 - Registrar pragas na vinícola
| | |
| -- | -- |
| Descrição | Usuário pode registrar pragas identificadas na sua vinícola para acompanhamento |
| Atores | Agrônomo |
| Pré-condições | Usuário deve estar logado no sistema |
| Pós-condições | Na página de acompanhamento deve aparecer as pragas registradas |
| Fluxo principal | 1. Usuário faz login no sistema <br> 2. Usuário acessa dashboard e clica em "registrar praga" <br> 3. Preenche o formulário informando a praga <br> 4. Clica em 'registrar' |
| Fluxo de exceção | |

#### UC 05 - Acionar equipe do sistema
| | |
| -- | -- |
| Descrição | O usuário poderá acionar a equipe do sistema para eventuais problemas nos dados obtidos, enviando uma mensagem para o administrador |
| Atores | Agrônomo |
| Pré-condições | Usuário deve estar logado no sistema |
| Pós-condições | O usuário deve conseguir enviar uma mensagem para o administrador a fim de informar irregularidade/problemas no sistema web|
| Fluxo principal | 1. O usuário deve entrar no sistema <br> 2. Clicar no ícone correspondente à "suporte do sistema" <br> 3. Preencher o formulário infomando o problema e/ou solicitação <br> 4. O usuário deve clicar "enviar"|
| Fluxo de exceção | |


#### UC 06 - Avaliar safra
| | |
| -- | -- |
| Descrição | O agrônomo deverá/poderá responder um questionário sobre a uva obtida no final da safra |
| Atores | Agrônomo |
| Pré-condições | O agrônomo deve está logado no sistema |
| Pós-condições | O usuário deve receber uma análise da qualidade do vinho a ser obtido com a uva coletada |
| Fluxo principal | 1. O agrônomo entrará na página do dashboard <br> 2. Clicará em "avaliar resultado da safra" <br> 3. Irá clicar em "enviar" <br> 4. Será redirecionado para uma página em formato PDF com as prováveis qualidades do vinho que será obtido com a uva produzida. |
| Fluxo de exceção | |

#### UC 07 - Predizer qualidade do vinho
| | |
| -- | -- |
| Descrição | Ao receber as informações da avaliação da safra, realizada pelo agrônomo, o sistema irá fornecer informações sobre a qualidade do vinho a ser obtido com aquela safra |
| Atores | Sistema |
| Pré-condições | O agrônomo deve enviar o formulário de avaliação da safra |
| Pós-condições | O sistema deve ser capaz de mapear a qualidade do vinho a ser obtido |
| Fluxo principal | 1. O usuário enviará o formulário de avaliação <br> 2. O sistema realizará a predição <br> 3. O sistema fornecerá um PDF com as informações processadas |
| Fluxo de exceção |  |


#### UC 08 - Alertar sobre intemperies
| | |
| -- | -- |
| Descrição | O sistema irá alertar aos usuários sobre intempéries de acordo com a região em que a vinícola está cadastrada.|
| Atores | Sistema |
| Pré-condições | O contrato que associa a vinícola ao sistema deve estar ativo. |
| Pós-condições | O usuário deve receber por email e como notificação no sistema o aviso de intempéries |
| Fluxo principal | 1. O sistema recebe alerta de intempéries nas regiões das vinícolas cadastradas <br> 2. O sistema envia a notificação para os usuários das vinícolas que estão sujeitas às intempéries|
| Fluxo de exceção | |

#### UC 09 - Notificar cancelamento
| | |
| -- | -- |
| Descrição | O sistema deve avisar ao usuário caso o contrato que abrange a vinícola que está monitorando seja cancelado por qualquer motivo |
| Atores | Sistema |
| Pré-condições | O usuário deve possuir cadastro no sistema |
| Pós-condições | O usuário deve receber o email enviado pelo sistema informando o cancelamento do contrato |
| Fluxo principal | 1. O contrato é cancelado <br> 2. O sistema envia notificação para o agricultor e agrônomo |
| Fluxo de exceção | |


#### UC 10 - Bloquear acesso ao suporte do sistema eletrônico
| | |
| -- | -- |
| Descrição | O sistema deve bloquear o acesso às solicitações de suporte aos sistemas eletrônicos caso o contrato da vinícola tenha sido cancelado/expirado. |
| Atores | Sistema |
| Pré-condições | O contrato deve ter sido cancelado  |
| Pós-condições | O usuário não deve possuir acesso à funcionalidade de suporte aos sistemas eletrônicos |
| Fluxo principal | 1. Contrato é cancelado <br> 2. O suporte ao sistema eletrônico fica indisponível para o usuário |
| Fluxo de exceção | |

#### UC 11 - Gerenciar sistemas eletrônicos da safra
| | |
| -- | -- |
| Descrição | O agrônomo deve ter acesso à todos os sistemas eletrônicos instalados na safra, incluindo os dados coletados e processados na plataforma. |
| Atores | Agrônomo |
| Pré-condições | O usuário deve estar logado na plataforma e possuir perfil de agrônomo |
| Pós-condições | O usuário deve ter acesso à todos os sistemas eletrônicos e dados processados dentro do sistema |
| Fluxo principal | 1. O agrônomo entra na plataforma <br> 2. Clica em "Sistemas instalados" <br> 3. Vê a lista de sistemas instalados na vinícola <br> 4. Entra em um sistema que deseja gerenciar <br> 5. Visualiza os sensores instalados, dados coletados, entre outras informações |
| Fluxo de exceção | |

#### UC 12 - Acionar suporte dos sistemas eletrônicos
| | |
| -- | -- |
| Descrição | O usuário conseguirá entrar em contato com a equipe de suporte aos sistemas eletrônicos instalados |
| Atores | Agricultor e Administrador |
| Pré-condições | O usuário deve estar logado |
| Pós-condições | O usuário deve poder acionar o suporte via mensagem na plataforma |
| Fluxo principal | 1. O agricultor entra na plataforma <br> 2.Entra em "Sistemas instalados" <br> 3. Clica em "acionar suporte"  <br> 4. Preenche um formulário informando qual o sistema e qual foi o problema identificado |
| Fluxo de exceção | |

#### UC 13 - Parar coleta de dados no servidor
| | |
| -- | -- |
| Descrição | Assim que um contrato for finalizado o sistema deve interromper a coleta de dados no servidor |
| Atores | Sistema |
| Pré-condições | O contrato deve ter sido cancelado ou ter finalizado |
| Pós-condições | O sistema deve apenas mostrar os dados até aquele momento, mas não coletar nenhum dado novo |
| Fluxo principal | 1. O contrato da vinícola é cancelado <br> 2. O sistema interrompe a coleta de dados no servidor |
| Fluxo de exceção | |


#### UC 14 - Cancelar contrato
| | |
| -- | -- |
| Descrição | O administrador poderá cancelar um contrato, interrompendo as suas atividades |
| Atores | Administrador |
| Pré-condições | O usuário deve estar logado e possuir perfil de administrador |
| Pós-condições | 1. O sistema deve parar a coleta realizada para os sistemas referente àquele contrato <br> 2. O sistema deve interromper o acesso do usuário ao acionamento do suporte para os sistemas físicos <br> 3. O usuário se limitará apenas a visualizar os dados já processados até aquele momento <br> 4. O usuário receberá uma notificação informando sobre o cancelamento. [UC 09] |
| Fluxo principal | 1. Administrador deve logar no sistema <br> 2. Administrador deve selecionar "Contratos" <br> 3. Deve clicar em "cancelar contrato"|
| Fluxo de exceção | |

#### UC 15 - Mostrar tráfego de dados
| | |
| -- | -- |
| Descrição | O administrador verá o tráfego de dados dos sistemas presentes nas vinícolas |
| Atores | Administrador |
| Pré-condições | O usuário deve estar logado e possuir perfil de administrador |
| Pós-condições | O administrador deve ser capaz de visualizar pausas ou irregularidades através do tráfego de dados dos sensores |
| Fluxo principal | 1. O administrador loga no sistema <br> 2. Ele entra na aba "Sistemas eletrônicos" <br> 3. Ele clica em "fluxo de dados" <br> 4. Ele visualiza uma lista de sistemas e sensores <br> 5. Ele filtra pelo sistema que deseja <br> 6.Clica em "filtrar" <br> 7. Entra no sistema e visualiza o tráfego |
| Fluxo de exceção | |

#### UC 16 - Notificar mau funcionamento de sistema eletrônico
| | |
| -- | -- |
| Descrição | Caso algum sistema apresente um grande intervalo de tempo sem enviar dados, o sistema deve notificar ao administrador sobre o problema no sistema eletrônico |
| Atores | Sistema |
| Pré-condições | Algum sensor deve deixar de enviar dados com regularidade |
| Pós-condições | Administrador recebe notificação e email informando qual o sistema eletrônico que possivelmente está com problemas |
| Fluxo principal | 1. O usuário deve entrar no sistema <br> 2. Clicar no ícone correspondente à "sistema físico" <br> 3. Abrirá uma página discriminando os sistemas instalados na vinícola 4. O usuário deve clicar em acionar supor|
| Fluxo de exceção | |


#### UC 17 - Visualizar vinícolas
| | |
| -- | -- |
| Descrição | O administrador poderá visualizar as vinícolas cadastradas |
| Atores | Administrador |
| Pré-condições | O usuário deve estar logado e possuir perfil de administrador |
| Pós-condições | O usuário deve visualizar todas as vinícolas cadastradas |
| Fluxo principal | 1. Usuário entra no sistema <br> 2. Usuário clica em "Vinícolas" |
| Fluxo de exceção | |

#### UC 18 - Cadastrar contrato
| | |
| -- | -- |
| Descrição | O administrador irá realizar o cadastro de novos contratos na plataforma |
| Atores | Administrador |
| Pré-condições | O usuário deve estar logado e possuir perfil de administrador |
| Pós-condições | O contrato deve estar pronto para receber os dados da vinícola a ser vinculada |
| Fluxo principal | 1. O administrador entra no sistema <br> 2. Clica em "novo contrato" <br> 3. Preenche o formulário com os dados do novo contrato <br> 4. O usuário é redirecionado para a página de contratos |
| Fluxo de exceção | |

#### UC 19 - Cadastrar vinícola
| | |
| -- | -- |
| Descrição | O administrador irá cadastrar as vinícolas associando-as a um contrato |
| Atores | Administrador |
| Pré-condições | 1. O usuário deve estar logado e ser administrador <br> 2. O contrato deve existir e estar ativo <br> 3. Os sistemas devem estar instalados e cadastrados |
| Pós-condições | 1. Devem ser criados os emails do agricultor e do agrônomo responsável, fornecendo-os acesso ao sistema <br> 2. A vinícola deve aparecer na lista de vinícolas cadastradas <br> 3. Os sistemas devem ser associados à vinícola  <br> 4. Os dados devem ser captados do servidor |
| Fluxo principal | 1. O administrador entra no sistema <br> 2. Pesquisa pelo contrato que receberá a vinícola <br> 3. Entra no contrato <br> 4. Clica em "cadastrar vinícola" <br> 5. Preenche o formulário <br> 6. Clica em "cadastrar" |
| Fluxo de exceção | |

## 5. Visão Lógica

### 5.1. Visão Geral: Pacotes e Camadas

 <p align = "justify"> A arquitetura conhecida como Cliente/Servidor se baseia em dois módulos principais, em que ambos farão a comunicação entre si, fornecendo aos usuários os serviços desejados.
 <p align = "justify"> No caso do projeto SmartVit, o Cliente nesse caso será a aplicação desenvolvida em ReactJS, enquanto o Servidor será a API do Django.


A figura a seguir mostra a estrutura de pacotes do sistema:

![img](imgs/packagediagram.png)

### 5.2. Visão Geral: Banco de dados

A visão geral de banco de dados consiste na diagramação básica que define como será estruturado o banco de dados da aplicação. Nesse sentido, será apenas um banco de dados não relacional, cujos documentos estão explicitados abaixo. 

![img](imgs/modelagem-banco.png)


## 6. Desempenho

 <p align = "justify"> O desempenho do sistema está relacionado ao projeto todo. Por se tratar de um navegador PWA, a conexão com a internet e o aparelho eletrônico  são os fatores que pode causar os maiores problemas de seu desempenho, pois são os que demandam processamento mais abrangentes.

## 7. Qualidade

<p align = "justify"> O projeto terá uma interface gráfica intuitiva, portando as informações principais que provém do projeto para que seja eficaz aos usuários. Todas os dados que venham a ser rceolhidos serão armazenados e uma tela que demostra essas informações será providenciada. </p>
<p align = "justify"> O código-fonte será bem estruturado, seguindo as normas definidas no documento de folha de estilo, respeitando a padronização e manutenibilidade, criando testes e respeitando as métricas deferidas no Plano de Qualidade.

# Histórico de revisão

| O quê | Quem  | Quando |
| - | - | - |
|  Versão 01 - visão de casos de uso e visão geral: Banco de Dados | Adrianne Alves | 22/05/2020 |
| Versão 01 - Introdução e Desempenho e Qualidade e Visão Geral: Pacotes e Camada | João Lucas | 22/05/2020 |
| Versão 01 - Representação da Arquitetura e Restrições e Metas Arquiteturais | Lucas Vitor | 22/05/2020 |
| Versão 01 - Reorganização do documento | Adrianne Alves da Silva | 23/08/2020 |
| Versão 02 - Inserção de diagrama lógico de banco de dados | Adrianne Alves da Silva | 09/09/2020 |