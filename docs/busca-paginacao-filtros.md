# 🔍 Busca Dinâmica

Um dos principais recursos da API é o suporte à **busca dinâmica através de Query Parameters**.

Os filtros são processados automaticamente por um middleware reutilizável, permitindo consultas flexíveis sem duplicação de código entre os controllers.

Exemplos:

```http
GET /pessoas?nome=Marcio
```

```http
GET /pessoas?email=guilherme@email.com
```

```http
GET /cursos?titulo=node
```

```http
GET /categorias?titulo=React
```

```http
GET /matriculas?status=matriculado
```

---

## Buscas parciais

Para determinados campos textuais, a API realiza buscas parciais.

Exemplo:

```http
GET /cursos?titulo=express
```

Esse tipo de consulta retorna registros cujo título contenha o termo informado.

---

# 📑 Paginação

Todos os endpoints de listagem suportam paginação.

## Parâmetros

| Parâmetro | Descrição | Valor padrão |
|------------|-----------|---------------|
| pagina | Página desejada | 1 |
| limite | Quantidade de registros | 3 |

---

## Exemplo

```http
GET /pessoas?pagina=2&limite=10
```

---

Outro exemplo:

```http
GET /cursos?pagina=3&limite=5
```

---

# ↕ Ordenação

Todos os endpoints de listagem aceitam o parâmetro `ordem`.

A sintaxe utilizada é:

```text
ordem=campo:direcao
```

Onde:

- ASC → crescente
- DESC → decrescente

---

## Exemplos

Ordenando por nome:

```http
GET /pessoas?ordem=nome:asc
```

---

Ordenando pelo ID:

```http
GET /pessoas?ordem=id:desc
```

---

Ordenando cursos pela data:

```http
GET /cursos?ordem=data_inicio:asc
```

---

Ordenando categorias:

```http
GET /categorias?ordem=titulo:desc
```

---

Caso o campo informado não exista ou não seja permitido para ordenação, a API utiliza automaticamente a chave primária (`id`).

---

# 📅 Filtro por Intervalo de Datas

Os cursos podem ser filtrados utilizando um intervalo de datas.

Exemplo:

```http
GET /cursos?data_inicial=2024-01-01&data_final=2024-12-31
```

Também é possível informar apenas uma das datas.

```http
GET /cursos?data_inicial=2024-01-01
```

ou

```http
GET /cursos?data_final=2024-12-31
```

---