# Principais decisões da equipe

- [1. Introdução](#_1-introdução)
  * [1.1. Objetivos](#_11-objetivos)
- [2. Decisões Arquiteturais](#_2-decisões-arquiteturais)
- [3. Decisões de Tecnologia](#_3-decisões-de-tecnologia)
- [4. Decisões de Metodologia](#_4-decisões-de-metodologia)
- [5. Decisões de Outros Enfoques](#_5-decisões-de-outros-enfoques)
- [ Histórico de revisão](#_histórico-de-revisão)

## 1. Introdução

### 1.1. Objetivos

 <p align = "justify"> Este documento tem como finalidade fornecer detalhes sobre as decisões tomadas pela equipe, afim de permitir a rastreabilidade e entendimento do processo lógico que levou às escolhas tomadas pela equipe incluindo arquitetura, tecnologias, metodologias e todas as informações relevantes 
 para o desenvolvimento da aplicação. </p>

## 2. Decisões Arquiteturais

 <p align = "justify"> Tendo em mãos as definições iniciais de escopo e requisitos, foi definida uma arquitetura cliente-servidor, com a possibilidade de alteração para uma arquitetura de três camadas, com uma camada responsável pela captação e tratamento inicial dos dados, uma camada responsável pelo processamento e uma camada responsável pela apresentação dos dados. A diagramação inicial está apresentada abaixo:</p>

 ![img](imgs/arquitetura.png)


 <p align = "justify"> Com o amadurecimento da proposta, uma nova visão sobre a arquitetura do software foi criada, e apartir dela foi optado pela escolha de uma abordagem de microsserviços devido, dentre outros motivos, à robustez da aplicação, ncessidade de evolução e independência de alguns serviços. A diagramação está apresentada abaixo:</p>

 ![img](imgs/arquitetura.png)


 <p align = "justify"> Após a definição da arquitetura de microsserviços, foi percebida a possibilidade de criação de frontends distintos entre os usuários da aplicação. A partir desta nova abordagem, foi decidida a implementação da abordagem BFF (Back For Frontend), uma abordagem que permite contextualizar os microsserviços aos frontends distintos da aplicação. A diagramação está apresentada abaixo:</p>

 ![img](imgs/arquitetura.png)


## 3. Decisões de Tecnologia

## 4. Decisões de Metodologia

## 5. Decisões de Outros Enfoques


# Histórico de revisão

| O quê | Quem  | Quando |
| - | - | - |
| Primeira versão do documento | Lucas Vitor | 12/09/2020 |