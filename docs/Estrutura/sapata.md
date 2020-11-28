# Memorial de Cálculo da Sapata

<p align = "justify"> A fixação do poste no solo será feita por meio de uma estrutura sapata,
composta por um bloco de concreto soldado à uma chapa metálica e
chumbadores ligando as duas seções, seguindo os princípios aplicáveis da
**NBR 8800**.

<p align = "justify"> O desenho esquemático da sapata está mostrado na Figura
[\[fig: esquema\_pimenta\]][1] em que *h* e *b* são respectivamente o
comprimento e a largura do poste (150 mm e 50 mm), e l<sub>x</sub> e l<sub>y</sub> são as medidas da chapa que será projetada.

<center>
<figure>
  <img src="/docs/Estrutura/imgs_sapata/esquema_sapata.png"  />
  <figcaption>
      Imagem esquemática da sapata. (Fonte: Pimenta, 2010)
  </figcaption>
</figure>
</center>
<br>
<br>

<p align = "justify"> As equações referentes à *I<sub>*x*</sub>* e *I<sub>*y*</sub>* são
apresentadas a seguir, Equação [\[eq: lx\]][1] e [\[eq: ly\]][2]:

Obs.: EQUAÇÕES U.1 E U.2

<p align = "justify"> A variável n<sub>b</sub> é referente ao número de chumbadores e as variáveis a<sub>1</sub> e a<sub>2</sub> são
definidas de acordo com o tipo de chumbador, estão apresentadas na Figura [1][] e são, respectivamente, 4 chumbadores, 40 mm e 80 mm.


<center>
<figure>
  <img src="/docs/Estrutura/imgs_sapata/tab_pimenta.png"  />
  <figcaption>
      Valores de referência para a sapata. (Fonte: NBR 8800)
  </figcaption>
</figure>
</center>
<br>
<br>

<p align = "justify"> Considerando os valores apresentados na Figura [1][] e as Equações
[\[eq: lx\]][2] e [\[eq: ly\]][3], as dimensões da chapa de base são 310
mm e 160 mm, portanto, as dimensões do bloco de concreto são 310 mm e 160 mm.

<p align = "justify"> A seguir, é feita a avaliação da tensão resistente de cálculo,
σ<sub>c,Rd</sub>, de acordo com a Equação
[\[eq: tensao resistente de calculo\]][1]. Na equação, fck é 10 MPa,
*FS* é um fator de segurança (no cálculo foi utilizado 1,4), *γ* é um
fator de ponderação das resistências, que pode ser obtido na **NBR
8800** e a razão A2/A1 representa a razão entre as áreas da chapa e do
bloco de concreto.

Obs.: EQUAÇÃO U.3

<p align = "justify"> A distribuição de esforços na estrutura é avaliada em função da
excentricidade (*e*), calculada pela Equação
[\[eq: excentricidade\]][1], que representa a relação entre força de
compressão (450 N) e momento fletor ( 263 *N* ⋅ *m*) resultante atuando
na estrutura.

Obs.: EQUAÇÃO U.4

<p align = "justify"> Dado que a excentricidade obedece a relação mostrada na Equação
[\[eq: relacao\_excentricidade\]][2], a estrutura se comporta como a
Figura [\[fig: casos\_pimenta\]][3].


Obs.: EQUAÇÃO U.5

<center>
<figure>
  <img src="/docs/Estrutura/imgs_sapata/casos_pimenta.png"  />
  <figcaption>
      Tipos de distribuição de esforços em pilares sob compressão. (Fonte: PIMENTA, 2010)
  </figcaption>
</figure>
</center>
<br>
<br>

<p align = "justify"> A equação a seguir, Equação [\[eq: lc\]][1], apresenta o cálculo de
*lc*, que é o comprimento do trecho da placa sujeito à pressão de
contato do concreto. Na equação, *x* é a distância do centro do
chumbador ao centro do poste, no projeto foi usado 150 mm.

Obs.: EQUAÇÃO U.6

<p align = "justify"> A espessura mínima da chapa pode ser calculada comparando-se as duas
expressões abaixo, Equações [\[eq: n\_aguento\_mais\]][1] e
[\[eq: ja\_deu\]][2], a espessura mínima resultante deve ser a que tiver
maior valor dentre elas.

Obs.: EQUAÇÃO U.7 e U.8

<p align = "justify"> Nas equações acima, *l<sub>max</sub>* é calculado pela Equação
[\[eq: lmax\]][1], *f<sub>y</sub>* é a tensão de escoamento do aço da
chapa *γ*<sub>a<sub>1</sub></sub> é um coeficiente de ponderação que
pode ser obtido na **NBR 8800**, , e é calculado de acordo com a Equação
[\[eq: Ft,sd\]][2].

Obs.: EQUAÇÃO U.9 e U.10

A espessura resultante da chapa foi de 2,7 mm.

* ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. **NBR 8800 - Projeto de estruturas de aço e de estruturas mistas de aço e concreto de edifícios.** Rio de Janeiro, BRA, 2008.

* PIMENTA, R. J. **Ligações de apoio de pilares em perfil tubular.** 2010.
