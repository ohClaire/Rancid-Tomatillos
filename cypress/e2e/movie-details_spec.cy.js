describe('Selected Movie Page flows', () => {
  beforeEach(() => {
    cy.intercept('/api/v2/movies', {
      fixture: 'data-snapshot.json',
    });

    cy.visit('/');
  });

  it('Should show additional details about the selected movie', () => {
    cy.get('[aria-label="Money Plane"]').click();
    cy.url().should('includes', '694919');
    cy.get('.current-movie').within(() => {
      cy.get('.inner-poster-img').should(
        'have.attr',
        'src',
        'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg'
      );
      cy.get('.movie-title').contains('Money Plane');
      cy.get('.movie-rating').contains('6.88');
      cy.get('.movie-release').contains('2020');
      cy.get('.movie-runtime').contains('82 minutes');
      cy.get('.movie-genre').contains('Action');
      cy.get('.movie-overview').contains('professional thief');
    });
  });

  it('Should return to main page when the close button is clicked', () => {
    cy.get('[aria-label="Money Plane"]').click();
    cy.get('[aria-label="close Money Plane"]').click();
    cy.url().should('eq', 'http://localhost:3000/');
  });
});
