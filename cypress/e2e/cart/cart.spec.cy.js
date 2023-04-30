describe('Add to cart through website url', () => {
  context('user can add a product to the cart', () => {
    it('user can successfully add to cart', () => {
      cy.generateUserToken().then(userToken => {
        cy.fixture('product_data').then((product) => {
          cy.request({
            method: 'GET',
            url: `${Cypress.env('fetch_product_url')}${product.data.uuid}`,
            headers: {
              'Content-Type':'application/x-www-form-urlencoded',
              'Authorization': 'Bearer ' + userToken
            },
            body: {
              productId: product.data.uuid
            },
            form: true
          }).then((response) => {  
            // Visit the pet store specific products page and add it to the cart
            cy.visit(`${Cypress.env('store_product_url')}${response.body.data.uuid}`);
          });
        });
      })
    });
  })
});
