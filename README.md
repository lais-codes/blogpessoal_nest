# Blog Pessoal API

API REST desenvolvida durante os estudos de **NestJS**, simulando o backend de uma aplicação de blog, permitindo o gerenciamento de usuários, postagens e temas.

O projeto segue os princípios de arquitetura modular do NestJS e implementa autenticação utilizando JWT para proteger os endpoints privados.

---

## Tecnologias utilizadas

* NestJS
* TypeScript
* TypeORM
* PostgreSQL
* SQLite (desenvolvimento)
* JWT (JSON Web Token)
* Passport
* Bcrypt
* Class Validator
* Swagger
* Node.js

---

## 📁 Estrutura do projeto

```
src
│
├── auth
│   ├── controllers
│   ├── bcrypt
│   ├── constants
│   └── entities
│
├── postagem
│   ├── controllers
│   ├── entities
│   ├── services
│   └── repository
│
├── tema
│   ├── controllers
│   ├── entities
│   ├── services
│   └── repository
│
├── usuario
│   ├── controller
│   ├── entities
│   ├── services
│   └── repository
│
├── app.module.ts
└── main.ts
```

---

# Funcionalidades

* Cadastro de usuários
* Login com autenticação JWT
* Criptografia de senha utilizando Bcrypt
* CRUD completo de usuários
* CRUD completo de postagens
* CRUD completo de temas
* Relacionamento entre usuários, postagens e temas
* Validação dos dados enviados
* Documentação automática com Swagger

---

# Autenticação

A autenticação utiliza **JWT (JSON Web Token)**.

Após realizar o login, a API retorna um token que deve ser enviado em todas as requisições protegidas.

Exemplo:

```
Authorization: Bearer seu_token_aqui
```

---

# Documentação

Após iniciar a aplicação, a documentação pode ser acessada em:

```
http://localhost:4000/swagger
```

# Como executar o projeto

## Clone o repositório

```bash
git clone https://github.com/lais-codes/blogpessoal_nest
```

Entre na pasta

```bash
cd blogpessoal_nest
```

Instale as dependências

```bash
npm install
```

Configure as variáveis de ambiente.

Exemplo:

```env
DATABASE_URL=postgresql://usuario:senha@localhost:5432/blogpessoal

JWT_SECRET=minha_senha

PORT=4000
```

Execute em modo desenvolvimento

```bash
npm run start:dev
```

Ou execute a versão de produção

```bash
npm run build

npm run start:prod
```

---

# Scripts disponíveis

```bash
npm run start
```

Inicia a aplicação.

```bash
npm run start:dev
```

Executa em modo desenvolvimento.

```bash
npm run build
```

Compila o projeto.

```bash
npm run start:prod
```

Executa a versão compilada.

```bash
npm run test
```

Executa os testes.

---

# Banco de dados

O projeto utiliza PostgreSQL através do TypeORM.

As entidades principais são:

* Usuário
* Postagem
* Tema

---

# Principais conceitos aplicados

* Arquitetura modular do NestJS
* REST API
* Controllers
* Services
* Repositories
* Injeção de Dependência
* DTOs
* Validação de dados
* Relacionamentos entre entidades
* Autenticação JWT
* Criptografia de senhas
* Documentação Swagger

---

## Front-end

O front-end desta aplicação foi desenvolvido em React e está disponível no repositório abaixo:

🔗 https://github.com/lais-codes/blog_pessoal_react

---

Este projeto foi desenvolvido para fins de estudo e aprendizado durante a formação em desenvolvimento Full Stack da Generation Brasil.
