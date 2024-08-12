// login dengan user yang benar

Cypress.Commands.add('userAlreadyLogin', (username_live, password_live) => {
    cy.wait(3000)
    cy.visit('/login', { 
      waitUntil: 'networkidle',
      failOnStatusCode: false
    })
      cy.get('#email').type(username_live)
      cy.get('#signin-password').type(password_live)
      cy.get('.btn-primary').click()
      cy.wait(3000)
    })