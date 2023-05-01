
describe('API Endpoint for creating an order status', () => {
  context('User should successfully create an order status with valid token', () => {
    it('POST request returns with success', () => {
      cy.generateUserToken().then(userToken => {
          cy.fixture('order_status').then(data => {
            cy.request({
                method: 'POST',
                url: Cypress.env('order_status_url'),
                headers: { 'Authorization': 'Bearer ' + userToken},
                body: data
            })
            .then((response) => {
                // Check that the response status is successful - 200 OK
                expect(response.status).to.eq(200)
                // Check if response has uuid
                expect(response.body.data.uuid).to.exist
            })
          })
      })
    });
  })
});



