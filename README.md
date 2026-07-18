# 🌙 Moon Journal

> A full-stack MERN journal application that helps users track their moods, write personal journal entries, and visualize emotional trends through an interactive dashboard.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-darkgreen?logo=mongodb)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)
![License](https://img.shields.io/badge/License-MIT-yellow)

---

## 📖 Overview

Moon Journal is a secure journaling platform built using the **MERN Stack**. It allows users to create personal journal entries, monitor their moods over different time periods, and manage their profile through a clean and responsive interface.

The project demonstrates real-world full-stack development concepts including JWT authentication, protected routes, React Context API, CRUD operations, state management, and MongoDB integration.

---

## ✨ Features

### 🔐 Authentication

- User Registration
- Secure Login
- JWT Authentication
- Protected Routes
- Persistent Login using Local Storage

### 📝 Journal

- Create Journal Entries
- Select Mood with Emoji
- Date-based Entries
- View Previous Journals
- Calendar Integration

### 📊 Analytics

- Weekly Mood Analytics
- Monthly Mood Analytics
- Yearly Mood Analytics
- Five-Year Mood Overview

### 🎨 Personalization

- Dark / Light Mode
- Multiple Color Themes
- Writing Prompt Toggle
- Daily Affirmation Toggle
- Edit User Profile

---

# 📸 Screenshots

## Landing Page

![Landing]()

---

## Login

![Login](screenshots/login.png)

---

## Dashboard

![Dashboard](screenshots/dashboard.png)

---

## Mood Analytics

![Analytics](screenshots/analytics.png)

---

## Write Entry

![Write](screenshots/write-entry.png)

---

## Profile & Settings

![Settings]()

---

# 🛠 Tech Stack

### Frontend

- React
- Vite
- React Router DOM
- Context API
- CSS

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

### Authentication

- JWT
- bcrypt

### Tools

- Git
- GitHub
- VS Code
- Postman

---

# 🏗 Project Architecture

```
Moon Journal

Frontend (React)
│
├── Authentication
├── Dashboard
├── Calendar
├── Mood Analytics
├── Write Entry
└── Settings

        │
        ▼

Express API

        │
        ▼

MongoDB
```

---

# 📂 Folder Structure

```
Moon-Journal
│
├── backend
│   ├── models
│   ├── routes
│   ├── server.js
│   └── ...
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── context
│   │   ├── pages
│   │   ├── routes
│   │   └── ...
│   └── ...
│
└── README.md
```

---

# 🔄 Application Flow

```
User

↓

Register / Login

↓

JWT Generated

↓

Dashboard

↓

Fetch Journal Entries

↓

Mood Analytics

↓

Write Journal

↓

Save to MongoDB

↓

Dashboard Updates
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/moon-journal.git

cd moon-journal
```

---

## Backend

```bash
cd backend

npm install

npm run dev
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

# ⚙️ Environment Variables

Create a `.env` file inside the backend folder.

```env
MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

# 💡 Key Concepts Demonstrated

- MERN Stack Development
- REST API Design
- JWT Authentication
- Protected Routes
- CRUD Operations
- React Context API
- State Management
- Component Reusability
- Responsive UI
- Calendar Integration
- Mood Analytics

---

# 🔮 Future Improvements

- 🤖 AI-powered journal insights
- 🔍 Search journal entries
- 🏷 Tags & Categories
- 📤 Export journals to PDF
- 🎤 Voice-to-Journal
- 📈 Advanced mood visualizations
- ☁ Cloud image uploads
- 📱 Progressive Web App (PWA)

---
