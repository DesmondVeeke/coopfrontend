it("Should find an environment", function () {
    cy.login("desmond@fontys.nl", "rootpw");

    cy.visit('/environments')

    cy.contains('Open Environment').click()

    cy.contains('View Track')
}

)