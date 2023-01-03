            #language: pt

            Funcionalidade: Configurar produto
            Como cliente da EBAC-SHOP
            Quero configurar meu produto de acordo com meu tamanho e gosto
            E escolher a quantidade
            Para depois inserir no carrinho

            Contexto:
            Dado um usuário acessando a lista de produtos

            Cenário: Limpando as opções já escolhidas
            Quando selecionar as opções de cor, tamanho e quantidade
            E clicar em limpar
            Então o produto deve voltar ao estado original

            Cenário: Validar que os atributos cor, tamanho e quantidade são de seleção obrigatória
            Quando desmarcar qualquer uma das opções selecionadas
            Então deve aparecer um alerta vermelho (*) ao lado do título de cada atributo

            Cenário: Validar a impossibilidade de compras para mais de dez produtos
            Quando selecionar dez produtos para o carrinho
            E clicar em comprar mais um produto
            Então deve aparecer um alerta "o carrinho já está cheio, finalize a compra ou remova produtos"

            Esquema do Cenário: Escolhendo um produto com sucesso
            Quando selecionar as opções de <cor>, <tamanho> e <quantidade>
            Então o produto deve ser inserido no carrinho

            Exemplos:
            | cor                | tamanho | quantidade |
            | azul               | M       | 2          |
            | verde              | GG3     | 15         |
            | amarelo-esverdeado | P       | 199        |