class telaInicial {
    inputText(element, texto){
        this.clickElement(element)
        .type(texto)
        .type('{enter}')
    }
    checkItem(element){
        this.clickFirstElement(element)
    }

    clickElement(element){
        return cy.get(element).click()
    }
    clickFirstElement(element){
        return cy.get(element).first().click()
    }

    validTextLabel(element, text){
        cy.get(element)
        .should('have.attr','placeholder')
        .and('include',text)
        
    }

    selectFilter(element, option){
        cy.get(element)
        .contains(option)
        .and('be.visible')
        .click()
    }

    selectAndVerifyClassFilter(element, option){
        cy.get(element)
        .contains(option)
        .and('be.visible')
        .click()
        .and('have.class', 'selected')
    }

    destroyItem(element){
        // cy.get(element)
        // .invoke('show')
        // .first()
        // .click()
        // or
        cy.get(element)
        .first()
        .find('button')
        .invoke('show')
        .click()
    }

    countAddItems(element, text){
        cy.get(element)
        .find('strong')
        .should('have.text', text)
    }

    countUlItems(element, length){
        cy.get(element)
        .should('have.length',length)
    }
}

export default new telaInicial();