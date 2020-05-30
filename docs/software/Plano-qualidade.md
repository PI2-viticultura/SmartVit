# <a name="Plano de Qualidade"> Plano de Qualidade </a>

## 1. <a name="1">Introdução</a>

<p align = "justify"> &emsp;&emsp; O documento tem como finalidade a apresentação do plano de qualidade do projeto. Visando uma boa qualidade de código do projeto, alguns padrões de qualidade e normas foram definidos, tanto quanto as ferramentas que serão utilizadas para monitorar essa qualidade. </p>

## 2. <a name="2">Objetivos do Plano</a>

<p align = "justify"> &emsp;&emsp; A qualidade de software pode ser entendida como o nível de conformidade do sistema com os requisitos funionais e não-funcionais aplicados com o intuito de garantir que os aspectos do projeto sejam atendidos da melhor forma possível, criou-se este documento. </p>

<p align = "justify"> &emsp;&emsp; O plano tem que garantir um acompanhamento a respeito da qualidade do produto nas fases desenvolvimento e de entrega ao cliente, estabelecendo as ferramentas e métricas que possibilitem a análise da mesma. </p>


## 3. <a name="3">Metodologia de Aplicação do Plano</a>

<p align = "justify"> &emsp;&emsp; Visando uma boa qualidade de código do projeto, alguns métricas com padrões de qualidade de corpos de conhecimentos e de normas são definidos, tanto quanto as ferramentas que serão utilizadas para monitorar essa qualidade. Essas métricas serão coletadas periodicamente, com a ajuda de algumas tecnologias definidas. a Metodologia a ser utilizada será a [GQM](https://pi2-viticultura.github.io/SmartVit/#/docs/software/gqm) . </p>

## 4. <a name="4">Métricas</a>

<p align = "justify"> &emsp;&emsp; Para a análise das métricas foram estabelecidos alguns critérios a serem seguidos, classificados entre bom, regular ou crítico. </p>

|                    Métrica                    | Bom          | Regular      | Crítico       |
| :-------------------------------------------: | ------------ | ------------ | ------------- |
|                Manutenibilidade               | A e B        | C            | D ou F        |
|              Duplicação de código             | 0% a 1.5%    | 1.6% a 4%  | acima de 4%   |
|Tamanho dos métodos | Abaixo de 25 linhas | De 25 a 40 linhas | Acima de 40 linhas|
|              Cobertura de código              | acima de 90% | acima de 80% | abaixo de 80% |
|Cobertura de testes unitários | Acima de 90% |De 75% a 90% | Abaixo de 75%|


## 5. Ferramentas e tecnologias utilizadas

* [Codacy](https://www.codacy.com/)
* [Coveralls](https://coveralls.io/)
* [Travis CI](https://travis-ci.org/)
* [Jest](https://jestjs.io/)

## 6. Referências

SOFTWARE TESTING FUNDAMENTALS. Software Quality. Disponível em: <http://softwaretestingfundamentals.com/software-quality/>. Acesso em 22 abr. 2020.
