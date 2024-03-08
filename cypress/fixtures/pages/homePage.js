const elemments = require('../elements/homePage.elements').ELEMENTS
const items = require('../elements/homePage.elements').ITEMS
const filters = require('../elements/homePage.elements').FILTERS


class homePage {
    inputText(texto){
        elemments.inputToDo()
        .type(texto)
        .type('{enter}')
    }
    checkItem(){
        items.buttonConcluir()
        .first()
        .click()
    }

    destroyItem(){
        // cy.get(element)
        // .invoke('show')
        // .first()
        // .click()
        // or
        items.divItems()
        .first()
        .find('button')
        .invoke('show')
        .click()
    }

    selectFilter(option){
        filters.allFilters()
        .contains(option)
        .and('be.visible')
        .click()
    }

    validTextLabel(text){
        elemments.inputToDo()
        .should('have.attr','placeholder')
        .and('include',text)
        
    }

    countAddItems(text){
        items.spanCountItems()
        .find('strong')
        .should('have.text', text)
    }

    selectAndVerifyClassFilter(option){
        filters.allFilters()
        .contains(option)
        .and('be.visible')
        .click()
        .and('have.class', 'selected')
    }

    countUlItems(length){
        filters.ulItems()
        .should('have.length',length)
    }
}

export default new homePage();