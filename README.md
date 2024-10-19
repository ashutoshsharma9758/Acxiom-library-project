# Library Management System

This project is a **Library Management System** built using the MERN (MongoDB, Express, React, Node.js) stack. It supports user authentication and allows users to manage books, perform transactions like issuing and returning books, and more. The system includes two types of users: Admin and User.

## Features

### Admin
- Add, update, or delete books from the library.
- View and manage all book transactions.
- Access reports related to transactions and books.

### User
- View the list of available books.
- Issue and return books.
- Pay fines for overdue books.
- Access transaction history.

## Prerequisites

Before running the project locally, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Git](https://git-scm.com/)

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/ashutoshsharma9758/library-management-system.git
```
### 1. Backend Setup
#### Navigate to the backend directory and install dependencies:
```bash
cd Backend
npm install
```
### 1. Backend Setup
```bash
cd Backend
npm install
```
### 3. Frontend Setup
```bash
cd Frontend
npm install
```
### 4. Running the Application
#### Backend Server
##### Start the Backend server in the backend directory:
```bash
node app.js
```
#### Frontend Server
##### Start the React Frontend application in the frontend directory:
```bash
npm run dev
```

## API Endpoints

### Authentication

- **POST** `http://localhost:8080/register`  
  - **Description**: Register a new user.
- **POST** `http://localhost:8080/login`  
  - **Description**: Log in with email and password.

 ### Book Management

- **POST** `http://localhost:8080/books`  
  - **Description**: Add a new book (Admin only).
- **GET** `http://localhost:8080/books`  
  - **Description**: View all available books.
- **PUT** `http://localhost:8080/books/:id`  
  - **Description**: Update book details (Admin only).
- **DELETE** `http://localhost:8080/books/:id`  
  - **Description**: Delete a book (Admin only).

## Folder Structure

```plaintext

├── backend
│   ├── config         # Database and other configurations
│   ├── models         # MongoDB models
│   ├── routes         # API endpoints
│   ├── middlewares    # Authentication middleware
│   └── app.js         # Main backend file
├── frontend
│   ├── public         # Public assets
│   ├── src
│   │   ├── components # React components
│   │   ├── App.js     # Main App component
│   │   └── index.js   # Entry point
├── README.md
└── .env               # Environment variables

```
