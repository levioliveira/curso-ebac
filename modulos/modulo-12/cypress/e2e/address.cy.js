/// <reference types="cypress" />
import AddressPage from "../support/page-objects/address.page";
const AddressData = require("../fixtures/address.json")
describe('Funcionalidade de Endereços - Faturamento e Entrega', () => {
    let userData;
    beforeEach(() => {
        cy.fixture('userData').then((fUser) => {
            userData = fUser
            cy.login(userData.userWithValidAccess.username,
                userData.userWithValidAccess.password)
        })
    });
    
    it('Deve fazer cadastro de faturamento com sucesso', () => {
        AddressPage.editBillingAddress('Bruno', 'Gomes', 'Capgemini', 'Brasil', 'Rua das Carnaúbas', '1475', 'São Paulo', 'São Paulo', '60750700', '11988554339', 'brgomes@teste.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });

    it('Deve fazer alteração de cadastro de faturamento com sucesso - Usando arquivo de dados', () => {
        AddressPage.editBillingAddress(
            AddressData[1].firstName,
            AddressData[1].lastName,
            AddressData[1].company,
            AddressData[1].country,
            AddressData[1].address,
            AddressData[1].addressComplement,
            AddressData[1].city,
            AddressData[1].state,
            AddressData[1].postCode,
            AddressData[1].phone,
            AddressData[1].email
            )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });

    it('Deve fazer alteração de cadastro de endereço de envio com sucesso - Usando arquivo de dados', () => {
        AddressPage.editShippingAddress(
            AddressData[1].firstName,
            AddressData[1].lastName,
            AddressData[1].company,
            AddressData[1].country,
            AddressData[1].address,
            AddressData[1].addressComplement,
            AddressData[1].city,
            AddressData[1].state,
            AddressData[1].postCode,
            )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });
});