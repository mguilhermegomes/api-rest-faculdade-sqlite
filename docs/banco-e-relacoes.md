# 🗄 Banco de Dados

A aplicação utiliza o **SQLite** como banco de dados durante o ambiente de desenvolvimento.

Todo o versionamento da estrutura do banco é realizado através das **Migrations** do Sequelize, enquanto os dados iniciais são disponibilizados através das **Seeders**.

Como a estrutura é controlada por migrations e os dados iniciais por seeders, qualquer desenvolvedor consegue recriar o banco executando os comandos do Sequelize CLI.

---

## Estrutura do Banco

O sistema possui quatro entidades principais:

```text
Pessoa
   │
   ├───────────────┐
   │               │
   ▼               ▼
Curso        Matrícula
   ▲               ▲
   │               │
   └──── Categoria ┘
```

---

## Relacionamentos

### 👤 Pessoa

Representa estudantes e docentes cadastrados no sistema.

Relacionamentos:

- Um docente pode ministrar vários cursos.
- Um estudante pode possuir várias matrículas.

---

### 📚 Curso

Cada curso pertence a uma categoria e possui um docente responsável.

Relacionamentos:

- N:1 Categoria
- N:1 Pessoa (Docente)
- 1:N Matrículas

---

### 🏷 Categoria

Responsável por agrupar cursos da mesma área.

Exemplos:

- Node.js
- React
- Java
- TypeScript
- Python
- Go
- Rust

Uma categoria pode possuir diversos cursos.

---

### 🎓 Matrícula

Representa a inscrição de um estudante em determinado curso.

Cada matrícula possui:

- estudante
- curso
- status

---

## 📌 Modelo de Domínio

```text
Pessoa
├── id
├── nome
├── email
├── cpf
├── ativo
└── role

Categoria
├── id
└── titulo

Curso
├── id
├── titulo
├── descricao
├── data_inicio
├── categoria_id
└── docente_id

Matricula
├── id
├── status
├── estudante_id
└── curso_id
```

## 📑 Estrutura das Migrations

As migrations são responsáveis por versionar a estrutura do banco de dados da aplicação. Cada alteração no esquema é registrada em um arquivo independente, permitindo recriar o banco em qualquer ambiente de forma consistente.

Atualmente as migrations contemplam:

- criação da tabela `pessoas`;
- criação da tabela `categorias`;
- criação da tabela `cursos`;
- criação da tabela `matriculas`;
- adição da coluna `deletedAt` para suporte ao Soft Delete.

As dependências entre tabelas são criadas utilizando chaves estrangeiras definidas nas próprias migrations.

---

## 🌱 Dados de Desenvolvimento

Após a execução das migrations, o banco pode ser populado automaticamente utilizando os seeders.

Os registros inseridos têm como objetivo facilitar testes e desenvolvimento da API sem necessidade de cadastramento manual.

São criados automaticamente:

estudantes;
docentes;
categorias;
cursos;
matrículas.
