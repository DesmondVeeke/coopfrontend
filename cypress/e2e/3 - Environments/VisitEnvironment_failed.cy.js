it("Should not find an environment", function () {
    cy.on('uncaught:exception', (error) => {
        // Assert that the error occurred when visiting /environments
        expect(error.message).to.include('Invalid token specified');
        expect(error.name).to.eq('InvalidTokenError');

        return false; // Prevent Cypress from failing the test
    });

    cy.visit('/environments');
});
