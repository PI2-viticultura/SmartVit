# Plano de Usabilidade - Software

- [1. Introdução](#_1-introdução)
- [2. Heurísticas de Nielsen](#_2-heurísticas-de-nielsen)
- [3. Interface de Usuário](#_3-interface-de-usuário)
- [4. Conclusão](#_4-conclusão)
- [ Histórico de revisão](#_histórico-de-revisão)

## 1. Introdução

<p align="justify">Um software, assim como qualquer outro produto, precisa ser fácil de usar e deve otimizar o tempo de seu usuário, permitindo realizar uma tarefa de maneira eficiente e satisfatória. Um produto de software com essas características tem boa usabilidade, um atributo de qualidade perceptível aos usuários e determinante no sucesso de um produto. O desenvolvimento de sistemas de software coloca a usabilidade como um dos atributos de qualidade que norteia o processo de construção do sistema.</p>

<p align="justify">Tendo em vista estes pontos, o presente documento objetiva a descrição das decisões de usabilidade do software SmartVit, explicitando as escolhas que definiram sua UI (User Interface, meio pela qual uma pessoa interage e controla um dispositivo) e UX (User Experience, relação que uma pessoa tem com um produto ou serviço).</p>


## 2. Heurísticas de Nielsen

<p align="justify">Propostas em 1990, as Heurísticas de Nielsen propõem 10 princípios gerais para o Design de interfaces. Esses princípios, chamados de Heurísticas, são regras gerais, e não diretrizes específicas de usabilidade; essas devem ser consideradas na hora de fazer ou atualizar o Design de um sistema web. Os princípios propstos são: Visibilidade do status do sistema, Correspondência entre o sistema e o mundo real, Liberdade e controle do usuário, Consistência e padrões, Prevenção de erros, Reconhecer ao invés de lembrar, Flexibilidade e Eficiência, Estética e Design minimalista, Auxiliar usuários a reconhecer, diagnosticar e recuperar erros e Ajuda e Documentação.</p>

<p align="justify">Dentro do software aqui proposto, foram utilizadas algumas destas heurística afim de melhor a experiência do usuário dentro do nosso software. As heurísticas utilizadas foram:</p>

* **Visibilidade do status do sistema**: São dados feedbacks instâtenos para as ações do usuário que remetem ao estado atual do software quanto àquela ação. isto auxilia o usuário em sua orientação sobre o que fazer dentro do software.

* **Correspondência entre o sistema e o mundo real**: O foco principal do sistema é traduzir os dados coletados em informação útil para o usuário, logo a escolha da linguagem (verbal e visual) são tomadas como extrem importância. Neste contexto, são utilizados termos de cunho conhecido para os usuário e ícones relevantes e que expressam de forma visual a informação desejada.

* **Liberdade e controle do usuário**: O usuário é livre para realizar as atividades dentro do software seguindo as próprias decisões, o software aqui, se atém ao papel de conduzir o usuário pelo melhor caminho e responder conforme o uso, não limitando ações ou caminhos.

* **Consistência e padrões**: O software se mantem constante quanto aos padrões de linguagem e de iconização adotados em todas as etapas que o compões, isto permite criar maior familiaridade ao usuário e diminui a necessidade de decorar passos.

* **Prevenção de erros**: O software minimiza a propensão a erros utilizando mansagens de confirmação em todas as açoes relevantes ao software, dando liberdadeao usuário ao responder por suas ações.

* **Reconhecer ao invés de lembrar**: Como citado no item *"Correspondência entre o sistema e o mundo real"*, o software possui interface intuitiva, sempre com a mesma linguagem, iconização e fontes, o que permite ao usuário aprender o funcionamento do software ao invés de decorar procedimentos para se obter resultados.

* **Estética e Design minimalista**: O SmartVit tem como pressuposto evitar o uso desnecessário de elementos visuais que possam confundir o usuário, pois cada unidade extra de informação em um diálogo compete com uma unidade de informação relevante e acaba por diminuir sua visibilidade, logo a interface minimalista adotada auxilia o usuário à entender melhor o fluxo da aplicação.

* **Auxiliar usuários a reconhecer, diagnosticar e recuperar erros**: São utilizadas telas de erros personalizadas e um sistema de feedback e acionamento de equipe de suporte para amenizar erros encontrados no software e no sistema físico instalado.

* **Ajuda e Documentação**: O software possui sistema de suporte que auxilia tanto no uso do software quanto na resolução de erros encontrados durante a utilização deste.


## 3. Interface de Usuário

<p align="justify">A expressão UI vem de User Interface, que significa Interface do Usuário. A ideia do UI é guiar o usuário pela sua aplicação durante o tempo em que ele a usa. Um bom trabalho de UI design guia os usuários pela navegação, e os leva a tomar tais ações de forma natural. Tendo isto em mente, algumas escolhas devem ser tomadas sobre a interface, como por exemplo, cores utilizadas, fontes dos textos, iconização e disposição dos itens que são apresentados em tela. Neste sessão serão explicitadas as escolhas do design da aplicação que visam extrair o melhor da interface do software.</p>

* **Cores**: as cores utilizadas tem relação direta com o objetivo do software, ou seja, remetem diretamente às cores associadas ao cultivo de uvas (mais detalhes podem ser encontrados em nosso [documento de identidade visual](https://pi2-viticultura.github.io/SmartVit/#/docs/software/Identidade-Visual)), além das cores básicas que trazem naturalidade ao uso do software, as cores secundárias do software tem por padrão remeterem à ideia que pretendem transmitir, por exemplo, a cor vermelha é utilizada para alertas negativos, cores azuis são utilizadas em contexto que utilizam água, entre outros.

* **Fontes**: para o software e iconização foram utilizadas fontes sem serifa (como arial e helvética) por transmitirem dois dos princípios estéticos da aplicação (minimalismo e modernidade), além disto, por via de regra, as fontes sem serifa são utilizadas em textos pequenos, enquanto fontes com serifa são utilizadas em corpoa de textos, os últimos não são utilizados no contexto da aplicação, logo a escolha pelas fontes sem serifa segue os padrões estéticos comumente utilzados e exprimem valores relevantes do software.

* **Ícones**: a iconização do software foi criada pela própria equipe do software, o que permite maior coerência entre eles e maior representatividade sobre a ideia que se deseja expressar. Os ícones utilizados seguem a paleta de cores definida em nosso [documento de identidade visual](https://pi2-viticultura.github.io/SmartVit/#/docs/software/Identidade-Visual) e possui cores e formatos relevantes e intuitivaß ao usuário.

* **Disposição dos itens**: os itens do software são dispostos em ordem de relevância quanto ao contexto, permitindo ao usuário ter acesso rápido à informações mais importantes, sem perder o acesso à outras informações que podem ser utilizadas a dpender do contexto. Além da posição na tela, as telas da aplicação agrupam os itens de forma a gerar informação relevante e centralizada ao usuário.


## 4. Conclusão

O design do software SmartVit foi criado tendo como ponto central a interação com o usuário e a relevância de sua experiência, e com resultado desta forma de trabalho, foi criada uma interfac minimalista e intuitiva para o usuário, melhorando, assim sua experência e extração de informação relevante.


# Histórico de revisão

| O quê | Quem  | Quando |
| - | - | - |
|  Primeira versão do documento | Lucas Vitor | 10/09/2020 |
