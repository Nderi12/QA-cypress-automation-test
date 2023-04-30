
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
            expect(response.status).to.eq(200);
            expect(response.body.data.uuid).to.exist
          })
        });
      });
    })
  });
})
  

 
  