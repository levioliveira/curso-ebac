            #language: pt

            Funcionalidade: Login na plataforma
            Como cliente da EBAC-SHOP
            Quero fazer o login (autenticação) na plataforma
            Para visualizar meus pedidos

            Contexto:
            Dado um usuário acessando a home page

            Cenário: Login com sucesso
            Quando inserir os campos de "levi@ebac.com" e "truck98765"
            Então deve ser direcionado para tela de checkout

            Esquema do Cenário: Login com autenticação inválida
            Quando inserir os campos de <usuario> e <senha>
            Então deve aparecer a mensagem "Usuário ou senha inválidos"

            Exemplos:
            | usuario                      | senha          |
            | ajhdkd@enamc.roe             | 124da32a2d¨$%G |
            | carlinhos-undefined@ebac.gov | 123456         |
            | levi@ebac.com                | semsenha       |