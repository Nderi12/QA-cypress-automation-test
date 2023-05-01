describe('Create an admin user from provided API endpoint', () => {
  const randomEmail = `testuser+${Math.floor(Math.random() * 100000)}@example.com`;

  context('create an admin user with a new email', () => {
    it('POST request is successful', () => {
      cy.generateUserToken().then(userToken => {
          cy.fixture('user_data').then(data => {
            cy.request({
              method: 'POST',
              url: Cypress.env('create_admin_url'),
              headers: {
                'Authorization': 'Bearer ' + userToken,
                'Content-Type': 'application/json'
              },
              body: {
                ...data,
                email: randomEmail,
              }
            }).then(response => {
              // Check for successful status - 200
              expect(response.status).to.equal(200);
  
              // Check user has all the properties (first_name, last_name, address, phone_number)
              expect(response.body.data).has.property('first_name', data.first_name)
              expect(response.body.data).has.property('last_name', data.last_name)
              expect(response.body.data).has.property('address', data.address)
              expect(response.body.data).has.property('phone_number', data.phone_number)  
            });
          })   
        })
    });
  })

  context('should not create a user with an existing email', () => {
    it('POST request fails', () => {
      cy.generateUserToken().then(userToken => {
        cy.fixture('user_data').then(data => {
          cy.request({
            method: 'POST',
            url: Cypress.env('create_admin_url'),
            headers: {
              'Authorization': 'Bearer ' + userToken,
              'Content-Type': 'application/json'
            },
            body: {
              ...data,
              email: Cypress.env('admin_user_email'),
            },
            failOnStatusCode: false
          }).then(response => {
            // Check for Unprocessable Content status
            expect(response.status).to.eq(422)

            // Check for error messages
            expect(response.body).has.property('error', 'Failed Validation')
            expect(response.body.errors.email).contains('The email has already been taken.') 
          });
        })
      }) 
    });
  })
});
