# Bootcamp Qualiters Club - Automação Web com Cypress

Este repositório contém o código resultado da aprendizagem do curso [Automação Web do Zero: Do Cypress Studio ao PageObjects](https://www.udemy.com/course/cypress-do-zero-2023-do-cypress-studio-ao-pageobjects/?couponCode=ACCAGE0923), oferecido pela comunidade Qualiters Club através da plataforma Udemy.

O curso abordou diversos aspectos da automação web utilizando o framework Cypress. Ao longo do curso, foram explorados desde os conceitos básicos até a implementação avançada de PageObjects.

### Sobre o Projeto

O objetivo deste projeto é realizar a automação do site todoMVC utilizando o framework Cypress. O site todoMVC oferece uma aplicação web simples que permite gerenciar uma lista de tarefas. A automação realizada neste projeto cobre diferentes cenários de teste para garantir a qualidade do aplicativo.


### Tecnologias utilizadas
- node version v21.6.2
- Cypress

### Documentações 

- [Site todo MVC](https://todomvc.com/examples/javascript-es6/dist/) - onde foram realizados os testes
- [Doc. Cypress](https://docs.cypress.io/guides/references/assertions) - asserções com Cypress
- Utilizado o padrão de projeto Page Objects Model(POM) para organização em termos de estutura, reutilização e manutenção do código.

### Como foi configurado o projeto


- instalar node [baixe aqui](https://nodejs.org/en/download) 
- instalar yarn
``` 
npm install yarn
```
- crie a pasta do projeto
- abra no visual studio code para instalar o cypress
```
npm install -g cypress
```
- inicializar o projeto
```
npm init
```
- adicionar o cypress ao seu projeto
```
yarn add cypress --dev
```


### Como rodar os testes 

- abrir o cypress

```
yarn run cypress open
```

- escolha uma spec para executar

### Testes criados

- Adicioanr texto
- Concluir Item
- Filtrar item
- Deletar Item