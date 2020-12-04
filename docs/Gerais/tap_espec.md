# Especificação
Comum de regiões frias, as videiras passaram a ganhar o mundo junto com os colonizadores e missionários na difusão do cristianismo, tendo relevância significativa por todo continente americano. No Brasil, a sua inserção foi feita por volta de 1500, onde hoje são os estados da Bahia e Pernambuco, em 1600 chegou na região sul através dos jesuítas. Mas foi só no final do século XIX que a cultura da uva foi impulsionada, através da imigração italiana em São Paulo, Paraná, Santa Catarina e Rio Grande do Sul \cite{vitivinibr.  

A vitivinicultura no Brasil segue uma padronização e requer inúmeros cuidados para garantir a qualidade durante o cultivo e produção da uva e no processo de vinificação. Embora a produção dos insumos provenientes da uva ocorra majoritariamente no Rio Grande do Sul, correspondendo a cerca de 65\% da área vitícola nacional, os demais estados brasileiros tem mostrado crescimento nos dados de área de cultivo e produção. Para dar prosseguimento nessa expansão do setor, o emprego de inovações tecnológicas nas etapas do processo se faz necessária. 

A utilização de soluções tecnológicas para acompanhamento de parreiras recebe o nome de Viticultura de Precisão que, bem como a agricultura de precisão, objetiva o acompanhamento dos aspectos essenciais para a produção de uvas de qualidade com intuito de mapeamento e melhoria de curto, médio e longo prazo. Estima-se que o uso de robôs na indústria do vinho tenha reduzido os erros de 30\% para 10-15\% na produção, melhorando o rendimento econômico e reduzindo seu impacto ambiental e risco associado.

Ao redor do mundo é possível encontrar diversos modelos de soluções oferecidos por empresas de tecnologia (Ericsson, Intel, Verizon, Libelium), desde a parte estrutural, eletrônica até o *software* para dashboard dos dados de monitoramento e construção de banco de dados, como por exemplo os modelos oferecidos pela empresa [PlantCT](https://plantct.com/) e [Libelium](http://www.libelium.com/smart-wine-libeliums-iot-technology-allows-predictive-control-of-vineyards-in-the-pago-ayles-winery-spain/). 

Seguindo exemplo de modelos existentes, o SmartVit traz a proposta de um produto alinhado com as necessidades do viticultor brasileiro, mais especificamente da região Centro-Oeste, adaptando as soluções adotadas em países europeus para o atendimento das especificações técnicas regionais, adequando-as às condições climáticas, garantindo uma uva de alta qualidade para a produção de vinhos finos.

## Necessidade do negócio
Apesar da agricultura de precisão ter sido inserida na viticultura no final dos anos 90 na Austrália, as soluções IoT só passaram a se popularizar a partir de 2009, com o desenvolvimento de sensores voltados para as necessidades específicas da vitivinicultura. Atualmente há soluções empregadas em fase de teste, seja utilizando estações fixas de monitoramento ou móveis, com foco no monitoramento do solo, *status* da água, peso do cacho e monitoramento do crescimento, predição de doenças, entre outros .

Devido as características especiais e condições específicas de cultivo, as soluções tecnológicas precisam estar ajustadas à região, o que torna necessário o desenvolvimento e manutenção de tecnologia local. Sabendo que a região centro-oeste tem apresentado crescimento na produção de uvas finas e ganhando relevância no cenário nacional, torna-se um ambiente propício para desenvolvimento do produto para monitoramento e controle de aspectos ambientais associados à videira.

### Descrição do problema
A relação do produto com o problema que ele visa resolver, de acordo com o posicionamento do SmartVit, é descrito abaixo.
<center>
| **O problema**             | consiste na falta de controle dos recursos utilizados na produção de uvas finas, apresentando um número elevado de erro de produção e perdas econômicas. A falta de domínio e controle sobre os fatores ambientais (vento, chuva, insolação). Excesso ou escassez de nutrientes no solo.           |
| :------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Afetando**               | a qualidade da uva e quantidade produzida.                                                                                                                                                                                                                                                         |
| **Cujo impacto é**         | safra perdida ou alto percentual de insumo desperdiçado por não atender às condições necessárias para produção do vinho e recursos ambientais utilizados erroneamente. Alto impacto ambiental.                                                                                                     |
| **Uma boa solução seria**  | um sistema de monitoramento remoto e digital, dispensando a presença física para controle do cultivo, garantindo o controle e uniformidade nas análises, de modo que a produção por completo tenha as mesmas características. Sistema de sensoriamento e plataforma de acesso de fácil utilização. |
</center>

### Posição do produto
A apresentação do produto desenvolvido e o seu diferencial em relação às propostas existentes no mercado.

<center>
| **Para**           | viticultores                                                                                                                                                                                                                               |
| :----------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **que**            | desejam acompanhar sua produção remotamente                                                                                                                                                                                                |
| **o SmartVit**     | se propõe a disponibilizar em *dashboards* os dados obtidos a partir do sensoriamento local, realizando análise de dados da vinícola e ativando um sistema de notificações e alertas                                                       |
| **que**            | tornarão o processo de análise e monitoramento remoto mais dinâmico e efetivo                                                                                                                                                              |
| **diferente das**  | propostas da  e                                                                                                                                                                                                                            |
| **nosso produto**  | estará calibrado para monitorar a produção de viticulturas de regiões com climas tropicais, fornecendo análises precisas, disponibilizando *dashboards* de acompanhamento e atuando na correção do sistema de irrigação quando necessário. |
</center>


## Objetivo
O protótipo objetiva-se no sensoriamento e controle dos aspectos do solo, ar e microclima e correção no sistema de irrigação. Contará com um sistema _web_ para transformar os dados coletados pelos sensores e dispositivos em informações utilizáveis. Dessa forma, será possível disponibilizar ao produtor informações úteis que auxiliarão na tomada de decisão, fazendo com que o sistema de coleta de informações, processamento e controle seja completo.

## Escopo
SmartVit é um produto composto por um sistema de coleta e sensoriamento de dados, acoplado ao sistema de irrigação, junto com uma plataforma *web pwa* (*progressive web app*) destinado a produtores e profissionais da viticultura que desejam realizar o acompanhamento remoto da sua safra durante o processo. Dessa forma, o sistema irá realizar a coleta dos dados (provindos dos sensores instalados no perímetro da plantação), armazená-los em servidor, para que assim sejam disponibilizados ao usuário por meio de *dashboards*, a fim de auxiliar na tomada de decisão e consequente manutenção da safra. 0 sistema realizará uma análise preditiva das condições adversas da natureza, comunicando  o usuário por meio de notificações via *email*, com o intuito de tornar o usuário ciente e fornecer-lhe tempo hábil para realizar a mitigação dos danos.

## Solução
De acordo com o previsto no escopo, a solução do produto precisa atender requisitos técnicos e de adequação aos fatores ambientais locais, para que sua funcionalidade seja garantida em sua totalidade. Sendo assim, o de esboço da solução preliminar seguirá uma linha similar ao apresentado na imagem a seguir. 



<center>
<figure>
  <img src="/SmartVit/docs/Gerais/esboco.jpeg" />
  <figcaption>
      Figura 1 - Esboço da solução adotada para compreensão inicial do produto a ser entregue
  </figcaption>
</figure>
</center>
<br>
<br>

Na imagem acima é possível identificar os sistemas vitais para garantir o sucesso do projeto, bem como etapa de sensoriamento de solo e disposição dos componentes, estação meteorológica, painel solar, central de processamento (parte onde estará alocado o sistema de eficiência energética, microcontroladores e sistema de comunicação *wireless*) e sistema de irrigação.

A solução então consiste de um produto obtido a partir da integração dos sistemas eletrônicos, estruturais, energético e de **software**, de um modo que conversem entre si para compor um único produto utilizável e eficiente. No que compete à solução eletrônica, os sensores estarão dispostos em diferentes pontos e níveis, para que consigam extrair os dados corretamente em relação ao recebido pelas parreiras. A estrutura será projetada para proteger os componentes, suportar o carregamento necessário dos subsistemas e ainda se adequar ergonomicamente para uso e manutenção. O sistema também apresentará uma parte para sintetização e disponibilização dos dados coletados em servidor, para que o usuário final receba o controle de sua produção.

