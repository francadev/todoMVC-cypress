/// <reference types="cypress" />

import homePage from '../../fixtures/pages/homePage'

//nome da feature
describe('Validar os filtros da aplicação após adição dos itens', () => {
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
        homePage.selectFilter("Active")
    });
})