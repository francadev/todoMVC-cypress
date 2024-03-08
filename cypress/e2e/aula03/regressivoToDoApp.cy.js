/// <reference types="cypress" />

import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects'
const elements = require('../../support/elements/tela-inicial.elements').ELEMENTS
const items = require('../../support/elements/tela-inicial.elements').ITEMS
const filters = require('../../support/elements/tela-inicial.elements').FILTERS
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
            telaInicial.validTextLabel(elements.inputToDo, 'What needs to be done?')
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
                telaInicial.inputText(elements.inputToDo, item)
            })
            telaInicial.countAddItems(items.spanCountItems, todoItems.length.toString())
        });
    })
    //passo a ser testado
    context('Validar conclusão de items',()=>{
        //roda antes de cada teste
        beforeEach(() => {
            cy.visit('/')
            todoItems.forEach(function(item){
                telaInicial.inputText(elements.inputToDo, item)
            })
        })
        //caso de teste
        it('Concluir item na lista de Todo', () => {
            telaInicial.countAddItems(items.spanCountItems, todoItems.length.toString())
            telaInicial.checkItem(items.buttonConcluir)
            telaInicial.countAddItems(items.spanCountItems, (todoItems.length - 1).toString())
        });
    })
    //passo a ser testado
    context('Validar o filtro de items',()=>{
        //roda antes de cada teste
        beforeEach(() => {
            cy.visit('/')
            var todoItems = ["Item 1" ,"Item 2", "Item 3"]
            
            todoItems.forEach(function(item){
                telaInicial.inputText(elements.inputToDo, item)
            })
    
            telaInicial.checkItem(items.buttonConcluir)
        })
        //caso de teste
        it('Filtrar itens ativos', () => {
            telaInicial.selectAndVerifyClassFilter(filters.allFilters, "Active")
            telaInicial.countAddItems(items.spanCountItems, (todoItems.length - 1).toString())
        });
        //caso de teste
        it('Filtrar itens completos', () => {
            telaInicial.selectAndVerifyClassFilter(filters.allFilters, "Completed")
            telaInicial.countUlItems(filters.ulItems, 1)
        });
    })
    //passo a ser testado
    context('Validar a remoção de items',()=>{
        //roda antes de cada teste
        beforeEach(() => {
            cy.visit('/')
            var todoItems = ["Item 1" ,"Item 2", "Item 3"]
            
            todoItems.forEach(function(item){
                telaInicial.inputText(elements.inputToDo, item)
            })
        })
        //caso de teste
        it('Deleção de um item da lista', () => {
            telaInicial.countAddItems(items.spanCountItems, todoItems.length.toString())
            telaInicial.destroyItem(items.divItems)
            telaInicial.countAddItems(items.spanCountItems, (todoItems.length - 1).toString())
        });
    })
});