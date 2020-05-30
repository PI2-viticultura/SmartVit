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

 <p align = "justify"> &emsp;&emsp; O Documento de Arquitetura de Software tem como finalidade fornecer a visão geral de software da arquitetura do projeto SmartVit, utilizando representações arquiteturais, como a visão lógica e casos de uso, com a finalidade de facilitar o entendimento dos processos e funcionamento de todo o sistema. Tem também como objetivo transmitir as decisões arquiteturais significativas tomadas em relação ao mesmo.</p>

###  1.2. Escopo do documento

<p align="justify"> &emsp;&emsp; Atráves do documento, pretende-se que possível obter entendimento da arquitetura do projeto, permitindo que os leitores a compreensão do funcionamento do SmartVit, e suas abordagens utilizadas para o seu desenvolvimento. </p>

## 2. Representação da Arquitetura

<p align="justify"> &emsp;&emsp; A arquitetura adotada possui organização em três camadas: módulo eletrônico, onde os dados serão coletados e transmitidos; API, onde os dados serão requisitados, tratados e distribuídos; e front-end, onde os dados serão entregues ao usuário de forma inteligível. </p>

<p align="justify"> &emsp;&emsp; O principal relacionamento do projeto é implementado como um cliente-servidor. O servidor, implementado em Django Rest Framework, será responsável pela manutenção e processamento dos dados, enquanto ao cliente, representado pelo front-end e implementado em ReactJS, será encarregada a função de fornecer os dados dos usuários. </p>

### 2.1. Diagrama de Relações

<p align="justify"> &emsp;&emsp; Abaixo estão descritos os módulos que integram o sistema e suas relações. </p>

![img](imgs/arquitetura.png)

#### 2.1.1. Módulo Eletrônico

<p align="justify"> &emsp;&emsp; Módulo físico responsável por captar dados como umidade, pH do solo, umidade e irrigação das vinícolas cadastradas. </p>

#### 2.1.2. API

<p align="justify"> &emsp;&emsp; A API é a unidade da arquitetura responsável por receber, processar e armazenar dados do módulo eletrônico. Neste ambiente serão realizadas as análises preditivas e de safra, gerenciamento das vinícolas e acionamento de sistemas (recebendo a entrada do usuário e repassando para o módulo eletrônico responsável). </p>

#### 2.1.3. Aplicação Web

<p align="justify"> &emsp;&emsp; A aplicação web é a unidade responsável por criar a ponte entre o usuário e a API, enviando dados para requisições e recebendo dados para então formulá-los de forma inteligível ao usuário. </p>

#### 2.1.4. Banco de Dados

<p align="justify"> &emsp;&emsp; Unidade responsável por armazenar os dados recebidos e processados pela API. </p>

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

### 4.1. Diagrama de Casos de Uso

### 4.2. Descrição dos Casos de Uso

## 5. Visão Lógica

### 5.1. Visão Geral: Pacotes e Camadas

 <p align = "justify"> &emsp;&emsp; A arquitetura conhecida como Cliente/Servidor se baseia em dois módulos principais, em que ambos farão a comunicação entre si, fornecendo aos usuários os serviços desejados.
 <p align = "justify"> &emsp;&emsp; No caso do projeto SmartVit, o Cliente nesse caso será a aplicação desenvolvida em ReactJS, enquanto o Servidor será a API do Django.


A figura a seguir mostra a estrutura de pacotes do sistema:

![img](imgs/packagediagram.png)

### 5.2. Visão Geral: Banco de dados

## 6. Desempenho

 <p align = "justify"> &emsp;&emsp; O desempenho do sistema está relacionado ao projeto todo. Por se tratar de um navegador PWA, a conexão com a internet e o aparelho eletrônico  são os fatores que pode causar os maiores problemas de seu desempenho, pois são os que demandam processamento mais abrangentes.

## 7. Qualidade

<p align = "justify"> &emsp;&emsp; O projeto terá uma interface gráfica intuitiva, portando as informações principais que provém do projeto para que seja eficaz aos usuários. Todas os dados que venham a ser rceolhidos serão armazenados e uma tela que demostra essas informações será providenciada. </p>
<p align = "justify"> &emsp;&emsp; O código-fonte será bem estruturado, seguindo as normas definidas no documento de folha de estilo, respeitando a padronização e manutenibilidade, criando testes e respeitando as métricas deferidas no Plano de Qualidade.
