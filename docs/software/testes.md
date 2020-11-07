# Plano de Teste e Validação de Software

O processo de validação do software prevê a análise e teste do seu funcionamento. O produto de software desenvolvido foi projetado para integrar-se ao módulo eletrônico recebendo requisições com os dados coletados dos sensores. Para atestar o funcionamento adequado da integração e processamento de dados, foi feita a projeção de um cliente da aplicação que envia dados aleatórios simulando o funcionamento do software. 

Mas além disso, como especificado no nosso tópico de inovações, foi utilizado o BDD para realização de testes da aplicação, mas como decisão da equipe, documentada no apêndice Decisões da Equipe de Software, presentes no fim deste documento, foram realizados testes apenas em parte do sistema. A fim de garantir a correta execução dos principais módulos, foram relacionados os códigos fontes que formam o core da aplicação. Os principais códigos selecionados foram: Indicadores, Gateway BFF do Usuário, Gateway BFF do Administrador e notificações.

## Cenários de Teste

### Exemplo de cenário BDD do Indicador

```Python

Funcionalidade: Gerar indicadores a partir dos dados captados pelo microservico de captacao de dados.

  Cenario: Rodar o teste de verificação de dados do indicador
      Dado os dados captados pelo servico
       
       Quando a funcao calculate_indicators recebe os dados
       
       Entao a funcao gera os indicadores

```

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

# Histórico de revisão

| O quê | Quem  | Quando |
| - | - | - |
| Primeira versão do documento | João Lucas | 07/11/2020 |