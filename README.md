# 🛒 Sistema de Gestão de Produtos e Clientes

Este é um projeto **Node.js** para gerenciamento de produtos e clientes, incluindo um CRUD completo com **Express** e **PostgreSQL**.

---

## 📌 **Tecnologias Utilizadas**

- Node.js
- Express
- PostgreSQL
- JavaScript (ES6+)
- Dotenv (para variáveis de ambiente)
- Nodemon (para desenvolvimento)

---

## 🚀 **Como Rodar o Projeto**

### **1️⃣ Pré-requisitos**

Antes de iniciar, instale:

- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/download/)

### **2️⃣ Clonar o Repositório**

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio


### **3️⃣ Instalar Dependências**
```bash
npm install
```

### **4️⃣ Configurar o Banco de Dados**
Crie um banco de dados PostgreSQL.

Configure o arquivo .env na raiz do projeto com as credenciais do banco:

```bash
Copy
DATABASE_URL=postgres://usuario:senha@localhost:5432/seu_banco
```

### **5️⃣ Rodar a Migração do Banco**
Execute o script para criar as tabelas:

```bash
node database/syncDatabase.js
```

### **6️⃣ Iniciar o Servidor**
```bash
npm start
O servidor estará rodando em http://localhost:3000 🚀.
```

## 📌 **Rotas da API**
🛍 Produtos
Método	Rota	Descrição
GET	/products	Lista todos os produtos
GET	/products/:id	Retorna um produto específico
POST	/products	Cria um novo produto
PUT	/products/:id	Atualiza um produto
DELETE	/products/:id	Remove um produto
👤 Clientes
Método	Rota	Descrição
GET	/customers	Lista todos os clientes
GET	/customers/:id	Retorna um cliente específico
POST	/customers	Cria um novo cliente
PUT	/customers/:id	Atualiza um cliente
DELETE	/customers/:id	Remove um cliente


##📦 **Estrutura do Projeto**
```bash
/nome-do-repositorio
│── /controllers
│   ├── products-controller.js
│   ├── customers-controller.js
│── /models
│   ├── Product.js
│   ├── Customer.js
│── /database
│   ├── index.js
│   ├── syncDatabase.js
│── /routes
│   ├── router.js
│── node_modules/
│── .env.example
│── .gitignore
│── package.json
│── server.js
│── README.md
```

## **📌 Melhorias Futuras**
✅ Adicionar autenticação com JWT

✅ Criar testes automatizados

✅ Melhorar a estrutura de erros


## **📝 Licença**
Este projeto está sob a licença MIT. Sinta-se à vontade para utilizá-lo e modificá-lo! 🚀

Feito com ❤️ por Lenon Merlo.
