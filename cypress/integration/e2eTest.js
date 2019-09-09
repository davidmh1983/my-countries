describe('End to End tests', () => {
  it('Visit the page', () => {
    cy.visit('http://localhost:3000/')
  })
  it('Visit all Continents', () => {
    var continents=['Europe','Asia','Polar','Africa','Americas','Oceania']
    continents.map((continent) => {
      cy.contains(continent).click()
    })
  })
  it('Filter by country name', () => {
    cy.get('input')
      .type('Australia')
      .should('have.value', 'Australia')
    cy.get('.itemList').find('.item').should('have.length', 1)
  })
  it('Enter a country Detail Page', () => {
    cy.get('.itemList').find('.item').click()
    cy.get('.details').find('.details__back')
    cy.get('.details__data__text')
    cy.get('img')
  })
  it('Get back to the list', () => {
    cy.get('.details').find('.details__back').click()
    cy.get('.details').should('have.length', 0)
  })
})

