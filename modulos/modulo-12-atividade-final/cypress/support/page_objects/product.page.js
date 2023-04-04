class ProductPage {

    productBuy(){
        const productName = 'Atlas Fitness Tank'
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('[class="product-block grid"]').contains(productName).click()
    }

}

export default new ProductPage()