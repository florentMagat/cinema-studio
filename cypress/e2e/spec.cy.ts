describe('My First Test', () => {
  it('Visit Fleet Studio', () => {
    cy.visit("http://localhost:5173/")
    cy.contains("search").click()
    cy.contains("Pulp Fiction").click()
    cy.url().should("include", "/details/680")
  })
})