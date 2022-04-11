/* eslint-disable no-undef */

import user from './user';

describe('today page', () => {
  beforeEach(() => {
    /* localStorage.setItem('user', user); */
    localStorage.setItem(
      'user',
      'ya29.A0ARrdaM9_nEqX7FMKkxvCE4YWotDzrzrB2Qyrm-1ACLIu1ywS026bZ2u16S8b2WQsy100b91_ZYcmRO_yGpneqWLTK7qZCcqfL0ZsL30pwEauohamuDxzIiMlXU5E5Kd9646pfIl6b8cvNNLuuf-gPNeaUgYY'
    );
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
