# SmartVit
SmartVit é um software destinado ao controle de culturas de uva com destino comercial para consumo.

## Rodar Ambiente
    sudo docker build -t react-docker .
    sudo docker run -p 3000:80 react-docker

## Rodar Testes
 * Windows
    * docker run -v c:\path_to_app:/usr/src/app -w /usr/src/app node:14 bash -c "npm run test"
* Linux
    * docker run -v "$PWD":/usr/src/app -w /usr/src/app node:14 npm run test
    
## Comandos Úteis

* Listar containers dockers
  * docker ps -a
* Listar imagens dockers
  * docker ps
* Parar todos os containers
  * docker stop $(docker ps -a -q)
* Apagar todos os containers
  * docker rm $(docker ps -a -q)