describe("admin login page", () => {
  // navigate to /login page
  beforeEach(() => {
    cy.visit('/login')
  })

  context("using valid admin credentials (email/password)", () => {
    it("redirects to the dashboard page", () => {
      cy.adminUserLoginPage(Cypress.env("admin_user_email"), Cypress.env("admin_password"));
      // Check that redirect is to /dashboard
      cy.url().should("include", "/dashboard");
    });
  });

  context('using invalid admin credentials (email/password)', () => {
    it('invalid email and password shows login error', () => {
      // invalid email and invalid password
      cy.adminUserLoginPage(Cypress.env("sample_user_email"), Cypress.env("sample_user_password"));
      cy.get('.login__error-message').should('be.visible')
    })
  })
});