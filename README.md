# SmartVit
SmartVit é um software destinado ao controle de culturas de uva com destino comercial para consumo.

## Rodar Ambiente
    sudo docker-compose build
    sudo docker-compose up

## Rodar Testes
    sudo docker-compose run smart_app npm test
    
## Comandos Úteis

* Listar containers dockers
  * docker ps -a
* Listar imagens dockers
  * docker ps
* Parar todos os containers
  * docker stop $(docker ps -a -q)
* Apagar todos os containers
  * docker rm $(docker ps -a -q)