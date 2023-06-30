///<reference types = "cypress"/>

describe("Test Suite 1", () => {
    it('1- Google Search', function () {
        cy.visit("https://google.com")
        cy.get("textarea[name=q]").type("Cypress{enter}")
    })

    it('2- Cypress Title', () => {
        cy.visit("https://cypress.io")
        cy.title().should("include", "Component")
    })

})

