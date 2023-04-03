Cypress.Commands.add('login', (email, password) => {
    cy.visit('my-account/')
    cy.get('#username').type(email)
    cy.get('#password').type(password, { log: false })
    cy.get('.woocommerce-form > .button').click()
})

Cypress.Commands.add('preRegistration', (email, password, firstName, lastName) => {
    cy.get('#reg_email').type(email)
    cy.get('#reg_password').type(password)
    cy.get(':nth-child(4) > .button').click()

    cy.get('[href="http://lojaebac.ebaconline.art.br/my-account/edit-account/"]').click()
    cy.get('#account_first_name').type(firstName)
    cy.get('#account_last_name').type(lastName)
    cy.get('.woocommerce-Button').click()
})

Cypress.Commands.add('addProducts', (productName, quantity, size, color) => {
    cy.get('[class="product-block grid"]').contains(productName).click()
    cy.get('.button-variable-item-' + size).click()
    cy.get('.button-variable-item-' + color).click()
    cy.get('.input-text').clear().type(quantity)
    cy.get('.single_add_to_cart_button').click()
    cy.get('[class="mini-cart-items"]').should('contain', quantity)
})
