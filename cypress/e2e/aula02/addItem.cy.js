/// <reference types="cypress" />

import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects'
const elemments = require('../../support/elements/tela-inicial.elements').ELEMENTS

//nome da feature
describe('Adicionar item na minha lista de toDo', () => {
    //roda antes de cada teste
    beforeEach(() => {
        cy.visit('/')
    })

    //caso de teste
    it('Adicionar um item na lista', () => {
        telaInicial.inputText(elemments.inputToDo, "Item 1")
    })

    it('Adicionar mais de um item na lista', () => {
        var todoItems = ["Item 1" ,"Item 2", "Item 3"]
        
        todoItems.forEach(function(item){
            telaInicial.inputText(elemments.inputToDo, item)
        })
    });
})