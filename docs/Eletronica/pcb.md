# Placa de circuito impresso

## 1. Desenvolvimento

O objetivo da placa de circuito impresso é de ser uma plataforma que englobe todos os circuitos, evitando assim que seja necessário fios desnecessários de conexão. Desta forma,esta placa foi realizada de acordo com os diagramas esquemáticos presente abaixo:

<center>
<figure>
  <img src="/SmartVit/docs/Eletronica/imgs_eletronica/schematic1.jpg"  />
  <figcaption>
     Diagrama esquemático do sistema eletrônico - pág. 1
  </figcaption>
</figure>
</center>
<br>
<br>

<center>
<figure>
  <img src="/SmartVit/docs/Eletronica/imgs_eletronica/schematic2.jpg"  />
  <figcaption>
      Diagrama esquemático do sistema eletrônico - pág. 2
  </figcaption>
</figure>
</center>
<br>
<br>

O layout foi realizado utilizando o Software comercial Altium Designer (versão 20.1.11). O esquemático abrange todas as conexões entre componentes, CIs e microcontroladores do sistema, removendo a necessidade de grande número de conexões entre eles de forma direta e mapeando o acesso a cada um desses sensores e microcontroladores. 

Dentro da PCB estarão presentes componentes, tais como resistores, capacitores e CIs utilizados para as mais diversas funções: regulação de tensão, proteção de carga, limitador de corrente, tratamento do sinal e redução de ruídos. Além disso, a MSP430 também foi anexada à placa, permitindo que suas conexões sejam feitas por trilhas ao invés de mais fios tradicionais. 

Os conectores utilizados foram todos do tipo Molex, que são conectores mais firmes e resistentes quando comparados a _jumpers_ e entregando mais liberdade, com possibilidade de desconexão, quando necessário, se compararmos com a utilização de soldas para este fim. Com isso, a equipe terá maior liberdade para atuar em casos de necessidade de alterações em estruturas, movimentação, manutenção, troca de sensores e verificação de funcionamento sem muitas modificações e com redução de chances de erro durante o processo de conexão e desconexão dos fios.

Também foi adicionado à PCB espaço adicional para a inserção de dissipadores de calor em cada um dos reguladores de tensão utilizados, visto serem componentes que chegam a temperaturas relativamente altas, podendo gerar danos ao circuito e aos próprios componentes.
| Descrição | Informação |
|:-:|:-:|
| Dimensões | 4085.00x5045.00 |
| Tipo de face | Face dupla (_Bottom layer_ e _Top Layer_) |
| Material | FR-4 |
| Espessura (mm) | 1.6 |

O projeto de todo o esquemático e layout da pcb, além da definição de parâmetros e materiais foi realizado pela equipe de eletrônica. A fabricação da PCB será encomendada, para que a mesma seja produzida nos mesmos padrões de qualidade de seu desenvolvimento. 

Aproveitando do uso de duas faces da placa, foram utilizados 3 planos para o desenvolvimento das trilhas do sistema. Um plano, que cobre toda a _top layer_, foi utilizado em conexão com o GND (ponto de referência do sistema). Já a _bottom layer_ foi utilizada para construir dois planos: um plano conectado aos 12V e outro plano conectado aos 5V. Isso foi realizado para evitar problemas com trilhas finas em casos de alta potência, visto que estes são os canais de alimentação do sistema, e para a simplificação do projeto e da geração das demais trilhas, reduzindo significativamente seu número.

O desenvolvimento do esquemático, do desenho 3D e 2D da MSP430 também foi trabalho da equipe de eletrônica, visto que poucos materiais confiáveis e compatíveis com a placa real fora encontrados na internet. Esse projeto foi realizado utilizando todas as medidas da placa física, mais especificamente a MSP430G2ET.

Também foi tomado o cuidado de gerar um pcb com todos os componentes possuindo suas representações 3D disponíveis em suas bibliotecas, gerando uma melhor visualização e previsão do produto a ser gerado e do resultado final do projeto.

As Figuras abaixo são, respectivamente, as representações da _top layer_ e da _bottom layer_ da placa gerada. 

<center>
<figure>
  <img src="/SmartVit/docs/Eletronica/imgs_eletronica/pcb_top.jpg"  />
  <figcaption>
      Top-layer
  </figcaption>
</figure>
</center>
<br>
<br>

<center>
<figure>
  <img src="/SmartVit/docs/Eletronica/imgs_eletronica/pcb_bottom.jpg"  />
  <figcaption>
      Bottom-layer
  </figcaption>
</figure>
</center>
<br>
<br>

As figuras abaixo são, respectivamente, uma representação _top view_  _bottom view_ da PCB3D.

<center>
<figure>
  <img src="/SmartVit/docs/Eletronica/imgs_eletronica/pcb3d_top.jpg"  />
  <figcaption>
      Top-layer (3D)
  </figcaption>
</figure>
</center>
<br>
<br>

<center>
<figure>
  <img src="/SmartVit/docs/Eletronica/imgs_eletronica/pcb3d_bottom.jpg"  />
  <figcaption>
      Bottom-layer (3D)
  </figcaption>
</figure>
</center>
<br>
<br>

## 2. Instalação

Visto que a fixação dos sensores fica em cargo da área de estruturas, a responsabilidade da equipe de eletrônica refere-se ao cabeamento, tanto sua solução de vedação, quanto no dimensionamento e padronização. Assim, a solução proposta em conjunto com a equipe de estruturas foi a utilização de spray de espuma expansiva no interior da estrutura, evitando assim que haja movimentação dos mesmos no interior da estrutura, o que poderia gerar uma desconexão em algum dos sensores ou na alimentação. Para a passagem de fios entre estruturas conectadas, furos foram planejados pela equipe de estruturas, possibilitando assim que a fiação seja mantida 100% no interior da estrutura, sendo protegida das intempéries do tempo.

O processo de instalação e acomodação dos fios é:

1. Antes de passar os cabos, cortar, montar conectores e identificar ambas extremidades dos cabos;
2. Realizar teste de continuidade para verificar integridade dos cabos;
3. Passar os cabos na estrutura e afixar temporariamente os mesmo com fita isolante;
4. Conectar os cabos nos equipamentos;
5. Verificar funcionamento dos equipamentos conectados;
6. Isolar, com auxílio da espuma expansiva, as extremidades da estrutura.

Sendo que o caminho e a dimensão dos fios pode ser observado no diagrama unifilar:

<center>
<figure>
  <img src="/SmartVit/docs/Eletronica/imgs_eletronica/diagrama.png"  />
  <figcaption>
      Diagrama unifilar do sistema
  </figcaption>
</figure>
</center>
<br>
<br>

A espessura dos cabos foi definida com base na tabela AWG, sendo que três espessuras foram definidas. A primeira compreende a passagem de dados dos sensores para o microcontrolador e entre microcontroladores, a segunda entre os sensores e o sistema de alimentação com o controlador de carga, no qual a alimentação é realizada e a terceira é para a conexão dos componentes do sistema de alimentação. Os valores podem ser encontrados na tabela abaixo:

|Função|Espessura (AWG)|
|-|-|
|Transmissão de dados por fio|22|
|Alimentação dos sensores/irrigação|20|
|Sistema de alimentação|18|

As cores escolhidas para os cabos de dados foram: amarelo, verde e azul. Já para a alimentação, foram escolhidas as cores vermelha e preta. Foram escolhidas três cores diferentes para os cabos de dados, observando o seu posicionamento na estrutura; já que o máximo de proximidade encontrado foi de três sensores diferentes em um mesmo caminho. A cor vermelha sempre indica o $V_{CC}$, enquanto a cor preta indica sempre o aterramento. A coloração para cada sensor está descrita na tabela abaixo. Os valores de cor enumerados correspondem a fio que vão enrolados em si, pois são direcionados a um único sensor, isso visa evitar possíveis confusões de conexão.

|Origem|Tipo|Cor|
|-|-|-|
|BME280|SDA|Verde¹|
|BME280|SCL|Amarelo¹|
|Sensor umidade solo 1|Analógico|Azul|
|Sensor umidade solo 2|Analógico|Azul²|
|Sensor umidade solo 2|Digital|Amarelo²|
|Sensor umidade solo 3|Analógico|Azul³|
|Sensor umidade solo 3|Digital|Verde³|
|PH4502C (PH)|Analógico|Verde|
|PH4502C (Temperatura)|Analógico|Amarelo|

Devido ao funcionamento do anemômetro, indicador de direção e pluviômetro, os seus dados são obtidos a partir do cabo de cor preta. Isso se dá por causa da maneira construtiva dos sensores, que funcionam, de maneira resumida, como uma chave magnética, então a alimentação fornecida só será devolvida caso haja o contato no seu interior.

Desta forma, foi repassada a equipe de estrutura quantos cabos serão utilizados em cada sensor, bem como as suas interconexões, espessura e padrão de cores. Como retorno, temos o comprimento dos cabos, que é necessário para a realizar o cálculo de dissipação de tensão no cabeamento. Este cálculo é muito importante, visto que os dados analógicos vindo dos sensores dependem desta tensão, de forma que podemos estimar um erro associado ao meio físico de comunicação. Esta queda de tensão pode ser vista em \ref{tab:queda_tensao}, em que o pior cenário sempre foi considerado, do ponto de vista de distância, visando mostrar a atenuação máxima.

|Função|Espessura (AWG)|Distância (m)|Tensão Nominal (V)|Corrente Máxima (A)|Queda de tensão no condutor (V)|
|-|-|-|-|-|-|
|Transmissão de dados por fio|22|1,5|5.0|0.1|0,02|0,32%|
|Transmissão de dados por fio|22|1,5|3.3|0.1|0,02|0,48%|
|Alimentação dos sensores/irrigação|20|1|12.0|1.0|0,07|0,55%|
|Alimentação dos sensores/irrigação|20|1,5|5.0|0.5|0,05|0,99%|
|Alimentação dos sensores/irrigação|20|1,5|3.3|0.5|0,05|1,50%|
|Sistema de alimentação|18|2,3|12|3.04|0,29|1,06%|

Por fim, para realizar um mapeamento mais simples para o usuário e fixar os componentes necessários para o bom funcionamento do sistema (CIs, conectores, etc) foi realizado o layout de uma PCB (_Printed Circuit Board_) que agregra todos os adicionais do circuito aos sensores, tornando a solução mais prática, compacta e profissional. Todas as características de PCB, seus componentes e materiais utilizados para fabricação estão descritos no manual de fabricação.

Na Figura abaixo estão numeradas e nomeadas todas as conexões que serão realizadas entre dentro do sistema, 

<center>
<figure>
  <img src="/SmartVit/docs/Eletronica/imgs_eletronica/pcb_3d_numbered.jpg"  />
  <figcaption>
      Pinagem da PCB
  </figcaption>
</figure>
</center>
<br>
<br>

Considerando um andamento de cima para baixo e da esquerda para a direita, os pinos devem ser conectados conforme descrito na tabela \ref{tab: pins_pcb}.

|Item|Nome (Esquemático)|Pino|Descrição|
|-|-|-|-|
|1|Supply|INPUT (12V, ~3A)|Alimentação que vem do controlador de carga|
|1|Supply|GND|Referência de terra para o controlador de carga|
|2|WATER|12V (Max. 1A)|Alimentação para válvula solenoide, para controle da irrigação|
|2|WATER|GND|Referência de aterramento da válvula solenoide|
|2|WATER|WATER\_OUTPUT|Saída de acionamento da válvula solenoide|
|3|BME|3V3|Alimentação do sensor|
|3|BME|SCL|Canal para transmissão do clock na comunicação I2C|
|3|BME|SDA|Canal para transmissão dos dados na comunicação I2C|
|3|BME|GND|Referência de aterramento para o sensor|
|4|PH|TEMPERATURE|Entrada dos dados de temperatura|
|4|PH|PH|Entrada dos dados de pH|
|4|PH|5V|Alimentação do sensor|
|4|PH|GND|Referência de aterramento para o sensor|
|5|LoRa|SCL|Linha de clock do I2C para coleta de dados do BME280|
|5|LoRa|SDA|Linha de dados do I2C para coleta de dados do BME280|
|5|LoRa|TX\_MSP|Pino de envio de dados por UART para a MSP|
|5|LoRa|RX\_MSP|Pino de recebimento de dados por UART para a MSP|
|5|LoRa|3V3|Alimentação do LoRa|
|5|LoRa|GND|Referencial de terra para o LoRa.|
|6|UMID1|MOISTURE\_1| Sinal analógico que indica a umidade relativa do solo a 0.2 metros de profundidade|
|6|UMID1|GND|Referência de terra do sensor|
|6|UMID1|5V|Alimentação do sensor|
|7|UMID2|MOISTURE\_2|Sinal analógico que indica a umidade relativa do solo a 0.2 metros de profundidade|
|7|UMID2|WATERING\_2|Sinal digital que indica a necessidade de irrigação do solo junto ao WATERING\_3|
|7|UMID2|GND|Referência de terra do sensor|
|7|UMID2|5V|Alimentação do sensor|
|8|UMID3|MOISTURE\_3|Sinal analógico que indica a umidade relativa do solo a 1.0 metro de profundidade|
|8|UMID3|ATERING\_3|Sinal digital que indica a necessidade de irrigação do solo junto ao WATERING\_2|
|8|UMID3|GND|Referência de terra do sensor|
|8|UMID3|5V|Alimentação do sensor|
|9|Pluviometro|GND|Pino disponível para referência de terra (não será usado no sensor)|
|9|Pluviometro|RAIN\_QNT|Sinal analógico mapeado e a ser processado para indicar a quantidade de chuva|
|9|Pluviometro|5V|Alimentação com resistor para reduzir ruído e limitar corrente|
|10|Anenômetro|GND|Pino disponível para referência de terra (não será usado no sensor)|
|10|Anenômetro|WIND\_SPEED|Sinal analógico mapeado e a ser processado para indicar a velocidade do vento|
|10|Anenômetro|5V|Alimentação com resistor para reduzir ruído e limitar corrente|
|11|Biruta|GND|Referência de aterramento para sensor de direção do vento|
|11|Biruta|WIND\_DIR|valor analógico mapeado para indicar a direção do vento|
|11|Biruta|V3|Alimentação do sensor|

É importante destacar que as portas descritas como entradas e saídas são referentes ao microcontrolador, ou seja, se é dito que a porta x é a entrada dos dados de y, quer dizer que esse dado está sendo enviado do sensor para o microcontrolador e não ao contrário. O inverso também se aplica.
