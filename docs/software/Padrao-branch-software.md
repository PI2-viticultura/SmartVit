# Índice

* [1. Estrutura e Política de Branches](#_1-Estrutura-e-Política-de-branches)
    * [1.1. Nomes de branches](#_11-Nomes-de-branches)
    * [1.2. Commits](#_12-Commits)
    * [1.3. Fluxo de adição de uma nova funcionalidade](#_13-Fluxo-de-adição-de-uma-nova-funcionalidade)
    * [1.4. Fluxo de adição de documentos](#_14-Fluxo-de-adição-de-documentos)
* [2. Estrutura de Issues](#_2-Estrutura-de-issues)
* [3. Estrutura de Pull Request](#_3-Estrutura-de-pull-request)
    

# 1. Estrutura e Política de Branches

A estrutura de branches do repositório seguirá a organização definida a seguir:

* Branch padrão **_master_**, para hospedar o código estável do projeto (que estará em ambiente de produção);
* Branch **_devel_**, para manter o código mais atualizado do projeto, que está em estágio preparatório para a próxima entrega (onde serão integradas as funcionalidades desenvolvidas);
* Branch **_gh-pages_**, onde estará o código atualizado de todos os documentos do projeto, disponíveis no GitHub Pages;
* Branches **_feature/*_**, nas quais serão desenvolvidas as novas funcionalidades;
* Branches **_docs/*_**, que serão utilizadas para o desenvolvimento da documentação do projeto;
* Branches **_bug/*_**, que servirão para correção de eventuais bugs encontrados em produção.

## 1.1. Nomes de branches

Em Inglês, letras minúsculas, palavras separadas por '-', respeitando o padrão gitflow. 

Ex: _feature/numero_issue-cadastro-usuario_


## 1.2. Commits

Em Inglês, verbo no gerúndio com descrição do que foi feito e co-authored para as pessoas no pareamento. Além da utilização de tags que demonstram o tipo de commit, estas tags são Docs, Feature e Bugfix

Ex:

_[Feature] Implementing user register._

_Co-authored-by: john Doe <john@doe.com\>_


## 1.3. Fluxo de adição de uma nova funcionalidade

#### 1.3.1. Criar a branch para a nova funcionalidade a partir de _devel_

Na branch _devel_ (atualizada):

`git checkout -b feature/new-feature`

O nome da branch deve ser igual ao da issue (podendo ser encurtado), mas em Inglês, como o exemplo a seguir:

_feature/01-user-register_

#### 1.3.2. Implementar a nova funcionalidade

Seguir a [folha de estilo]().

#### 1.3.3. Fazer o merge da branch _devel_ para a branch da nova funcionalidade

Na branch _feature/new-feature_:

`git pull origin devel`

#### 1.3.4. Resolver os conflitos e subir as alterações

`git push origin feature/new-feature`

#### 1.3.5. Abrir o Pull Request da branch _feature/new-feature_ para a branch _develop_

O título do Pull Request deve ser igual ao da issue e a descrição deve seguir o template pré-estabelecido.


## 1.4. Fluxo de adição de documentos

#### 1.4.1. Criar a branch para o novo documento a partir de _gh-pages_

Na branch _gh-pages_ (atualizada):

`git checkout -b docs/new-docs`

O nome da branch deve ser igual ao da issue (podendo ser encurtado), mas em Inglês, como o exemplo a seguir:

_docs/01-document_

#### 1.4.2. Produzir o(s) documento(s)

Adicione o(s) documento(s) criado(s) em markdown na pasta docs e os links para ele(s) no arquivo _sidebar.md

#### 1.4.3. Fazer o merge da branch _gh-pages_ para a branch do(s) novo(s) documento(s)

Na branch _docs/new-docs_:

`git pull origin gh-pages`

#### 1.4.4. Resolver os conflitos e subir as alterações

`git push origin docs/new-docs`

#### 1.4.5. Abrir o Pull Request da branch _docs/new-docs_ para a branch _gh-pages_

O título do Pull Request deve ser igual ao da issue e a descrição deve seguir o template pré-estabelecido.

# 2. Estrutura de Issues

Todas as issues, sejam de feature (isso inclui documentação), sejam de bug, devem seguir os padrões presentes no repositório. Estes padrões aparecem automaticamente ao criar a issue.

# 3. Estrutura de Pull Request

Todas os Pull Requests devem seguir os padrões presentes no repositório. Estes padrões aparecem automaticamente ao criar o Pull Request.