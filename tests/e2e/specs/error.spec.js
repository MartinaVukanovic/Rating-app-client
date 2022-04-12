/* eslint-disable no-undef */
import { user } from './user';
const userAuth = user();

describe('settings page', () => {
  it('thank you message focus behavior', () => {
    localStorage.setItem('user', userAuth);

    cy.visit('http://localhost:8080/settings');
    cy.wait(1000);

    cy.get('div.error429').should('not.be.visible');

    // mocks user changing settings 7 times in a short period of time

    for (let i = 0; i < 7; i++) {
      cy.get('div.thankYou input.inp').eq(0).click().type('Thank you!');
      cy.wait(2500);
    }

    // check if limit of requests (429) error is displayed

    cy.get('div.error429').should('be.visible');
    cy.wait(10000);
    cy.get('div.error429').should('not.be.visible');
  });
});
