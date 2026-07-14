# Instagram  - React + Node.js + MongoDB

## Overview

Instagram Clone is a full-stack social media application inspired by Instagram. Users can create accounts, upload posts, follow other users, like posts, comment, and manage their profiles.

This project demonstrates modern web development practices using React, Node.js, Express, MongoDB, JWT Authentication, and Cloudinary.

## Features

### Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* Password Hashing using bcrypt

### User Features

* Edit Profile
* Upload Profile Picture
* Follow/Unfollow Users
* Search Users
* View Followers and Following

### Posts

* Create Posts
* Upload Images
* Like Posts
* Comment on Posts
* Delete Own Posts

### Feed

* Personalized Feed
* Explore Page
* Infinite Scrolling
* Responsive Design

### Future Features

* Stories
* Reels
* Real-time Chat
* Notifications
* Dark Mode

## Tech Stack

### Frontend

* React.js
* React Router
* Axios
* Tailwind CSS
* Context API

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs

### Cloud Services

* Cloudinary

## Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/instagram-clone.git
cd instagram-clone
```

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## Environment Variables

Create a `.env` file inside backend folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection

JWT_SECRET=your_secret_key

CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## Database Schema

### User

```javascript
{
  username: String,
  email: String,
  password: String,
  profilePic: String,
  followers: [ObjectId],
  following: [ObjectId]
}
```

### Post

```javascript
{
  user: ObjectId,
  image: String,
  caption: String,
  likes: [ObjectId],
  comments: []
}
```

## API Endpoints

### Authentication

* POST /api/auth/register
* POST /api/auth/login

### Users

* GET /api/users/:id
* PUT /api/users/follow/:id
* PUT /api/users/unfollow/:id

### Posts

* POST /api/posts
* GET /api/posts/feed
* PUT /api/posts/like/:id
* POST /api/posts/comment/:id

## Author

Swarup S. Chaudhari

B.Tech Artificial Intelligence

Aspiring Data Analyst & Full Stack Developer
