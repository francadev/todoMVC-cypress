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
    })
    //caso de teste
    it('Deleção de um item da lista', () => {
        // homePage.destroyItem(items.buttonDestroy)
        // ou 
        homePage.destroyItem()
    });
})