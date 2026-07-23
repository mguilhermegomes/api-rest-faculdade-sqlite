# 🏛 Decisões Arquiteturais

Este documento apresenta as principais decisões arquiteturais adotadas durante o desenvolvimento da API e a motivação por trás de cada uma delas.

## MVC (Model-View-Controller)

A organização da aplicação segue o padrão MVC.

- **Models** representam as entidades do banco de dados.
- **Controllers** recebem e respondem às requisições HTTP.
- **Routes** conectam os endpoints aos respectivos controllers.

Embora a aplicação utilize MVC, as regras de negócio não ficam nos controllers. Elas foram centralizadas na camada de Services.

---

## Service Layer Pattern

Os controllers possuem apenas a responsabilidade de receber a requisição HTTP, validar as informações necessárias e delegar o processamento para a camada de Services. Isso evita que regras de negócio fiquem espalhadas entre diferentes controllers.

---

## Generic Service

Grande parte das operações CRUD foi abstraída para uma classe base (`Services`).

As demais classes especializadas herdam esse comportamento, implementando apenas funcionalidades específicas quando necessário.

As operações CRUD comuns ficam concentradas na classe Services, enquanto cada serviço específico implementa apenas as regras particulares da sua entidade.

---

## Soft Delete

Em vez de remover registros definitivamente, a API utiliza o recurso **Paranoid** do Sequelize.

O Sequelize utiliza a coluna `deletedAt` para marcar registros como removidos,preservando o histórico dos registros e evitando exclusões permanentes.

---

## Transactions

Operações que modificam múltiplas entidades são executadas dentro de transações.

Exemplo:

Ao cancelar um estudante, a API:

1. atualiza o status do estudante;
2. cancela todas as suas matrículas.

Caso alguma etapa falhe, nenhuma alteração é persistida, garantindo a consistência dos dados.

---

## Scopes

Os **Scopes** do Sequelize foram utilizados para simplificar consultas recorrentes.

Por padrão, apenas pessoas ativas são retornadas.

Em situações específicas, um escopo específico permite recuperar todos os registros, incluindo os inativos.

---

## Associations

A modelagem utiliza relacionamentos entre entidades para representar o domínio da aplicação.

Entre eles:

- Pessoa → Cursos
- Pessoa → Matrículas
- Categoria → Cursos
- Curso → Matrículas

Os relacionamentos foram definidos utilizando as associações nativas do Sequelize, permitindo navegar entre as entidades sem consultas manuais.

---

## Middlewares Reutilizáveis

Funcionalidades transversais foram isoladas em middlewares independentes.

Middlewares como paginação, busca e validação de IDs são compartilhados entre diferentes rotas, evitando repetição de lógica.

---

## Swagger (OpenAPI)

A documentação da API foi escrita seguindo a especificação OpenAPI e disponibilizada através do Swagger UI, permitindo visualizar todos os endpoints e realizar testes diretamente pelo navegador.
