# Plano de Teste e Validação de Software

O processo de validação do software prevê a análise e teste do seu funcionamento. O produto de software desenvolvido foi projetado para integrar-se ao módulo eletrônico recebendo requisições com os dados coletados dos sensores. Para atestar o funcionamento adequado da integração e processamento de dados, foi feita a projeção de um cliente da aplicação que envia dados aleatórios simulando o funcionamento do software. 

Mas além disso, como especificado no nosso tópico de inovações, foi utilizado o BDD para realização de testes da aplicação, mas como decisão da equipe, documentada no apêndice Decisões da Equipe de Software, presentes no fim deste documento, foram realizados testes apenas em parte do sistema. A fim de garantir a correta execução dos principais módulos, foram relacionados os códigos fontes que formam o core da aplicação. Os principais códigos selecionados foram: Indicadores, Gateway BFF do Usuário, Gateway BFF do Administrador e notificações.

## Cenários de Teste

###  Gherkin da captação de dados

```Python

Feature: Captar dados do modulo eletronico
  Como Sistema, quero captar os dados coletados pelo modulo
  eletronico para que seja possivel calcular indicadores,
  gerar alertas e indicacoes para o software como um todo.

  Context: O ambiente de captacao de dados esta preparado
    Dado que o servico de captacao de dados esteja ativo

  Scenario: Captar dado dos sensores
      Given que o sistema deseja captar dados dos sensores

       When captar dados dos sensores
       | sensor      | pH  | vento | umidade | temperatura |
       | 78as7as78as | 3.5 | 10    |  25     | 31          |
       Then os dados captados devem ser persistidos no banco de dados da aplicacao
       | sensor      | pH  | vento | umidade | temperatura |
       | 78as7as78as | 3.5 | 10    |  25     | 31          |
```

###  Gherkin dos Indicadores

```Python

Feature: aptar requisicao feita no frontend e enviar dados dos  indicadores ao microsservico indicator atraves do BFF 
  Como Sistema, quero pegar os dados dos indicadores e visualiza-los no meu servico.

  Context: O usuario ver os indicadores
    Dado que os dados que foram resgistrados utilizem o servico atraves do BFF

    Scenario: Usuario visualiza os indicadores cadastrados na aplicacao
        Given a pagina de visualizar indicadores
        When a pagina de visualizar indicadores
        Then o bff requisita o microsservico indicator

```

###  Gherkin de Cadastro de Contrato

```
Feature: criar requisicao e enviar dados do contrato ao microsservico admin-api atraves do BFF 
  Como Sistema, quero registrar um contrato na aplicacao,
  e armazenar no meu servico.

  Context: O administrador criar os contratos na aplicacao
    Dado que os dados sejam resgistrados e utilizem o servico atraves do BFF

    Scenario: Administrador cadastra os contratos na aplicacao
        Given a pagina de criar novo contrato
        When ele regista novo conteudo do contrato da solicitacao
        | contractor | cpf_cnpj    | address       | phoneNumber | initialDate | status | endDate    | winery                   |
        | Joao Alves | 45212563455 | rua Sao Paulo | 61996853214 | 25-01-2020  | 1      | 25-01-2021 | 5fa6f3398799b84e7c71ba39 |
        Then certifica que o contrato foi feito
        | contractor | cpf_cnpj    | address       | phoneNumber | initialDate | status | endDate    | winery                   |
        | Joao Alves | 45212563455 | rua Sao Paulo | 61996853214 | 25-01-2020  | 1      | 25-01-2021 | 5fa6f3398799b84e7c71ba39 |

```

###  Gherkin de Cadastro de Pedido

```
Feature: criar requisicao e enviar dados do pedido ao microsservico admin-api atraves do BFF 
  Como Sistema, quero registrar um pedido na aplicacao,
  e armazenar no meu servico.

  Context: O administrador criar os pedidos na aplicacao
    Dado que os dados sejam resgistrados e utilizem o servico atraves do BFF

    Scenario: Administrador cadastra os pedidos na aplicacao
        Given a pagina de criar novo pedido
        When ele regista novo conteudo do pedido da solicitacao
        | description | name         | email          | phoneNumber | status |
        | Testar bdd  | Joao Ninguem | test@gmail.com | 61996853214 | 0      |
        Then certifica que o pedido foi feito
        | description | name         | email          | phoneNumber | status |
        | Testar bdd  | Joao Ninguem | test@gmail.com | 61996853214 | 0      |

```

###  Gherkin de Listar Contratos
```
Feature: aptar requisicao feita no frontend e enviar dados do contrato ao microsservico admin atraves do BFF 
  Como Sistema, quero pegar os dados do contrato informados no frontend pelo administrador,
  e visualiza-los no meu servico.

  Context: O administrador ver os contratos cadastrados 
    Dado que os dados que foram resgistrados utilizem o servico atraves do BFF

    Scenario: Administrador visualiza os contratos cadastrados na aplicacao
        Given a pagina de gerenciar contratos
        When ele visualizar os contratos desejados
        Then pega os contratos cadastrados
```


###  Gherkin de Listar Pedidos
```
Feature: aptar requisicao feita no frontend e enviar dados do pedido ao microsservico admin atraves do BFF 
  Como Sistema, quero pegar os dados do pedido informados no frontend pelo administrador,
  e visualiza-los no meu servico.

  Context: O administrador ver os pedidos cadastrados 
    Dado que os dados que foram resgistrados utilizem o servico atraves do BFF

    Scenario: Administrador visualiza os pedidos cadastrados na aplicacao
        Given a pagina de gerenciar pedidos
        When ele visualizar os pedidos desejados
        Then pega os pedidos registrados
```

###  Gherkin de BFF do Suporte
```
Feature: Captar requisicao feita no frontend e enviar ao microsservico support atraves do BFF 
  Como Sistema, quero pegar os dados informados no frontend pelo usuario,
  e registra-los no meu servico.

  Context: O usuario registra o suporte 
    Dado que os dados resgistrados utilizem o servico atraves do BFF

    Scenario: Usuario registrar suporte desejado
        Given a pagina de registro do suporte
        When ele registar os campos do suporte
        | priority | problem                        | description                               |
        | Alta     | Sistema eletronico com defeito | sistema esta aquecendo muito, o que fazer |
        Then os dados devem passar pelo servico atraves do BFF e armazenar no banco
        | priority | problem                        | description                               |
        | Alta     | Sistema eletronico com defeito | sistema esta aquecendo muito, o que fazer |
```

###  Gherkin de Listagem das Pragas
```
Feature: Captar requisicao feita no frontend e enviar ao microsservico pestt atraves do BFF 
  Como Sistema, quero pegar os dados informados no frontend pelo usuario,
  e registra-los no meu servico.

  Context: O usuario registra a praga
    Dado que os dados resgistrados utilizem o servico atraves do BFF

    Scenario: Usuario registrar praga desejada
        Given a pagina de registro da praga
        When ele registar os campos da praga
        | idVineyard               | type     | startTime                 |
        | 5f87a0efbf0df955915a3ebb | Largatas | 2020-10-15T02:07:08+00:00 |
        Then os dados devem passar pelo servico atraves do BFF e armazenar no banco
        | idVineyard               | type     | startTime                 |
        | 5f87a0efbf0df955915a3ebb | Largatas | 2020-10-15T02:07:08+00:00 | 
```


###  Gherkin da Notificação do Clima
```
Feature: Testar se a notificação envia o alerta ao usuario desejado
  Como Sistema, desejo notificar ao usuario um alerta de clima

  Context: O usuario recebe o alerta

    Scenario: Sistema manda um alerta ao usuario do clima
        Given a conexao com o sistema da notificao do clima
        When a conexao esteja estavel
        Then o alerta seja enviado ao usuario
```

###  Gherkin da Notificação do Sistema de Irrigação
```
Feature: Testar se a notificação envia o alerta do sistema de irrigacao ao usuario desejado
  Como Sistema, desejo notificar ao usuario um alerta quando acionado o sistema de irrigacao

  Context: O usuario recebe o alerta

    Scenario: Sistema manda um alerta ao usuario do sistema de irrigacao
        Given a conexao com o sistema da notificao
        When o sistema seja ativado
        Then o alerta seja enviado 
```

###  Gherkin do BFF de Usuário
```
Feature: criar requisicao e enviar ao microsservico user atraves do BFF 
  Como Sistema, quero registrar um usuario na aplicacao atraves,
  e armazenar no meu servico.

  Context: O administrador criar os usuarios na aplicacao
    Dado que os dados sejam resgistrados e utilizem o servico atraves do BFF

    Scenario: Administrador cadastra os usuarios na aplicacao
        Given a pagina de criar novo usuario
        When ele regista novo conteudo da solicitacao
        | name         | cpf        | email           | password | type       | situation | winery                   |
        | Joao Ninguem | 3654128900 | teste@gmail.com | 30061998 | Agricultor | Ativo     | 5f87a0efbf0df955915a3ebb |
        Then o bff requisita o microsservico para criar informacao
        | name         | cpf        | email           | password | type       | situation | winery                   |
        | Joao Ninguem | 3654128900 | teste@gmail.com | 30061998 | Agricultor | Ativo     | 5f87a0efbf0df955915a3ebb |
```

###  Gherkin da Listagem de Usuários Cadastrados
```
Feature: aptar requisicao feita no frontend e enviar ao microsservico user atraves do BFF 
  Como Sistema, quero pegar os dados informados no frontend pelo administrador,
  e visualiza-los no meu servico.

  Context: O administrador ver os usuarios cadastrados 
    Dado que os dados que foram resgistrados utilizem o servico atraves do BFF

    Scenario: Administrador visualiza os usuarios cadastrados na aplicacao
        Given a pagina de gerenciar usuarios
        When ele visualizar os usuarios desejados
        Then o bff requisita o microsservico desejado
```

###  Gherkin do BFF de Sensor
```
Feature: criar requisicao e enviar os dados do sensor ao microsservico winery atraves do BFF 
  Como sistema, quero registrar um sensor na aplicacao atraves,
  e armazenar no meu servico.

  Context: O administrador criar os sensores na aplicacao
    Dado que os dados sejam resgistrados e utilizem o servico atraves do BFF

    Scenario: Administrador cadastra os sensores na aplicacao
        Given a pagina de criar novo sensor
        When ele regista novo conteudo do sensor da solicitacao
        | location | identifier | type     | situation | system_id                |
        | Norte    | KXY        | Series X | Ativo     | 5f9ee3c0b62731672936ca28 |
        Then o bff requisita o microsservico para criar informacao do sensor
        | location | identifier | type     | situation | system_id                |
        | Norte    | KXY        | Series X | Ativo     | 5f9ee3c0b62731672936ca28 | 
```

###  Gherkin da Listagem de Sensores Cadastrados
```
Feature: aptar requisicao feita no frontend e enviar informacoes do sensor ao microsservico winery atraves do BFF 
  Como Sistema, quero pegar os dados informados no frontend pelo administrador,
  e visualiza-los no meu servico.

  Context: O administrador ver os sensores cadastrados 
    Dado que os dados que foram resgistrados utilizem o servico atraves do BFF

    Scenario: Administrador visualiza os sensores cadastradas na aplicacao
        Given a pagina de gerenciar sensores
        When ele visualizar os sensores desejados
        Then confirma se a listagem foi pega 
```

###  Gherkin do BFF de Sistema
```
Feature: criar requisicao e enviar os dados do sistema ao microsservico winery atraves do BFF 
  Como Sistema, quero registrar um sistema na aplicacao atraves,
  e armazenar no meu servico.

  Context: O administrador criar os sistemas na aplicacao
    Dado que os dados sejam resgistrados e utilizem o servico atraves do BFF

    Scenario: Administrador cadastra os sistemas na aplicacao
        Given a pagina de criar novo sistema
        When ele regista novo conteudo do sistema da solicitacao
        | latitude | longitude | status     | winery_id                |
        | 1454.55  | 154895.12 | Desativado | 5fa0c880d578d4bc349dc376 |
        Then confirma se a listagem do cadastro do sistema foi pega
        | latitude | longitude | status     | winery_id                |
        | 1454.55  | 154895.12 | Desativado | 5fa0c880d578d4bc349dc376 |
```

###  Gherkin da Listagem de Sistemas Cadastrados
```
Feature: aptar requisicao feita no frontend e enviar informacoes do sensor ao microsservico winery atraves do BFF 
  Como Sistema, quero pegar os dados informados no frontend pelo administrador,
  e visualiza-los no meu servico.

  Context: O administrador ver os sistemas cadastrados 
    Dado que os dados que foram resgistrados utilizem o servico atraves do BFF

    Scenario: Administrador visualiza os sistemas cadastradas na aplicacao
        Given a pagina de gerenciar sistemas
        When ele visualizar os sistemas desejados
        Then confirma se a listagem do sistema foi pega
```

###  Gherkin do BFF de Vinícola
```

Feature: criar requisicao e enviar ao microsservico winery atraves do BFF 
  Como Sistema, quero registrar uma vinicola na aplicacao atraves,
  e armazenar no meu servico.

  Context: O administrador criar as vinicolas na aplicacao
    Dado que os dados sejam resgistrados e utilizem o servico atraves do BFF

    Scenario: Administrador cadastra as vinicolas na aplicacao
        Given a pagina de criar nova vinicola
        When ele regista novo conteudo da solicitacao
        | name                 | address              | contract_id              |
        | Vinicola dos Alveres | Fazendas do Sul - RS | 5f87a04fff9628aaeeea43a9 |
        Then o bff requisita o microsservico para criar informacao
        | name                 | address              | contract_id              |
        | Vinicola dos Alveres | Fazendas do Sul - RS | 5f87a04fff9628aaeeea43a9 |
```

###  Gherkin da Listagem de Vinícolas Cadastradas
```
Feature: aptar requisicao feita no frontend e enviar ao microsservico winery atraves do BFF 
  Como Sistema, quero pegar os dados informados no frontend pelo administrador,
  e visualiza-los no meu servico.

  Context: O administrador ver as vinicolas cadastradas 
    Dado que os dados que foram resgistrados utilizem o servico atraves do BFF

    Scenario: Administrador visualiza as vinicolas cadastradas na aplicacao
        Given a pagina de gerenciar vinicolas
        When ele visualizar as vinicolas desejadas
        Then o bff requisita o microsservico desejado 
```

# Histórico de revisão

| O quê | Quem  | Quando |
| - | - | - |
| Primeira versão do documento | João Lucas | 07/11/2020 |
| Adição dos demais cenários | João Lucas | 07/11/2020 |