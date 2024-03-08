/// <reference types="cypress" />

import homePage from '../../fixtures/pages/homePage'

//nome da feature
describe('Adicionar item na minha lista de toDo', () => {
    //roda antes de cada teste
    beforeEach(() => {
        cy.visit('/')
    })

    //caso de teste
    it('Adicionar um item na lista', () => {
        homePage.inputText("Item 1")
    })

    it('Adicionar mais de um item na lista', () => {
        var todoItems = ["Item 1" ,"Item 2", "Item 3"]
        
        todoItems.forEach(function(item){
            homePage.inputText(item)
        })
    });
})