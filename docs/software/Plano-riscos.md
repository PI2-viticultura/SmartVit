# Plano de Gerenciamento de Riscos

- [1. Introdução](#_1-introdução)
  * [1.1 Metodologia](#_metodologia)
- [2. Análise Quantitativa](#_2-análise-quantitativa)
  * [a. Probabilidade](#_a-probabilidade)
  * [b. Impacto](#_b-impacto)
  * [c. Prioridade](#_c-prioridade)
- [3. Plano de ação](#_3-plano-de-ação)
  * [3.1. Comunicação Interna](#_31-comunicação-interna)
- [ Histórico de revisão](#_histórico-de-revisão)

## 1.  Introdução

O plano de gerenciamento de risco consiste na descrição dos processos de mitigação de riscos já identificados que afetam o processo de desenvolvimento da equipe. Este documento trata exclusivamente dos riscos relacionados à equipe de desenvolvimento de software, abrangendo situações e problemas que podem vir a prejudicar o andamento da concepção do produto. Aqui também se encontram as medidas a serem tomadas para que estes problemas não ocorram. 

### 1.1 Metodologia 

Primeiramente, foi necessário realizar o levantamento dos riscos. Este processo foi realizado em conjunto com os membros da equipe de desenvolvimento de software, durante a pandemia e revisado pelos membros que entraram na equipe após redistribuição das equipes com a volta das aulas em formato EAD. Em posse da relação dos riscos, foi estabelecida uma escala de pesos para as probabilidades e os impactos, o que deu origem à prioridade dos mesmos. Os intervalos relativos aos valores de prioridade deram origem aos níveis que são utilizados para gerenciamento dos riscos.

## 2. Análise Quantitativa

A análise quantitativa tem por objetivo a priorização e categorização dos riscos de acordo com duas métricas: probabilidade (chances de um risco ocorrer) e impacto (o quanto um risco impacta no projeto). Em posse desses valores é possível determinar a prioridade de um risco, que de acordos com os níveis auxiliam na gestão e tomadas de decisão quanto às ações a serem tomadas.

### a. Probabilidade

A probabilidade, como se refere o nome traz uma classificação da probabilidade do risco acontecer. Esse indicador vai de 0 a 5, compreendendo de probabilidades nulas a probabilidades muito altas.

<table>
  <tr>
   <td>
<strong>Probabilidade</strong>
   </td>
   <td><strong>Peso</strong>
   </td>
  </tr>
  <tr>
   <td>Nula
   </td>
   <td>0
   </td>
  </tr>
  <tr>
   <td>Muito baixa
   </td>
   <td>1
   </td>
  </tr>
  <tr>
   <td>Baixa
   </td>
   <td>2
   </td>
  </tr>
  <tr>
   <td>Média
   </td>
   <td>3
   </td>
  </tr>
  <tr>
   <td>Alta
   </td>
   <td>4
   </td>
  </tr>
  <tr>
   <td>Muito alta
   </td>
   <td>5
   </td>
  </tr>
</table>

<br> 

### b. Impacto

O impacto consiste em um indicador que relaciona o quanto a ocorrência deste risco poderá afetar a equipe. Ele compreende, assim como a probabilidade, valores que vão de 0 a 5, englobando desde o impacto nulo ao muito alto. 

<table>
  <tr>
   <td>
<strong>Impacto</strong>
   </td>
   <td><strong>Peso</strong>
   </td>
  </tr>
  <tr>
   <td>Nulo
   </td>
   <td>0
   </td>
  </tr>
  <tr>
   <td>Muito baixo
   </td>
   <td>1
   </td>
  </tr>
  <tr>
   <td>Baixo
   </td>
   <td>2
   </td>
  </tr>
  <tr>
   <td>Médio
   </td>
   <td>3
   </td>
  </tr>
  <tr>
   <td>Alto
   </td>
   <td>4
   </td>
  </tr>
  <tr>
   <td>Muito alto
   </td>
   <td>5
   </td>
  </tr>
</table>

<br> 

### c. Prioridade

Baseando-se no impacto e na probabilidade é calculada a prioridade dos riscos, o que determina a urgência com que medidas devem ser tomadas para mitigar um risco que pode atrapalhar ou impedir o desenvolvimento do projeto de software. 

A prioridade segue a seguinte relação entre impacto e probabilidade (impacto x probabilidade):

<table>
  <tr>
   <td><strong>I/P</strong>
   </td>
   <td><strong>Muito baixa</strong>
   </td>
   <td><strong>Baixa</strong>
   </td>
   <td><strong>Média</strong>
   </td>
   <td><strong>Alta</strong>
   </td>
   <td><strong>Muito alta</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Muito baixo</strong>
   </td>
   <td>1
   </td>
   <td>2
   </td>
   <td>3
   </td>
   <td>4
   </td>
   <td>5
   </td>
  </tr>
  <tr>
   <td><strong>Baixo</strong>
   </td>
   <td>2
   </td>
   <td>4
   </td>
   <td>6
   </td>
   <td>8
   </td>
   <td>10
   </td>
  </tr>
  <tr>
   <td><strong>Médio</strong>
   </td>
   <td>3
   </td>
   <td>6
   </td>
   <td>9
   </td>
   <td>12
   </td>
   <td>15
   </td>
  </tr>
  <tr>
   <td><strong>Alto</strong>
   </td>
   <td>4
   </td>
   <td>8
   </td>
   <td>12
   </td>
   <td>16
   </td>
   <td>20
   </td>
  </tr>
  <tr>
   <td><strong>Muito alto</strong>
   </td>
   <td>5
   </td>
   <td>10
   </td>
   <td>15
   </td>
   <td>20
   </td>
   <td>25
   </td>
  </tr>
</table>

<br> 
<br>

Para a classificação dos riscos, utiliza-se a tabela de níveis, cujo intervalo diz respeito à priorização realizada no passo anterior. Os níveis são:

<table>
  <tr>
   <td><strong>Nível</strong>
   </td>
   <td><strong>Intervalo</strong>
   </td>
  </tr>
  <tr>
   <td>Muito baixo
   </td>
   <td>1 a 5
   </td>
  </tr>
  <tr>
   <td>Baixo
   </td>
   <td>6 a 10
   </td>
  </tr>
  <tr>
   <td>Médio
   </td>
   <td>11 a 15
   </td>
  </tr>
  <tr>
   <td>Alto
   </td>
   <td>16 a 20
   </td>
  </tr>
  <tr>
   <td>Muito alto
   </td>
   <td>21 a 25
   </td>
  </tr>
</table>

<br>
<br>

## 3. Plano de ação 

Foram relacionados e categorizados os riscos abaixo. A partir desta tabela será realizado um processo interno de gerenciamento de riscos, responsabilidade de todos os membros da equipe. 

<br>
<table>
  <tr>
   <td><strong>Risco</strong>
   </td>
   <td><strong>Ação</strong>
   </td>
   <td><strong>Plano de ação</strong>
   </td>
   <td><strong>Prob.</strong>
   </td>
   <td><strong>Impacto</strong>
   </td>
   <td><strong>Prioridade</strong>
   </td>
  </tr>
  <tr>
   <td>Indefinição de escopo
   </td>
   <td>Prevenir
   </td>
   <td>Validar o escopo de forma assertiva com toda a equipe, incluindo as demais áreas
   </td>
   <td>4
   </td>
   <td>4
   </td>
   <td>16
   </td>
  </tr>
  <tr>
   <td>Projeto de domínio complexo
   </td>
   <td>Prevenir
   </td>
   <td>Definir escopo concretizável dentro da realidade da equipe e do tempo disponível na disciplina, relativo à duração do semestre
   </td>
   <td>5
   </td>
   <td>5
   </td>
   <td>25
   </td>
  </tr>
  <tr>
   <td>Desistência de membros
   </td>
   <td>Prevenir
   </td>
   <td>Reforçar a importância de cada membro para a equipe e a importância da disciplina para o integrante
   </td>
   <td>1
   </td>
   <td>5
   </td>
   <td>5
   </td>
  </tr>
  <tr>
   <td>Alteração na Arquitetura
   </td>
   <td>Mitigar
   </td>
   <td>Encontrar soluções que evitem a perda de soluções já implementadas
   </td>
   <td>3
   </td>
   <td>5
   </td>
   <td>15
   </td>
  </tr>
  <tr>
   <td>Falha na Comunicação
   </td>
   <td>Prevenir
   </td>
   <td>Monitorar a comunicação da equipe e reforçar sua importância
   </td>
   <td>3
   </td>
   <td>5
   </td>
   <td>15
   </td>
  </tr>
  <tr>
   <td>Baixa produtividade dos integrantes do grupo
   </td>
   <td>Mitigar
   </td>
   <td> Realizar acompanhamento da situação dos membros e auxiliá-los reforçando a sua importância na equipe
   </td>
   <td>2
   </td>
   <td>5
   </td>
   <td>10
   </td>
  </tr>
  <tr>
   <td>Erro de Priorização
   </td>
   <td>Prevenir
   </td>
   <td>Monitorar priorização e utilizar técnicas para priorizar
   </td>
   <td>3
   </td>
   <td>3
   </td>
   <td>9
   </td>
  </tr>
  <tr>
   <td>Problemas relacionados ao ambiente de desenvolvimento
   </td>
   <td>Mitigar
   </td>
   <td>Padronizar ambiente de desenvolvimento dos integrantes
   </td>
   <td>3
   </td>
   <td>4
   </td>
   <td>12
   </td>
  </tr>
  <tr>
   <td>Defeito de algum equipamento
   </td>
   <td>Prevenir
   </td>
   <td>Cuidar dos equipamentos de trabalho
   </td>
   <td>2
   </td>
   <td>4
   </td>
   <td>8
   </td>
  </tr>
  <tr>
   <td>Falta de conhecimento/experiência com as tecnologias escolhidas
   </td>
   <td>Prevenir
   </td>
   <td>Realizar treinamentos e pareamentos entre os membros do grupo
   </td>
   <td>1
   </td>
   <td>5
   </td>
   <td>5
   </td>
  </tr>
</table>

# Histórico de revisão

| O quê | Quem  | Quando |
| - | - | - |
|  Primeira versão do documento | Lucas Vitor | 17/04/2020 |
| Revisão entrega | Adrianne Alves | 24/04/2020 |
| Aprimoramento | Lucas Vitor | 24/04/2020 |
| Revisão, reorganização, restruturação do documento segundo diretrizes EAD | Adrianne Alves da Silva | 23/08/2020