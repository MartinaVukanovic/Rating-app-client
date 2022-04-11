/* eslint-disable no-undef */

it('protected routes', () => {
  localStorage.removeItem('user');

  // checks if routes are protected if there is no saved user

  cy.visit('http://localhost:8080/settings');
  cy.wait(1000);
  cy.get('div.loginContainer').should('be.visible');
  cy.wait(1000);
  cy.visit('http://localhost:8080/today');
  cy.wait(1000);
  cy.get('div.loginContainer').should('be.visible');
  cy.wait(1000);
  cy.visit('http://localhost:8080/reports');
  cy.wait(1000);
  cy.get('div.loginContainer').should('be.visible');
  cy.wait(1000);
});
