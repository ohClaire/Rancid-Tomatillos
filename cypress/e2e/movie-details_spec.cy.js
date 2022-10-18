describe('Selected Movie Page flows', () => {
  beforeEach(() => {
    cy.intercept('/api/v2/movies', {
      fixture: 'data-snapshot.json',
    });

    cy.visit('http://localhost:3000');
  });

  it('should show additional details about the selected movie', () => {
    cy.get('.movie-card-btn:nth-child(1)').click();
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

  it('should return to main page when the close button is clicked', () => {
    cy.get('.movie-card-btn:nth-child(1)').click();
    cy.get('.close-btn').click();
    cy.get('.movies-container').should('be.visible');
  });
});
