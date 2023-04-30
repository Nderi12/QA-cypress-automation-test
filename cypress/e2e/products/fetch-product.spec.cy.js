
describe('API Endpoint for a product with a uuid', () => {
  context('User should successfully retrive a product with a valid token', () => {
    it('POST request returns with success', () => {
      cy.generateUserToken().then(userToken => {
        cy.fixture('product_data').then(productData => {
          cy.request({
              method: 'GET',
              url: `${Cypress.env('fetch_product_url')}${productData.data.uuid}`,
              headers: { 'Authorization': 'Bearer ' + userToken},
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



