# 🚀 Full Stack MERN Task Manager + Admin Panel

A complete, production-ready **Task Manager Application** built using the **MERN Stack (MongoDB, Express.js, React, Node.js)**. This project goes beyond basic CRUD functionality and delivers a fully responsive, feature-rich system with **user authentication, team collaboration, priority tracking, and an advanced admin panel**.

---

## 📌 Project Overview

This application is designed to help teams efficiently manage tasks, track progress, and collaborate in real time. It includes a powerful **Admin Panel** for managing users and overseeing all tasks across the platform.

Whether you're building your portfolio or learning full-stack development, this project demonstrates real-world architecture and best practices.

---

## 🛠️ Tech Stack

* **Frontend:** React.js, Tailwind CSS / CSS
* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **Authentication:** JWT (JSON Web Tokens)
* **Other Tools:** REST APIs, File Handling, Role-Based Access Control

---

## ✨ Features

### 🔐 Authentication & Authorization

* Secure user login and registration
* Role-based access control (Admin / User)
* Protected routes and API endpoints

### 📊 User Dashboard

* Personalized dashboard for each user
* View assigned tasks and progress
* Task insights and activity tracking

### 📝 Advanced Task Management

* Create, Read, Update, Delete (CRUD) tasks
* Set due dates, priorities, and descriptions
* Organize tasks efficiently

### ⚙️ Automated Status Updates

* Task status updates automatically based on checklist completion
* Reduces manual tracking effort

### 👥 Team Collaboration

* Assign tasks to multiple users
* Track individual and team progress
* Real-time collaboration features

### 📈 Priority & Progress Tracking

* Categorize tasks: Low, Medium, High
* Visual indicators for progress monitoring

### 📥 Task Reports

* Export task data for reporting and offline analysis

### 📎 Attachments Support

* Attach links/files (Google Drive, Figma, PDFs, etc.)
* Easy access to task-related resources

### 📱 Fully Responsive Design

* Optimized for desktop, tablet, and mobile devices
* Smooth and intuitive UI/UX

### 🛡️ Admin Panel

* Manage all users and tasks
* Full control over platform data
* Monitor system activity

---

## 📂 Project Structure

```
/client     → React frontend  
/server     → Node.js + Express backend  
/models     → MongoDB schemas  
/routes     → API routes  
/controllers→ Business logic  
/middleware → Auth & validation  
```

---

## ⚡ Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/suicide-machine/Task-Manager.git
cd Task-Manager
```

### 2️⃣ Install Dependencies

```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

### 3️⃣ Setup Environment Variables

Create a `.env` file in the server directory:

```env
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
PORT=5000
```

### 4️⃣ Run the Application

```bash
# Run backend
cd server
npm run dev

# Run frontend
cd client
npm start
```

---

## 🌐 API Highlights

* `POST /api/auth/register` → Register user
* `POST /api/auth/login` → Login user
* `GET /api/tasks` → Get all tasks
* `POST /api/tasks` → Create task
* `PUT /api/tasks/:id` → Update task
* `DELETE /api/tasks/:id` → Delete task

---

## 🎯 Use Cases

* Team task management systems
* Project tracking dashboards
* Productivity tools
* Portfolio-ready full-stack project

---

## 📸 Screenshots (Optional)

*Add screenshots of your UI here to showcase the project.*

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repo and submit a pull request.

---

## 📄 License

This project is licensed under the MIT License.

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub!

---
