# User Task API

A RESTful API built with Node.js for managing users and tasks. This API supports operations such as creating, reading, updating, and deleting users and tasks.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Atlas), Mongoose
- **Authentication**: JSON Web Tokens (JWT)
- **File Upload**: Multer, Sharp
- **Deployment**: Render

## API Endpoints

### Users

- **POST `/users`**: Register a new user
- **POST `/users/login`**: Log in a user
- **POST `/users/logout`**: Log out the current session
- **POST `/users/logoutAll`**: Log out all sessions
- **GET `/users/me`**: Fetch the current user's profile
- **PATCH `/users/me`**: Update user profile
- **DELETE `/users/me`**: Delete user account
- **POST `/users/me/avatar`**: Upload profile picture  
  _To upload an image, use `form-data` with key `avatar` (type: File)_
- **DELETE `/users/me/avatar`**: Delete profile picture
- **GET `/users/:id/avatar`**: View user profile picture

### Tasks

- **POST `/tasks`**: Create a new task
- **GET `/tasks`**: Fetch all tasks
- **GET `/tasks/:id`**: Fetch a task by ID
- **PATCH `/tasks/:id`**: Update a task by ID
- **DELETE `/tasks/:id`**: Delete a task by ID

## Getting Started

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Start the server: `npm run start`
4. API available at: `https://nod3js-usertask-api.onrender.com`

---
