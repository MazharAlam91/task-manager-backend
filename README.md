# Task Management Application

## 🔗 Live Application

Frontend:
https://task-manager-frontend-35ah.onrender.com

Backend API:
https://task-manager-backend-w5ke.onrender.com

---

## 🚀 Features

- User Registration & Login
- JWT Authentication
- HTTP-only Secure Cookies
- Password Hashing (bcrypt)
- CRUD Operations for Tasks
- Pagination Support
- Filter Tasks by Status
- Search Tasks by Title
- Protected Frontend Routes
- Structured Error Handling
- Environment Variables Configuration

---

## 🛠 Tech Stack

Frontend:
- React
- Axios
- React Router

Backend:
- Node.js
- Express
- MongoDB (Mongoose)
- JWT
- bcrypt

Deployment:
- Render
- MongoDB Atlas

---

## 🏗 Architecture Overview

Frontend (React)
        ↓
REST API (Express)
        ↓
Authentication Middleware (JWT Verification)
        ↓
Controllers
        ↓
MongoDB Database

Each user can access only their own tasks using proper authorization middleware.

---

## 🔐 Security Implementation

- Passwords hashed using bcrypt
- JWT stored in HTTP-only cookies
- Secure & SameSite cookie configuration
- Environment variables used for secrets
- Proper HTTP status codes
- Input validation implemented

---

## 📘 API Documentation

### 1️⃣ Register

POST /api/auth/register

Request Body:
{
  "name": "Mazhar",
  "email": "mazhar@gmail.com",
  "password": "123456"
}

Response:
{
  "message": "User registered successfully"
}

---

### 2️⃣ Login

POST /api/auth/login

Response:
{
  "message": "Login successful"
}

---

### 3️⃣ Get Tasks (Pagination + Filter + Search)

GET /api/tasks?page=1&limit=5&status=pending&search=task

---

### 4️⃣ Create Task

POST /api/tasks

Body:
{
  "title": "New Task",
  "description": "Optional description"
}

---

### 5️⃣ Update Task

PUT /api/tasks/:id

---

### 6️⃣ Delete Task

DELETE /api/tasks/:id

---

## ⚙️ Local Setup Instructions

1. Clone repository
2. Run `npm install`
3. Create `.env` file:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

4. Run `npm run dev`

---

## 👨‍💻 Author

Mazhar Alam
