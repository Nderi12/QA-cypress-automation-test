
describe('Creating a payment from provided API Endpoint', () => {
  context('User should make a with a valid token', () => {
    it('successful payment', () => {
      cy.generateUserToken().then(userToken => {
        cy.fixture('payment_data').then(data => {
          cy.request({
            method: 'POST',
            url: Cypress.env('payment_url'),
            headers: { 'Authorization': 'Bearer ' + userToken},
            form: true,
            body: data
          }).then(response => {
            // Check for successful status - 200
            expect(response.status).to.eq(200);

            // Check if uuid exists from response
            expect(response.body.data.uuid).to.exist
          })
        });
      });
    })
  });

  context('User should make a with a invalid token', () => {
    it('unsuccessful payment', () => {
        cy.fixture('payment_data').then(data => {
          cy.request({
            method: 'POST',
            url: Cypress.env('payment_url'),
            headers: { 'Authorization': 'Bearer ' + "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9"},
            form: true,
            body: data,
            failOnStatusCode: false
          }).then(response => {
            // Check for unauthorized response
            expect(response.status).to.equal(401);

            // Check for error message
            expect(response.body).has.property('error', 'Unauthorized')
          })
        });
      })
  });
})
  

 
  