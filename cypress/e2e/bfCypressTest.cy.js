
describe('bf Testing Suite', () => {
    it('tests that a button is clickable', () => {
      cy.visit('https://www.bitfaced.com/')
        cy.get('.📦ln-ht_24px').click()
        cy.get('.📦w_32px').click()
        cy.expect('.📦txt-algn_center').to.exist
        })
  })