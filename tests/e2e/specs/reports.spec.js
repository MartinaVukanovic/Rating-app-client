/* eslint-disable no-undef */

import user from './user';

describe('reports page', () => {
  beforeEach(() => {
    /* localStorage.setItem('user', user); */
    localStorage.setItem(
      'user',
      'ya29.A0ARrdaM9_nEqX7FMKkxvCE4YWotDzrzrB2Qyrm-1ACLIu1ywS026bZ2u16S8b2WQsy100b91_ZYcmRO_yGpneqWLTK7qZCcqfL0ZsL30pwEauohamuDxzIiMlXU5E5Kd9646pfIl6b8cvNNLuuf-gPNeaUgYY'
    );
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
