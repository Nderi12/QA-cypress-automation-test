describe('admin dashboard', () => {
  beforeEach(() => {
    cy.visit('/login')
    // login using the adminUserLoginPage command
    cy.adminUserLoginPage(Cypress.env('admin_user_email'), Cypress.env('admin_password'))
    // Check redirect url
    cy.url().should('include', '/dashboard')
  })

  context('Checking for dashboard menu', () => {
    // Check for the dashboard menu after login
    it('has menu list', () => {
      cy.get('.v-navigation-drawer__content').within(($menu) => {
        cy.get(':nth-child(1) > :nth-child(1)').contains('Dashboard')
          .should('have.attr', 'href').and('equal', '/dashboard')
        cy.get(':nth-child(2) > :nth-child(1)').contains('Shipment Location')
          .should('have.attr', 'href').and('equal', '/dashboard/locations')
        cy.get(':nth-child(3) > :nth-child(1)').contains('Customers')
          .should('have.attr', 'href').and('equal', '/dashboard/customers')
        cy.get(':nth-child(4) > :nth-child(1)').contains('Products')
          .should('have.attr', 'href').and('equal', '/dashboard/products')
      })
    })
  })
})