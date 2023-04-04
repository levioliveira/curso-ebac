/// <reference types="cypress" />
import HomePage from '../support/page_objects/home.page';
var faker = require('faker');

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

        let randomFirstName = faker.name.firstName();
        let randomLastName = faker.name.lastName();
        let randomEmail = faker.internet.email();
        let randomPassword = faker.internet.password();

    beforeEach(() => {
        cy.visit('/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        HomePage.userRegist(randomEmail, randomPassword)
        cy.get('a > .hidden-xs').should('contain', 'Welcome')

        
    });


})