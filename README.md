# 🌙 Moon Journal

> A full-stack MERN journal application that helps users track their moods, write personal journal entries, and visualize emotional trends through an interactive dashboard.

![React](https://img.shields.io/badge/React-purple?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-darkgreen?logo=mongodb)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)

---

## 📖 Overview

Moon Journal is a secure journaling platform built using the **MERN Stack**. It allows users to create personal journal entries, monitor their moods over different time periods, and manage their profile through a clean and responsive interface.

The project demonstrates real-world full-stack development concepts including JWT authentication, protected routes, React Context API, CRUD operations, state management, and MongoDB integration.
> 🚧 This project is actively being improved. Planned features include AI-powered journal insights, search, PDF export, and cloud image uploads.

## 🎯 Why I Built This

Moon Journal was built to strengthen my understanding of full-stack web development using the MERN stack. The project focuses on authentication, protected routing, CRUD operations, global state management using React Context, and visualizing user mood data through an interactive dashboard.

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
# 📹 Preview
<img width="400" height="193" alt="landingpage" src="https://github.com/user-attachments/assets/e926e785-41cc-44fe-8d04-ded5a931aae7" />

# 📸 Screenshots

## Landing Page

<img width="1897" height="932" alt="Image" src="https://github.com/user-attachments/assets/6bcc66b4-2b5f-4b2b-a348-afad6383050d" />

---

## Login

<img width="1898" height="928" alt="Image" src="https://github.com/user-attachments/assets/3df1db55-46d4-4766-9e4b-0fa78385d724" />

---

## Dashboard

<img width="1900" height="927" alt="Image" src="https://github.com/user-attachments/assets/bce43ed2-ea79-4670-8a17-629f86522803" />

---

## Mood Analytics

<img width="462" height="447" alt="Image" src="https://github.com/user-attachments/assets/f811d87b-0b9f-4c19-baa9-6e4036319031" />

---

## Write Entry

<img width="1898" height="927" alt="Image" src="https://github.com/user-attachments/assets/6e9cc31b-4467-47e6-a9e0-a8793b605163" />

---

## Profile & Settings

<img width="412" height="617" alt="Image" src="https://github.com/user-attachments/assets/cfffcf0b-17ea-42f4-b173-d462fa6c8067" />

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

React (Vite)
        │
        ▼
Express REST API
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
git clone https://github.com/vjethwa2005/moon-journal-mern.git
cd moon-journal
```

---

## Backend

```bash
cd backend
npm install
node server.js
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
