# 📝 Live Blog Backend API

A backend API built using **Node.js, Express.js, and MongoDB (Mongoose)** that allows users to create, fetch, and delete blog posts. Data is stored persistently in **MongoDB Atlas** and APIs are tested using Postman.

## 🚀 Live Demo
### 🔗 [LIVE ON](https://the-data-store.onrender.com)

## 📌 Features
- Create blog posts (POST)
- Fetch all blog posts (GET)
- Fetch single post by ID
- Delete blog posts (DELETE)
- MongoDB Atlas cloud database integration
- Modular folder structure (routes, models, config)

## 🛠️ Tech Stack
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Postman (API Testing)

## 📂 Project Structure
```env
project/
├── models/
│ └── Post.js
├── routes/
│ └── blogRoutes.js
├── db.js
├── server.js
├── .env
├── .gitignore
```

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/your-repo-name.git
```

### 2. Install dependencies
```bash
npm install
```

### 3. Create .env file
```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```
### 4. Run the server
```bash
npm start
``` 
or 
```bash
npm run dev
```

## 🔗 API Endpoints
➤ Create Post
- POST /posts

➤ Get All Posts
- GET /posts

➤ Get Post by ID
- GET /posts/:id

➤ Delete Post
- DELETE /posts/:id

## 📬 Testing

All endpoints are tested using Postman. You can send requests with JSON body to verify functionality.

## 📌 Notes

- MongoDB credentials are stored securely using .env
- .env is ignored via .gitignore for security
- Designed with scalable modular structure
