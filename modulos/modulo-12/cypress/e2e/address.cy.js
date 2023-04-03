/// <reference types="cypress" />
import AddressPage from "../support/page-objects/address.page";

describe('Funcionalidade de Endereços - Faturamento e Entrega', () => {
    let userData;
    beforeEach(() => {
        cy.fixture('userData').then((fUser) => {
            userData = fUser
            cy.login(userData.userWithValidAccess.username,
                userData.userWithValidAccess.password)
        })
    });
    
    it.only('Deve fazer cadastro de faturamento com sucesso', () => {
        AddressPage.editBillingAddress('Bruno', 'Gomes', 'Capgemini', 'Brasil', 'Rua das Carnaúbas', '1475', 'São Paulo', 'São Paulo', '60750700', '11988554339', 'brgomes@teste.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });
});