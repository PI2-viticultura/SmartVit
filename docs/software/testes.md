# Plano de Teste e Validação de Software

O processo de validação do software prevê a análise e teste do seu funcionamento. O produto de software desenvolvido foi projetado para integrar-se ao módulo eletrônico recebendo requisições com os dados coletados dos sensores. Para atestar o funcionamento adequado da integração e processamento de dados, foi feita a projeção de um cliente da aplicação que envia dados aleatórios simulando o funcionamento do software. 

Mas além disso, como especificado no nosso tópico de inovações, foi utilizado o BDD para realização de testes da aplicação, mas como decisão da equipe, documentada no apêndice Decisões da Equipe de Software, presentes no fim deste documento, foram realizados testes apenas em parte do sistema. A fim de garantir a correta execução dos principais módulos, foram relacionados os códigos fontes que formam o core da aplicação. Os principais códigos selecionados foram: Indicadores, Gateway BFF do Usuário, Gateway BFF do Administrador e notificações.

## Cenários de Teste

### Exemplo de cenário BDD da captação de dados

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

### Exemplo de cenário BDD dos Indicadores

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

### Exemplo de cenário BDD da Notificação de Clima e Intemperie

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

### Exemplo de cenário BDD da Notificação de cancelamento do contrato
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

### Exemplo de cenário BDD da Notificação sobre liberamento do contrato
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

### Exemplo de cenário BDD da Notificação sobre liberamento do contrato


# Histórico de revisão

| O quê | Quem  | Quando |
| - | - | - |
| Primeira versão do documento | João Lucas | 07/11/2020 |
| Adição dos demais cenários | João Lucas | 07/11/2020 |