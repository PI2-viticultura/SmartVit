# Manual de manutenção do sistema eletrônico

Para a elaboração deste manual, um estudo comparativo entre diversos manuais apresentados por diversos fabricantes foi realizado, como a Vaisala, NovaLynx, Delta-T Devices, Davis, Campbell Scientific, LSI Lastem, Observator Instruments, All Weather Inc, Nivus, além de utilizar orientações do governo de Alberta, Food and Agriculture Organization of the United Nations do livro Weather Station Handbook an Interagency Guide for Wildland Managers, de forma a observar possíveis padrões da indústria para, desta forma, elaborar um processo de manutenção que seja alinhado com o estado da arte. Isto foi realizado devido a ausência de normativas internacionais especificando exatamente qual deve ser os passos de manutenção para todos os sensores apresentados neste projeto. 

Serão indicadas, em um dado intervalo de tempo, quais manutenções/inspeções devem ser realizadas para cada sensor, a fim de observar o bom funcionamento e estado de conservação do mesmo. Também serão informadas as tratativas necessárias, no caso de alguma não conformidade seja observada. É importante ressaltar que, caso haja a previsão de uma manutenção mensal e anual no mesmo mês, que ambas sejam realizadas. Uma manutenção com um prazo maior não torna a manutenção mais rotineira desnecessária

## 1. Manutenção Mensal

### 1.1 Fixação do sensor

**Objetivo:** Manter os sensores bem afixados na estrutura. Aplicável ao sensor de velocidade do vento, direção do vento e pluviométrico.

**Materiais:**

- Chave sextavada M12.
- Conjunto completo de fixação reserva.
- Conjunto de sustentação reserva.

**Passo-a-passo:**

1. Com a chave sextavada, apertar os parafusos de fixação, caso o problema não seja resolvido, continuar.
2. Com auxílio da chave sextavada, trocar o conjunto de fixação, caso o problema não seja resolvido, continuar.
3. Com auxílio da chave sextavada, trocar o conjunto de sustentação, caso haja algum dano ao mesmo, conforme mostra tabela de defeito dos metais presente no projeto.

### 1.2 Inspeção visual do sensor

**Objetivo:** Verificar visualmente a condição do sensor, verificando a necessidade de substituição. Aplicável a todos os sensores.

**Materiais:**

- Chave sextavada M12.
- Sensor reserva.

**Passo-a-passo:**

1. Comparar estado atual com as imagens de referência dos sensores, caso haja um problema, continuar.
2. Desconectar os cabos do sensor.
3. Com a chave sextavada, retirar o sensor antigo e instalar o novo sensor sensor (caso necessário).
4. Conectar os cabos ao  sensor novo.

### 1.3 Inspeção visual dos conectores

**Objetivo:** Verificar visualmente a condição do conectores e cabos, observando a necessidade de substituição. Aplicável a todos os sensores.

**Materiais:**

- Spray de espuma para vedação.
- Fio de cobre da milimetragem correta (22, 20 ou 18 AWG).
- Multímetro.

**Passo-a-passo:**

1. Desconectar os cabos do sensor.
2. Retirar, com as mãos, a espuma de vedação que fixa o sensor.
3. Retirar o fio danificado.
4. Passar o fio novo pela estrutura.
5. Verificar integridade do fio com o multímetro.
6. Vedar a estrutura com o spray de espuma.
7. Conectar os cabos ao  sensor novo.

### 1.4 Limpeza externa

**Objetivo:** Realizar a limpeza externa do pluviômetro, de maneira a evitar possíveis interferências na aquisição de dados por obstruções.

**Materiais:**

- Luva de vaqueta ou de borracha de alta tensão.
- Pano umedecido.

**Passo-a-passo:**

1. Desconectar os cabos do sensor.
2. Com a mão, retirar o excesso de detritos do coletor.
3. Com o pano, limpar os detritos menores.
4. Conectar os cabos ao  sensor novo.

## 2. Manutenção trimestral

### 2.1. Manutenção interna do pluviômetro

**Objetivo:** Realizar a limpeza interna do pluviômetro, de maneira a evitar possíveis interferências na aquisição de dados por obstruções.

**Materiais:**

- Luva de vaqueta ou de borracha de alta tensão.
- Pano umedecido.
- Pano com lubificante.
- Chave sextavada M12.
- Chave philips.
- Multímetro.
- Reed-switch e imã de neodímeo reservas.
- Estação de solda.

**Passo-a-passo:**

1. Desconectar os cabos do sensor.
2. Com a chave sextavada, retirar o sensor da estrutura.
3. Com a chave philips, retirar o coletor da estrutura
4. Com a mão, retirar os detritos maiores.
5. Com o pano umedecido, limpar os detritos menores.
6. Com um multímetro, testar a continuidade do reed switch. Caso encontrado um problema, realizar a troca da chave magnética e/ou do ímã.
7. Com um pano lubrificado, lubrificar o pivô interno.
8. Instalar o coletor novamente na estrutura, com a chave philips.
9. Instalar o sensor na estrutura, com a chave sextavada.
10. Conectar os cabos do sensor.

## 3. Manutenção anual

### 3.1 Limpeza externa dos microcontroladores

**Objetivo:** Realizar a limpeza externa dos microcontroladores e do BME280, para evitar que o acumulo de poeira gere excesso de calor no microcontrolador.

**Materiais:**

- Álcool isopropílico 95%.
- Pano limpo.

**Passo-a-passo:**

1. Desconectar os cabos do sensor.
2. Com o pano limpo embebido no álcool isopropílico, retirar as sujeiras das placas.
3. Conectar os cabos do sensor.

### 3.2 Manutenção preventiva do anemômetro

**Objetivo:** Realizar a manutençaõ preventiva do anemômetro, a fim de manter a qualidade da aquisição dos dados deste sensor.

**Materiais:**

- Pano umedecido com água.
- Lubrificante de rolamento.
- Multímetro.
- Rolamento reserva.
- Reed switch reserva.
- Chave philips.
- Chave sextavada M12.

**Passo-a-passo:**

1. Desconectar os cabos do sensor.
2. Retirar o sensor da estrutura.
3. Com o pano umedecido, retirar as sujeiras das superfícies do sensor.
4. Lubrificar o rolamento do sensor. Caso o rolamento esteja prejudicado, abrir o sensor e realizar a troca do rolamento e remontar o sensor.
5. Verificar acionamento com o multímetro em modo de continuidade. Caso haja algum problema, abrir o sensor, realizar a troca do reed switch  e remontar o sensor. Caso não resolva, trocar o sensor.
6. Instalar o sensor da estrutura.
7. Conectar os cabos do sensor.
