# Sensor de temperatura, umidade e pressão atmosférica

## 1. Definição do modelo

O monitoramento dos aspectos do ambiente, como a temperatura, pressão e umidade, é importante, visto que estes aspectos possuem influencia direta sobre a eficiência do controle químico das doenças e das pragas, tanto possibilitando a proliferação de doenças, quanto influenciando na eficiência dos produtos em si. Além disso, o conhecimento da umidade ambiental é vital no momento da poda verde, visto que o excesso de umidade aumenta a incidência de podridão cinzenta e podridão ácida nos cachos do lado mais enfolhado.

O sensor BME280 coletará dados de umidade, temperatura e pressão. Além de ser um sensor conhecido, também é, como indicado no próprio datasheet, extremamente recomendado para estações meteorológicas, IoT (_Internet of Things_), dispositivos móveis, entre outros, se adequando perfeitamento ao escopo do projeto que vem sendo desenvolvido. 

<center>
<figure>
  <img src="/SmartVit/docs/Eletronica/imgs_eletronica/bme280.jpg"  />
  <figcaption>
      BME280
  </figcaption>
</figure>
</center>
<br>
<br>

## 2. Especificações técnicas

|Característica|Dado|
|-|-|
|Modelo|BME280|
|Tensão de trabalho|1.71Vcc ~ 3.6Vcc|
|{Comunicação} |I2C e SPI|
|Faixa de temperatura|-40 ºC a 85 ºC +- 1.0 ºC|
|Resolução de temperatura|0.01 ºC|
|Faixa de pressão|300 a 1100 hPa +- 1.0 hPa|
|Resolução de pressão|0.18 Pa|
|Faixa de umidade|0 a 100% +- 3% RH|
|Resolução de umidade| 0.008%|

## 3. Detalhamento técnico e cálculos

Além de atender a todas as necessidade do projeto, cobrindo todo o intervalo possíveis de temperatura, pressão e humidade relativa, conforme demonstrado nas especificações técnicas, que o ambiente de atuação poderia alcançar, esse sensor também possui uma tensão de alimentação que fica em torno dos 3V3 (3.3 Volts), que coincide com a tensão em que os microcontroladores e todo o sistema eletrônico do projeto irá atuar.

Uma característica importante do BME280 é que ele possui duas formas de comunicação: I2C e SPI, trazendo uma maior liberdade para o desenvolvimento do projeto e flexibilizando a definição do uso das portas do microcontrolador para ser feita de acordo com a necessidade de outros módulos e sensores.

Em termos de energia, o sensor é capaz de atuar em 3 modos: _sleep mode_, _normal mode_ e _forced mode_. O modo de atuação implicará na modificação do tempo de resposta, da taxa de coleta e transmissão de dados e,  principalmente, no consumo de corrente (que pode chegar até a 0.1 $\mu$A).

O sensor BME280 é uma versão melhorada do sensor BMP180 (também desenvolvido pela Bosch), apresentando uma medição de temperatura otimizada, com menos ruído, maior resolução e medição de pressão com maior acurácia.

Apesar de esse não ser o principal, o BME280 ainda é um sensor extremamente comum no mercado, de fácil acesso e baixo custo, simplificando o processo de obtenção dos materiais e facilitando manutenção e, caso necessário (por tempo de vida ou defeito), a substituição do sensor dentro do projeto.

Por fim, o tratamento dos dados e a acondicionamento do circuito é integrado ao BME280, cuja saída já é o resultado convertido nas unidades do SI, dispensando assim o tratamento destes dados pelo microcontrolador. 
