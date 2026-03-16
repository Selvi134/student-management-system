# 🎓 Student Management System

A full-stack **Student Management System** built using **React, FastAPI, and MySQL**.
This application allows users to manage student records with authentication, search, pagination, and role-based access.

---

## 🚀 Live Demo

Frontend: coming soon
Backend API: coming soon
---

## 🛠 Tech Stack

### Frontend

* React
* Axios
* Bootstrap
* React Router

### Backend

* FastAPI
* SQLAlchemy
* MySQL
* JWT Authentication
* Pydantic

---

## ✨ Features

* User Signup & Login
* JWT Authentication
* Role-Based Access Control
* Add / Edit / Delete Students
* Search Students
* Pagination
* Secure API Routes
* Responsive UI

---

## 📂 Project Structure

```
student-management-system
│
├── backend
│   ├── app
│   ├── main.py
│   └── requirements.txt
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```
git clone https://github.com/Selvi134/student-management-system.git
cd student-management-system
```

---

### Backend Setup

```
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

---

### Frontend Setup

```
cd frontend
npm install
npm start
```

---

## 🔐 Environment Variables

Backend `.env`

```
DATABASE_URL=mysql+pymysql://username:password@localhost/student_db
SECRET_KEY=your_secret_key
ACCESS_TOKEN_EXPIRE_MINUTES=60
```

Frontend `.env`

```
REACT_APP_API_URL=http://127.0.0.1:8000
```

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
