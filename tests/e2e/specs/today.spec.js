/* eslint-disable no-undef */

import { user } from './user';
const userAuth = user();

describe('today page', () => {
  beforeEach(() => {
    localStorage.setItem('user', userAuth);
    cy.visit('http://localhost:8080/today');
    cy.wait(1000);
  });

  it('on load static components', () => {
    cy.get('.today-title').should('be.visible');
    cy.get('.today-subtitle').should('be.visible');
    cy.get('.artwork').should('be.visible');
    cy.wait(1000);
  });

  it('on load grafs', () => {
    cy.get('.area-chart').should('be.visible');
    cy.get('.pie-chart').should('be.visible');
    cy.get('.smiles-overview').should('be.visible');
    cy.wait(1000);
  });
});
