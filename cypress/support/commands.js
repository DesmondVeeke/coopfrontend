Cypress.Commands.add('login', (email, password) => {
    cy.visit('/login')

    cy.get('input[type="email"]').type(email)

    // {enter} causes the form to submit
    cy.get('input[type="password"]').type(`${password}{enter}`, { log: false })

    // we should be redirected to /dashboard
    cy.url().should('include', '/')

    // our auth cookie should be present
    cy.window().its('localStorage').should('have.property', 'token')

    // UI should reflect this user being logged in
    cy.contains('Environments')
})