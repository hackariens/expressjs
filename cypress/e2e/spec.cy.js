describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://expressjs.traefik.me');
    cy.screenshot('first-page');
  })
})