---

```md
# User Authentication MERN Project

A full-stack **User Authentication system** built using the **MERN stack** (MongoDB, Express, React, Node.js).  
This project implements secure user signup, login, JWT-based authentication, and protected routes.

---

## 🚀 Features

- User Signup & Login
- Password hashing using **bcrypt**
- Authentication using **JWT (JSON Web Tokens)**
- Protected routes (frontend & backend)
- Token storage on client side
- Logout functionality
- Modular backend architecture
- React frontend with routing

---

## 🛠️ Tech Stack

### Frontend
- React
- React Router DOM
- Axios
- Vite

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- bcrypt / bcryptjs
- JSON Web Token (JWT)

---

## 📁 Project Structure

```

User-Authentication-Mern-Project
│
├── Backend
│   ├── Controllers
│   ├── Middlewares
│   ├── Models
│   ├── Routes
│   ├── index.js
│   ├── package.json
│   └── .env
│
├── Frontend
│   ├── src
│   ├── public
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── .gitignore
└── README.md

````

---

## ⚙️ Environment Variables

Create a `.env` file inside the **Backend** folder and add:

```env
PORT=3200
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
````

> ⚠️ Never commit `.env` files to GitHub.

---

## ▶️ How to Run the Project Locally

### 1️⃣ Clone the repository

```bash
git clone https://github.com/roshanmishra15/User-Authentication-Mern-Project.git
cd User-Authentication-Mern-Project
```

---

### 2️⃣ Run Backend

```bash
cd Backend
npm install
npm start
```

Backend will run on:

```
http://localhost:3200
```

---

### 3️⃣ Run Frontend

```bash
cd Frontend
npm install
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

## 🔐 Authentication Flow (JWT)

1. User submits **email & password**
2. Server fetches hashed password from DB
3. Password is verified using **bcrypt**
4. JWT token is generated on success
5. Token is sent to client
6. Client stores token and accesses protected routes
7. Middleware verifies JWT for secure routes

---

## 📌 Future Improvements

* Refresh tokens
* Role-based access control (Admin/User)
* Email verification
* Password reset functionality
* Deployment (Vercel + Render)

---

## 👨‍💻 Author

**Roshan Mishra**

GitHub: [https://github.com/roshanmishra15](https://github.com/roshanmishra15)

---

## 📄 License

This project is licensed under the MIT License.

````

---

## Next Step (Recommended)

After pasting this README:

```bash
git add README.md
git commit -m "Add project README"
git push
````


