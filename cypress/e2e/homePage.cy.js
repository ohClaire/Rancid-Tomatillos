describe('Rancid Tomatillos Home Page flows', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should be able to view the home page', () => {
    cy.get('.h1').contains('Rancid');
    cy.get('.movies-container');
    cy.get('.movies-container').find('.card');
    cy.get('.movies-container').find('.poster-img').should('have.length', 40);
  });

  it('Should be able to select an individual movie card within movies-container', () => {
    cy.get('.card');
    cy.get('.movie-card-btn:nth-child(1)').trigger('mouseover');
    cy.get('.movie-card-btn:nth-child(1)').click();
    cy.url().should('include', '/694919');
  });
});
