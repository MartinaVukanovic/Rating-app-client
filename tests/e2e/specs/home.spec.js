describe('home screen test', () => {
  // click on emoji shows thank you message

  it('home screen test', () => {
    cy.visit('http://localhost:8080/');
    cy.get('.SmileyFace').first().click();
    cy.get('.ThankYouMessage').should('be.visible');
    cy.wait(10000);
    cy.get('.ThankYouMessage').should('not.be.visible');
    cy.get('span').should('be.visible');
  });
});
