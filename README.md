<h1 align="center">Ignite LAB (04/2022)</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/andrelinos/lab-01?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/andrelinos/lab-01?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/andrelinos/lab-01?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/andrelinos/lab-01?color=56BEB8">

  <!-- <img alt="Github issues" src="https://img.shields.io/github/issues/andrelinos/lab-01?color=56BEB8" /> -->

  <!-- <img alt="Github forks" src="https://img.shields.io/github/forks/andrelinos/lab-01?color=56BEB8" /> -->

  <!-- <img alt="Github stars" src="https://img.shields.io/github/stars/andrelinos/lab-01?color=56BEB8" /> -->
</p>

<!-- Status -->

<!-- <h4 align="center"> 
	🚧  Lab 01 🚀 Under construction...  🚧
</h4> 

<hr> -->

<p align="center">
  <a href="#dart-sobre">Sobre</a> &#xa0; | &#xa0;
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <a href="#rocket-tecnologias">Technologias</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-necess%C3%A1rio">Necessário</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-executando-o-projeto">Executando o projeto</a> &#xa0; | &#xa0;
  <a href="#rotas">Rotas</a> &#xa0; | &#xa0;
  <a href="#memo-licenca">Licença</a> &#xa0; | &#xa0;
  <a href="https://github.com/andrelinos" target="_blank">Autor</a>
</p>

<br>

## :dart: Sobre ##

Este projeto foi desenvolvido nas aulas do Ignite Lab (04/2022) ministrado pelo Diego Fernandes da Rocketseat.

Neste conhecemos tecnologias usadas em microsserviços de forma simplificada e uma grande base para coisas maiores.

## :sparkles: Features ##

### Serviço de compras (purchases) ##

:heavy_check_mark: [Admin] Cadastro de produtos;\
:heavy_check_mark: [Admin] Listagem de produtos;\
:heavy_check_mark: [Auth] Listagem de compras;\
:heavy_check_mark: [Public] Compra de um produto;\
:heavy_check_mark: [Public] Lista produtos disponíveis p/ compra;

### Serviço de sala de aula (classroom) ##

:heavy_check_mark: [Admin] Listar matrículas;\
:heavy_check_mark: [Admin] [Admin] Listar alunos;\
:heavy_check_mark: [Admin] Listar cursos;\
:heavy_check_mark: [Admin] Cadastrar cursos;\
:heavy_check_mark: [Auth] Listar cursos que tenho acesso;\
:heavy_check_mark: [Auth] Acessar conteúdo do curso;

## :rocket: Tecnologias ##

Confira abaixo as tecnologias utilizadas neste projeto

- [NestJS](https://nestjs.com/) | [![npm](https://img.shields.io/npm/v/nestjs)](https://www.npmjs.com/package/nestjs)
- [GraphQL](https://graphql.org/)
- [Apache Kafka](https://kafka.apache.org/)
- [Next.js](https://nextjs.org/)
- [Apollo Client (GraphQL)](https://www.apollographql.com/)

## :white_check_mark: Necessário ##

Antes de executar o projeto, você precisa :checkered_flag:, ter em seu sistema operacional as seguintes ferramentas instaladas:

- [Git](https://git-scm.com)
- [Node](https://nodejs.org/en/).
- [NestJS](https://nestjs.com/) | <i>Instalado de forma global</i>
- [Docker](https://docs.docker.com/)
- [Docker compose](https://docs.docker.com/compose/install/)

## :checkered_flag: Executando o projeto ##

```bash
# Clone o projeto
$ git clone https://github.com/andrelinos/Ignite-Lab-01

# Acesse
$ cd lab-01

# Execute o comando 
$ docker-compose up -d

# Instale as dependências de todas as pastas dos demais projetos
$ yarn

# Nota: Execute o comando yarn em cada uma das pastas (classroom, purchases, gateway, web)

# Execute os projetos

# classroom
$ yarn start:dev

# purchases
$ yarn start:dev

# web
$ yarn dev

# gateway
$ yarn start:dev

```

## Rotas da aplicação ##

- API: <http://localhost:3332/graphql>
- WEB: <http://localhost:3000>

## :memo: Licença ##

This project is under license from MIT. For more details, see the [LICENSE](LICENSE.md) file.

Made with :heart: by <a href="https://github.com/andrelinos" target="_blank">Andrelino Silva</a>

&#xa0;

<a href="#top">Voltar ao início</a>
