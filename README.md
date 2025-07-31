# 🧠 Smart Task API

A simple backend task manager API built with Node.js, Express, MongoDB, and JWT authentication — documented using Swagger.

---

## 🚀 Features

- User registration & login (JWT Auth)
- Create, read, update, delete tasks
- Swagger API documentation
- MongoDB (Mongoose ODM)
- Environment-based config with dotenv
- Deployed on Render

---

## 🔧 Tech Stack

- **Node.js** + **Express**
- **MongoDB** + **Mongoose**
- **JWT** for auth
- **Swagger UI** for documentation
- **Dotenv**, **Nodemon**

---

## 📦 Installation

```bash
git clone https://github.com/karimwael0/smart-task-api.git
cd smart-task-api
npm install
```

npm run dev
Starts the server on http://localhost:5000

Swagger UI available at /api-docs

## 🧪 API Endpoints

🔐 Auth
POST /api/auth/register – Register user

POST /api/auth/login – Login and get token

## ✅ Tasks (Authenticated)

GET /api/tasks – Get all tasks

POST /api/tasks – Create new task

PUT /api/tasks/:id – Update task

DELETE /api/tasks/:id – Delete task

## 📚 API Documentation (Swagger)

Once running locally:

bash
Copy
Edit
http://localhost:5000/api-docs

Built by Karim Wael

This project is open-source and free to use.
