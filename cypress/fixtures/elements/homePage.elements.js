export const ELEMENTS = {
    inputToDo : () => cy.get("input[class='new-todo']")
} 

export const ITEMS = {
    buttonConcluir: () => cy.get("input[class='toggle']"),
    divItems: () => cy.get("div[class='view']"),
    buttonDestroy: () => cy.get("button[class='destroy']"),
    spanCountItems: () => cy.get("span[class='todo-count']")
} 

export const FILTERS = {
    allFilters: () => cy.get("ul[class='filters'] li a"),
    ulItems: () => cy.get("ul[class='todo-list'] li")
}