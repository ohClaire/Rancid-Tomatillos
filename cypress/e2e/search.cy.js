describe('Searching For Movies Flows', () => {
  it('Should be able to search for a movie', () => {
    cy.visit('/')
    cy.get('input[class="search-input"]').type('money')
    cy.get('.search-button').click()
    cy.get('.movies-container')
  })
  it('Should display an error when there are no movies found' , () => {
    cy.visit('/');
    cy.get('input[class="search-input"]').type('z');
    cy.get('.search-button').click();
    cy.get('.movies-container').contains('Sorry No Movies Found')
  })
})