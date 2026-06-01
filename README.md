# API REST — Autenticação e Autorização com JWT

## Tecnologias
Node.js · Express · Prisma (SQLite) · JWT · bcrypt

## Instalação

```bash
npm install
npx prisma migrate dev --name init
npm run dev
```

## Variáveis de ambiente (.env)

```
DATABASE_URL="file:./dev.db"
JWT_SECRET="uma_chave_secreta_muito_segura_2024"
PORT=3000
```

## Endpoints

### Autenticação
| Método | Rota | Descrição |
|--------|------|-----------|
| POST | /auth/signup | Registo de utilizador |
| POST | /auth/signin | Login — devolve token JWT |
| GET | /auth/profile | Perfil do utilizador autenticado 🔒 |

### Tarefas (todas protegidas 🔒)
| Método | Rota | Descrição |
|--------|------|-----------|
| GET | /tasks | Listar tarefas do utilizador |
| GET | /tasks/:id | Obter tarefa por id |
| POST | /tasks | Criar tarefa |
| PUT | /tasks/:id | Atualizar tarefa |
| DELETE | /tasks/:id | Eliminar tarefa |

## Autenticação nas rotas protegidas

Adicionar header em todos os pedidos às rotas protegidas:

```
Authorization: Bearer <token>
```

## Exemplos de pedidos

### Signup
```json
POST /auth/signup
{
  "name": "João Silva",
  "email": "joao@email.com",
  "password": "password123"
}
```

### Signin
```json
POST /auth/signin
{
  "email": "joao@email.com",
  "password": "password123"
}
```

### Criar tarefa
```json
POST /tasks
Authorization: Bearer <token>
{
  "title": "Estudar JWT"
}
```
