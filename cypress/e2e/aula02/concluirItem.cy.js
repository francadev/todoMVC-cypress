/// <reference types="cypress" />

import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects'
const elements = require('../../support/elements/tela-inicial.elements').ELEMENTS
const items = require('../../support/elements/tela-inicial.elements').ITEMS

//nome da feature
describe('Concluir itens na minha lista de toDo', () => {
    //roda antes de cada teste
    beforeEach(() => {
        cy.visit('/')
        var todoItems = ["Item 1" ,"Item 2", "Item 3"]
        
        todoItems.forEach(function(item){
            telaInicial.inputText(elements.inputToDo, item)
        })
    })

    //caso de teste
    it('Concluir um item da lista', () => {
        telaInicial.checkItem(items.buttonConcluir)
    });
})