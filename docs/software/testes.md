# Plano de Teste e Validação de Software

O processo de validação do software prevê a análise e teste do seu funcionamento. O produto de software desenvolvido foi projetado para integrar-se ao módulo eletrônico recebendo requisições com os dados coletados dos sensores. Para atestar o funcionamento adequado da integração e processamento de dados, foi feita a projeção de um cliente da aplicação que envia dados aleatórios simulando o funcionamento do software. 

Mas além disso, como especificado no nosso tópico de inovações, foi utilizado o BDD para realização de testes da aplicação, mas como decisão da equipe, documentada no apêndice Decisões da Equipe de Software, presentes no fim deste documento, foram realizados testes apenas em parte do sistema. A fim de garantir a correta execução dos principais módulos, foram relacionados os códigos fontes que formam o core da aplicação. Os principais códigos selecionados foram: Indicadores, Gateway BFF do Usuário, Gateway BFF do Administrador e notificações.

## Cenários de Teste

###  Gherkin da captação de dados

```Python

Funcionalidade: Captar dados do modulo eletronico
  Como Sistema, quero captar os dados coletados pelo modulo
  eletronico para que seja possivel calcular indicadores,
  gerar alertas e indicacoes para o software como um todo.

  Contexto: O ambiente de captacao de dados esta preparado
    Dado que o servico de captacao de dados esteja ativo

  Cenario: Captar dado dos sensores
      Dado que o sistema deseja captar dados dos sensores
       
       Quando captar dados dos sensores
       | sensor      | pH  | vento | umidade | temperatura |
       | 78as7as78as | 3.5 | 10    |  25     | 31          |
       Entao os dados captados devem ser persistidos no
       banco de dados da aplicacao
       | sensor      | pH  | vento | umidade | temperatura |
       | 78as7as78as | 3.5 | 10    |  25     | 31          |
```

###  Gherkin dos Indicadores

```Python

Funcionalidade: Gerar indicadores 
  Como sistema, a partir dos dados captados pelo microservico de captacao de dados,
  sera gerado os indicadores.

    Contexto: Gerar indicadores gerais de visualizacao da vinicola
    Dado que o servico de captacao de dados forneca os dados 

  Cenario: Rodar o teste de verificação de dados do indicador
      Dado os dados captados pelo servico
       
       Quando a funcao calculate_indicators recebe os dados
       
       Entao a funcao gera os indicadores

```

###  Gherkin da Notificação de Clima e Intemperie

```Python

Funcionalidade: Notificar clima e interperie ao usuario
  Como Sistema, desejo alertar o usuario sobre mudancas climaticas e intemperies.

    Contexto: Criar notificacao ao usuario sobre o clima e intermperie
    Dado que o servico de captacao de dados forneca os dados 

  Cenario: Rodar o teste de verificacao e validacao da condicao do envio da notificacao
      Dado os dados captados pelo microsservico de captura de dados
       
       Quando a funcao get_climate recebe os dados do servico
       
       Entao a funcao notifica o alerta ao usuario

```

###  Gherkin da Notificação de cancelamento do contrato
```Python

Funcionalidade: Notificar sobre cancelamento do contrato ao usuario
  Como Sistema, desejo alertar o usuario sobre o cancelamento do contrato.

    Contexto: Criar notificacao ao usuario sobre o alerta desejado
    Dado que o administrador cancelou o contrato 

  Cenario: Rodar o teste de verificacao e validacao da condicao do envio da notificacao
      Dado o post de cancelamento for executado
       
       Quando a funcao save_notification_request_by_contract recebe a condicao desejada
       
       Entao a funcao notifica o alerta ao usuario

```

###  Gherkin da Notificação sobre liberamento do contrato
```Python

Funcionalidade: Notificar sobre liberamento do contrato ao usuario
  Como Sistema, desejo alertar o usuario sobre o liberamento do contrato.

    Contexto: Criar notificacao ao usuario sobre o alerta desejado
    Dado que foi feita a liberacao da vinicola 

  Cenario: Rodar o teste de verificacao e validacao da condicao do envio da notificacao
      Dado o post de liberacao do contrato for executado
       
       Quando a funcao save_notification_request_by_user recebe a condicao desejada
       
       Entao a funcao notifica o alerta ao usuario

```

###  Gherkin do BFF do microsserviço Feedback do Usuário 
```Python

Funcionalidade: Captar requisicao feita no frontend e enviar ao microsservico feedback atraves do BFF 
  Como Sistema, quero pegar os dados informados no frontend pelo usuario,
  e registra-los no meu servico.

  Contexto: O usuario registra o feedback 
    Dado que os dados resgistrados utilizem o servico atraves do BFF

  Cenario: Usuario registrar informações
      Dado a pagina do feedback
       
       Quando ele registar os campos do feedback

       Entao os dados devem passar pelo servico atraves do BFF e armazenar no banco

```

###  Gherkin do BFF do microsserviço Feedback do Usuário 
```Python

Funcionalidade: Captar requisicao feita no frontend e enviar ao microsservico feedback atraves do BFF 
  Como Sistema, quero pegar os dados informados no frontend pelo usuario,
  e registra-los no meu servico.

  Contexto: O usuario registra o feedback 
    Dado que os dados resgistrados utilizem o servico atraves do BFF

  Cenario: Usuario registrar informações
      Dado a pagina de registro do feedback
       
       Quando ele registar os campos do feedback

       Entao os dados devem passar pelo servico atraves do BFF e armazenar no banco

```

###  Gherkin do BFF do microsserviço Indicador do Usuário 
```Python

Funcionalidade: Captar requisicao feita no frontend e enviar ao microsservico indicator atraves do BFF 
  Como Sistema, quero pegar os dados informados no frontend pelo usuario,
  e visualiza-los no meu servico.

  Contexto: O usuario seleciona o indicador 
    Dado que os dados gerados do indicador utilizem o servico atraves do BFF

  Cenario: Usuario visualiza as informacoes dos indicadores desejados
      Dado a pagina de indicadores
       
       Quando ele seleciona o indicador

       Entao os dados devem passar pelo servico atraves do BFF e retornar ao usuario atraves de infomacoes

```

###  Gherkin do BFF do microsserviço Pragas do Usuário 
```Python

Funcionalidade: Captar requisicao feita no frontend e enviar ao microsservico pest atraves do BFF 
  Como Sistema, quero pegar os dados informados no frontend pelo usuario,
  e registra-los no meu servico.

  Contexto: O usuario registra a praga 
    Dado que os dados resgistrados utilizem o servico atraves do BFF

  Cenario: Usuario registrar pragas
      Dado a pagina de registro da praga
       
       Quando ele registar os campos da praga

       Entao os dados devem passar pelo servico atraves do BFF e armazenar no banco

```

###  Gherkin do BFF do microsserviço Suporte do Usuário 
```Python

Funcionalidade: Captar requisicao feita no frontend e enviar ao microsservico support atraves do BFF 
  Como Sistema, quero pegar os dados informados no frontend pelo usuario,
  e registra-los no meu servico.

  Contexto: O usuario registra o suporte 
    Dado que os dados resgistrados utilizem o servico atraves do BFF

  Cenario: Usuario registrar suporte desejado
      Dado a pagina de registro do suporte
       
       Quando ele registar os campos do suporte

       Entao os dados devem passar pelo servico atraves do BFF e armazenar no banco

```

###  Gherkin do BFF do microsserviço Contrato do Administrador 
```Python

Funcionalidade: Captar requisicao feita no frontend e enviar ao microsservico contract atraves do BFF 
  Como Sistema, quero pegar os dados informados no frontend pelo administrador,
  e registra-los no meu servico.

  Contexto: O administrador registra o contrato 
    Dado que os dados resgistrados utilizem o servico atraves do BFF

  Cenario: Administrador registrar contrato desejado
      Dado a pagina de registro do contrato
       
       Quando ele registar os campos do contrato

       Entao os dados devem passar pelo servico atraves do BFF e armazenar no banco

```

###  Gherkin do BFF do microsserviço Pedidos do Administrador 
```Python

Funcionalidade: Captar requisicao feita no frontend e enviar ao microsservico contract atraves do BFF 
  Como Sistema, quero pegar os dados informados no frontend pelo administrador,
  e visualiza-los no meu servico.

  Contexto: O administrador ver os pedidos de contrato 
    Dado que os dados que foram resgistrados utilizem o servico atraves do BFF

  Cenario: Administrador visualiza as solicitacoes de contratos desejados
      Dado a pagina de visualizar solicitacoes
       
       Quando ele selecionar a pagina desejada

       Entao os dados devem passar pelo servico atraves do BFF e retornar ao administrador em forma de informacoes

```


###  Gherkin do BFF do microsserviço Sensor do Administrador 
```Python

Funcionalidade: Captar requisicao feita no frontend e enviar ao microsservico sensor atraves do BFF 
  Como Sistema, quero pegar os dados informados no frontend pelo administrador,
  e registra-los no meu servico.

  Contexto: O administrador registra o sensor 
    Dado que os dados resgistrados utilizem o servico atraves do BFF

  Cenario: Administrador registrar sensor desejado
      Dado a pagina de registro do sensor
       
       Quando ele registar os campos do sensor

       Entao os dados devem passar pelo servico atraves do BFF e armazenar no banco

```


###  Gherkin do BFF do microsserviço Sistema do Administrador 
```Python

Funcionalidade: Captar requisicao feita no frontend e enviar ao microsservico system atraves do BFF 
  Como Sistema, quero pegar os dados informados no frontend pelo administrador,
  e registra-los no meu servico.

  Contexto: O administrador registra o sistema 
    Dado que os dados resgistrados utilizem o servico atraves do BFF

  Cenario: Administrador registrar sistema desejado
      Dado a pagina de registro do sistema
       
       Quando ele registar os campos do sistema

       Entao os dados devem passar pelo servico atraves do BFF e armazenar no banco

```


###  Gherkin do BFF do microsserviço Vinícola do Administrador 
```Python

Funcionalidade: Captar requisicao feita no frontend e enviar ao microsservico winery atraves do BFF 
  Como Sistema, quero pegar os dados informados no frontend pelo administrador,
  e registra-los no meu servico.

  Contexto: O administrador registra a vinicola 
    Dado que os dados resgistrados utilizem o servico atraves do BFF

  Cenario: Administrador registrar vinicola desejada
      Dado a pagina de registro da vinicola
       
       Quando ele registar os campos da vinicola

       Entao os dados devem passar pelo servico atraves do BFF e armazenar no banco

```

###  Gherkin do BFF do microsserviço Usuário do Administrador 
```Python

Funcionalidade: Captar requisicao feita no frontend e enviar ao microsservico user atraves do BFF 
  Como Sistema, quero pegar os dados informados no frontend pelo administrador,
  e visualiza-los no meu servico.

  Contexto: O administrador ver os usuarios cadastrados 
    Dado que os dados que foram resgistrados utilizem o servico atraves do BFF

  Cenario: Administrador visualiza os usuarios cadastrados na aplicacao
      Dado a pagina de gerenciar usuarios
       
       Quando ele selecionar a pagina desejada

       Entao os dados devem passar pelo servico atraves do BFF e retornar ao administrador em forma de informacoes

```

# Histórico de revisão

| O quê | Quem  | Quando |
| - | - | - |
| Primeira versão do documento | João Lucas | 07/11/2020 |
| Adição dos demais cenários | João Lucas | 07/11/2020 |