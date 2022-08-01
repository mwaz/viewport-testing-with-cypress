/// <reference types="cypress" />


describe("Cypress Viewport Tests Suite", () => {
    it("should be able to load the page", () => { 
        cy.visit("http://localhost:9000")
    })

    it("should load the features page", () => {
        cy.get("a[id=featuresBtn]").click()
        cy.contains("Your favorite places are waiting! Let us help bring your dreams to life")
    })

    context("desktop viewport", () => {
        beforeEach(() => {
            cy.viewport(1536, 960)
            // Runs the tests in this context for the resolution defined
        })

        it("displays the whole navigation bar", () => {
            cy.get(".navbar").should("be.visible")
            cy.get("div[id=menu-btn]").should("not.be.visible")
        })
    })

    context("mobile viewport", () => {
        beforeEach(() => {
            cy.viewport("iphone-6")
            // Runs the tests in this context for the resolution defined
        })

        it("displays the hamburger menu", () => {
            cy.get("div[id=menu-btn]").should("be.visible")
        })

        it("clicks the toggle button", () => {
            cy.get("div[id=menu-btn]").should("be.visible").click()
            cy.get(".content").should("be.visible")
        })
    }
    )
    
})


