# Folha de Estilo

## 1. Introdução

<p align = "justify"> &emsp;&emsp; A folha de estilo é usado para padronização e organização do código de um projeto. O uso desse documento serve para instruir os programadores o padrão de estilo do código de uma determinada linguagem de programação, em que a estrutura do código fique compreensível a outros programadores; que fique mais elegante a maneira de escrever o código, e principalmente, aumentar a qualidade interna do software.

## 2. Guia de Estilo da Linguagem Python

### 2.1. Convenção de Nomes

> Nomes de classes devem usar a convenção das iniciais de cada palavra em letra maiúscula

* Não Faça:
      class person_Names:

* Faça:
      class PersonNames:


> Nomes de variáveis devem ser escritos em letra minúscula e separados por underline '_'

* Não Faça:
      PersonName = "John"
      PersonLastName = "Smith"

* Faça:
      person_name = "John"
      person_last_name = "Smith"

> Os nomes de exceções devem seguir a convenção de nomenclatura de classes com o sufixo “Error”

* Não Faça:
      except i_o_error:

* Faça:
      except IOError:

> Os nomes de funções e métodos devem ser minúsculos, com palavras separadas por underline ‘_’

* Não Faça:
      def calcTotal(number_1, number_2):

* Faça:
      def calc_total(number_1, number_2):

> Evitar caracteres ‘l’ (‘L’ minúsculo), ‘O’ (‘o’ maiúsculo) ou ‘I’ (‘i’ maiúsculo) como nomes de variáveis com único caractere

* Não Faça:
      I = True
      l = 47
      O = 3.14

* Faça:
      i = True
      L = 47
      o = 3.14

> Constantes devem ser escritas com todas as letras maiúsculas e palavras separadas por underline ‘_’

* Não Faça:
      max_length = 25

* Faça:
      MAX_LENGTH = 25

### 2.2. Formatação de Código

#### Indentação

> Usar espaçamento devido com 4 espaços

* Não Faça:
      if (constant > iterator)
      do_something()

* Faça:
      if (constant > iterator)
          do_something()


> Alinhar os operandos com a quebra do delimitador

* Não Faça:

      nameAtribute = long_function_name(var_one, var_two,
      var_three, var_four)

 Faça:

      nameAtribute = long_function_name(var_one, var_two,
                                        var_three, var_four)

> Quando for fechar um parênteses, colchetes ou chaves certifica-se de fechar no alinhamento do primeiro caractere não-espaço-branco da última linha.

* Não Faça:

      vector = [1, 2, 3, 4, 5, 6, 7, 8, 9]

* Faça:

      vector = [
      1, 2, 3,
      4, 5, 6,
      7, 8, 9
      ]

> Adicionar duas linhas em branco acima e abaixo das definições de classe e funções top-level

> As definições de métodos dentro de uma classe são cercadas por uma única linha em branco.

> Colocar linhas em branco entre as linhas de código

* Não Faça:
      name = input ('enter your name')
      age = input ('enter your name')
      people = People(name , age)
      print(people.getName())
      print(people.getAge())


 * Faça:

        name = input('enter your name')
        age = input('enter your name')

        people = People(name,age)

        print(people.getName())
        print(people.getAge())


> Imports devem estar em linhas separadas, sempre colocados na parte de cima do arquivo, logo após qualquer comentário e docstrings do arquivo, e antes dos módulos globais e constantes

  * Não Faça:
        import sys, os

  * Faça:
        import os
        import sys

> Uma linha deve ser quebrada depois de um operador binário

* Não Faça:
        income = (gross_wages
                 + taxable_interest
                 + (dividends - qualified_dividends)
                 - ira_deduction
                 - student_loan_interest)

* Faça:
        income = (gross_wages +
                  taxable_interest +
                  (dividends - qualified_dividends) -
                  ira_deduction -
                  student_loan_interest)

### 2.3. Estruturas de Comentários

> Todos os comentários devem começar com letra maiúscula


* Não Faça:

      this is a commentary


* Faça:

      This is a commentary

> Todos os comentários devem ser redigidos em inglês

* Não Faça:

      Isso é um comentário

* Faça:

      This is a commentary   

Todos os comentários devem ter uma linha em branco acima

* Não Faça:
      string_1 = “Hello ”
      string_2 = “World!”
      phrase = string + string2

      Printing “Hello World!”

      print(phrase)

* Faça: </p>
      """

      string_1 = “Hello ”
      string_2 = “World!”
      phrase = string + string2

      Printing “Hello World!”

      print(phrase)

### 2.4. Organização de Estruturas de Controle

> Usar parênteses em estruturas de decisão

* Não Faça:
      if age >= 21:
         print (older)

* Faça:
      if (age >= 21):
          print (older)


> Colocar um espaço entre condicionais muito extensas   

* Não Faça:
      if((name=='Linda'and age==10)or(name=='Jessica'and age == 8)):

* Faça:
      if((name == 'Linda' and age == 10) or
         (name == 'Jessica' and age == 8)):

### 2.5. Rotinas         

> Usar linhas em branco para separar as partes da rotina

* Não Faça:
      def showAccount(accountNumber):
          print(accountNumber)
      def retrieveAccount(accountNumber):
          findNumber()   

* Faça:
      def showAccount(accountNumber):

          print(accountNumber)

      def retrieveAccount(accountNumber):

          findNumber()

> Usar a indentação padrão nos parâmetros da rotina

* Não Faça:
      def setBalance (id, balance, date, user):

* Faça:
      def setBalance (
          id,
          balance,
          date,
          user
      ):

### 2.6. Indentação de Estruturas de Controle

> Quando uma estrutura é subordinada a outra, deve ser recuada sob essa estrutura

* Não Faça:
        if (variable_1 > 100):
            do_this( )
            else:
            do_that( )

* Faça:
       if (variable_1 > 100):
           do_this( )
       else:
           do_that( )

> Em estruturas com mais indentações

* Não Faça:
      if (((var_1 > var_2) && (var_1 > var_3)) || ((var_1 > 1) && (var_2 < 10))|| (var_3 = 0)):
            do_this( )
      else:
            do_that( )
* Faça:
      if (((var_1 > var_2) && (var_1 > var_3)) ||
          ((var_1 > 1) && (var_2 < 10)) ||
           (var_3 = 0)):
            do_this( )
      else:
            do_that( )


## 3. Referências

Google Python Style Guide. Disponível em: <https://google.github.io/styleguide/pyguide.html>. Acesso 30 abr. 2020.

PEP 0008 - Guia de Estilo de Python. Disponível em: <https://wiki.python.org.br/GuiaDeEstilo>. Acesso em: 30 abr. 2020.
