# 🍔 CloudKitchen API

A RESTful backend API for managing products, carts, and users in a food ordering system built with **Node.js** and **Express.js**.

This project follows a modular feature-based architecture with middleware support, logging, validation, file upload handling, and Swagger API documentation.

---

# 🚀 Features

- ✅ REST API using Express.js
- ✅ Feature-based folder structure
- ✅ Cart Management
- ✅ Product Management
- ✅ User Management
- ✅ File Upload Middleware
- ✅ Request Logger Middleware
- ✅ Validation Middleware
- ✅ Custom Error Handling
- ✅ Swagger API Documentation
- ✅ MongoDB 
- ✅ Password Hashing with bcrypt
 

---

# 📁 Project Structure

```bash
CLOUDKITCHEN API
│
├── clientsPage/
│   └── index.html
│
├── data/
│   ├── cart.json
│   ├── menu.json
│   └── user.json
│
├── errorHandler/
│   └── applicationError.js
│
├── features/
│   ├── cart/
│   │   ├── cart.controller.js
│   │   ├── cart.models.js
│   │   └── cart.routes.js
│   │
│   ├── product/
│   │   ├── product.controller.js
│   │   ├── product.models.js
│   │   └── product.routes.js
│   │
│   └── user/
│       ├── user.controller.js
│       ├── user.model.js
│       └── user.routes.js
│
├── middleware/
│   ├── fileUpload.middleware.js
│   ├── jwt.middleware.js
│   ├── logger.middleware.js
│   └── validation.middleware.js
│
├── uploads/
│
├── log.txt
├── package.json
├── server.js
└── swagger.json
```

---

# 🛠️ Tech Stack

- Node.js
- Express.js
- JWT Authentication
- Swagger UI
- Multer
- Winston Logger
- CORS
- MongoDB
- bcrypt
---

# ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/your-username/cloudkitchen-api.git
```

Move into project folder:

```bash
cd cloudkitchen-api
```

Install dependencies:

```bash
npm install
```

---

# ▶️ Run the Server

```bash
npm start
```

Server runs on:

```bash
http://localhost:1400
```

---

# 📚 API Documentation

Swagger documentation available at:

```bash
http://localhost:1400/api-docs
```

---

# 🔐 Authentication

This API uses JWT Authentication.

Protected routes require:

```http
Authorization: Bearer YOUR_TOKEN
```

---

# 📦 API Endpoints

## 🛍️ Product Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/products` | Get all products |
| GET | `/products/:id` | Get single product |
| POST | `/products` | Add new product |
| DELETE | `/products/:id` | Delete product |

---

## 🛒 Cart Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/cart` | Get cart items |
| POST | `/cart` | Add item to cart |
| DELETE | `/cart/:id` | Remove cart item |

---

## 👤 User Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/register` | Register user |
| POST | `/login` | User login |
| GET | `/users` | Get all users |

---

# 📤 File Upload

Supports file upload using Multer middleware.

Uploaded files stored in:

```bash
/uploads
```

---

# 🧾 Logging

Application logs are stored in:

```bash
log.txt
```

Uses Winston Logger middleware for request logging.

---

# ❌ Error Handling

Centralized error handling implemented using:

```bash
errorHandler/applicationError.js
```

---

# 🌐 CORS Configuration

Example:

```js
let corsOptions = {
    origin: 'http://127.0.0.1:5500'
};
```

---

# 📌 Future Improvements

- Admin Dashboard
- Payment Gateway
- Order Tracking
- Docker Support
- Unit Testing

---

# 👨‍💻 Author

**Kashish Narang**

Backend Developer | Node.js & Express.js
This project was built with learning and guidance from **Coding Ninjas** during backend development practice and API architecture learning.

---

# 📄 License

This project is licensed under the MIT License.

---

# ⭐ Support

If you like this project:

- Give it a ⭐ on GitHub
- Fork the repository
- Contribute to improvements

---

Built with ❤️ using Node.js and Express.js
