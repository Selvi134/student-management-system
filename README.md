# 🎓 Student Management System

A full-stack **Student Management System** built using **FastAPI, React, MySQL**, and deployed on cloud platforms.

---

## 🚀 Live Demo

* 🌐 Frontend: https://ubiquitous-gnome-35f9f5.netlify.app/
* 🔗 Backend API Docs:https://student-management-system-6uzm.onrender.com

---

## 🛠️ Tech Stack

### 🔹 Frontend

* React.js
* Bootstrap
* Axios

### 🔹 Backend

* FastAPI
* SQLAlchemy
* JWT Authentication

### 🔹 Database

* MySQL (Railway Cloud)

### 🔹 Deployment

* Frontend → Netlify
* Backend → Render
* Database → Railway

---

## ✨ Features

* 🔐 User Authentication (JWT आधारित login system)
* 👤 Role-based access (Admin / Student)
* ➕ Add Students (Admin only)
* ✏️ Edit Students (Admin only)
* ❌ Delete Students (Admin only)
* 🔍 Search Students
* 📄 Pagination
* 🌐 Fully deployed (Frontend + Backend + DB)

---

## 🔑 Authentication Flow

1. User logs in
2. Backend generates JWT token
3. Token stored in localStorage
4. All protected routes use Bearer Token

---

## 📂 Project Structure

```
student-management-system/
│
├── backend/
│   └── app/
│       ├── main.py
│       ├── models.py
│       ├── schemas.py
│       ├── oauth2.py
│       ├── database.py
│       └── routers/
│           ├── auth.py
│           └── student.py
│
├── frontend/
│   └── src/
│       ├── pages/
│       ├── services/
│       └── App.js
```

---

## ⚙️ Environment Variables

### 🔹 Backend (.env)

```
DATABASE_URL=your_mysql_url
SECRET_KEY=your_secret_key
ACCESS_TOKEN_EXPIRE_MINUTES=60
```

---

### 🔹 Frontend (.env)

```
REACT_APP_API_URL=https://student-management-system-6uzm.onrender.com
```

---

## ▶️ Run Locally

### 🔹 Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

---

### 🔹 Frontend

```bash
cd frontend
npm install
npm start
```

---

## 🧪 API Endpoints

| Method | Endpoint       | Description      |
| ------ | -------------- | ---------------- |
| POST   | /auth/register | Register user    |
| POST   | /auth/login    | Login user       |
| GET    | /students      | Get all students |
| POST   | /students      | Add student      |
| PUT    | /students/{id} | Update student   |
| DELETE | /students/{id} | Delete student   |

---

## 🔥 Challenges Solved

* CORS issues between frontend & backend
* Swagger OAuth login error
* Cloud MySQL integration using Railway
* Deployment issues in Render & Netlify

---
## 📸 Screenshots

Add screenshots of:

* Home Page

![alt text](<Screenshot 2026-03-16 152309-1.png>)

* Login Page

![alt text](<Screenshot 2026-03-16 152329.png>)

* Dashboard

![alt text](<Screenshot 2026-03-16 152404.png>)


* Add Student Form

![alt text](<Screenshot 2026-03-16 152421.png>)

---

## 👨‍💻 Author

Muthuselvi S

GitHub: https://github.com/Selvi134/student-management-system
