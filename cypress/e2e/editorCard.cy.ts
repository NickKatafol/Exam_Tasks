describe('Progect is runing successfully', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('h3', 'Table data')
  })

  it('The inputs of EditorCard.vue is rendered successfully', () => {
    cy.visit('/')
    cy.contains('h3', 'Table data')
    cy.get('table > tbody > tr').first().click()
    cy.get('.cart-wrapper').should('contain', 'firstName')
  })
})



describe('The EditorCard checkout', () => {
  beforeEach(() => {
    //visit the target page
    cy.visit('/')
    cy.contains('h3', 'Table data')

    //open the EditorCard
    cy.get('table > tbody > tr').first().click()

    //select the "firstName"-input, clear it, tipe the new text 'VUE-3'
    cy.get('.cart-wrapper').contains('label', 'firstName').click()
    cy.focused().clear().type('VUE-3')
  })

  it('wile tiping into the input there is no any changes inside the table yet', () => {
    cy.get('table > tbody > tr').first().should('not.contain', 'VUE-3')
  })

  it('The click on the SAVE button is saving the data', () => {
    cy.contains('button', 'SAVE').click()
    
    //check out the chenges in the tab: the 'firstName' became the 'VUE-3'
    cy.get('table > tbody > tr').first().should('contain', 'VUE-3')
  })

  it('The click on the OUT button is show down the EditorCard, without saving the data', () => {
    cy.contains('button', 'OUT').click()

    //The EditorCard is disappired
    cy.get('.app-wrapper').should('not.contain', 'data EDITOR')
    
    //check out the chenges in the tab: the 'firstName' became the 'VUE-3'
    cy.get('table > tbody > tr').first().should('not.contain', 'VUE-3')
  })

  it('The click on the OUTSIDE of the EditorCard window is show down the EditorCard, without saving the data', () => {
    cy.get('.card-outside').click({force: true})

    //The EditorCard is disappired
    cy.get('.app-wrapper').should('not.contain', 'data EDITOR')
    
    //check out the chenges in the tab: the 'firstName' became the 'VUE-3'
    cy.get('table > tbody > tr').first().should('not.contain', 'VUE-3')
  })

  it('The click on the SAVE button and then on the OUT button SAVE the data and close EditorCard.', () => {
    cy.contains('button', 'SAVE').click()    
    cy.contains('button', 'OUT').click()

    //check out the chenges in the tab: the 'firstName' became the 'VUE-3'
    cy.get('table > tbody > tr').first().should('contain', 'VUE-3')

    //The EditorCard is disappired
    cy.get('.app-wrapper').should('not.contain', 'data EDITOR')
  })

  it('The second changes without click on the SAVE button is NOT by saved', () => {
    //save the first canges
    cy.contains('button', 'SAVE').click()

    //make the swcond chaanges
    cy.get('.cart-wrapper').contains('label', 'firstName').click()
    cy.focused().clear().type('VUE-33')

    //out without saving
    cy.contains('button', 'OUT').click()

    //check out the chenges in the tab: the 'firstName' became the 'VUE-3'
    cy.get('table > tbody > tr').first().should('not.contain', 'VUE-33')

    //The EditorCard is disappired
    cy.get('.app-wrapper').should('not.contain', 'data EDITOR')
  })

})







