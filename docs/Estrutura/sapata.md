# Memorial de Cálculo da Sapata

A fixação do poste no solo será feita por meio de uma estrutura sapata,
composta por um bloco de concreto soldado à uma chapa metálica e
chumbadores ligando as duas seções, seguindo os princípios aplicáveis da
**NBR 8800**.

O desenho esquemático da sapata está mostrado na Figura
[\[fig: esquema\_pimenta\]][1] em que *h* e *b* são respectivamente o
comprimento e a largura do poste (150 mm e 50 mm), e l<sub>x</sub> e l<sub>y</sub> são as medidas da chapa que será projetada.

[1]: #fig: esquema_pimenta
<figure>
<img src="figuras/estrutura/esquema_sapata.png" id="fig: esquema_pimenta" alt="Imagem esquemática da sapata. (Fonte:)" /><figcaption aria-hidden="true">Imagem esquemática da sapata. (Fonte:<span class="citation" data-cites="pimenta"></span>)</figcaption>
</figure>

As equações referentes à *I<sub>*x*</sub>* e *I<sub>*y*</sub>* são
apresentadas a seguir, Equação [\[eq: lx\]][1] e [\[eq: ly\]][2]:

$$\\centering
    lx = h + 4 \\cdot a\\textsubscript{1}
    \\label{eq: lx}$$

$$\\centering
    ly = (0,5 \\cdot n\\textsubscript{b} - 1)a\\textsubscript{2} + 2a\\textsubscript{1}
    \\label{eq: ly}$$

  [1]: #eq: lx
  [2]: #eq: ly
A variável é referente ao número de chumbadores e as variáveis e são
definidas de acordo com o tipo de chumbador, estão apresentadas na
Figura [1][] e são, respectivamente, 4 chumbadores, 40 mm e 80 mm.

<figure>
<img src="figuras/estrutura/tab_pimenta.png" id="fig: tab_pimenta" alt="Valores de referência para a sapata. (Fonte: NBR 8800)" /><figcaption aria-hidden="true">Valores de referência para a sapata. (Fonte: NBR 8800)</figcaption>
</figure>

Considerando os valores apresentados na Figura [1][] e as Equações
[\[eq: lx\]][2] e [\[eq: ly\]][3], as dimensões da chapa de base são 310
mm e 160 mm, portanto, as dimensões do bloco de concreto são 310 mm e
160 mm.

  [1]: #fig: tab_pimenta
  [2]: #eq: lx
  [3]: #eq: ly
A seguir, é feita a avaliação da tensão resistente de cálculo,
*σ*<sub>c,Rd</sub>, de acordo com a Equação
[\[eq: tensao resistente de calculo\]][1]. Na equação, fck é 10 MPa,
*FS* é um fator de segurança (no cálculo foi utilizado 1,4), *γ* é um
fator de ponderação das resistências, que pode ser obtido na **NBR
8800** e a razão A2/A1 representa a razão entre as áreas da chapa e do
bloco de concreto.

$$\\centering
    \\sigma \_{c,Rd} = \\frac{fck}{FS\\cdot \\gamma }\\cdot \\sqrt{\\frac{A2}{A1}} = 5,1 \\ MPa
    \\label{eq: tensao resistente de calculo}$$

  [1]: #eq: tensao resistente de calculo
A distribuição de esforços na estrutura é avaliada em função da
excentricidade (*e*), calculada pela Equação
[\[eq: excentricidade\]][1], que representa a relação entre força de
compressão (450 N) e momento fletor ( 263 *N* ⋅ *m*) resultante atuando
na estrutura.

$$\\centering
    e = Msd/Nsd = 584,4 mm
    \\label{eq: excentricidade}$$

Dado que a excentricidade obedece a relação mostrada na Equação
[\[eq: relacao\_excentricidade\]][2], a estrutura se comporta como a
Figura [\[fig: casos\_pimenta\]][3].

  [1]: #eq: excentricidade
  [2]: #eq: relacao_excentricidade
  [3]: #fig: casos_pimenta
$$\\centering
    e = 584,4 \\ mm &gt; \\frac{1}{2}\\cdot \\left ( lx - \\frac{N\_{Sd}}{\\sigma \_{c,Rd}\\cdot ly}\\right ) = 154,72 \\ mm
    \\label{eq: relacao\_excentricidade}$$

<figure>
<img src="figuras/estrutura/casos_pimenta.png" id="fig: casos_pimenta" alt="Tipos de distribuição de esforços em pilares sob compressão. (Fonte: PIMENTA, 2010)" /><figcaption aria-hidden="true">Tipos de distribuição de esforços em pilares sob compressão. (Fonte: PIMENTA, 2010)</figcaption>
</figure>

A equação a seguir, Equação [\[eq: lc\]][1], apresenta o cálculo de
*lc*, que é o comprimento do trecho da placa sujeito à pressão de
contato do concreto. Na equação, *x* é a distância do centro do
chumbador ao centro do poste, no projeto foi usado 150 mm.

  [1]: #eq: lc
$$\\centering
    lc = \\left ( \\frac{lx}{2}+x\\right)-\\sqrt{\\left ( \\frac{lx}{2}+x\\right)^{2}-\\frac{2N\_{Sd}(e+x))}{\\sigma \_{c,Rd}ly}} = 1,33 \\ mm
    \\label{eq: lc}$$

A espessura mínima da chapa pode ser calculada comparando-se as duas
expressões abaixo, Equações [\[eq: n\_aguento\_mais\]][1] e
[\[eq: ja\_deu\]][2], a espessura mínima resultante deve ser a que tiver
maior valor dentre elas.

  [1]: #eq: n_aguento_mais
  [2]: #eq: ja_deu
$$\\centering
    t\_{min,1} = l\_{max}\\sqrt{\\frac{2\\sigma \_{c,Rd}}{(f\_{y}/\\gamma \_{a1}))}}
    \\label{eq: n\_aguento\_mais}$$

$$\\centering
    t\_{min,2} = \\sqrt{\\frac{2n\_{b}\\cdot F\_{t,Sd}\\cdot (m-a\_{1}))}{ly\\cdot (f\_{y}/\\gamma \_{a1}))}}
    \\label{eq: ja\_deu}$$

Nas equações acima, *l<sub>max</sub>* é calculado pela Equação
[\[eq: lmax\]][1], *f<sub>y</sub>* é a tensão de escoamento do aço da
chapa *γ*<sub>a<sub>1</sub></sub> é um coeficiente de ponderação que
pode ser obtido na **NBR 8800**, , e é calculado de acordo com a Equação
[\[eq: Ft,sd\]][2].

  [1]: #eq: lmax
  [2]: #eq: Ft,sd
$$\\centering
    l\_{max} = \\sqrt{l\_{c} \\cdot(2m-l\_{c}))} = 14,86 mm
    \\label{eq: lmax}$$

$$\\centering
    F\_{t,Sd} = \\frac{2(\\sigma \_{c,Rd}\\cdot l\_{c}\\cdot l\_{d}-N\_{Sd}))}{n\_{b}} = 318 N
    \\label{eq: Ft,sd}$$

A espessura resultante da chapa foi de 2,7 mm.

* ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. **NBR 8800 - Projeto de estruturas de aço e de estruturas mistas de aço e concreto de edifícios.** Rio de Janeiro, BRA, 2008.

* PIMENTA, R. J. **Ligações de apoio de pilares em perfil tubular.** 2010.
