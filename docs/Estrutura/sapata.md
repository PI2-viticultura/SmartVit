# Memorial de Cálculo da Sapata

<p align = "justify"> A fixação do poste no solo será feita por meio de uma estrutura sapata,
composta por um bloco de concreto soldado à uma chapa metálica e
chumbadores ligando as duas seções, seguindo os princípios aplicáveis da
<b>NBR 8800</b>.

<p align = "justify"> O desenho esquemático da sapata está mostrado na Figura 1 em que <i>h</i> e <i>b</i> são respectivamente o comprimento e a largura do poste (150 mm e 50 mm), e <i>l<sub>x</sub></i> e <i>l<sub>y</sub></i> são as medidas da chapa que será projetada.

<center>
<figure>
  <img src="/SmartVit/docs/Estrutura/imgs_sapata/esquema_sapata.png"  />
  <figcaption>
      Figura 1 - Imagem esquemática da sapata. (Fonte: Pimenta, 2010)
  </figcaption>
</figure>
</center>
<br>
<br>

<p align = "justify"> As equações referentes à <i>l<sub>x</sub></i> e <i>l<sub>y</sub></i> são apresentadas a seguir, Equação 1 e 2:

<center>
<figure>
  <img src="/SmartVit/docs/Estrutura/imgs_sapata/eq1.png"  />
  <figcaption>
      Equação 1
  </figcaption>
</figure>
</center>
<br>
<br>

<center>
<figure>
  <img src="/SmartVit/docs/Estrutura/imgs_sapata/eq2.png"  />
  <figcaption>
      Equação 2
  </figcaption>
</figure>
</center>
<br>
<br>

<p align = "justify"> A variável <i>n<sub>b</sub></i> é referente ao número de chumbadores e as variáveis <i>a<sub>1</sub></i> e <i>a<sub>2</sub></i> são
definidas de acordo com o tipo de chumbador, estão apresentadas na Figura 2 e são, respectivamente, 4 chumbadores, 40 mm e 80 mm.


<center>
<figure>
  <img src="/SmartVit/docs/Estrutura/imgs_sapata/tab_pimenta.png"  />
  <figcaption>
      Figura 2 - Valores de referência para a sapata. (Fonte: NBR 8800)
  </figcaption>
</figure>
</center>
<br>
<br>

<p align = "justify"> Considerando os valores apresentados na Figura 2 e as Equações 1 e 2, as dimensões da chapa de base são 310
mm e 160 mm, portanto, as dimensões do bloco de concreto são 310 mm e 160 mm.

<p align = "justify"> A seguir, é feita a avaliação da tensão resistente de cálculo, <i>σ<sub>c,Rd</sub></i>, de acordo com a Equação 3. Na equação, fck é 10 MPa,
<i>σ<sub>FS</sub></i> é um fator de segurança (no cálculo foi utilizado 1,4), <i>γ</i> é um fator de ponderação das resistências, que pode ser obtido na <b>NBR
8800</b> e a razão A2/A1 representa a razão entre as áreas da chapa e do
bloco de concreto.

<center>
<figure>
  <img src="/SmartVit/docs/Estrutura/imgs_sapata/eq3.png"  />
  <figcaption>
      Equação 3
  </figcaption>
</figure>
</center>
<br>
<br>

<p align = "justify"> A distribuição de esforços na estrutura é avaliada em função da
excentricidade (<i>e</i>), calculada pela Equação 4, que representa a relação entre força de compressão (450 N) e momento fletor (263 N⋅m) resultante atuando na estrutura.

<center>
<figure>
  <img src="/SmartVit/docs/Estrutura/imgs_sapata/eq4.png"  />
  <figcaption>
      Equação 4
  </figcaption>
</figure>
</center>
<br>
<br>

<p align = "justify"> Dado que a excentricidade obedece a relação mostrada na Equação 5, a estrutura se comporta como a Figura 3.


<center>
<figure>
  <img src="/SmartVit/docs/Estrutura/imgs_sapata/eq5.png"  />
  <figcaption>
      Equação 5
  </figcaption>
</figure>
</center>
<br>
<br>

<center>
<figure>
  <img src="/SmartVit/docs/Estrutura/imgs_sapata/casos_pimenta.png"  />
  <figcaption>
      Figura 3 - Tipos de distribuição de esforços em pilares sob compressão. (Fonte: PIMENTA, 2010)
  </figcaption>
</figure>
</center>
<br>
<br>

<p align = "justify"> A equação a seguir, Equação 6, apresenta o cálculo de <i>lc</i>, que é o comprimento do trecho da placa sujeito à pressão de
contato do concreto. Na equação, <i>x</i> é a distância do centro do
chumbador ao centro do poste, no projeto foi usado 150 mm.

<center>
<figure>
  <img src="/SmartVit/docs/Estrutura/imgs_sapata/eq6.png"  />
  <figcaption>
      Equação 6
  </figcaption>
</figure>
</center>
<br>
<br>

<p align = "justify"> A espessura mínima da chapa pode ser calculada comparando-se as duas expressões abaixo, Equações 7 e
8, a espessura mínima resultante deve ser a que tiver maior valor dentre elas.

<center>
<figure>
  <img src="/SmartVit/docs/Estrutura/imgs_sapata/eq7.png"  />
  <figcaption>
      Equação 7
  </figcaption>
</figure>
</center>
<br>
<br>

<center>
<figure>
  <img src="/SmartVit/docs/Estrutura/imgs_sapata/eq8.png"  />
  <figcaption>
      Equação 8
  </figcaption>
</figure>
</center>
<br>
<br>

<p align = "justify"> Nas equações acima, <i>l<sub>max</sub></i> é calculado pela Equação 9, <i>f<sub>y</sub></i> é a tensão de escoamento do aço da chapa e <i>γ<sub>a<sub>1</sub></sub></i> é um coeficiente de ponderação que pode ser obtido na <b>NBR 8800</b>, e <i>F<sub>t,Sd</sub></i> é calculado de acordo com a Equação 10.

<center>
<figure>
  <img src="/SmartVit/docs/Estrutura/imgs_sapata/eq9.png"  />
  <figcaption>
      Equação 9
  </figcaption>
</figure>
</center>
<br>
<br>

<center>
<figure>
  <img src="/SmartVit/docs/Estrutura/imgs_sapata/eq10.png"  />
  <figcaption>
      Equação 10
  </figcaption>
</figure>
</center>
<br>
<br>

A espessura resultante da chapa foi de 2,7 mm.

## Referências

ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. **NBR 8800 - Projeto de estruturas de aço e de estruturas mistas de aço e concreto de edifícios.** Rio de Janeiro, BRA, 2008.

PIMENTA, R. J. **Ligações de apoio de pilares em perfil tubular.** 2010.
