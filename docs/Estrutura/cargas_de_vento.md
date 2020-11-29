# Memorial de Cálculo das Cargas de Vento

<p align = "justify"> O presente memorial utiliza as determinações aplicáveis da <b>NBR 6123</b> (Forças devidas ao vento em edificações) para determinar a magnitude da solicitação das cargas de vento (ABNT, 2013).

<p align = "justify"> A velocidade característica do vento, <i>V<sub>k</sub></i>, é calculada de
acordo com a Equação 1. Na equação, <i>V<sub>0</sub></i> é a velocidade básica, que é estimada pelo gráfico de isopletas de vento, apresentada na Figura 1. Os
termos <i>S<sub>1</sub></i>, <i>S<sub>2</sub></i> e <i>S<sub>3</sub></i> são fatores relativos à topografia do terreno, dimensão da estrutura e
funcionalidade, respectivamente.

<center>
<figure>
  <img src="/docs/Estrutura/imgs_cargasvento/eq1.png"  />
  <figcaption>
      Equação 1
  </figcaption>
</figure>
</center>
<br>
<br>

<p align = "justify"> <i>V<sub>0</sub></i> será considerado 35 m/s, que é a velocidade relativa para a região do Centro-Oeste, como pode ser visto na Figura 1.

<center>
<figure>
  <img src="/docs/Estrutura/imgs_cargasvento/isopletas.png"  />
  <figcaption>
      Figura 1 - Mapa de isopletas de vento, Velocidade Básica. (Fonte: NBR 6123)
  </figcaption>
</figure>
</center>
<br>
<br>

<p align = "justify"> A estimativa dos fatores <i>S<sub>1</sub></i>, <i>S<sub>2</sub></i> e <i>S<sub>3</sub></i> é descrita a seguir: <br>

-   **S<sub>1</sub> - Fator topográfico:** A determinação do Fator
    <i>S<sub>1</sub></i> é dada de acordo com a Tabela 1:

<center>

|                      |                              |
|:--------------------:|------------------------------|
|           1          | terreno plano ou quase plano |
|          0,9         | mar calmo, lagos e pântanos  |
| Consultar a NBR 6123 | taludes e morros             |

Tabela 1 - Fator <i>S<sub>1</sub></i>. (Fonte: NBR 6123)
</center>


<p align = "justify"> Assumindo o terreno como quase plano, o fator topográfico <i>S<sub>1</sub></i> será tomado como 1.

-   **S<sub>2</sub> - Rugosidade do terreno, dimensões da edificação e
    altura sobre o terreno:** Para a análise deste fator, deve ser
    atribuída uma categoria e uma classe ao sistema. A categoria diz
    respeito à rugosidade do terreno, e os parâmetros de identificação
    estão apresentados na Tabela 2. Dado que a altura média de obstáculos no entorno é de 2,5 m, foi classificada como Categoria III.
<center>

    | Categoria | Descrição do ambiente|
    |---|---|
    | I | Mar calmo, lagos, rios, pântanos |
    | II | Campos de aviação, fazendas |
    | III | Casas de campo, fazendas com muros, subúrbios com altura média dos <br> obstáculos de 3 m |
    | IV | Cidades pequenas, subúrbios densamente construídos, áreas industriais <br> desenvolvidas com muros, subúrbios, com altura média dos obstáculos de 10 m|
    | V | Florestas com árvores altas, centros de grandes cidades, com altura média igual ou superior a 25 m |

    Tabela 2 - Definição de categoria para determinação do fator S<sub>2</sub>.
  </center>

<p align = "justify"> Os parâmetros de determinação da Classe são apresentados na Tabela 3 e a estrutura foi categorizada como do classe A.

<center>

| Classe | Descrição                                                       |
|:------:|-----------------------------------------------------------------|
|    A   | Maior dimensão da superfície frontal menor ou igual a 20 metros |
|    B   | Maior dimensão da superfície frontal entre 20 e 50 metros       |
|    C   | Maior dimensão da superfície frontal maior que 50 metros        |

Tabela 3 - Definição de categoria para determinação do fator <i>S<sub>2</sub></i>. (Fonte: NBR 6123)
</center>


<p align = "justify"> Com os parâmetros definidos (Categoria III e Classe A), o cálculo de <i>S<sub>2</sub></i> é realizado pela Equação 2
em que <i>b</i>, <i>Fr</i>, <i>z</i> e <i>p</i> são parâmetros determinados com auxílio de tabelas presentes na <b>NBR 6123</b> (ABNT, 2013).

<center>
<figure>
  <img src="/docs/Estrutura/imgs_cargasvento/eq2.png"  />
  <figcaption>
      Equação 2
  </figcaption>
</figure>
</center>
<br>
<br>

<p align = "justify"> Na tabela presente na Figura 2 são determinados os parâmetros <i>b</i> e <i>p</i>. De acordo com a <b>NBR 6123</b> (ABNT, 2013), <i>Fr</i> (força de rajada) deve ser considerada equivalente à da Categoria 2.

<center>
<figure>
  <img src="/docs/Estrutura/imgs_cargasvento/parametros_meteorologicos_fator_2.png"  />
  <figcaption>
      Figura 2 - Parâmetros meteorológicos. (Fonte: NBR 6123)
  </figcaption>
</figure>
</center>
<br>
<br>

<p align = "justify"> O parâmetro <i>z</i> é calculado de acordo com a tabela apresentada na Figura 3 e é considerado que a altura total é menor que 5 m.

<center>
<figure>
  <img src="/docs/Estrutura/imgs_cargasvento/fator_S2.png"  />
  <figcaption>
      Figura 3 - Fator S<sub>2</sub>. (Fonte: NBR 6123)
  </figcaption>
</figure>
</center>
<br>
<br>

<p align = "justify"> Com os valores das variáveis auxiliares (<i>b</i> = 0,94, <i>p</i> = 0,10 , <i>Fr</i> = 1 e <i>z</i> = 0,88) determina-se o valor de <i>S<sub>2</sub></i> como mostrado na Equação 3.

<center>
<figure>
  <img src="/docs/Estrutura/imgs_cargasvento/eq3.png"  />
  <figcaption>
      Equação 3
  </figcaption>
</figure>
</center>
<br>
<br>

-   **S<sub>3</sub> - Fator estatístico:** É relacionado ao uso da
    estrutura e deve ser definido de acordo com a Tabela 4.

<center>

  | Grupo | Descrição | S3   |
  |:-----:|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------|
  |   1   | Edificações cuja ruína total ou parcial pode afetar a segurança ou possibilidade de socorro a pessoas após uma tempestade destrutiva (hospitais, quartéis de bombeiros, centrais de comunicação, etc.) | 1,10 |
  |   2   | Edificações para hotéis e residências. Edificações para comércio e indústria com alto fator de ocupação.                                                                                                | 1,00 |
  |   3   | Edificações e instalações industriais com baixo fator de ocupação (depósitos, silos, construções rurais, etc.)                                                                                          | 0,95 |
  | 4     | Vedações (telhas, vidros, painéis de vedação, etc.)                                                                                                                                                     | 0,88 |
  | 5     | Edificações temporárias. Estruturas dos grupos 1 a 3 durante a construção                                                                                                                               | 0,83 |

Tabela 4 - Valores mínimos para o fator S<sub>3</sub>. (Fonte: NBR 6123)
</center>


<p align = "justify"> Analisando a Tabela 4, foi determinado <i>S<sub>3</sub></i> igual a 0,95.

<p align = "justify"> Retomando à Equação 1, a velocidade
característica do vento (V<sub>k</sub>) é:

<center>
<figure>
  <img src="/docs/Estrutura/imgs_cargasvento/eq4.png"  />
  <figcaption>
      Equação 4
  </figcaption>
</figure>
</center>
<br>
<br>

<p align = "justify"> A pressão dinâmica, <i>q</i>, é dada pela Equação 5. Em
que <i>ρ</i> é a densidade do ar, que é estabelecido 1,225 kg/m³ na norma, e teve como resultado valor de 368  kg/m⋅s<sup>2</sup>.

<center>
<figure>
  <img src="/docs/Estrutura/imgs_cargasvento/eq5.png"  />
  <figcaption>
      Equação 5
  </figcaption>
</figure>
</center>
<br>
<br>

<p align = "justify"> A força do vento agindo na estrutura é calculada de acordo com a Equação 6.

<center>
<figure>
  <img src="/docs/Estrutura/imgs_cargasvento/eq6.png"  />
  <figcaption>
      Equação 6
  </figcaption>
</figure>
</center>
<br>
<br>

<p align = "justify"> Dado que a área da face lateral do poste possui 0,33 m² e a área efetiva
de exposição do painel solar é de 0,1271 m², a força do vento agindo
nessas estruturas é respectivamente 121,43 N e 46,76 N, como mostrado
nas Equações 7 e 8.

<center>
<figure>
  <img src="/docs/Estrutura/imgs_cargasvento/eq7.png"  />
  <figcaption>
      Equação 7
  </figcaption>
</figure>
</center>
<br>
<br>

<center>
<figure>
  <img src="/docs/Estrutura/imgs_cargasvento/eq8.png"  />
  <figcaption>
      Equação 8
  </figcaption>
</figure>
</center>
<br>
<br>


## Referências

ABNT. **Forças devidas ao vento em edificações.** Brazil, 2013.
