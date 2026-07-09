# 🎓 API REST - Sistema Acadêmico

![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)
![Status](https://img.shields.io/badge/status-active-brightgreen)

API REST desenvolvida com **Node.js**, **Express**, **Sequelize** e **SQLite**, simulando um sistema acadêmico com gestão de pessoas, cursos, categorias e matrículas.

O projeto foi estruturado com foco em boas práticas de backend, incluindo arquitetura em camadas, relacionamento entre entidades, migrations, seeders e tratamento centralizado de erros.

---

## 📝 Índice

- [Sobre o projeto](#-sobre-o-projeto)  
- [Tecnologias](#-tecnologias)  
- [Arquitetura](#️-arquitetura)
- [Funcionalidades](#️-funcionalidades)
- [Estrutura do banco](#️-estrutura-do-banco)
- [Estrutura de pastas](#-estrutura-de-pastas)  
- [Instalação](#-instalação)  
- [Configuração](#-configuração)  
- [Execução](#️-execução)  
- [Rotas](#-rotas-da-api)  
- [Filtros e paginação](#-filtros-e-paginação)
- [Relacionamentos importantes](#-relacionamentos-importantes)
- [Tratamento de erros](#-tratamento-de-erros)
- [Destaques técnicos](#-destaques-técnicos)
- [Autor](#-autor)  
- [Licença](#-licença)

---

## 📖 Sobre o projeto

Este projeto simula um sistema acadêmico completo, onde é possível gerenciar:

- Pessoas (estudantes e docentes)
- Categorias de cursos
- Cursos
- Matrículas

Além disso, o sistema permite operações avançadas como:

- Cancelamento de estudante com atualização em cascata
- Consultas com filtros por data
- Relacionamentos entre entidades
- Soft delete (paranoid)
- Paginação e ordenação dinâmica

---

## 🛠 Tecnologias

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)
![JavaScript CommonJS](https://img.shields.io/badge/CommonJS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![dotenv](https://img.shields.io/badge/dotenv-8DD6F9?style=for-the-badge&logo=dotenv&logoColor=black)

---

## 🏗️ Arquitetura

O projeto segue arquitetura em camadas:

- `routes/` → definição de endpoints
- `controllers/` → regras de negócio
- `services/` → camada de abstração do Sequelize
- `models/` → entidades do banco
- `database/migrations` → estrutura do banco
- `database/seeders` → dados iniciais
- `middlewares/` → paginação e tratamento de erros
- `utils/` → funções auxiliares
- `errors/` → erros customizados

---

## ⚙️ Funcionalidades

### Pessoas

- Criar, listar, atualizar e remover pessoas
- Soft delete (paranoid)
- Filtrar apenas pessoas ativas
- Cancelar estudante e suas matrículas

### Cursos

- CRUD completo
- Filtro por intervalo de data de início
- Associação com categoria e docente

### Categorias

- CRUD completo
- Relacionamento com cursos

### Matrículas

- Criar e gerenciar matrículas
- Listar matrículas por estudante
- Matrículas ativas e canceladas
- Cursos com alta quantidade de matrículas

---

## 🗄️ Estrutura do banco

### Entidades principais

- Pessoa
- Curso
- Categoria
- Matrícula

### Relacionamentos

- Pessoa (docente) → Cursos (1:N)
- Categoria → Cursos (1:N)
- Pessoa (estudante) → Matrículas (1:N)
- Curso → Matrículas (1:N)

---

## 📁 Estrutura de pastas

```text
src/
│
├── controllers/        # Regras de negócio
├── services/           # Abstração do Sequelize
├── database/
│   ├── config/         # Configuração SQLite
│   ├── migrations/     # Estrutura do banco
│   ├── models/         # Models Sequelize
│   ├── seeders/        # Dados iniciais
│   └── storage/        # database.sqlite
│
├── errors/             # Erros customizados
├── middlewares/        # Paginação e erros
├── routes/             # Rotas da API
├── utils/
│   └── helpers/        # Helpers (CPF, conversões)
│
├── app.js              # Configuração Express
└── server.js           # Inicialização do servidor
```

---

## 🔧 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/mguilhermegomes/api-rest-faculdade-sqlite.git
```

### 2. Acesse a pasta

```bash
cd api-rest-faculdade-sqlite
```

### 3. Instale as dependências

```bash
npm install
```

---

## 🔐 Configuração

**Crie um arquivo `.env` na raiz do projeto e defina uma porta para o servidor:**

```js
DEV_PORT=3000
```

**O banco SQLite é gerado automaticamente em:**

```text
src/database/storage/database.sqlite
```

---

## ▶️ Execução

**Execute o comando:**

```bash
npm run dev
```

**O servidor rodará em:**

```bash
http://localhost:3000
```

---

## ╰┈➤ Rotas da API

### Pessoas

- `GET /pessoas`
- `GET /pessoas/todos`
- `GET /pessoas/:id`
- `POST /pessoas`
- `PUT /pessoas/:id`
- `DELETE /pessoas/:id`

### Cursos

- `GET /cursos`
- `GET /cursos/:id`
- `POST /cursos`
- `PUT /cursos/:id`
- `DELETE /cursos/:id`
- `GET /cursos?data_inicial=YYYY-MM-DD&data_final=YYYY-MM-DD`

### Categorias

- `GET /categorias`
- `GET /categorias/:id`
- `POST /categorias`
- `PUT /categorias/:id`
- `DELETE /categorias/:id`

### Matrículas

- `GET /matriculas`
- `GET /pessoas/:id/matriculas`
- `GET /pessoas/:id/matriculas/todas`
- `GET /pessoas/:id/matriculas/canceladas`
- `GET /pessoas/:id/matriculas/total-confirmadas`
- `POST /pessoas/:id/matriculas`
- `PUT /pessoas/:id/matriculas/:id`
- `DELETE /pessoas/:id/matriculas/:id`

---

## 🔎 Filtros e paginação

### Paginação global

```js
pagina=1
limite=3
ordem=id:asc
```

### Filtro de cursos por data:

```js
GET /cursos?data_inicial=2023-01-01&data_final=2023-12-31
```

---

## 🔗 Relacionamentos importantes

- Um curso pertence a uma categoria
- Um curso pertence a um docente (Pessoa)
- Uma matrícula conecta estudante ↔ curso
- Pessoa pode ter múltiplos escopos de matrícula:
  - todas
  - ativas
  - canceladas

---

## ❌ Tratamento de erros

Sistema centralizado com suporte para:

- Erros de validação (Sequelize)
- Violação de chave estrangeira
- Restrição de unicidade
- Erros de banco
- Erros customizados

Exemplo:

```json
{
  "message": "Um ou mais valores fornecidos estão incorretos",
  "status": 400
}
```

---

## 📌 Destaques técnicos

- Arquitetura em camadas (Controller → Service → Model)
- Soft delete (paranoid)
- Seeders para dados iniciais
- Migrations versionadas
- Escopos no Sequelize
- Transações (cancelamento de estudante + matrículas)
- Reuso de Services genéricos
- Paginação dinâmica e reutilizável

---

## 👨‍💻 Autor

Desenvolvido por **Guilherme Gomes**  
Projeto de estudo em desenvolvimento backend com Node.js + Sequelize + SQLite

🔗 **LinkedIn:** <https://www.linkedin.com/in/mguilherme-gomes/>  
🔗 **GitHub:** <https://github.com/mguilhermegomes>

---

## 📄 Licença

Este projeto está sob a licença MIT.

```text
MIT License

Copyright (c) 2026 Marcio Guilherme Araujo Gomes

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

**⭐ Se este projeto te ajudou ou você achou interessante, considere deixar uma estrela no repositório.**
