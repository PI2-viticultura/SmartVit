# Plano de Teste e Validação
## Sistema de Irrigação
O sistema de irrigação é responsável pela rega automatizada de uma fileira de 2,5 m da vinícola com dois gotejadores por planta (SILVA, 2013). A pressão de entrada é definida pelo prestador de serviço no DF e tem valor mínimo de 100 kPa e máximo de 500 kPa (ADASA, 2011). O método escolhido para o sistema é o de gotejamento devido a sua eficiência e uniformidade em irrigar as videiras. As especificações do sistema se encontram na Tabela 1 e um diagrama hidráulico simplificado do sistema de irrigação é mostrado na Figura 1.
<center>

|      |  |
|:--------------------------:|:-----------------:|
| Pressão de Entrada  |      100 kPa a 500 kPa        |
|  Diâmetro da Tubulação |      1/2 ''       |
|  Comprimento da fileira |      2,5 m       |
|  Vazão dos gotejadores  | 0 a 40 L/h    |

Tabela 1 - Especificações do sistema de irrigação. (Fonte: SILVA, 2013 e ADASA, 2011)
</center>

<center>
<figure>
  <img src="/docs/Estrutura/imgs_instalacao/CircHidraulico.png"  />
  <figcaption>
      Figura 1 - Diagrama hidráulico do sistema de irrigação. (Fonte: Autoria própria)
  </figcaption>
</figure>
</center>
<br>
<br>

### Tubulação Lateral
A tubulação lateral é responsável por abastecer os gotejadores e garantir uniformidade na distribuição de água nos mesmos. Para cumprir essa função, é adotado como critério de dimensionamento uma variação máxima de 20\% na pressão de serviço entre o primeiro e o último gotejador, expresso pela Equação 1.

<center>
<figure>
  <img src="/docs/Estrutura/imgs_validacao/eq1.png"  />
  <figcaption>
      Equação 1
  </figcaption>
</figure>
</center>
<br>
<br>

Utilizando o equacionamento desenvolvido por Darcy-Weisbach, a regulamentação pertinente das normas <b>NBR 5626</b> (ABNT, 1998), <b>NBR 5648</b> (ABNT, 2018) e da <b>Resolução ADASA  N<sup>∘</sup> 14</b> (ADASA, 2011), e considerando ainda os dados de entrada da Tabela 1, o diâmetro comercial da tubulação lateral que atendeu ao critério da perda de carga permissível foi de 1/2". Além disso, o aclive máximo permitido para o dimensionamento é de 6,5 m. O memorial de cálculo desta etapa encontra-se no Apêndice \ref{apendtublat}. Para tornar a escolha do diâmetro mais ágil, foi desenvolvida uma rotina em <i>MATLAB</i>, disponível no Apêndice \ref{codMatlabIrrigacao}.

As informações da Tabela 2 resumem as característica do sistema de irrigação.

<center>

|   Parâmetro   | Entrada |
|:--------------------------:|:-----------------:|
| Comprimento da tubulação lateral  |      2,5 m        |
|  Vazão diária de cada gotejador |      11,25 L/dia       |
|  Pressão de serviço |      10 m.c.a.      |
|  Diâmetro do gotejador  | 4 mm    |
|  Diâmetro interno do tubo lateral  | 1/2''    |
|  Aclive máximo  | 6,5 mm    |

Tabela 2 - Parâmetros do sistema de irrigação. (Adaptado: EMBRAPA, 2020,  MIELE;MANDELLI 2005 e SILVA, 2013)
</center>

### Válvula Solenoide

Válvulas solenoide são dispositivos que regulam a passagem de um fluido a depender se está ou não energizada. No sistema de irrigação, ela tem o papel de permitir a divisão do plantio em setores independentes, controlando individualmente a área irrigada (BISCARO, 2014) (PNEUMATIC, 2019).

Para especificar a válvula solenoide, assume-se água a temperatura ambiente como fluido de operação. Além disso, conforme a <b>Resolução ADASA  N<sup>∘</sup> 14</b> (ADASA, 2011), considera-se 100 kPa (10 m.c.a.) como a pressão de entrada do sistema de irrigação (INDUSTRY, 2020) (JEFFERSON, 2011).

De acordo com o cálculo de dimensionamento da tubulação lateral (Apêndice XXX), o diâmetro nominal determinado para a válvula solenoide foi de 1/2". Para esse cálculo, foi considerado que cada tubo lateral atenderia uma fileira do plantio e que o mesmo seria regulado por uma válvula solenoide de duas vias (ASCOVAL, 2020).

Devido às demandas hídricas da viticultura, a válvula escolhida é do tipo normalmente fechada, ou seja, para permitir a passagem de água, é necessário o fornecimento de energia ao mecanismo regulador. Esse mecanismo é de ação direta, permitindo o fluxo apenas por meio da energização ou não da bobina reguladora. Além disso, o sistema opera somente com duas posições: ligado ou desligado (ASCOVAL, 2020).

O material interno é feito em latão, compatível com operações na qual a água é o fluido de trabalho. Outra medida de segurança necessária devido ao ambiente do campo é a proteção IP 65, que resguarda totalmente contra poeira e jatos de água (ASCOVAL, 2020) (JEFFERSON, 2011) (INDUSTRY, 2020).

A Tabela 3 apresenta as características da válvula solenoide adequada ao sistema SmartVit.

<center>

|   Características   | Especificação |
|:--------------------------:|:-----------------:|
| Fluido de trabalho  |      Água a 25 °C       |
|  Pressão de entrada |      100 kPa       |
|  Material da eletroválvula |      Latão      |
|  Grau de proteção  | IP 65.    |
|  Número de vias  | 2    |
|  Tipo de ação | Direta    |
|  Acionamento | <i>On/Off</i> simples    |
|  Montagem de processo | Normalmente fechada (NF)    |

Tabela 3 - Especificações da válvula solenoide. (Fonte: Autoria Própria)
</center>

## Cargas de Vento

Devido a presença da placa solar no topo da estrutura e também a esbeltez da estrutura principal, o sistema estrutural está sujeito a cargas de vento. A magnitude dessa solicitação é calculada de acordo com as determinações aplicáveis da <b>NBR 6123</b>, que trata de forças devidas ao vento em edificações  (ABNT, 2013).

A metodologia utilizada para o cálculo das cargas de vento faz uso de fatores que dependem do ambiente onde será alocada a estrutura. Tais fatores estão presentes na <b>NBR 6123</b>  (ABNT, 2013) e sua determinação e utilização para a definição das cargas de vento estão presentes no memorial de cálculo no Apêndice XXX.

De acordo com o memorial(XXXX trocar aqui) , foi obtido o valor de 368 kg/m.s² para a pressão dinâmica (<i>q</i>) agindo na estrutura, que representa a força do vento atuando sobre uma área. Além disso, com o objetivo de reproduzir o caso mais extremo possível, foi considerada a situação do vento agindo perpendicular à estrutura e o painel solar inclinado em uma angulação de 20°, quatro a mais do que os dezesseis requisitados pela área de Eletrônica e Eficiência Energética, de modo a deixar uma margem de regulagem para o painel solar.

Dado que a área da face lateral do poste possui 0,33 m², a área efetiva de exposição do painel solar é de 0,1271 m² e utilizando a Equação 2, determinam-se as cargas de vento a que estão sujeitos o poste e a placa.

<center>
<figure>
  <img src="/docs/Estrutura/imgs_validacao/eq2.png"  />
  <figcaption>
      Equação 2
  </figcaption>
</figure>
</center>
<br>
<br>

<center>
<figure>
  <img src="/docs/Estrutura/imgs_validacao/eq3.png"  />
  <figcaption>
      Equação 3
  </figcaption>
</figure>
</center>
<br>
<br>

<center>
<figure>
  <img src="/docs/Estrutura/imgs_validacao/eq4.png"  />
  <figcaption>
      Equação 4
  </figcaption>
</figure>
</center>
<br>
<br>

A Tabela 4 apresenta os resultados para as cargas de vento agindo na estrutura principal e no painel solar, conforme calculado nas Equações 3 e 4.

<center>

|      |  |
|:--------------------------:|:-----------------:|
| Carga de vento no <b>poste principal</b>  |      122 N       |
|  Carga de vento na <b>placa solar</b> |      47 N       |

Tabela 4 - Resultado das cargas de vento na estrutura. (Fonte: Autoria Própria)
</center>

## Simulação Numérica

A validação estática das estruturas foi realizada por meio de rotinas em softwares de simulação numérica. Os cálculos foram realizados no módulo de regime estático do <i>Ansys 18.1</i>. A metodologia empregada foi o Método dos Elementos Finitos (MEF), que discretiza o domínio contínuo (no caso a geometria) em um número finito de elementos. O objetivo é que uma estrutura complexa, possa ser simplificada para gerar resultados não disponíveis de forma analítica. Essa discretização é elaborada sobre um mapa topológico, conhecido como malha, em que os elementos se conectam nos vértices, chamados nós. As variáveis de interesse, como tensão e deslocamento, são calculadas para cada nó, em função dos deslocamentos calculados s (NIZAMPATNAM, 1999).

As Figuras \ref{fig: dcl_lateral} e \ref{fig: dcl_frontal} apresentam o diagrama de corpo livre do sistema em que as forças estão indicadas por siglas que foram apresentadas à seguir:


* Fg (peso do conjuto gabinete e bateria) - 210 N
* Fp (peso do pluviômetro cheio de água) - 10,3 N
* Fvpp (carga de vento no poste pincipal) - 55,4 N/m
* Fab (peso do conjunto biruta e anemômetro) - 4,7 N
* Fvps (carga de no painel solar) - 47 N
* Fps (peso do painel solar) - 42 N
* Fst (peso do sensor de temperatura) - 2,8 N

<center>
<figure>
  <img src="/docs/Estrutura/imgs_validacao/dcl_vista_lateral_certo.png"  />
  <figcaption>
      Figura 2 - Diagrama de corpo livre vista lateral. (Fonte: Autoria Própria)
  </figcaption>
</figure>
</center>
<br>
<br>

<center>
<figure>
  <img src="/docs/Estrutura/imgs_validacao/dcl_vista_frontal_certo.png"  />
  <figcaption>
      Figura 3 - Diagrama de corpo livre vista frontal. (Fonte: Autoria Própria)
  </figcaption>
</figure>
</center>
<br>
<br>

Os materiais utilizados na estrutura foram aço SAE 1020  (OLIVEIRA, 2017) e aço SAE 1008 (BAUCCIO; METALS, 1993),, cujas propriedades pertinentes para as simulações estão apresentadas na Tabela 5.

<center>

|      | Aço SAE 1008 | Aço SAE 1020 |
|:--------------------------:|:-----------------:|:---:|
| **Densidade**  |      7,87 g/cm³      | 7,87 g/cm³ |
|  **Módulo de Elasticidade** |      200 GPa      | 145 GPa |
|  **Tensão de escoamento** |      285 MPa       | 272 MPa |


Tabela 5 - Propriedades dos materiais utilizados. (Fonte: Autoria Própria)
</center>

### Poste Principal

No software <i>Ansys 18.1</i>, o poste foi modelado de acordo com o diagrama de corpo livre apresentado (Figuras 2 e 3). A condição de apoio fixo no chão foi modelada como suporte fixo, que restringe o grau de liberdade da estrutura em todas as direções, ou seja, não permite rotação ou translação em torno de nenhum eixo. A fixação entre os postes auxiliares e o poste principal foi modelada de forma semelhante, usando a ferramenta de contato entre corpos, do próprio <i>software</i>, a simulação foi realizada considerando os corpos colados, sem deslizamento relativo. As forças (que são deslocadas em relação ao centro de gravidade da estrutura) foram modeladas com a ferramenta força remota, em que é definida a magnitude da força (peso do respectivo sensor ou a carga de vento) e a distância à origem. O próprio software faz as interpolações necessárias para gerar os momentos fletores equivalentes. A Figura 4 apresenta a modelagem realizada no software.

<center>
<figure>
  <img src="/docs/Estrutura/imgs_validacao/dcl_poste_ansys.png"  />
  <figcaption>
      Figura 4 - Modelagem das condições de serviço no software de simulação. (Fonte: Autoria Própria)
  </figcaption>
</figure>
</center>
<br>
<br>

A Tabela 6 apresenta os resultados da simulação para as tensões e deslocamentos máximo para a estrutura principal.

<center>

|      | Tensão de Von Misis | Deslocamento |
|:--------------------------:|:-----------------:|:---:|
| **Poste principal**  |      84,90 MPa      | 8,4 mm |
|  **Poste auxiliar da placa** |      229,27 MPa      | 15,2 mm|
|  **Poste auxiliar do anemômetro** |      38,36 MPa       | 10,0 mm |


Tabela 6 - Resultado das simulações (Fonte: Autoria Própria)
</center>

### Estrutura de Fixação

As estruturas de fixação validadas por simulação estão listadas abaixo.

Assim como descrito na seção anterior, as estruturas foram modeladas no software <i>Ansys 18.1</i> de modo a reproduzir a peça em condição de serviço, as fixações pelo processo de soldagem foram tratados como suporte fixo e os pesos dos componentes foram modelados utilizando a ferramenta força remota. A modelagem mais adequada da solda na estrutura seria por meio de um estudo considerando o comportamento fluido-estrutura, como apresentado em  (FARIA, 2015), contudo, a análise sairia do escopo do trabalho, por isso, escolheu-se usar a fixação do tipo engaste. Na modelagem, parafusos foram considerados como sendo perfeitamente cilíndricos e lisos, pois a utilização da geometria exata do parafuso acarreta em maior custo computacional e não interfere no resultado da simulação de maneira significativa, contudo, as medidas do parafuso simulado estão em concordância com as dimensões reais, tanto de diâmetro quando de comprimento. As Figuras 5 à 9 mostram a modelagem final realizada no software.

<center>
<figure>
  <img src="/docs/Estrutura/imgs_validacao/dcl_gabinete_bateria_ansys.png"  />
  <figcaption>
      Figura 5 - Modelagem das condições de serviço do gabinete da bateria no software de simulação. (Fonte: Autoria Própria)
  </figcaption>
</figure>
</center>
<br>
<br>

<center>
<figure>
  <img src="/docs/Estrutura/imgs_validacao/dcl_pluviometro_poste_ansys.png"  />
  <figcaption>
      Figura 6 - Modelagem das condições de serviço do pluviômetro no software de simulação.(Fonte: Autoria Própria)
  </figcaption>
</figure>
</center>
<br>
<br>

<center>
<figure>
  <img src="/docs/Estrutura/imgs_validacao/dcl_sensor_temperatura_ansys.png"  />
  <figcaption>
      Figura 7 - Modelagem das condições de serviço do sensor de temperatura no software de simulação. (Fonte: Autoria Própria)
  </figcaption>
</figure>
</center>
<br>
<br>

<center>
<figure>
  <img src="/docs/Estrutura/imgs_validacao/dcl_poste_aux_placa_ansys.png"  />
  <figcaption>
      Figura 8 - Modelagem das condições de serviço do poste auxiliar do painel solar no software de simulação. (Fonte: Autoria Própria)
  </figcaption>
</figure>
</center>
<br>
<br>

<center>
<figure>
  <img src="/docs/Estrutura/imgs_validacao/dcl_poste_aux_biruta_ansys.png"  />
  <figcaption>
      Figura 9 - Modelagem das condições de serviço do poste auxiliar do conjunto biruta/anemômetro no software de simulação. (Fonte: Autoria Própria)
  </figcaption>
</figure>
</center>
<br>
<br>

A seguir estão apresentados os resultados das simulações para cada estrutura de fixação.

* Fixação do gabinete da bateria: <br>
A Tabela 7 apresenta os resultado para tensão e deformação de cada peça do conjunto de fixação do gabinete da bateria no poste principal.

<center>

|    Componente  | Tensão de Von Misis | Deformação |
|:--------------------------:|:-----------------:|:---:|
| **Chapa fixação**  |      0,27 MPa      | 3,8E-6 mm |
|  **Parafusos** |      0,47 MPa      | 0,15E-3 mm|

Tabela 7 - Tensões e deformações máximas nos componentes do conjunto do gabinete da bateria. (Fonte: Autoria Própria)
</center>

* Fixação do pluviômetro: <br>
A Tabela 8 apresenta os resultado para tensão e deformação de cada peça do conjunto de fixação do pluviômetro no poste principal.

<center>

|    Componente  | Tensão de Von Misis | Deformação |
|:--------------------------:|:-----------------:|:---:|
| **Suporte L**  |      15,24 MPa      | 1,6 mm |
|  **Parafuso fixação** |      0,04 MPa      | 1,4 mm|
|  **Suporte sensor** |      3,71 MPa      | 2,1 mm|

Tabela 8 - Tensões e deformações máximas nos componentes do conjunto pluviômetro.(Fonte: Autoria Própria)
</center>

* Fixação do sensor de temperatura: <br>
A Tabela 9 apresenta os resultado para tensão e deformação de cada peça do conjunto de fixação do sensor de temperatura no poste principal.

<center>

|    Componente  | Tensão de Von Misis | Deformação |
|:--------------------------:|:-----------------:|:---:|
| **Suporte L**  |      4,63 MPa      | 0,2 mm |
|  **Suporte sensor** |     2,37 MPa      | 0,6 mm|
|  **Parafusos** |      0,42 MPa      | 0,2 mm|

Tabela 9 - Tensões e deformações máximas nos componentes do conjunto do sensor de temperatura. (Fonte: Autoria Própria)
</center>

* Fixação do poste auxiliar da placa: <br>
A Tabela 10 apresenta os resultado para tensão e deformação de cada peça do conjunto de fixação do poste auxiliar da placa no poste principal.

<center>

|    Componente  | Tensão de Von Misis | Deformação |
|:--------------------------:|:-----------------:|:---:|
| **Poste auxiliar**  |      3,56 MPa      | 0,1 mm |
|  **Parafuso fixação** |      0,90 MPa      | 0,2E-3 mm|
|  **Perfil UDC** |      7,10 MPa      | 0,1 mm|

Tabela 10 - Tensões e deformações máximas nos componentes do conjunto poste auxiliar da placa. (Fonte: Autoria Própria)
</center>

* Fixação do auxiliar do conjunto biruta/anemômetro: <br>
A Tabela 11 apresenta os resultado para tensão e deformação de cada peça do conjunto de fixação do poste auxiliar da biruta no poste principal.

<center>

|    Componente  | Tensão de Von Misis | Deformação |
|:--------------------------:|:-----------------:|:---:|
| **Poste auxiliar**  |      1,45 MPa      | 0,04 mm |
|  **Tipo U vergalhão** |     3,68 MPa      | 0,03 mm|
|  **Parafuso fixação** |      1,11 MPa      | 0,2E-3 mm|
|  **Perfil UDC** |      1,50 MPa      | 0,2E-3 mm|

Tabela 11 - Tensões e deformações máximas nos componentes do conjunto poste auxiliardo anemômetro. (Fonte: Autoria Própria)
</center>

### Critério de Falha

As estruturas foram projetadas com materiais em aço, que é um material de comportamento dúctil. Dado isso, para a análise de falha em serviço foi utilizado o Critério de Von Mises (BEER, 1982) que pode ser apresentado como na Equação 5. Onde, 𝜎<sub>Von Mises</sub> é o resultado de tensão encontrado nas simulações para cada peça e 𝜎<sub>y</sub> a tensão de escoamento, que é a tensão na qual o material transita do regime elástico (regime no qual, retirada a solicitação da peça, retorna ao formato original, não deformado) para o regime plástico (mesmo após a retirada da solicitação, a peça sofre danos permanentes). Nessa teoria, uma estrutura é considerada em segurança desde que atenda à equação abaixo, ou seja, desde que a 𝜎<sub>Von Mises</sub> seja menor que a 𝜎<sub>y</sub> do material.

<center>
<figure>
  <img src="/docs/Estrutura/imgs_validacao/eq5.png"  />
  <figcaption>
      Equação 5
  </figcaption>
</figure>
</center>
<br>
<br>

Como pode ser visto, comparando os dados da Tabela 5 e os dados dos resultados apresentados na Seção Simulação numérica, os níveis de tensão para todas as peças (desde o poste principal à cada um dos elementos de fixação como os parafusos) apresentam níveis de tensão dentro da margem de segurança e as deformações não são grandes o bastante para causar qualquer tipo de dano à estrutura.

## Sapata

A fixação do poste no solo será feita por meio de uma estrutura sapata, composta por um bloco de concreto soldado à uma chapa metálica e chumbadores ligando as duas seções. A <b>NBR 8800</b> (Projeto de estruturas de aço e de estruturas mistas de aço e concreto de edifícios)  (ABNT, 2008), não aborda esse tipo de estrutura, mas indica a utilização da Norma AISC <i>Base plate and anchor rod design</i>, (AMERICAN INSTITUTEOF STEEL CONSTRUCTION, 2016), utilizada nesse projeto.

O método de cálculo utilizado depende de alguns fatores que são determinados por meio da <b>NBR 8800</b> (ABNT, 2008). A sua determinação e utilização no cálculo do projeto da sapata estão apresentadas no memorial de cálculo no Apêndice XXX (sapata). As especificações da estrutura estão apresentadas na Tabela 12.

<center>

|      |  |
|:--------------------------:|:-----------------:|
| Resistência do concreto (fck)  |      10 MPa      |
|  Tensão de escoamento do aço SAE 1020 <br>(placa e chumbadores) |     272 MPa      |
|  Número de chumbadores |      4      |
|  Diâmetro do chumbador |     3/4''      |

Tabela 12 - Especificações da sapata. (Fonte: autoria própria)
</center>

Para os cálculos realizados, foram considerados as cargas geradas pelos componentes eletrônicos/energético, pelo peso próprio da estrutura e pelas cargas de vento (apresentado na Seção XXX cargas de vento). Além disso, considera-se que a sapata tem a mesma área superficial que a chapa metálica.

Os resultados obtidos nos cálculos realizados no Apêndice XXX sapata} estão apresentados na Tabela 13.

<center>

|      |  |
|:--------------------------:|:-----------------:|
| Comprimento da chapa  |     310 mm      |
|  Largura da chapa |     160 mm      |
|  Espessura mínima da chapa |      2,7 mm      |
|  Comprimento do bloco de concreto |     310 mm      |
|  Largura do bloco de concreto |     160 mm      |

Tabela 14 – Medidas da chapa metálica e do bloco de concreto. (Fonte: autoria própria)
</center>

Por fim, a Figura 10 apresenta as medidas gerais da chapa metálica, a quantidade e o diâmetro dos chumbadores, e seus respectivos posicionamentos. Visto que o concreto tem área superficial igual à da chapa metálica, tais medidas também são válidas para ele.

<center>
<figure>
  <img src="/docs/Estrutura/imgs_validacao/medidas_furos_sapata.png"  />
  <figcaption>
      Figura 10 - Valores de referência para a sapata (medidas em mm). (Fonte: autoria própria)
  </figcaption>
</figure>
</center>
<br>
<br>
