describe('Error Messaging Flows', () => {
  it('Should show error when all movies cannot be retrieved', () => {
    cy.intercept('/api/v2/movies', {
      forceNetworkError: true,
    });
    cy.visit('/');
    cy.get('[class="error-message"]').contains(
      'There was a problem getting your movies. Please try again.'
    );
  });

  it('Should show error when page does not exist', () => {
    cy.visit('/6949191');
    cy.get('[class="error-message"]').contains('404 Error please try again');
  });

  it('Should show error when server error occurs', () => {
    cy.visit('/:');
    cy.get('[class="error-message"]').contains('500 Error please try again');
  });
});
