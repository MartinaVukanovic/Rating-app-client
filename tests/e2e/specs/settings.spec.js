/* eslint-disable no-undef */
describe('settings page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/settings');
    cy.wait(1000);
  });

  it('thank you message focus behavior', () => {
    cy.get('div.thankYou input.inp').click().type('ov');
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
    cy.get('div.thankYou input.inp').click().type('thank you for rating!');
    cy.get('div.numberSelect select').should('be.disabled');
    cy.get('div.second input.inp').should('be.disabled');
    cy.get('div.thankYou p.error').should('not.be.visible');
    cy.get('div.second p.error').should('not.be.visible');
    cy.wait(2000);
    cy.get('.modal').should('be.visible');
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
    cy.get('.modal').should('be.visible');
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
    cy.get('.modal').should('be.visible');
    cy.get('div.thankYou input.inp').should('not.be.disabled');
    cy.get('div.second input.inp').should('not.be.disabled');
    cy.wait(1000);
  });
});
