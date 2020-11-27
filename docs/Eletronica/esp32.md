# Sistema de transmissão de dados

## 1. Definição do modelo

Para a transmissão dos dados, escolheu-se a LoRa ESP 32, desenvolvida pela empresa Heltec, que é um microcontrolador de baixo custo e baixo consumo de energia, conhecido por fazer parte de uma das famílias pioneiras de microcontroladores com suporte a Wi-Fi, mas suportando também a comunicação Bluetooth e outras formas de transmissão e recepção de dados, o que a torna uma ferramente com ampla área de aplicações dentro do universo de IoT (Internet of Things), monitoramento e transmissão de dados.

Em conjunto com todas essas ferramentas, a Lora ESP32 é um microcontrolador desenvolvido para operar em faixas extremas de temperatura (entre -40oC e +125oC) e com possibilidade de se comunicar por diversos formatos e protocolos de comunicação como SPI, I2C e UART. Além disso, possui tensão de alimentação típica em 3V3 (3.3 Volts), que é a tensão anotada para todo o sistema eletrônico do projeto.

O microcontrolador Lora ESP32 ainda conta com 43 pinos programáveis de entrada e saída (GPIOs), dos quais 2 são compostos por ADCs (_analog to digital converter_) de 12-bits, 2 por DACs (_digital to analog converter_) de 8-bits, 14 possuem suporte para sensor de toque (_touch sensing IOs_), 4 são para comunicação SPI, 2 para I2C, entre outras interfaces que não são tão importantes para o projeto. Ela possui também 4 interfaces virtuais (\textit{virtual interfaces}) de Wi-Fi,
que nos permite atuar em 4 modos diferentes ao mesmo tempo. Para economia de energia, a ESP32 possui ainda 4 modos de operação (Modem-sleep, Light-sleep, Deep-sleep e power off), variando seu consumo de energia entre 19 mA e 1 $\mu$A, quando o chip é desligado.

Além disso, além de possuir as formas de comunicação que atendem às necessidades do projeto, a Lora ESP32 elimina a necessidade de mais uma etapa no processo, que seria um envio dos dados para outro microcontrolador (uma Raspberry, por exemplo), a partir do qual seria feita a comunicação com o servidor. Utilizando a ESP e as bibliotecas desenvolvidas para comunicação utilizando o protocolo HTTP, podemos otimizar o processo de transmissão de dados realizando o envio dos dados para o servidor diretamente.

Por fim, em conjunto com a capacidade de envio para o servidor utilizando o HTTP, o grande diferencial é o protocolo LoRa, que torna este microcontrolador capaz de se comunicar a distâncias acima de 3km, utilizando de um consumo de 130mA para uma saída de 20 dB, tornando-o uma escolha ideal para um cenário IoT de longa distância e baixo consumo.

Essa comunicação pode ser ainda mais simplificada, utilizando a vantagem de que esse microcontrolador também possui portabilidade para ser programado e configurado utilizando as bibliotecas desenvolvidas na linguagem de Arduino (extensão .ino) e na própria IDE do Arduino, o que possibilita à equipe entregar um sistema funcional e adaptado à tecnologia e forma de comunicação e armazenamento de dados vigente: o armazenamento em nuvem.

![img](imgs/lora%20esp32.png)

## 2. Especificações técnicas

|Característica|Dado|
|-|-|
|CPU|Tensilica LX6 dual-core 240MHz|
|Memória Flash|8 MB|
|Memória RAM|520 kB SRAM|
|Comunicação sem fio|Wi-fi, Bluetooth e LoRa|
|Área LoRaWan|EU433, CN470 (LF) IN865, EU868, US915, AU915, KR920, AS923 (HF)|
|Máxima saída de potência LoRa|19 dB +- 1 dB|
|Interface de comunicação serial universal (USCI)|UART, SPI, I2C, I2S|
|Conversor analógico para digital (ADC)|8 bis|
|Erro típico não ajustado do ADC|+-12 LSB|

![img](imgs/Esp32%20LoraWan.jpg)

## 3. Detalhamento técnico e cálculos

Como serão utilizado de dois microcontroladores deste, é necessário segmentar o detalhamento de cada para cada tipo de uso. Esta divisão se dá devido a arquitetura desejada de sistema em uma aplicação real. O código compartilhado por ambos casos, que funciona como biblioteca, pode ser observado [aqui.](https://github.com/PI2-viticultura/SmartVit-electronic-module/blob/master/lora_ESP_32/SmartVit_lora.h)

### 3.1 End-point

A LoRa ESP 32 de end-point é o microcontrolador que está na estação de coleta de dados local, na plantação. Este ponto realiza três processos: receber os dados adquiridos pela MSP430 via protocolo UART; realiza o tratamento dos dados, seguindo a matemática descrita ao longo do detalhamento técnico de cada sensor e; transmite os dados tratados via protocolo LoRaWan. 

Desta forma, esta estação não necessita de acesso a rede de internet, visto que sua antena é capaz de transmitir dados por mais de 3 km de distância. Com isso, cada estação de monitoramento possuirá um desses subsistemas, podendo assim se comunicar com a central, que deve ser posicionada estrategicamente para ser capaz de receber os dados dos end-points.

Além disto, devido a limitações arquiteturais da MSP430, os dados de temperatura, umidade e pressão atmosférica serão obtidos utilizando da LoRa ESP 32. Como os dados provenientes do BME280 são tratados no próprio sensor, os erros de conversão são reduzidos, visto que não dependemos do erro de conversão do ADC da LoRa ESP 32.  

O código referente a este processo pode ser obtido a partir [daqui.](https://github.com/PI2-viticultura/SmartVit-electronic-module/blob/master/lora_ESP_32/lora_sender/lora_sender.ino)

### 3.2 Central

A LoRa ESP 32 central é a responsável por receber os dados dos end-points (no caso deste trabalho, apenas um), realizar a conversão dos dados para a notação json e realizar a requisição deste pacote para o microsservidor de recepção de dados, presente na arquitetura de software. Com isso, este microcontrolador funciona como ponte entre o universo de eletrônica e de software, sendo capaz de transmitir todas as informações adquiridas pela estação ao servidor, possibilitando assim a continuidade dos dados.

Devido esta característica, este microcontrolador necessita de uma conexão a internet de maneira sem fio (_Wi-fi_), visto que a requisição é realizada utilizando de um protocolo HTTP.

O código referente a este processo pode ser obtido a partir [daqui.](https://github.com/PI2-viticultura/SmartVit-electronic-module/blob/master/lora_ESP_32/lora_receiver/lora_receiver.ino)
