describe('Rancid Tomatillos Home Page flows', () => {
  beforeEach(() => {
    cy.visit('/');
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

  it('Should show a rolling tomato while loading data then hide it afterwards', () => {
    let sendResponse;
    const trigger = new Promise((resolve) => {
      sendResponse = resolve;
    });

    cy.intercept('/api/v2/movies', (request) => {
      return trigger.then(() => {
        request.reply();
      });
    });

    cy.visit('/');

    cy.get('img[alt="rolling tomato"]')
      .should('be.visible')
      .then(() => {
        sendResponse();
        cy.get('img[alt="rolling tomato"]').should('not.exist');
        cy.get('.movies-container').should('be.visible');
      });
  });
});
