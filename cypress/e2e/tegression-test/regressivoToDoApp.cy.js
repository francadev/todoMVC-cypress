/// <reference types="cypress" />

import homePage from '../../fixtures/pages/homePage'
var todoItems = ["Item 1" ,"Item 2", "Item 3"]

//nome da feature
describe('Regressivo ToDo App',()=>{
    //passo a ser testado
    context('Validar a tela inicial',()=>{
        beforeEach(()=>{
            cy.visit('/')
        })
        //caso de teste
        it('Validar aria label de input de dados', () => {
            homePage.validTextLabel('What needs to be done?')
        });
    })
    //passo a ser testado
    context('Validar adição de items',()=>{
        //roda antes de cada teste
        beforeEach(()=>{
            cy.visit('/')
        })
        //caso de teste
        it('Adicionar mais de um item na lista', () => {
            todoItems.forEach(function(item){
                homePage.inputText(item)
            })
            homePage.countAddItems(todoItems.length.toString())
        });
    })
    //passo a ser testado
    context('Validar conclusão de items',()=>{
        //roda antes de cada teste
        beforeEach(() => {
            cy.visit('/')
            todoItems.forEach(function(item){
                homePage.inputText(item)
            })
        })
        //caso de teste
        it('Concluir item na lista de Todo', () => {
            homePage.countAddItems(todoItems.length.toString())
            homePage.checkItem()
            homePage.countAddItems((todoItems.length - 1).toString())
        });
    })
    //passo a ser testado
    context('Validar o filtro de items',()=>{
        //roda antes de cada teste
        beforeEach(() => {
            cy.visit('/')
            var todoItems = ["Item 1" ,"Item 2", "Item 3"]
            
            todoItems.forEach(function(item){
                homePage.inputText(item)
            })
    
            homePage.checkItem()
        })
        //caso de teste
        it('Filtrar itens ativos', () => {
            homePage.selectAndVerifyClassFilter("Active")
            homePage.countAddItems((todoItems.length - 1).toString())
        });
        //caso de teste
        it('Filtrar itens completos', () => {
            homePage.selectAndVerifyClassFilter("Completed")
            homePage.countUlItems(1)
        });
    })
    //passo a ser testado
    context('Validar a remoção de items',()=>{
        //roda antes de cada teste
        beforeEach(() => {
            cy.visit('/')
            var todoItems = ["Item 1" ,"Item 2", "Item 3"]
            
            todoItems.forEach(function(item){
                homePage.inputText(item)
            })
        })
        //caso de teste
        it('Deleção de um item da lista', () => {
            homePage.countAddItems(todoItems.length.toString())
            homePage.destroyItem()
            homePage.countAddItems((todoItems.length - 1).toString())
        });
    })
});