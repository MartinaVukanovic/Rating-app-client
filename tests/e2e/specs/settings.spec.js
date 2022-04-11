/* eslint-disable no-undef */

import user from './user';

describe('settings page', () => {
  beforeEach(() => {
    /* localStorage.setItem('user', user); */
    localStorage.setItem(
      'user',
      'ya29.A0ARrdaM9_nEqX7FMKkxvCE4YWotDzrzrB2Qyrm-1ACLIu1ywS026bZ2u16S8b2WQsy100b91_ZYcmRO_yGpneqWLTK7qZCcqfL0ZsL30pwEauohamuDxzIiMlXU5E5Kd9646pfIl6b8cvNNLuuf-gPNeaUgYY'
    );
    cy.visit('http://localhost:8080/settings');
    cy.wait(1000);
  });

  it('thank you message focus behavior', () => {
    cy.get('div.thankYou input.inp').eq(0).click().type('ov');
    cy.get('div.numberSelect select').should('be.disabled');
    cy.get('div.second input.inp').should('be.disabled');
    cy.get('div.thankYou p.error').should('be.visible');
    cy.get('div.second p.error').should('not.be.visible');
    cy.wait(1000);
  });

  it('message timeout focus behavior', () => {
    cy.get('div.second input.inp').click().type(15);
    cy.get('div.thankYou input.inp').should('be.disabled');
    cy.get('div.numberSelect select').should('be.disabled');
    cy.get('div.second p.error').should('be.visible');
    cy.get('div.thankYou p.error').should('not.be.visible');
    cy.wait(1000);
  });

  it('settings overview on click', () => {
    cy.get('img.info-icon').click();
    cy.get('.settings-info').should('be.visible');
    cy.wait(1000);
  });

  it('thank you message submit', () => {
    cy.get('div.thankYou input.inp').eq(0).click().type('thank you for rating!');
    cy.get('div.numberSelect select').should('be.disabled');
    cy.get('div.second input.inp').should('be.disabled');
    cy.get('div.thankYou p.error').should('not.be.visible');
    cy.get('div.second p.error').should('not.be.visible');
    cy.wait(2000);
    cy.get('div.numberSelect select').should('not.be.disabled');
    cy.get('div.second input.inp').should('not.be.disabled');
    cy.wait(1000);
  });

  it('message timeout submit', () => {
    cy.get('div.second input.inp').click().type(5);
    cy.get('div.numberSelect select').should('be.disabled');
    cy.get('div.thankYou input.inp').should('be.disabled');
    cy.get('div.thankYou p.error').should('not.be.visible');
    cy.get('div.second p.error').should('not.be.visible');
    cy.wait(2000);
    cy.get('div.numberSelect select').should('not.be.disabled');
    cy.get('div.thankYou input.inp').should('not.be.disabled');
    cy.wait(1000);
  });

  it('number of emotions submit', () => {
    cy.get('div.numberSelect select').select('5');
    cy.get('div.thankYou input.inp').should('be.disabled');
    cy.get('div.second input.inp').should('be.disabled');
    cy.get('div.second p.error').should('not.be.visible');
    cy.get('div.thankYou p.error').should('not.be.visible');
    cy.wait(2000);
    // cy.get('.modal').should('be.visible');
    cy.get('div.thankYou input.inp').should('not.be.disabled');
    cy.get('div.second input.inp').should('not.be.disabled');
    cy.wait(1000);
  });
});
