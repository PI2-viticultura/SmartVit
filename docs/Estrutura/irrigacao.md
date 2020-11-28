<u>Obs.: ARRUMAR AS EQUAÇÕES, ALGUMAS VARIÁVEIS, A FIGURA QUE TA FALTANDO E AS REFERÊNCIAS </u>

# Sistema de Irrigação

O sistema de irrigação é responsável pela rega automatizada de uma
fileira de 2,5 m da vinícola com dois gotejadores por planta . A pressão
de entrada é definida pelo prestador de serviço no DF e tem valor mínimo
de 100 kPa e máximo de 500 kPa . O método escolhido para o sistema é o
de gotejamento devido a sua eficiência e uniformidade em irrigar as
videiras. As especificações do sistema se encontram na tabela [1][1] e um
diagrama hidráulico simplificado do sistema de irrigação é mostrado na
figura [2][2].

<center>

|   **Pressão de Entrada**   | 100 kPa a 500 kPa |
|:--------------------------:|:-----------------:|
| **Diâmetro da Tubulação**  |       1/2"        |
| **Comprimento da fileira** |       2,5 m       |
| **Vazão dos gotejadores**  |    0 a 40 L/h     |

Tabela 1 - Especificações do sistema de irrigação. (Adaptado de (SILVA, 2013) e (ADASA,2011)).
</center>

<center>
<figure>
  <img src="/docs/Estrutura/imgs_irrigacao/"  />
  <figcaption>
      Diagrama hidráulico do sistema de irrigação. (Fonte: Autoria própria)
  </figcaption>
</figure>
</center>
<br>
<br>


## Tubulação Lateral

A tubulação lateral é responsável por abastecer os gotejadores e
garantir uniformidade na distribuição de água nos mesmos. Para cumprir
essa função, é adotado como critério de dimensionamento uma variação
máxima de 20% na pressão de serviço entre o primeiro e o último
gotejador, expresso pela equação [1].

<u>Obs.: EQUAÇÃO 1</u>

Utilizando o equacionamento desenvolvido por Darcy-Weisbach, a
regulamentação pertinente das normas **NBR 5626** , **NBR 5648** e da
**Resolução ADASA N<sup>∘</sup> 14** , e considerando ainda os dados de
entrada da tabela 1, o diâmetro comercial da
tubulação lateral que atendeu ao critério da perda de carga permissível
foi de 1/2". Além disso, o aclive máximo permitido para o
dimensionamento é de 6,5 m. O memorial de cálculo desta etapa
encontra-se na seção "Memorial de cálculo da tubulação lateral". Para tornar a escolha do
diâmetro mais ágil, foi desenvolvida uma rotina em , disponível nessa mesma seção.

As informações da tabela 2 resumem as característica do sistema de
irrigação.

<center>

|          **Parâmetro**           | **Entrada** |
|:--------------------------------:|:-----------:|
| Comprimento da tubulação lateral |    2,5 m    |
|  Vazão diária de cada gotejador  | 11,25 L/dia |
|        Pressão de serviço        |  10 m.c.a.  |
|      Diâmetro do gotejador       |    4 mm     |
| Diâmetro interno do tubo lateral |    1/2"     |
|          Aclive máximo           |    6,5 m    |

Tabela 2 - Parâmetros do sistema de irrigação. (Adaptado de: (EMBRAPA, 2020), (MIELE; MANDELLI, 2015) e (SILVA, 2013).
</center>


## Válvula Solenoide

Válvulas solenoide são dispositivos que regulam a passagem de um fluido
a depender se está ou não energizada. No sistema de irrigação, ela tem o
papel de permitir a divisão do plantio em setores independentes,
controlando individualmente a área irrigada.

Para especificar a válvula solenoide, assume-se água a temperatura
ambiente como fluido de operação. Além disso, conforme a **Resolução
ADASA N<sup>∘</sup> 14** , considera-se 100 kPa (10 m.c.a.) como a
pressão de entrada do sistema de irrigação.

De acordo com o cálculo de dimensionamento da tubulação lateral, o diâmetro nominal determinado para a válvula solenoide foi de 1/2". Para esse cálculo, foi considerado que cada tubo lateral atenderia uma fileira do plantio e que o mesmo seria
regulado por uma válvula solenoide de duas vias.

Devido às demandas hídricas da viticultura, a válvula escolhida é do
tipo normalmente fechada, ou seja, para permitir a passagem de água, é
necessário o fornecimento de energia ao mecanismo regulador. Esse
mecanismo é de ação direta, permitindo o fluxo apenas por meio da
energização ou não da bobina reguladora. Além disso, o sistema opera
somente com duas posições: ligado ou desligado.

O material interno é feito em latão, compatível com operações na qual a
água é o fluido de trabalho. Outra medida de segurança necessária devido
ao ambiente do campo é a proteção IP 65, que resguarda totalmente contra
poeira e jatos de água.

A tabela 3 apresenta as características da válvula solenoide
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

Tabela 3 - Especificações da válvula solenoide. (Fonte: Autoria Própria).
</center>

## Memorial de cálculo da tubulação lateral

### Dimensionamento analítico

O dimensionamento da tubulação lateral foi executado atendendo às
premissas pertinentes da NBR 5626 , NBR 5648 e da Resolução
N<sup>∘</sup> 14 da ADASA , juntamente com o equacionamento empírico
aplicado em XXX. **(O QUE VEM AQUI FUINHA? @Pedro)**

O processo de escolha do diâmetro adequado para a tubulação lateral é
iterativo, no qual o primeiro passo é escolha de uma bitola para a
tubulação. Em seguida realizam-se os cálculos e verifica-se se o
diâmetro escolhido atende aos requisitos do projeto. Para evitar
superdimensionamento, escolhe-se o menor diâmetro disponível
comercialmente. Caso o diâmetro escolhido não atenda aos requisitos do
projeto, seleciona-se um imediatamente acima.

Para os cálculos de dimensionamento iniciais, simplifica-se o processo
de escolha considerando que o terreno é plano. Mais adiante é mostrado o
valor de aclive máximo calculado para o sistema.

Os parâmetros de entrada para o dimensionamento da tubulação lateral
constam na tabela 4.

<center>

|          **Parâmetro**           | **Entrada** |
|:--------------------------------:|:-----------:|
| Comprimento da tubulação lateral |    2,5 m    |
| Espaçamento entre os gotejadores |    0,3 m    |
|   Vazão diária de cada emissor   | 11,25 L/dia |
|        Pressão de serviço        |  10 m.c.a.  |
|      Diâmetro do gotejador       |    4 mm     |

Tabela 4 - Especificações da válvula solenoide. (Fonte: Autoria Própria).
</center>

A perda de carga permissível nas tubulações laterais é dada pela equação 1. A pressão de serviço (PS) considerada neste
documento é a menor oferecida pela ADASA para a Região do Distrito
Federal.

<u>Obs.: EQUAÇÃO 2</u>

Portanto, a perda de carga nas tubulações laterais deve ser inferior a 2
m.c.a. O valor da perda de carga é determinado pela equação
2.

<u>Obs.: EQUAÇÃO 3</u>

Onde:

- $$*Δ**h*<sub>*t**l*</sub> =$$ perda de carga na tubulação lateral ;

- $$*J* =$$ perda de carga unitária ;

- $$*F* =$$ fator de correção ;

- $$*L* =$$ comprimento total da tubulação lateral .

A perda de carga unitária é obtida por XXX: **(O QUE VEM AQUI FUINHA? @Pedro)**

<u>Obs.: EQUAÇÃO 4</u>

Onde:

- $$*f* =$$ fator de atrito *\[adimensional\]*;

- $$*V* =$$ velocidade média da água dentro da tubulação *\[*m*/*s*\]*;

- $$*g* =$$ aceleração da gravidade ;

- $$*D* =$$ diâmetro interno da tubulação .

- $$*Se* =$$ espaçamento entre os emissores *\[*m*\]*;

- $$*Le* =$$ comprimento equivalente à perda de carga *\[*m*\]*.

O fator de atrito é dependente do número de Reynolds *(Re)* , calculado
por:

<u>Obs.: EQUAÇÃO 5</u>

Em que *υ* é a viscosidade cinemática da água em
*(m<sup>2</sup>/s)*.

Em operações normais, a velocidade média da água é de 0,9 m/s .
Considerando um diâmetro 17 mm e viscosidade da água igual a
10<sup> − 6</sup> m²/s, tem-se:

<u>Obs.: EQUAÇÃO 6</u>

Para valores de Reynolds entre dois e cem mil, o fator de atrito pode
ser calculado de acordo com a equação 6, proposta por Blasius:

<u>Obs.: EQUAÇÃO 7</u>

O diâmetro considerado para os cálculos será de 1/2", equivalente a 17
milímetros.

O comprimento equivalente à perda de carga considera a perda de pressão
gerada pela inserção dos gotejadores na tubulação lateral. O cálculo do
comprimento equivalente, considerando diâmetro de 4 mm dos gotejadores é
dado por:

<u>Obs.: EQUAÇÃO 8</u>

Retornando ao cálculo da perda de carga unitária (*J*), tem-se:

<u>Obs.: EQUAÇÃO 9</u>

Já o fator de correção é calculado com a equação 9, onde *N*
é o número de gotejadores.

<u>Obs.: EQUAÇÃO 10</u>

Por fim, em 10 calcula-se o valor da perda de carga na
tubulação lateral.

<u>Obs.: EQUAÇÃO 11</u>

Pelo critério de projeto adotado, o diâmetro da tubulação é considerado
adequado se *Δh**t**l* &lt; *h**f*. Como 0, 084 &lt; 2, o tubo de
$1/2"$ é considerado apropriado para a aplicação.

Para determinar o nível máximo de aclive suportado pelo sistema,
utiliza-se a equação 11, na qual considerou-se um fator
de segurança (FS) igual a 3, isto é, que a pressão de serviço seja um
terço da mínima regulamentada pela .

<u>Obs.: EQUAÇÃO 12</u>

Portanto, a diferença de nível máxima a qual o sistema de irrigação pode
sujeitar-se é de 6,509 metros.

### Rotina para o dimensionamento do sistema de irrigação

De modo a automatizar os cálculos foi construído o seguinte algoritmo
utilizando o XXX. **(O QUE VEM AQUI FUINHA? @Pedro)**

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
