/// <reference types="cypress" />

import homePage from '../../fixtures/pages/homePage'

//nome da feature
describe('Concluir itens na minha lista de toDo', () => {
    //roda antes de cada teste
    beforeEach(() => {
        cy.visit('/')
        var todoItems = ["Item 1" ,"Item 2", "Item 3"]
        
        todoItems.forEach(function(item){
            homePage.inputText(item)
        })
    })
    //caso de teste
    it('Concluir um item da lista', () => {
        homePage.checkItem()
    });
})