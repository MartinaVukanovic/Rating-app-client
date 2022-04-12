/* eslint-disable no-undef */

import { user } from './user';
const userAuth = user();

describe('reports page', () => {
  beforeEach(() => {
    localStorage.setItem('user', userAuth);
    cy.visit('http://localhost:8080/reports');
    cy.wait(1000);
  });

  // checks if datepicker, areachart, piechart and table with overview are shown

  it('on load grafs', () => {
    cy.get('.datepicker').should('be.visible');
    cy.get('.area-chart').should('be.visible');
    cy.get('.pie-chart').should('be.visible');
    cy.get('.smiles-overview').should('be.visible');
    cy.wait(1000);
  });
});
