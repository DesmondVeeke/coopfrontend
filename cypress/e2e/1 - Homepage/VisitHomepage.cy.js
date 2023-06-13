describe("Home page visited", () =>
{it("Visit the homepage", () =>{
  cy.visit('http://localhost:3000')
  cy.contains('Music Cooperation');
  cy.contains('Home').click()
})

})