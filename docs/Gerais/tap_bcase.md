# Business Case
Descrição das informações necessárias do produto na visão de mercado. Aqui inclui-se o detalhamento dos requisitos de alto nível, suas restrições e limitações, alternativas e concorrentes, estudo de viabilidade de investimento.

## Requisitos do Produto
Os requisitos de alto nível do produto são:

* O produto será de estrutura estática;
* Projetada para suportar as condições climáticas locais;
* Realizar o sensoriamento do solo (temperatura, pH e umidade);
* Estação meteorológica local (umidade relativa do ar, índice pluviométrico, velocidade do vento, direção do vento, pressão atmosférica e temperatura do ambiente);
* Monitoramento dos níveis de incidência solar local;
* Acionamento do sistema de irrigação;
* Sistema energético autossuficiente alimentado por painel fotovoltaico e banco de baterias;
* Unidade de controle para comunicação remota;
* Unidade de processamento de dados e integração dos dados;
* Aplicação para disponibilização dos dados em modelo de dashboard;
* Aplicação para monitoramento do sistema;
* Aplicação para gerenciamento negocial;
* Aplicação para avaliação da safra;
* Aplicação para notificação quanto a intempéries;
* Análise do vinhedo para identificação de possíveis riscos;
* Mapeamento e identificação de criticidades;
* Sugestão de ação quando identificado alguma irregularidade que necessita de intervenção humana;

## Restrições
* O produto deverá ser instalado próximo à parreira;
* O produto não está projetado para catástrofes ambientais;
* Os sensores estarão calibrados para atender às condições ideais de produção somente para a região do centro-oeste;
* O painel solar deverá estar em ponto livre de obstruções ou região de sombra;
* Todas as medições serão realizadas simultaneamente em período específico;
* Unidade processamento de dados será alocada em circuito separado do servidor;
* Unidade de controle para comunicação remota de dados deverá possuir acesso a rede 4G;
* A aplicação deverá ter compatibilidade com os principais navegadores (Google Chrome, Mozilla Firefox e Safari);
* A aplicação terá disponibilidade para dispositivos móveis através da metodologia progressive web app;
* Para o uso do sistema é necessário que o usuário tenha uma aparelho compatível com a aplicação e deve estar conectado à internet;
* A arquitetura seguirá o modelo de microsserviços;
* O design deverá ser simples e intuitivo, baseando-se nas heurísticas de Nielsen; 
* O sistema deve garantir que os projetos sejam acessados somente pelos usuários permitidos.

## Alternativas e concorrentes

* Libelium - Produto de origem italiana, com proposta de monitoramento da temperatura, umidade, composição do solo, temperatura do solo, condições climáticas, radiação solar e umidade foliar. Com *software* permitindo acesso aos dados da produção, além de gerenciamento de indicadores pelo usuário. O sistema fora planejado para se adequar a diversos modelos de agricultura. Em contrapartida, quando comparado com a proposta do SmartVit, ele não apresenta um sistema para controle de irrigação, além do preço elevado (solução básica: \euro 3.900,00 - aprox: R\$ 23700,00 cotação do euro no dia 21/05/2020: R\$6,08).
    
* PlantCT - Proposta húngara, inclui barômetro, sensor de umidade foliar, umidade e temperatura do solo, precipitação, radiação solar, monitoramento de irrigação e composição do solo e detecção de pragas. Possui *software* de alarme de pragas e predição de risco. Apesar de muito se assemelhar com a proposta do SmartVit, o produto não faz menção sobre análise foliar, detalhamento de quais requisitos de alto nível da aplicação de *software*, também não é possível saber preços ou soluções fora da região europeia. 
    
* eVineyard - *software* de gerenciamento de vinícola, oferecendo calendário online de trabalho da vinícola, previsão de mofo e irrigação, planejamento de trabalho e custos, suporte para sensores de irrigação, estação climática e controle de irrigação. O produto engloba apenas proposta de *software*, não menciona nem oferece a parte de sensoriamento. O valor completo que compete com o produto oferecido pela SmartVit não é fornecido, não tendo efeito comparativo. 
    
* PreDivine - Solução chilena baseada em rede de sensores wireless, estação de clima e algoritmos de predição. Capaz de monitorar as condições de microclima do vinhedo com objetivo preditivo de pragas e doenças. O produto não tem detalhamento quanto aos sensores e nem sobre custos. Não há menção sobre a aplicação do produto em território brasileiro. 

## Partes interessadas
As partes interessadas do projeto incluem patrocinadores, clientes, parceiros de negócios, grupos organizacionais, gerentes e outras partes. Dentre esses, as partes interessadas são descritos de acordo com seus idealizadores, envolvidos e usuários. 

### Idealizadores
Como principal idealizador possui a equipe formada por estudantes de engenharia, onde objetiva-se o desenvolvimento de um produto no intuito de aprimorar as habilidades de trabalho em grupo, gerenciamento de projetos, sintetizar os conteúdos aprendidos ao longo dos cursos de engenharias para a prototipagem, promovendo a capacidade de desenvolvimento técnico e de integração. 

Como idealizadores secundários tem-se a banca avaliadora, correspondendo aos professores representantes dos cursos de  Engenharia Eletrônica, de Energia, de Automotiva, Aeroespacial e de *software*. Podendo inferir nos objetivos e desenvolvimento do projeto, responsáveis pela avaliação e validação dos entregáveis junto à equipe ao longo do projeto. 

Em complemento, tem-se o cliente interessado em reduzir os erros associados à safra, com intuito de obter maior controle sobre as características e condições de cultivo, inserindo ferramentas tecnológicas para modernizar sua produção. 

### Envolvidos

<center>
| Nome | Descrição | Responsabilidades |
|:-:|:-:|:-:|
| Equipe de Eletrônica | Alunos da UnB que desenvolverão a parte eletrônica do produto. | Coletar os dados através de sensoriamento e disponibiliza-los nos servidores, controlar o sistema de irrigação; |
| Equipe de Energia | Alunos da UnB que desenvolverão o sistema energético. | Fornecer energia para o funcionamento do sistema, garantindo um produto autossuficiente e de baixo impacto ambiental; |
| Equipe de Estrutura | Alunos da UnB que projetarão o modelo estrutural do produto. | Projetar estrutura ergonômica, de baixo impacto ambiental e que suporte condições climáticas sem se deteriorar; |
| Equipe de *software* | Alunos da UnB que desenvolverão a plataforma online; | Elicitar requisitos, priorizar tarefas, definir arquitetura e desenvolver a aplicação web pwa para acesso aos dados; |
| Corpo Docente | Professores ministrantes da matéria Projeto Integrador 2. | Responsáveis pela avaliação das fases de desenvolvimento do projeto, validação das etapas, análise técnica dos subsistemas (eletrônica, energia, estrutura e *software*). Fornecer feedbacks e dar suporte para desenvolvimento do produto, maquinário para produção; |
| Fornecedores | Empresas de eletrônicos, *software* e materiais de construção | Fornecer os insumos essenciais para o desenvolvimento do projeto nas áreas de eletrônica, eficiência energética, *software* e estrutura; |
| Viticultor | *Stakeholder* interessado em automatizar o gerenciamento de sua vinícola; | Fornecer os requisitos do produto e dar feedbacks a cada ciclo de entregas; |
</center>


### Usuários
Os usuários serão as pessoas habilitadas para manusear e receber as informações geradas pelo produto, também serão as pessoas que manterão contato com os desenvolvedores para informar quaisquer anormalidades.

<center>
| Nome | Descrição | Ações |
|:-:|:-:|:-:|
| Viticultor | Usuário final que possui cadastro na plataforma, dono da vinícola cadastrada. | Acessar o sistema; Visualizar o dashboard; Visualizar os indicadores; Acompanhar criticidades; Receber alertas e intempéries; Cadastrar pragas; Visualizar saúde do sistema; Visualizar características dos tipos de uva; Visualizar notificações; Avaliar safra; ; |
| Administrador | Usuário final cadastrado na plataforma | Acessar o sistema; Cadastrar e gerenciar contratos; Cadastrar e gerenciar usuários do sistema; Cadastrar e gerenciar vinícolas do sistema; Acompanhar as informações coletadas; Receber pedidos de contratação; Visualizar saúde do sistema; Visualizar feedbacks; Visualizar e gerenciar suporte aos usuários;; |
| Técnico | Usuário final cadastrado na plataforma, responsável pelo acompanhamento da vinícola cadastrada | Acessar o sistema; Visualizar o dashboard; Visualizar os indicadores; Acompanhar criticidades; Receber alertas e intempéries; Cadastrar pragas; Visualizar saúde do sistema; Visualizar características dos tipos de uva; Visualizar notificações; Avaliar safra; |
</center>

## Riscos de alto nível
O levantamento dos possíveis riscos associados ao projeto se faz necessário para conhecimento do processo, efeito da falha, ação necessária (mitigar ou prevenir), probabilidade de ocorrência, impacto, priorização e plano de ação. Os riscos e falhas podem ser humanos, técnicos, ambientais, podendo estes serem elencados abaixo.

* Indefinição de escopo;
* Projeto de domínio complexo;
* Desistência de membros;
* Falha na comunicação;
* Baixa produtividade;
* Falta de conhecimento/experiência em soluções adotadas;
* Erros de padronização;
* Alteração na arquitetura;
* Perda de componentes vitais;
* Estouro no orçamento previsto;
* Entregáveis fora do prazo;
* Falta de recursos e matérias-prima;
* Atraso na entrega de componentes;
* Catástrofe natural que impeça a realização do projeto;
* Falta de equipamentos ou meios para a construção da estrutura;
* Problemas na integração dos subsistemas;
* Sensores descalibrados que passem informações errôneas para o sistema;
* Incompatibilidade de componentes;
* Problemas relacionados ao ambiente de desenvolvimento;

## Cronograma
O cronograma de execução fora separado de acordo com as fases necessárias para serem entregues a cada ponto de controle. Tendo os prazos de execução, considerando o tempo de trabalho semanal dentro e fora de sala de aula, estimando necessidade de 12 horas de dedicação semanal por cada membro da equipe. Além de prever que todo o plano de execução do projeto seja cumprido no período de 4 meses, tempo do período letivo que será cursado a matéria. No entanto devido a pandemia do Covid-19, o cronograma precisou ser reajustado, sendo assim seguiu-se com as atividades de maneira remota e ao término das entregas, com as datas reais. 

<center>

| ETAPA | DESCRIÇÃO | PRAZO | 
|:-:|:-:|:-:|
| PC1 | Definição do tema. Contato com clientes. | 01 semana |
| PC1 | Levantamento de requisitos. Elaboração de Escopo. | 01 semana |
| PC1 | Documentação de início do projeto. | 01 semana | 
| PC1 | Elaboração do Plano de Gerenciamento do Projeto. | 02 semanas |
| PC1 | TAP, EAP e Planos de Gerenciamento | 01 semana | 
| PC2 | Fase de cálculos e simulações. | 02 semanas | 
| PC2 | Desenvolvimento dos subsistemas. | 02 semanas | 
| PC2 | Testes individuais e coletas de resultados. | 02 semanas | 
| PC2 | Refino da proposta e justificativa técnica dos subsistemas | 01 semana |
| PC3 | Integração, testes e calibração. | 03 semanas |
| PC3 | Teste em campo. Ajustes. | 03 semanas |
| PC3 | Plano de integração e manuais | 01 semana |
| PC4 | Apresentação do produto final | 02 semanas. |
| PC4 | Atualização do repositório e vídeo apresentação | 01 semana | 
</center>

## Orçamento
O orçamento geral do projeto foi elaborado alinhando o melhor custo-benefício na aquisição dos equipamentos e insumos desenvolvidos, sendo um valor estimado, podendo variar ao longo do desenvolvimento, uma vez que parte dos componentes são importados e seus valores dependem das condições de câmbio no ato da compra. Após o estudo e refino da proposta, a lista de aquisições foi atualizada bem como seus respectivos valores, com o intuito de aproximar da realidade. Sendo assim, o valor final do projeto ficou estimado em R$7299,68 contra os R$4966,80 proposto inicialmente.  

## Lista de Aquisições

<center>

|         ** Componente**            | ** Especificação**                                                        | ** Valor (R$**  | ** Frete (R$** |
| :--------------------------------- | :------------------------------------------------------------------------ | :-------------- | :------------- |
| Válvula solenoide em latão         | 2 vias, normalmente fechada, IP65                                         | 41,10           | 24,90          |
| Caixa de passagem                  | Tipo sobrepor, CPS 12                                                     | 20,90           | 18,14          |
| Tubo de PVC roscado                | Bitola de 1/2 barra de 3 m                                                | 10,52           | -              |
| Rebite rosca interna               | M8, galvanizado, pacote com 10 unidades                                   | 8,09            | -              |
| Parafuso cabeça chata              | M8, phillips, rosca inteira, inox                                         | 21,24           | -              |
| Mangueira                          | Bitola de 1/2 polietileno, preta, rolo de 110 m                           | 79,95           | 59,90          |
| Bico gotejador regulável           | Vazão 0-40 L/h, pacote com 25 unidades                                    | 33,23           | 25,90          |
| Engates para mangueira             | Bitola de 1/2"                                                            | 18,33           | -              |
| Quadro de comando com flange       | 400 x 300 x 200 ,m, aço galvanizado, IP 65, IK 10                         | 148,60          | 44,26          |
| Porca sextavada                    | M8, inox                                                                  | 8,00            | -              |
| Arruela lisa                       | M8, inox                                                                  | 2,40            | -              |
| Chapa metálica fina a quente       | 1,2 m x 2 m x 4,75 mm, aço SAE 1020                                       | 585,19          | -              |
| Prateleira metálica com suporte    | 30 x 12 cm                                                                | 44,90           | -              |
| Concreto convencional              | Resistência fck 10 MPa                                                    | 210,00          | -              |
| Chumbador                          | Bitola de 3/4 250 mm, aço 1020                                            | 136,14          | -              |
| Shield do Sensor de Temperatura    | Confeccionado em ABS                                                      | 138,00          | -              |
| Cantoneira de abas iguais          | Aba de 1 1/4" e espesura de 1/8 aço A36, barra de 6 m                     | 56,00           | -              |
| Parafuso sextavado                 | M12, rosca inteira, inox                                                  | 17,52           | -              |
| Porca sextavada                    | M12, inox                                                                 | 8,16            | -              |
| Arruela lisa                       | M12, inox                                                                 | 2,32            | -              |
| Abraçadeira tipo U vergalhão       | 1/2 reforçada, SAE 1020                                                   | 147,12          | -              |
| Tubo redondo                       | Bitola 1 1/2 espessura 0,95 mm, comprimento 6 m, galvanizado, SAE 1008/12 | 73,46           | -              |
| Perfil UDC                         | Dimensões 75 x 40 x 15 mm, \#14, comprimento 5,5 m, SAE 1020              | 120,11          | -              |
| Perfil retangular                  | Dimensões 150 x 150 mm, metalon, \#14, comprimento 6 m                    | 348,6           | -              |
| Lora ESP32                         | 2 unidades, transmissão de dados                                          | 139,99          | -              |
| SC02                               | 1 unidade, dados de PH                                                    | 193,94          | 14,90          |
| Sensor capacitivo umidade          | 3 unidade, dados de umidade do solo                                       | 22,78           | 32,40          |
| BME280                             | 1 unidade, dados de temperatura, pressão e umidade atmosférica            | 34,90           | 22,11          |
| Pluviômetro PL02                   | 1 unidade, dados de quantidade de chuva                                   | 239,50          | -              |
| Kit Anemômetro + biruta            | 1 unidade, dados dos ventos                                               | 257,99          | -              |
| MSP430G2ET                         | 1 unidade, aquisição de dados                                             | 55,24           | 38,65          |
| Cabo 22 AWG (metro)                | 10 metros, comunicação de dados                                           | 7,10            | 8,80           |
| Cabo 20 AWG (metro)                | 20 metros, alimentação dos sensores                                       | 13,40           | 8,80           |
| Cabo 18 AWG (metro)                | 10 metros, sistema de alimentação                                         | 9,40            | 8,80           |
| Painel Fotovoltaico Sun Energy 50W | 545 x 668 x 25 mm                                                         | 219,00          | 356,10         |
| Bateria estacionária               | Selada de chumbo-ácido 70Ah, 175 x 17 x 24 cm                             | 400,00          | 490,00         |
| Controlador de carga de 30A MPPT   | 170 x 95 x 40 mm                                                          | 155,00          | 490,00         |
| Piranômetro SEM228                 | Faixa de medição 0 - 1800W/m^2, 0 -1500W/m^2                              | 777,90          | 850,00         |
| Fio bitola 0,33mm^2                | 8m                                                                        | -               | -              |
| Fio bitola 0,52mm^2                | 8,5m                                                                      | -               | -              |
| Fio bitola 1mm^2                   | 2,7m                                                                      | -               | -              |

</center>