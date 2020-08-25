## GQM - Goal Question Metric

- [1. Introdução](#_1-introdução)
- [2. Metas](#_2-metas)
  * [2.1. Qualidade de Software](#_21-qualidade-de-software)
  * [2.2. Produtividade](#_22-produtividade)
- [3. Questões](#_3-questões)
  * [3.1. Questões da Meta de Qualidade de Software](#_31-questões-da-meta-de-qualidade-de-software)
  * [3.2. Questões da Meta de Produtividade](#_32-questões-da-meta-de-produtividade)
- [4. Métricas](#_4-métricas)
  * [4.1. Métricas para Meta de Qualidade de Software](#_41-métricas-para-meta-de-qualidade-de-software)
    * [4.1.1 Cobertura de Testes](#_411-cobertura-de-testes)
    * [4.1.2 Formatação do Código-fonte](#_412-formatação-do-código-fonte)
  * [4.2. Métricas para Meta de Produtividade](#_42-métricas-para-meta-de-produtividade)
     * [4.2.1 Burndown](#_421-burndown)
     * [4.2.2 Velocity](#_422-velocity)
- [5. Referências](#_5-referências)
- [ Histórico de revisão](#_histórico-de-revisão)

## 1. Introdução

<p align = "justify">GQM é uma abordagem top-down, desenvolvida por Victor Basili, utilizada para facilitar o processo de medição de processos de desenvolvimento de software. O uso da abordagem específica quais serão as medições a serem utilizadas para garantir a qualidade da aplicação, através de metas. Para isso, utiliza-se conjuntos precisos de questões e de regras para interpretação dos dados em que resultam em métricas, alcançando assim, a resolução das metas de qualidade. </p>

<p align = "justify">Esta abordagem possui três níveis:</p>

**Conceitual**: Definição das metas do software (Goals); </p>
**Operacional**: Levantamento das questões (Questions) para abordagens relacionadas as meta definidas no Nível Conceituals; </p>
**Quantitativo**: Levantamento das métricas (Metrics) que responderão às questões definidas no Nível Operacional. </p>

## 2. Metas

<p align = "justify">No primeiro nível, deve-se definir as metas do projeto, baseando-se nos conceitos de criação de metas definidas pelo GQM, que consiste em:

<table>
    <tr>
        <td>
            <b>Analisar</b>
        </td>
        <td>
            <i>o que deve ser analisado</i>
        </td>
    </tr>
    <tr>
        <td>
            <b>Com o propósito de</b>
        </td>
        <td>
            <i>o propósito da medição</i>
        </td>
    </tr>
    <tr>
        <td>
            <b>Em relação a</b>
        </td>
        <td>
            <i>o que será analisado</i>
        </td>
    </tr>
    <tr>
        <td>
            <b>Do ponto de vista de</b>
        </td>
        <td>
            <i>quem utilizará os dados coletados</i>
        </td>
    </tr>
    <tr>
        <td>
            <b>No contexto</b>
        </td>
        <td>
            <i>qual o contexto de análise</i>
        </td>
    </tr>
</table>
</p>

### 2.1. Qualidade de Software

<table>
    <tr>
        <td>
            <b>Analisar</b>
        </td>
        <td>
            Código fonte
        </td>
    </tr>
    <tr>
        <td>
            <b>Com o propósito de</b>
        </td>
        <td>
            Melhorar
        </td>
    </tr>
    <tr>
        <td>
            <b>Em relação a</b>
        </td>
        <td>
            Qualidade do software
        </td>
    </tr>
    <tr>
        <td>
            <b>Do ponto de vista dos</b>
        </td>
        <td>
            Alunos de engenharia de software
        </td>
    </tr>
    <tr>
        <td>
            <b>No contexto</b>
        </td>
        <td>
            do projeto SmartVit
        </td>
    </tr>
</table>

### 2.2. Produtividade

<table>
    <tr>
        <td>
            <b>Analisar</b>
        </td>
        <td>
            As atividades designadas a equipe de software
        </td>
    </tr>
    <tr>
        <td>
            <b>Com o propósito de</b>
        </td>
        <td>
            Criar e aperfeiçoar o projeto
        </td>
    </tr>
    <tr>
        <td>
            <b>Em relação a</b>
        </td>
        <td>
            Produtividade
        </td>
    </tr>
    <tr>
        <td>
            <b>Do ponto de vista da</b>
        </td>
        <td>
            dos membros de software
        </td>
    </tr>
    <tr>
        <td>
            <b>No contexto</b>
        </td>
        <td>
            do projeto SmartVit
        </td>
    </tr>
</table>

</p>

## 3. Questões

<p align = "justify">No nível Operacional, deve-se definir as questões que servem para classificar e aperfeiçoar os objetivos abordados nas metas.

</p>

### 3.1. Questões da Meta de Qualidade de Software

- O produto apresenta uma boa manutenibilidade do software?
- O projeto apresenta qualidade de código?
</p>


### 3.2. Questões da Meta de Produtividade

- A equipe realiza as entregas de forma constante?
- As atividades dividas estão homogêneas, para que não seja sobrecarregado os membros e nem o projeto?
</p>


## 4. Métricas

<p align = "justify">No último nível, define-se o processo das métricas que respondam as perguntas referentes as metas estipuladas. Para tal é utilizada a seguinte tabela:

<table>
    <tr>
        <td>
            <b>Objetivo da medição</b>
        </td>
        <td>
            <i>Qual o objetivo ao considerar a métrica</i>
        </td>
    </tr>
    <tr>
        <td>
            <b>Descrição</b>
        </td>
        <td>
            <i>Descrição da métrica</i>
        </td>
    </tr>
    <tr>
        <td>
            <b>Coleta</b>
        </td>
        <td>
            <i>Como a métrica é coletada (periodicidade e reponsável)</i>
        </td>
    </tr>
    <tr>
        <td>
            <b>Procedimento</b>
        </td>
        <td>
            <i>Como a métrica será coletada</i>
        </td>
    </tr>
    <tr>
        <td>
            <b>Análise</b>
        </td>
        <td>
            <i>Análise da métrica de acordo com categorias determinadas</i>
        </td>
    </tr>
    <tr>
        <td>
            <b>Providência</b>
        </td>
        <td>
            <i>Medidas que serão tomadas caso a métrica mostre resultados negativos</i>
        </td>
    </tr>
</table>

</p>

### 4.1. Métricas para Meta de Qualidade de Software

#### 4.1.1 Cobertura de Testes 
<table>
    <tr>
        <td>
            <b>Objetivo da medição</b>
        </td>
        <td>
            Assegurar a confiabilidade e manutenibilidade do código
        </td>
    </tr>
    <tr>
        <td>
            <b>Descrição</b>
        </td>
        <td>
            Determina a porcentagem do código que foi efetivamente testada
        </td>
    </tr>
    <tr>
        <td>
            <b>Coleta</b>
        </td>
        <td>
            Responsável: Membros de Engenharia de Software. </p>
            Periodicidade: A princípio, ao fim de cada sprint.
        </td>
    </tr>
    <tr>
        <td>
            <b>Procedimento</b>
        </td>
        <td>
            Através das ferramentas, onde o código será submetido.
        </td>
    </tr>
    <tr>
        <td>
            <b>Análise</b>
        </td>
        <td>
            A cobertura de testes do código deverá estar acima de 90% para a entrega no último ponto de controle. Por meio das informações obtidas será possível garantir certa confiabilidade do software.
        </td>
    </tr>
    <tr>
        <td>
            <b>Providência</b>
        </td>
        <td>
            A partir da definição e obrigatoriedade da realização dos testes, Pull Requests serão aceitos somente se passarem nos testes.
        </td>
    </tr>
</table>

</p>

#### 4.1.2 Formatação do Código-fonte

<table>
    <tr>
        <td>
            <b>Objetivo da medição</b>
        </td>
        <td>
            Possuir um padrão de desenvolvimento em relação à estética do código
        </td>
    </tr>
    <tr>
        <td>
            <b>Descrição</b>
        </td>
        <td>
            Leva em consideração a folha de estilo do projeto para determinar se o código está seguindo os padrões exigidos
        </td>
    </tr>
    <tr>
        <td>
            <b>Coleta</b>
        </td>
        <td>
            Responsável: Membros de Software <br>
            Periodicidade: Ao fim de cada sprint.
        </td>
    </tr>
    <tr>
        <td>
            <b>Procedimento</b>
        </td>
        <td>
            Através da análise dos reviews
        </td>
    </tr>
    <tr>
        <td>
            <b>Análise</b>
        </td>
        <td>
            O código deverá ser considerado de acordo ou não com a folha de estilo adotada
        </td>
    </tr>
    <tr>
        <td>
            <b>Providência</b>
        </td>
        <td>
            Refatoração do código para que a folha de estilo seja repazinada.
        </td>
    </tr>
</table>

</p>

### 4.2. Métricas para Meta de Produtividade

#### 4.2.1 Burndown 

<table>
    <tr>
        <td>
            <b>Objetivo da medição</b>
        </td>
        <td>
            Verificar se as entregas estão sendo realizadas de forma contínua.
        </td>
    </tr>
    <tr>
        <td>
            <b>Descrição</b>
        </td>
        <td>
            O burndown se basea na pontuação das issues para criar um gráfico contendo a informação de quantos pontos foram concluídos até determinado momento.
        </td>
    </tr>
    <tr>
        <td>
            <b>Coleta</b>
        </td>
        <td>
            Responsável: Membros de Software<br>
            Periodicidade: Ao fim de cada sprint
        </td>
    </tr>
    <tr>
        <td>
            <b>Procedimento</b>
        </td>
        <td>
            O quadro é criado a partir do plugin apropriado. E o resultado será coletado ao fim de cada sprint
        </td>
    </tr>
    <tr>
        <td>
            <b>Análise</b>
        </td>
        <td>
            Existem três casos possíveis: as atividades estão mais fáceis do que deveriam, nesse caso a equipe entrega antes do prazo estipulado; as atividades estão mais difíceis do que deveriam, nesse caso a equipe não entrega ou entrega de somente ao fim da sprint; e por fim, o caso ótimo, onde a equipe entrega da forma esperada
        </td>
    </tr>
    <tr>
        <td>
            <b>Providência</b>
        </td>
        <td>
            As atividades da sprint serão planejadas de acordo com o feedback da sprint anterior afim de aumentar ou diminuir a dificuldade de acordo com o desempenho demonstrado.
        </td>
    </tr>
</table>

</p>

#### 4.2.2 Velocity 

<table>
    <tr>
        <td>
            <b>Objetivo da medição</b>
        </td>
        <td>
            Verificar se a equipe tem o desempenho esperado
        </td>
    </tr>
    <tr>
        <td>
            <b>Descrição</b>
        </td>
        <td>
            Determina a quantidade de pontos que a equipe consegue entregar por sprint.
        </td>
    </tr>
    <tr>
        <td>
            <b>Coleta</b>
        </td>
        <td>
            Responsável: Membros de Software<br>
            Periodicidade: ao fim de cada sprint
        </td>
    </tr>
    <tr>
        <td>
            <b>Procedimento</b>
        </td>
        <td>
            O quadro é criado a partir do plugin apropriado. E o resultado será coletado ao fim de cada sprint.
        </td>
    </tr>
    <tr>
        <td>
            <b>Análise</b>
        </td>
        <td>
            O velocity deve ficar dentro de uma área de pontuação média, sem mudanças abruptas entra sprints, sempre tendendo a se estabelecer numa média ou aumentar no decorrer das sprints
        </td>
    </tr>
    <tr>
        <td>
            <b>Providência</b>
        </td>
        <td>
            As atividades da sprint serão planejadas de acordo com o feedback da sprint anterior afim de aumentar ou diminuir a quantidade de pontos de acordo com o desempenho demonstrado.
        </td>
    </tr>
</table>

</p>

## 5. Referências

BASILI, Victor; CALDIERA, Gianluigi; ROMBACH, H. Dieter. **The Goal Question Metric Approach**. Universidade de Maryland, Maryland. 2002.  Disponível em: <http://www.cs.umd.edu/~mvz/handouts/gqm.pdf> Acesso em 25 abr. 2020.

# Histórico de revisão

| O quê | Quem  | Quando |
| - | - | - |
| Primeira versão do documento | João Lucas | 24/04/2020 |
| Revisão entrega | Lucas Vitor | 22/05/2020 |
| Segunda versão | João Lucas | 25/05/2020 |
| Revisão entrega | Adrianne Alves | 25/05/2020 |
| Adição de histórico, organização e atualização de informações| Adrianne Alves da Silva | 25/08/2020 |
