Feature: Testar se o behave está devidamente instalado

    Scenario: Rodar o teste de verificação da instalação
        Given behave instalado
        When implenta-se um teste
        Then behave conseguirá testar