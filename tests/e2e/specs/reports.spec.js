/* eslint-disable no-undef */
describe('today page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/reports');
    cy.wait(1000);
  });

  it('on load grafs', () => {
    cy.get('.datepicker').should('be.visible');
    cy.get('.area-chart').should('be.visible');
    cy.get('.pie-chart').should('be.visible');
    cy.get('.smiles-overview').should('be.visible');
    cy.wait(1000);
  });
});
