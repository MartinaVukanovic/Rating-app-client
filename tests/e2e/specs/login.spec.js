describe('login screen test', () => {
  it('login screen test', () => {
    cy.visit('http://localhost:8080/login');
    cy.get('button').contains('Log in with google');
    cy.wait(1000);
    cy.get('button').click();
  });
});
