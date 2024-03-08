/// <reference types="cypress" />

describe('Acessar a página todoMVC', () => {
  it('Abrir o site', () => {
    cy.visit('https://todomvc.com/examples/javascript-es6/dist/')
  });
})