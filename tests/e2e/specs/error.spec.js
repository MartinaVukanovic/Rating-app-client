/* eslint-disable no-undef */
/* import user from './user'; */

describe('settings page', () => {
  it('thank you message focus behavior', () => {
    // localStorage.setItem('user', user);
    localStorage.setItem(
      'user',
      'ya29.A0ARrdaM9_nEqX7FMKkxvCE4YWotDzrzrB2Qyrm-1ACLIu1ywS026bZ2u16S8b2WQsy100b91_ZYcmRO_yGpneqWLTK7qZCcqfL0ZsL30pwEauohamuDxzIiMlXU5E5Kd9646pfIl6b8cvNNLuuf-gPNeaUgYY'
    );
    cy.visit('http://localhost:8080/settings');
    cy.wait(1000);

    cy.get('div.error429').should('not.be.visible');

    // mocks user changing settings 7 times in a short period of time

    for (let i = 0; i < 7; i++) {
      cy.get('div.thankYou input.inp').eq(0).click().type('Thank you!');
      cy.wait(2500);
    }

    // check if rate limit (429) error is displayed

    cy.get('div.error429').should('be.visible');
    cy.wait(10000);
    cy.get('div.error429').should('not.be.visible');
  });
});
