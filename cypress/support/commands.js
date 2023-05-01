Cypress.Commands.add('generateUserToken', () =>{
    cy.request({
      method: 'POST',
      url: Cypress.env('admin_login_url'),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      form: true,
      body: {
        email: Cypress.env('admin_user_email'),
        password: Cypress.env('admin_password')
      }
    })
    .then((response) => {
      expect(response.status).to.eq(200);
      const userToken = response.body.data.token
      return userToken
    }); 
})

// Command to login admin user (for UI test purposes)
Cypress.Commands.add('adminUserLoginPage', (email, password) => {
  cy.get('#input-0').clear().type(email)
  cy.get('#input-2').clear().type(password)
  cy.get('.v-btn').click()
})
  