# 🔒 Sistema de Validações

A API realiza validações em diferentes camadas para evitar o armazenamento de dados inválidos e garantir maior consistência das informações.

Para isso, foram implementadas diversas camadas de validação, desde a entrada da requisição até as regras do banco de dados.

## Validações Implementadas

| Validação | Implementação |
|------------|---------------|
| Formato de E-mail | Sequelize Validation (`isEmail`) |
| CPF | Helper personalizado |
| Tamanho do nome | Sequelize Validation (`len`) |
| E-mail único | Unique Constraint |
| Chaves estrangeiras | Foreign Key Constraint |
| IDs inexistentes | Middleware de validação |
| Campos pesquisáveis | Middleware de busca |
| Ordenação | Validação automática das colunas permitidas |
| Paginação | Sanitização dos parâmetros recebidos |

---

## Validação de CPF

A validação do CPF é realizada por um helper próprio antes da persistência dos dados.

Essa validação evita o armazenamento de documentos em formatos incorretos.

---

## Validação de E-mail

O Sequelize valida automaticamente o formato dos endereços de e-mail através da validação `isEmail`.

Exemplo de valor aceito:

```text
usuario@email.com
```

Caso o formato seja inválido, a API retorna um erro de validação.

---

## Restrições de Unicidade

O sistema impede o cadastro de dois usuários utilizando o mesmo endereço de e-mail.

Algumas colunas, como de CPF e e-mail, possuem restrição de unicidade, impedindo o cadastro de dois usuários com as mesmas informações.
