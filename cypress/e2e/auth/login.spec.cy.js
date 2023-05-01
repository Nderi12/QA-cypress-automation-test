describe('Testing admin login POST request', () => {  
  context('when user POST valid credentials (email/password)', () => {
    it('successful user authentication and returns a token', () => {
      cy.request({
        // Send a POST request to the admin login API endpoint with valid credentials (email/password)
        method: 'POST',
        url: Cypress.env('admin_login_url'),
        body: {
          email: Cypress.env('admin_user_email'),
          password: Cypress.env('admin_password')
        }
      })
      .then((response) => {
        // Check that the response status is successful - 200 OK
        expect(response.status).to.eq(200);
        // Check that a token is returned in the response body data
        expect(response.body.data).to.have.property('token');
      });     
    });
  });

  context('when user POST invalid credentials (email/password)', () => {
      it('user authetication fails', () => {
        cy.request({
          // Send a POST request to the admin login API endpoint with invalid credentials (email/password)
          method: 'POST',
          url: Cypress.env('admin_login_url'),
          body: {
            email: 'admin@gmail.com',
            password: '#pass@word!' // providing a wrong password
          },
          failOnStatusCode: false // Do not fail the test on a non-200 HTTP status code
        })
        .then((response) => {
          // Check that the response status is not successful (422 Unprocessable Entity)
          expect(response.status).to.eq(422);
          // Check that the error message is returned in the response body
          expect(response.body).to.have.property('error', 'Failed to authenticate user');
        });
      });
    });
});
