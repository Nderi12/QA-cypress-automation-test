describe('GET request to fetch users from api', () => {
  context('Successful results from generating a valid token', () => {
    it('successfully list users', () => {
            cy.generateUserToken().then(userToken => {
                cy.request({
                    method: 'GET',
                    url: Cypress.env('list_admin_users_url'),
                    headers: { 'Authorization': 'Bearer ' + userToken}
                })
                .then((response) => {
                    // Check for successful status - 200
                    expect(response.status).to.eq(200)

                    // Check user[0] has all the properties (first_name, last_name, address, phone_number)
                    expect(response.body.data[0]).has.property('first_name')
                    expect(response.body.data[0]).has.property('last_name')
                    expect(response.body.data[0]).has.property('email')
                })
            })
        })
    })

    context('Failed results from using an invalid token', () => {
      it('failed GET request', () => {
            cy.request({
                method: 'GET',
                url: Cypress.env('list_admin_users_url'),
                headers: { 'Authorization': 'Bearer ' + "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9"}, // providing an invalid token
                failOnStatusCode: false
            })
            .then((response) => {
            // Check for unauthorized response
                expect(response.status).to.eq(401)
            })
        })
    })
})