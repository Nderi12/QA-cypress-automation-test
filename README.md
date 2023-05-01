# QA cypress E2E automation test
QA cypress automation test is a standalone Cypress suite that will covers the necessary endpoints and actions to ensure that the clients will always get the expected results.
The standalone Cypress suite is based on the User Stories and Technical requirements presented in the document.

### Project Dependancies
1. Cypress Version: 12.7.0
2. Node Version: v16.13.2.
3. npm Version: @8.1.2

### 1. Cloning repo
Clon the github repository

```bash
## Clone this repo to a local directory
git clone https://github.com/Nderi12/QA-cypress-automation-test.git

## cd into the cloned repo
cd QA-cypress-automation-test

## Install the node_modules
npm install

```

### UI tests
1. Add to cart steps

3. User login page

### API tests as as below:
1. Login admin user

2. Creating a new admin user (with new email & existing email)

3. list all users

4. making payment

5. fetching product by uuid

6. creating an order status

### 2. How to run project tests

```bash
# Launch the cypress tests in headless mode using the commands
command 1
npm run cy:run 

command 2
npx cypress run

```
```bash
# In auth folder
npx cypress run --spec cypress/e2e/auth/create-admin-user.spec.cy.js headless
npx cypress run --spec cypress/e2e/auth/login.spec.cy.js headless

# In cart folder
npx cypress run --spec cypress/e2e/cart/make-payment.spec.cy.js headless

# In orders folder
npx cypress run --spec cypress/e2e/orders/order-status.spec.cy.js headless

# In products folder
npx cypress run --spec cypress/e2e/products/fetch-product.spec.cy.js headless

# In UI folder
npx cypress run --spec cypress/e2e/UI/admin-dashboard.spec.cy.js headless
npx cypress run --spec cypress/e2e/UI/admin-login.spec.cy.js headless

# In users folder
npx cypress run --spec cypress/e2e/users/users-list.spec.cy.js headless

```

Above commands allow for a user to test the full application in a single command and an option to run individual test

Environment variables are stored on the .env

The project has fixures that contain reusable json data for testing purposes.

### 3. Boot the cypress tests with Docker

Make sure that Docker is configured/installed in your device

Navigate to the root directory of the project *QA-cypress-automation-test* using your terminal:

```bash
# Boot application with docker
command 
docker compose up 

```

### Useful links
```
# How to configure and install docker on your device
```
[Docker installation](https://docs.docker.com/get-docker/)

```
# How to use cypress commands to run tests
```
[Cypress commands](https://docs.cypress.io/guides/guides/command-line)

```
# How to clone a github repository
```
[How to clone github repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)