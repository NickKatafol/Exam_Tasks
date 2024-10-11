import { AUTHORITY } from '../../src/assets/constants'

describe('Progect is runing successfully', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('h3', 'Sensitive data')
  })
})

describe('The bug checkout', () => {
  it('edit the userData and save the changes', () => {

    //visit the target page
    cy.visit('/')
    cy.contains('h3', 'Sensitive data')

    //open the EditorCard
    cy.get('table > tbody > tr').first().click()

    //select the "firstName"-input, clear it, tipe the new text 'VUE-3' and save the changes
    cy.get('.cart-wrapper').contains('label', 'firstName').click()
    cy.focused().clear().type('VUE-3')
    cy.contains('button', 'Undersign').click()

    //check out the chenges in the tab:
    //#1. the firstName became the 'VUE-3'
    cy.get('table > tbody > tr').first().should('contain', 'VUE-3')
    //#2. add the AUTHORITY into the userData
    cy.get('table > tbody > tr').first().should('contain', AUTHORITY)

  })
})




