            #language: pt

            Funcionalidade: Tela de cadastro - Checkout
            Como cliente da EBAC-SHOP
            Quero fazer concluir meu cadastro
            Para finalizar minha compra

            Contexto:
            Dado um usuário acessando a tela de cadastro para finalizar uma compra

            Cenário: Cadastro sem preencher campos obrigatórios
            Quando o usuário deixar campos obrigatórios vazios sinalizados por asterisco
            Então deve ser exibido uma mensagem de alerta

            Esquema do Cenário: Cadastro com formato inválido de e-mail
            Quando o usuário preencher <email>
            Então deve ser exibido uma mensagem de erro

            Exemplos:
            | email                       |
            | luiza.@314mail              |
            | carlos@uol.br.com.acessoria |
            | bruno@11111                 |
            | levi@Gmail.gov              |

            Esquema do Cenário: Finalizando compra com cadastro válido
            Quando o usuário preencher <nome>
            E <sobrenome>
            E <pais>
            E <endereco>
            E <cidade>
            E <cep>
            E <telefone>
            E <email>
            Então deve ser efetuada a compra com sucesso

            Exemplos:
            | nome       | sobrenome                 | pais   | endereco      | cidade          | cep       | telefone    | email                                    |
            | Claudio    | de Melo                   | Brasil | Rua Cavan     | Fortaleza       | 60785623  | 8565745898  | claudiom@ebac.com                        |
            | José Maria | de Anchieta Nobrega Filho | Brasil | Rua Bahia 621 | Estrela D'Oeste | 15650-970 | 17996917098 | bernardo_benjamin_figueiredo@gerj.com.br |