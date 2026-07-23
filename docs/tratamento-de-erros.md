# ⚠ Tratamento de Erros

A API possui um tratamento centralizado de exceções utilizando um middleware global.

Toda exceção lançada durante o processamento da requisição é interceptada e convertida em uma resposta HTTP padronizada.

Dessa forma, os controllers não precisam tratar exceções individualmente, mantendo um padrão único de resposta para toda a aplicação.

---

## Hierarquia de Erros

```text
ErroBase
│
├── ErroRequisicaoInvalida
├── ErroRestricao
├── ErroFK
├── ErroValidacao
└── ErroNaoEncontrado
```

Cada classe encapsula um tipo específico de erro tratado pela aplicação.

---

## Erros Tratados

| Classe | Descrição |
|---------|-----------|
| **ErroBase** | Erro interno da aplicação |
| **ErroRequisicaoInvalida** | Dados enviados de forma incorreta |
| **ErroValidacao** | Violações das regras de validação |
| **ErroRestricao** | Violação de restrições de unicidade |
| **ErroFK** | Violação de chave estrangeira |
| **ErroNaoEncontrado** | Recurso solicitado inexistente |

---

## Respostas Padronizadas

Exemplo:

```text
Erro(s): Formato de email inválido.
```

ou

```text
Erro(s): Número de CPF inválido.
```

Todas as mensagens seguem o mesmo formato, facilitando o tratamento dos erros pelo cliente da API.
