/// <reference types="cypress" />

describe('Site loads without problems', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    
    it('Displays header element', () => {
        cy.get('[data-cy=header]')
            .should('be.visible')
    })

    it('Displays logo element', () => {
        cy.get('[data-cy=logo]')
            .should('be.visible')
    })

    it('Displays link element', () => {
        cy.get('[data-cy=learn-react-link]')
            .should('be.visible')
            .should('have.attr', 'href', 'https://reactjs.org')
    })
})

describe('Redirects with links', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('Navigates from Home to Hello', () => {
        cy.get('[data-cy=hello-link]')
            .click()

        cy.url().should('include', '/hello')
    })

    it('Navigates from Hello to Home', () => {
        cy.visit('http://localhost:3000/hello')

        cy.get('[data-cy=home-link]')
            .click()
        
        cy.url().should('eq', 'http://localhost:3000/')
    })
})