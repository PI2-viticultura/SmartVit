<u>Obs.: ARRUMAR AS REFERÊNCIAS DE FIGURA, AS EQUAÇÕES E UMA TABELA</u>

# Memorial de Cálculo das Cargas de Vento

O presente memorial utiliza as determinações aplicáveis da **NBR 6123**
(Forças devidas ao vento em edificações) para determinar a magnitude da
solicitação das cargas de vento (ABNT, 2013).

A velocidade característica do vento, V<sub>k</sub>, é calculada de
acordo com a Equação [\[eq: vel\_carac\_vento\]][1]. Na equação,
V<sub>0</sub> é a velocidade básica, que é estimada pelo gráfico de
isopletas de vento, apresentada na Figura [\[fig: isopletas\]][2]. Os
termos S<sub>1</sub>, S<sub>2</sub> e S<sub>3</sub> são fatores
relativos à topografia do terreno, dimensão da estrutura e
funcionalidade, respectivamente.

Obs.: EQUAÇÕES T.1

V<sub>0</sub> será considerado 35 m/s, que é a velocidade relativa para
a região do Centro-Oeste, como pode ser visto na Figura [1][].

<center>
<figure>
  <img src="/docs/Estrutura/imgs_cargasvento/isopletas.png"  />
  <figcaption>
      Mapa de isopletas de vento, Velocidade Básica. (Fonte: NBR 6123)
  </figcaption>
</figure>
</center>
<br>
<br>

A estimativa dos fatores S<sub>1</sub>, S<sub>2</sub> e S<sub>3</sub> é
descrita a seguir:
-   **S<sub>1</sub> - Fator topográfico:** A determinação do Fator
    S<sub>1</sub> é dada de acordo com a Tabela
    [\[tab: determinação\_fator\_S1\]][1]:

<center>

|                      |                              |
|:--------------------:|------------------------------|
|           1          | terreno plano ou quase plano |
|          0,9         | mar calmo, lagos e pântanos  |
| Consultar a NBR 6123 | taludes e morros             |

</center>


Assumindo o terreno como quase plano, o fator topográfico S<sub>1</sub>
será tomado como 1.
-   **S<sub>2</sub> - Rugosidade do terreno, dimensões da edificação e
    altura sobre o terreno:** Para a análise deste fator, deve ser
    atribuída uma categoria e uma classe ao sistema. A categoria diz
    respeito à rugosidade do terreno, e os parâmetros de identificação
    estão apresentados na Tabela [\[tab: categorias\_fator\_S2\]][1].
    Dado que a altura média de obstáculos no entorno é de 2,5 m, foi
    classificada como Categoria III.

  Obs.: Tabela do fator S2

Os parâmetros de determinação da Classe são apresentados na Tabela
[\[tab: classe\_fator\_S2\]][1] e a estrutura foi categorizada como do
classe A.

<center>

| Classe | Descrição                                                       |
|:------:|-----------------------------------------------------------------|
|    A   | Maior dimensão da superfície frontal menor ou igual a 20 metros |
|    B   | Maior dimensão da superfície frontal entre 20 e 50 metros       |
|    C   | Maior dimensão da superfície frontal maior que 50 metros        |

</center>


Com os parâmetros definidos (Categoria III e Classe A), o cálculo de
S<sub>2</sub> é realizado pela Equação [\[eq: calculo\_fator\_S2\]][1]
em que *b*, *Fr*, *z* e *p* são parâmetros determinados com auxílio de
tabelas presentes na **NBR 6123** (ABNT, 2013).

Obs.: EQUAÇÕES T.2

Na tabela presente na Figura [\[fig: parametros\_meteorologicos\]][2]
são determinados os parâmetros *b* e *p*. De acordo com a **NBR 6123** (ABNT, 2013),
*Fr* (força de rajada) deve ser considerada equivalente à Categoria 2.

<center>
<figure>
  <img src="/docs/Estrutura/imgs_cargasvento/parametros_meteorologicos_fator_2.png"  />
  <figcaption>

  </figcaption>
</figure>
</center>
<br>
<br>

O parâmetro *z* é calculado de acordo com a tabela apresentada na Figura
[\[fig: fator\_S2\]][1] e é considerado que a altura é menor que 5 m.

<center>
<figure>
  <img src="/docs/Estrutura/imgs_cargasvento/fator_S2.png"  />
  <figcaption>

  </figcaption>
</figure>
</center>
<br>
<br>

Com os valores das variáveis auxiliares (*b* = 0,94, *p* = 0,10 , *Fz* =
1 e *z* = 0,88) determina-se o valor de S<sub>2</sub> como mostrado na
Equação [\[eq: calculo\_s2\]][1].

Obs.: EQUAÇÕES T.3

  [1]: #eq: calculo_s2
-   **S<sub>3</sub> - Fator estatístico:** É relacionado ao uso da
    estrutura e deve ser definido de acordo com a Tabela
    [\[tab: minimo\_S3\]][1].



<center>

  | Grupo | Descrição | S3   |
  |:-----:|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------|
  |   1   | Edificações cuja ruína total ou parcial pode afetar a segurança ou possibilidade de socorro a pessoas após uma temperestade destrutiva (hospitais, quatéis de bombeiros, centrais de comunicação, etc.) | 1,10 |
  |   2   | Edificações para hotéis e residências. Edificações para comércio e indústria com alto fator de ocupação.                                                                                                | 1,00 |
  |   3   | Edificações e instalações industriais com baixo fator de ocupação (depósitos, silos, construções rurais, etc.)                                                                                          | 0,95 |
  | 4     | Vedações (telhas, vidros, painéis de vedação, etc.)                                                                                                                                                     | 0,88 |
  | 5     | Edificações temporárias. Estruturas dos grupos 1 a 3 durante a construção                                                                                                                               | 0,83 |

</center>


Analisando a Tabela [\[tab: minimo\_S3\]][1], foi determinado
S<sub>3</sub> igual a 0,95.

  [1]: #tab: minimo_S3

Retomando à Equação [\[eq: vel\_carac\_vento\]][1], a velocidade
característica do vento (V<sub>k</sub>) é:

Obs.: EQUAÇÕES T.4

A pressão dinâmica, *q*, é dada pela Equação [\[eq: pres\_din\]][2]. Em
que **ρ** é a densidade do ar, que é estabelecido 1,225 kg/m³ na norma, e teve como resultado valor de 368  kg/m* ⋅ *s*<sup>2</sup>.

Obs.: EQUAÇÕES T.5

A força do vento agindo na estrutura é calculada de acordo com a Equação
[\[eq: carga\_vento\_particular\]][1].

Obs.: EQUAÇÕES T.6

Dado que a área da face lateral do poste possui 0,33 m² e a área efetiva
de exposição do painel solar é de 0,1271 m², a força do vento agindo
nessas estruturas é respectivamente 121,43 N e 46,76 N, como mostrado
nas Equações [\[eq: carga\_vento\_poste\_apendice\]][1] e
[\[eq: carga\_vento\_placa apendice\]][2].

Obs.: EQUAÇÕES T.7

Obs.: EQUAÇÕES T.8

  [1]: #eq: carga_vento_poste_apendice
  [2]: #eq: carga_vento_placa apendice

Referências:
ABNT. Forças devidas ao vento em edificações. Brazil, 2013.
