describe('Login into the application', () => {
    it('Logs in the user', () => {
        cy.visit('/');
        cy.contains('Login').click();
        cy.get('input[type="email"]').type("desmond@fontys.nl");
        cy.get('input[type="password"]').type("rootpw");
        cy.contains('Submit').click();


    })
})