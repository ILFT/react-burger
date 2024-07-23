/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add('start', () => {
    cy.visit('');
})

Cypress.Commands.add('startCheck', () => {
    cy.visit('');
    cy.contains('Соберите бургер');
})

Cypress.Commands.add('dragDrop', (label) => {
    cy.get('div').contains(label).trigger('dragstart');
    cy.get('[data-test="constructor"]')
        .trigger('drop');
})
Cypress.Commands.add('closeModal', () => {
    cy.get('[data-test="close-icon"]')
    .find('svg')
    .click();
})

Cypress.Commands.add('buttonClick', () => {
    cy.get('Button').click();
})