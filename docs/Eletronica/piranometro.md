# Sensor de irradiação solar

## 1. Definição do modelo

Para realizar a medições de irradiância solar, são utilizados piranômetros que podem ser divididos em dois tipos quanto a sua construção: piranômetros térmicos (à base de termopares) e piranômetros fotovoltaicos (à base de silício) e em três categorias quanto à precisão: padrão secundário; 1a classe e 2a classe, conforme a ISO 9060 (1990).

Os piranômetros térmicos possui um conjunto de termopares, sendo um lado posicionado em uma superfície enegrecida voltada para o sol e o outro lado posicionado para o interior do instrumento. Esses tipos de piranômetros possuem a vantagem de serem mais precisos e com relação a especificação “não-linearidade” . Possuem um espectro amplo para detectar a irradiância solar de 300 nm a pouco mais de 4000 nm. Uma desvantagem é o seu custo, quando comparado ao piranômetro fotovoltaico.

Os piranômetros fotovoltaicos utilizam uma pequena célula fotovoltaica de silício como sensor, sendo posicionada sob um difusor e exposta a radiação. Uma das desvantagem do sensor fotovoltaico é sua reduzida faixa espectral de resposta, situada entre 400 e 1.100 nm, inferior ao sensor de termopilha, que responde à faixa entre 300 e 4000 nm.

Optamos por utilizar o sensor de radiação solar modelo SEM228 da empresa SENTEC. Esse modelo adota o princípio fotoelétrico sensor de radiação solar e pode ser utilizado para medir a radiação solar com o espectral faixa de 0.3 ~ 3$\mu$ m. Adota o sensor de radiação de alta-precisão elemento fotossensível, amplo espectro de absorção, alta absorção e boa estabilidade em todo o espectro gama; entretanto, tampa protetora contra poeira com transmissão da luz até 95% é instalado fora do elemento sensor, a tampa do pó adota um tratamento especial para reduzir a absorção de poeira, Efetivamente evitar a interferência de fatores ambientais nos componentes internos, e com precisão medir a radiação solar.

<center>
<figure>
  <img src="/SmartVit/docs/Eletronica/imgs_eletronica/piranometro.png"  />
  <figcaption>
      Piranômetro SEM228
  </figcaption>
</figure>
</center>
<br>
<br>

## 2. Especificações técnicas

|Característica|Dado|
|-|-|
|Modelo|Sentec SEM228|
|Material|}Policarbonato + tampa de vidro fosco, alumínio + tampa de vidro de quartzo|
|Fonte de alimentação|10 ~ 30 VDC, 12 ~ 24 VDC|
|Faixa de medição|0 ~ 1800 W/m², 0 ~ 1500 W/m²|
|Consumo de energia|0.08 W +- 0.15 W|
|Tempo de resposta|+- 10s, +- 5s|
|Sinal de saída|RS485(Modbus-protocolo RTU),4-20 mA, 0-5V, 0-10V|
|Faixa espectral| 0.3 ~ 3$\mu m$|
|Resolução|1 W/m²|
|Nonlinearity|+- 2%|
|Estabilidade de longo-prazo|+- 2%|
|Cosine resposta|+- 2|

## 3. Detalhamento técnico e cálculos

### 3.1 Cálculo de irradiação solar

De acordo com o método de KONDRATYEV (1977), pela orientação arbitrária (Ss) do fluxo de radiação recebido por uma superfície normal podemos chegar ao fluxo de radiação direta sobre uma superfície inclinada, pela equação abaixo:

![\Large S_{s} = S_{m} \cos{i}](https://latex.codecogs.com/svg.latex?\Large&space;S_{s}=S_{m}\cos{i})

Onde:

![\Large S_{m}](https://latex.codecogs.com/svg.latex?\Large&space;S_{m}) = fluxo de radiação solar recebido por uma superfície normal aos raios solares com presença da massa atmosférica (m), 
![\Large i](https://latex.codecogs.com/svg.latex?\Large&space;i) = ângulo de incidência dos raios solares numa determinada superfície inclinada. 

O cosseno do ângulo de incidência dos raios é determinado pela equação abaixo:

![\Large \cos{i}=\cos{\alpha}\sin{h}+\sin{\alpha}\cos{h}\cos{\Psi}](https://latex.codecogs.com/svg.latex?\Large&space;\cos{i}=\cos{\alpha}\sin{h}+\sin{\alpha}\cos{h}\cos{\Psi})

Onde: 
![\Large \alpha](https://latex.codecogs.com/svg.latex?\Large&space;\alpha) = o ângulo de inclinação da rampa em relação à horizontal; 
![\Large h](https://latex.codecogs.com/svg.latex?\Large&space;h) = o ângulo de elevação solar; 

E tem-se que:

![\Large \Psi=\psi\phi-\psi%20n](https://latex.codecogs.com/svg.latex?\Large&space;\Psi=\psi\phi-\psi%20n)

Onde:
![\Large \psi\phi](https://latex.codecogs.com/svg.latex?\Large&space;\psi\phi) = o azimute do sol;
![\Large \psi%20n](https://latex.codecogs.com/svg.latex?\Large&space;\psi%20n) = o azimute da projeção da normal à rampa.

Os ângulos de elevação e de azimute do sol são determinados pelas equações:

![\Large \sin{h}=\sin{\phi}\sin{\delta}+\cos{\phi}\cos{\delta}\cos{\Omega}](https://latex.codecogs.com/svg.latex?\Large&space;\sin{h}=\sin{\phi}\sin{\delta}+\cos{\phi}\cos{\delta}\cos{\Omega})

![\Large \cos{\Psi}^\Theta=\frac{\sin{h}\sin{\phi}-\sin{\delta}}{\cos{h}\cos{\phi}}](https://latex.codecogs.com/svg.latex?\Large&space;\cos{\Psi}^\Theta=\frac{\sin{h}\sin{\phi}-\sin{\delta}}{\cos{h}\cos{\phi}})

![\Large \sin{\Psi}^\Theta=\frac{\cos{\Psi}\sin{\Omega}}{\cos{h}}](https://latex.codecogs.com/svg.latex?\Large&space;\sin{\Psi}^\Theta=\frac{\cos{\Psi}\sin{\Omega}}{\cos{h}})

Onde:
![\Large \phi](https://latex.codecogs.com/svg.latex?\Large&space;\phi) = a latitude do local; 
![\Large \delta](https://latex.codecogs.com/svg.latex?\Large&space;\delta) = a declinação do sol;
![\Large \Omega](https://latex.codecogs.com/svg.latex?\Large&space;\Omega) = o ângulo horário do sol em dado instante.

Portanto, substituindo as equações na primeira equação, temos que:

![\Large S_{s} = S_{m}{\cos{\alpha}\sin{h}+\sin{\alpha}[\cos{\Psi}n(\tan{\phi}\sin{h}-\sin{\delta}\sec{}\phi)+\sin{\Psi}n\cos{\delta}\sin{\Omega}]}](https://latex.codecogs.com/svg.latex?\Large&space;S_{s}=S_{m}[\cos{\alpha}\sin{h}+\sin{\alpha}[\cos{\Psi}n(\tan{\phi}\sin{h}-\sin{\delta}\sec{}\phi)+\sin{\Psi}n\cos{\delta}\sin{\Omega}]])

Para o caso de uma superfície horizontal (H) do local, com (α=0), podemos simplificar para:

![\Large S_{H}=S_{m}\sin{h}](https://latex.codecogs.com/svg.latex?\Large&space;S_{H}=S_{m}\sin{h})

![\Large S_{s}=\frac{S_{h}}{\sin{\phi}\sin{\delta}+\cos{\phi}\cos{\delta}\cos{\Omega}}](https://latex.codecogs.com/svg.latex?\Large&space;S_{s}=\frac{S_{h}}{\sin{\phi}\sin{\delta}+\cos{\phi}\cos{\delta}\cos{\Omega}})

Para o caso de rampas, temos que:

![\Large S_{s}=\frac{S_{h}}{\sin{h}}\times(A1+B1\cos{\Omega}+C1\sin{\Omega})](https://latex.codecogs.com/svg.latex?\Large&space;S_{s}=\frac{S_{h}}{\sin{h}}\times(A1+B1\cos{\Omega}+C1\sin{\Omega}))


Onde:

![\Large A1=\cos{\alpha}\sin{\phi}\sin{\delta}+\sin{\alpha}[\cos{\Psi}_n(\tan{\phi}\sin{\phi}\sin{\delta}-\sin{\delta}\sec{\phi})]](https://latex.codecogs.com/svg.latex?\Large&space;A1=\cos{\alpha}\sin{\phi}\sin{\delta}+\sin{\alpha}[\cos{\Psi}_n(\tan{\phi}\sin{\phi}\sin{\delta}-\sin{\delta}\sec{\phi})])

![\Large B1=\cos{\alpha}\cos{\phi}+\sin{\alpha}\cos{\Psi}_n\sin{\phi}\cos{\delta}](https://latex.codecogs.com/svg.latex?\Large&space;B1=\cos{\alpha}\cos{\phi}+\sin{\alpha}\cos{\Psi}_n\sin{\phi}\cos{\delta})

![\Large C1=\sin{\alpha}\cos{\delta}\cos{\Psi}_n](https://latex.codecogs.com/svg.latex?\Large&space;C1=\sin{\alpha}\cos{\delta}\cos{\Psi}_n)

### 3.2 Estudo de irradiação solar em Brasília

A necessidade de saber a irradiação instantânea, para poder indicar a acidez da uva, é extremamente importante, talvez, um dos requisitos mais importantes para precisar o ponto de colheita, antes da uva ficar inviável para a produção de vinhos.
Assim, um estudo da irradiação solar se faz obrigatório. Adotando o manual de engenharia fotovoltaica de 2014, é possível entender que a energia emitida pelo sol, pode ser convertida em energia elétrica e mesmo com todas as perdas calculadas, apenas algumas horas do dia é necessário para gerar energia suficiente ao consumo de energia primária mundial. 

Desta forma a estratégia que seria utilizada em função do custo, seria a de utilização do painel fotovoltaico como um sensor de irradiação, assim, partindo-se da corrente e tensão geradas pelo painel é possível calcular de forma reversa a irradiação instantânea.

De acordo com a estimativa e comparação com o piranômetro, porém, foi possível concluir que o erro torna inviável essa substituição, como os dados abaixo demonstram, para o plano horizontal, sentido sempre norte, e para uma inclinação igual ao ângulo de latitude, aproximadamente 16°N, uma diferença média de aproximadamente 1kWh/m².dia. Essa ordem de grandeza de erro, além da temperatura do painel, que interfere diretamente na geração, de acordo com estudo feito na Universidade Federal do Pampa, demonstrou que um painel a 45°C perde 12,49%, aproximadamente, de geração, a 65°C é de quase 15% e, portanto, gera erro no cálculo da irradiação, a temperatura por outro lado mantém constante a geração de energia, provendo uma falsa impressão da irradiação solar, de forma que quando há variações mais bruscas da irradiação solar no local, o painel é feito para não absorver esse decaimento, e assim fica prejudicada a precisão, descartando assim essa substituição. 
De acordo com o Atlas Brasileiro de Energia Solar de 2017 em sua segunda edição, apresenta dados de mais de 17 anos, que foi produzido pelo Centro de Ciência do Sistema Terrestre (CCST) do Instituto Nacional de Pesquisas Espaciais (INPE), através do seu Laboratório de Modelagem e Estudos de Recursos Renováveis de Energia (LABREN) (CCST/LABREN/INPE, 2017), além de setenta mil piranômetros espalhados pelo Brasil e dados satelitais, utilizando a partir dessa base de dados um método de cálculo matemático para todo o território brasileiro, este por sua vez alimenta o programa SunData v 3.0 e assim o site do CRESESB (Centro de Referência para as Energias Solar e Eólica Sérgio de S. Brito), dos quais foram retirados os dados médios abaixo.

<center>
<figure>
  <img src="/SmartVit/docs/Eletronica/imgs_eletronica/cresesb1.png"  />
  <figcaption>
      Dados de irradiação solar do DF - coordenada 1
  </figcaption>
</figure>
</center>
<br>
<br>

<center>
<figure>
  <img src="/SmartVit/docs/Eletronica/imgs_eletronica/cresesb2.png"  />
  <figcaption>
      Dados de irradiação solar do DF - coordenada 2
  </figcaption>
</figure>
</center>
<br>
<br>

<center>
<figure>
  <img src="/SmartVit/docs/Eletronica/imgs_eletronica/cresesb3.png"  />
  <figcaption>
      Dados de irradiação solar do DF - coordenada 3
  </figcaption>
</figure>
</center>
<br>
<br>
Analisando as médias acima, para 3 localidades diferentes randômicas nas regiões agrícolas do Distrito Federal é possível inferir que a média anual de irradiação, de acordo com os dados do CRESESB, é em média de 5,316 kWh/m².dia para o plano horizontal e 5,513 kWh/m².dia para um plano inclinado de 16°, sentido norte e para o período de um ano. Ainda analisando as médias, é possível perceber que a menor média anual para um plano horizontal é em junho, com 4,77 kWh/m².dia e para um plano inclinado, ocorre em novembro, com médias de 4,753 kWh/m².dia. A média máxima por ano, no entanto, permanece no mês de agosto, com 5,896 kWh/m².dia e 6,616 kWh/m².dia, respectivamente.


<center>
<figure>
  <img src="/SmartVit/docs/Eletronica/imgs_eletronica/cresesb4.png"  />
  <figcaption>
      Gráfico de irradiação solar do DF
  </figcaption>
</figure>
</center>
<br>
<br>
