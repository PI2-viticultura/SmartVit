<u>Obs.: DAR UMA OLHADA GERAL, EQUAÇÕES, ORDEM DAS EQUAÇÕES E VARIÁVEIS </u>

# Sistema de Irrigação

<p align = "justify"> O sistema de irrigação é responsável pela rega automatizada de uma
fileira de 2,5 m da vinícola com dois gotejadores por planta. A pressão
de entrada é definida pelo prestador de serviço no DF e tem valor mínimo
de 100 kPa e máximo de 500 kPa. O método escolhido para o sistema é o
de gotejamento devido a sua eficiência e uniformidade em irrigar as
videiras. As especificações do sistema se encontram na Tabela 1 e um
diagrama hidráulico simplificado do sistema de irrigação é mostrado na
Figura 1.

<center>

|   **Pressão de Entrada**   | 100 kPa a 500 kPa |
|:--------------------------:|:-----------------:|
| **Diâmetro da Tubulação**  |       1/2"        |
| **Comprimento da fileira** |       2,5 m       |
| **Vazão dos gotejadores**  |    0 a 40 L/h     |

Tabela 1 - Especificações do sistema de irrigação. (Adaptado de: SILVA, 2013 e ADASA, 2011)
</center>

<center>
<figure>
  <img src="/SmartVit/docs/Estrutura/imgs_instalacao/CircHidraulico.png"  />
  <figcaption>
      Figura 1 - Diagrama hidráulico do sistema de irrigação. (Fonte: Autoria própria)
  </figcaption>
</figure>
</center>
<br>
<br>


## Tubulação Lateral

<p align = "justify"> A tubulação lateral é responsável por abastecer os gotejadores e
garantir uniformidade na distribuição de água nos mesmos. Para cumprir
essa função, é adotado como critério de dimensionamento uma variação
máxima de 20% na pressão de serviço entre o primeiro e o último
gotejador, expresso pela equação [1].

<center>
<figure>
  <img src="/SmartVit/docs/Estrutura/imgs_irrigacao/eq1.png"  />
  <figcaption>
      Equação 1
  </figcaption>
</figure>
</center>
<br>
<br>

<p align = "justify"> Utilizando o equacionamento desenvolvido por Darcy-Weisbach, a
regulamentação pertinente das normas <b>NBR 5626</b>, <b>NBR 5648</b> e da
<b>Resolução ADASA N<sup>∘</sup> 14</b> , e considerando ainda os dados de
entrada da Tabela 1, o diâmetro comercial da
tubulação lateral que atendeu ao critério da perda de carga permissível
foi de 1/2", além disso, o aclive máximo permitido para o
dimensionamento é de 6,5 m. O memorial de cálculo desta etapa
encontra-se na Seção "Memorial de cálculo da tubulação lateral". Para tornar a escolha do
diâmetro mais ágil, foi desenvolvida uma rotina em MATLAB, disponível nessa mesma seção.

<p align = "justify"> As informações da Tabela 2 resumem as característica do sistema de irrigação.

<center>

|          **Parâmetro**           | **Entrada** |
|:--------------------------------:|:-----------:|
| Comprimento da tubulação lateral |    2,5 m    |
|  Vazão diária de cada gotejador  | 11,25 L/dia |
|        Pressão de serviço        |  10 m.c.a.  |
|      Diâmetro do gotejador       |    4 mm     |
| Diâmetro interno do tubo lateral |    1/2"     |
|          Aclive máximo           |    6,5 m    |

Tabela 2 - Parâmetros do sistema de irrigação. (Adaptado de: EMBRAPA, 2020, MIELE; MANDELLI, 2015 e SILVA, 2013).
</center>


## Válvula Solenoide

<p align = "justify"> Válvulas solenoide são dispositivos que regulam a passagem de um fluido
a depender se está ou não energizada. No sistema de irrigação, ela tem o
papel de permitir a divisão do plantio em setores independentes,
controlando individualmente a área irrigada.

<p align = "justify"> Para especificar a válvula solenoide, assume-se água a temperatura
ambiente como fluido de operação. Além disso, conforme a <b>Resolução
ADASA N<sup>∘</sup> 14</b>, considera-se 100 kPa (10 m.c.a.) como a
pressão de entrada do sistema de irrigação.

<p align = "justify"> De acordo com o cálculo de dimensionamento da tubulação lateral, o diâmetro nominal determinado para a válvula solenoide foi de 1/2". Para esse cálculo, foi considerado que cada tubo lateral atenderia uma fileira do plantio e que o mesmo seria
regulado por uma válvula solenoide de duas vias.

<p align = "justify"> Devido às demandas hídricas da viticultura, a válvula escolhida é do
tipo normalmente fechada, ou seja, para permitir a passagem de água, é
necessário o fornecimento de energia ao mecanismo regulador. Esse
mecanismo é de ação direta, permitindo o fluxo apenas por meio da
energização ou não da bobina reguladora. Além disso, o sistema opera
somente com duas posições: ligado ou desligado.

<p align = "justify"> O material interno é feito em latão, compatível com operações na qual a
água é o fluido de trabalho. Outra medida de segurança necessária devido
ao ambiente do campo é a proteção IP 65, que resguarda totalmente contra
poeira e jatos de água.

<p align = "justify"> A Tabela 3 apresenta as características da válvula solenoide
adequada ao sistema <i>SmartVit</i>.

<center>

|    **Característica**     |    **Especificação**     |
|:-------------------------:|:------------------------:|
|    Fluido de trabalho     |      Água, a 25 °C       |
|    Pressão de entrada     |         100 kPa          |
| Material da eletroválvula |          Latão           |
|     Grau de proteção      |          IP 65.          |
|      Número de vias       |            2             |
|       Tipo de ação        |          Direta          |
|        Acionamento        |     *On/off* simples     |
|   Montagem de processo    | Normalmente fechada (NF) |

Tabela 3 - Especificações da válvula solenoide. (Fonte: Autoria Própria)
</center>

## Memorial de cálculo da tubulação lateral

### Dimensionamento analítico

<p align = "justify"> O dimensionamento da tubulação lateral foi executado atendendo às
premissas pertinentes da <b>NBR 5626</b> , <b>NBR 5648</b> e da <b>Resolução N<sup>∘</sup> 14 da ADASA</b>, juntamente com o equacionamento empírico aplicado em XXX. **(O QUE VEM AQUI FUINHA? @Pedro)**

<p align = "justify"> O processo de escolha do diâmetro adequado para a tubulação lateral é
iterativo, no qual o primeiro passo é escolha de uma bitola para a
tubulação. Em seguida realizam-se os cálculos e verifica-se se o
diâmetro escolhido atende aos requisitos do projeto. Para evitar
superdimensionamento, escolhe-se o menor diâmetro disponível
comercialmente. Caso o diâmetro escolhido não atenda aos requisitos do
projeto, seleciona-se um imediatamente acima.

<p align = "justify"> Para os cálculos de dimensionamento iniciais, simplifica-se o processo
de escolha considerando que o terreno é plano. Mais adiante é mostrado o
valor de aclive máximo calculado para o sistema.

<p align = "justify"> Os parâmetros de entrada para o dimensionamento da tubulação lateral
constam na Tabela 4.

<center>

|          **Parâmetro**           | **Entrada** |
|:--------------------------------:|:-----------:|
| Comprimento da tubulação lateral |    2,5 m    |
| Espaçamento entre os gotejadores |    0,3 m    |
|   Vazão diária de cada emissor   | 11,25 L/dia |
|        Pressão de serviço        |  10 m.c.a.  |
|      Diâmetro do gotejador       |    4 mm     |

Tabela 4 - Especificações da válvula solenoide. (Fonte: Autoria Própria)
</center>

<p align = "justify"> A perda de carga permissível nas tubulações laterais é dada pela equação 1. A pressão de serviço (PS) considerada neste
documento é a menor oferecida pela ADASA para a Região do Distrito
Federal.

<center>
<figure>
  <img src="/SmartVit/docs/Estrutura/imgs_irrigacao/eq1.png"  />
  <figcaption>
      Equação 1
  </figcaption>
</figure>
</center>
<br>
<br>

<p align = "justify"> Portanto, a perda de carga nas tubulações laterais deve ser inferior a 2
m.c.a. O valor da perda de carga é determinado pela equação
2.

<center>
<figure>
  <img src="/SmartVit/docs/Estrutura/imgs_irrigacao/eq2.png"  />
  <figcaption>
      Equação 2
  </figcaption>
</figure>
</center>
<br>
<br>

Onde:

- Δh<sub>tl</sub> = perda de carga na tubulação lateral;

- J = perda de carga unitária;

- F = fator de correção;

- L = comprimento total da tubulação lateral.

<p align = "justify"> A perda de carga unitária é obtida por XXX: **(O QUE VEM AQUI FUINHA? @Pedro)**

<center>
<figure>
  <img src="/SmartVit/docs/Estrutura/imgs_irrigacao/eq3.png"  />
  <figcaption>
      Equação 3
  </figcaption>
</figure>
</center>
<br>
<br>

Onde:

- f = fator de atrito *\[adimensional\]*;

- V = velocidade média da água dentro da tubulação *[m/s]*;

- g = aceleração da gravidade *[m/s²]*;

- D = diâmetro interno da tubulação;

- Se = espaçamento entre os emissores *[m]*;

- Le = comprimento equivalente à perda de carga *[m]*.

<p align = "justify"> O fator de atrito é dependente do número de Reynolds (Re), calculado por:

<center>
<figure>
  <img src="/SmartVit/docs/Estrutura/imgs_irrigacao/eq4.png"  />
  <figcaption>
      Equação 4
  </figcaption>
</figure>
</center>
<br>
<br>

<p align = "justify"> Em que <b>υ</b> é a viscosidade cinemática da água em (m<sup>2</sup>/s).

<p align = "justify"> Em operações normais, a velocidade média da água é de 0,9 m/s. Considerando um diâmetro 17 mm e viscosidade da água igual a
10<sup> − 6</sup> m²/s, tem-se:

<center>
<figure>
  <img src="/SmartVit/docs/Estrutura/imgs_irrigacao/eq5.png"  />
  <figcaption>
      Equação 5
  </figcaption>
</figure>
</center>
<br>
<br>

<p align = "justify"> Para valores de Reynolds entre dois e cem mil, o fator de atrito pode ser calculado de acordo com a equação 6, proposta por Blasius:

<center>
<figure>
  <img src="/SmartVit/docs/Estrutura/imgs_irrigacao/eq6.png"  />
  <figcaption>
      Equação 6
  </figcaption>
</figure>
</center>
<br>
<br>

<p align = "justify"> O diâmetro considerado para os cálculos será de 1/2", equivalente a 17 milímetros.

<p align = "justify"> O comprimento equivalente à perda de carga considera a perda de pressão gerada pela inserção dos gotejadores na tubulação lateral. O cálculo do comprimento equivalente, considerando diâmetro de 4 mm dos gotejadores é dado por:

<center>
<figure>
  <img src="/SmartVit/docs/Estrutura/imgs_irrigacao/eq7.png"  />
  <figcaption>
      Equação 7
  </figcaption>
</figure>
</center>
<br>
<br>

Retornando ao cálculo da perda de carga unitária (*J*), tem-se:

<center>
<figure>
  <img src="/SmartVit/docs/Estrutura/imgs_irrigacao/eq8.png"  />
  <figcaption>
      Equação 8
  </figcaption>
</figure>
</center>
<br>
<br>

<p align = "justify"> Já o fator de correção é calculado com a equação 9, onde <b>N</b>
é o número de gotejadores.

<center>
<figure>
  <img src="/SmartVit/docs/Estrutura/imgs_irrigacao/eq9.png"  />
  <figcaption>
      Equação 9
  </figcaption>
</figure>
</center>
<br>
<br>

<p align = "justify"> Por fim, em 10 calcula-se o valor da perda de carga na
tubulação lateral.

<center>
<figure>
  <img src="/SmartVit/docs/Estrutura/imgs_irrigacao/eq10.png"  />
  <figcaption>
      Equação 10
  </figcaption>
</figure>
</center>
<br>
<br>

<p align = "justify"> Pelo critério de projeto adotado, o diâmetro da tubulação é considerado adequado se *Δh**t**l* &lt; *h**f*. Como 0, 084 &lt; 2, o tubo de
$1/2"$ é considerado apropriado para a aplicação.

<p align = "justify"> Para determinar o nível máximo de aclive suportado pelo sistema, utiliza-se a equação 11, na qual considerou-se um fator de segurança (FS) igual a 3, isto é, que a pressão de serviço seja um terço da mínima regulamentada pela .

<center>
<figure>
  <img src="/SmartVit/docs/Estrutura/imgs_irrigacao/eq11.png"  />
  <figcaption>
      Equação 11
  </figcaption>
</figure>
</center>
<br>
<br>

<p align = "justify"> Portanto, a diferença de nível máxima a qual o sistema de irrigação pode sujeitar-se é de 6,509 metros.

## Referências

SILVA, J. A. **Estratégias de irrigação para economia de Água em videira cv. Syrah no vale do submédio do são francisco.** Universidade Federal do Vale do São Francisco, 2013.

AGÊNCIA REGULADORA DE ÁGUAS, ENERGIA E SANEAMENTO BÁSICO DO DISTRITO FEDERAL. **Resolução N°14**, de 27 de outubro de 2011. Distrito Federal, BRA, 2011.

ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. **NBR 5626 - Instalação predial de água fria.** Rio de Janeiro, BRA, 1998.

ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. **NBR 5648 - Tubos e conexões de PVC-U com junta soldável para sistemas prediais de água fria - Requisitos.** Rio de Janeiro, BRA, 2018.

EMBRAPA. **Sistema de Produção de Uvas Rústicas para Processamento em Regiões Tropicais do Brasil.** 2020. Disponível em: <https://sistemasdeproducao.cnptia.embrapa.br/FontesHTML/Uva/UvasRusticasParaProcessamento/irrigacao.htm>.

MIELE, A.; MANDELLI, F. **Sistemas de condução da videira: latada e espaldeira.** [S.l.], 2015.


### Rotina para o dimensionamento do sistema de irrigação

<p align = "justify"> De modo a automatizar os cálculos foi construído o seguinte algoritmo utilizando o XXX. **(O QUE VEM AQUI FUINHA? @Pedro)**

```
clear all
clc

%% Dados de entrada
%Comprimento do tubo lateral(m):
L = input ('Digite, em metros, o comprimento da tubulacao lateral:\n');
%Espacamento entre os gotejadores(m):
Se = input ('\nDigite, em metros, o espacamento entre os gotejadores:\n');
%Vazao de cada emissor (L/dia):
q = input ('\nDigite, em litros por dia, a vazao de cada gotejador (sugestao: 11.25):\n');
q = (q/24)*2.77778e-7; %Convertendo para (m^3/s)
%Pressao de Servicoo (m.c.a):
PS = input ('\nDigite, em m.c.a. (1 m.c.a. = 100 kPa = 1 bar), a pressao de servico:\n');
%Diametro do gotejador (mm)
n = input ('\nDigite, em milímetros, o diâmetro dos gotejadores:\n');
%Número de gotejadores:
Ne=ceil(L/Se);
%Vazao da tubulacao (m^3/s):
Q=Ne*q;
%Perda de carga permissivel (m):
hf=0.2*PS;
%Velocidade da água dentro da tubulacao (m/s)
v=0.9;
%Viscosidade a 20C (m_{2}s^-1)
visc=0.000001;
%Aceleracao da gravidade
g=9.807;

%% Calculo do dimensionamento
clc
opcao = 'S';
while (opcao == 'S')
    %Diâmetro desejado para a tubulacao (mm)
    D = input ('\nDigite, em milímetros, o diâmetro interno desejado para a tubulacao lateral:\n');
    D = D/1000;
    Re = (v*D)/visc; %Número de Reynolds
    f = 0.3/(Re^0.25); %Fator de atrito
    J = f*((v^2)/(2*g*D)); %Perda de carga unitária
    Le = 14.38*(D*1000)^(-1.89); %Comprimento equivalente dos emissores
    J_corr = J*((Se+Le)/Se); %Perda de carga unitária corrigida
    F = 1/2.75 + 1/(2*Ne) + (sqrt(0.75)/(6*Ne^2)); %Fator de correcao
    htl = J_corr*F*L;

    if htl < hf
        opcao = 'N';
        clc
        disp('O diâmetro escolhido da tubulação lateral ATENDE ao critério da perda de carga permissível.')
    else
        disp('O diâmetro escolhido da tubulacao lateral NAO ATENDE ao criterio da perda de carga permissivel. Por favor, escolha um diâmetro maior!')
    end
end
```
