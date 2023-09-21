# CRUD API Project

This is a simple CRUD (Create, Read, Update, Delete) API project built using Node.js , Express and Sequelize with Yup  validation .

## Folder Structure

- **config**: Contains configuration files, including database configuration (`dbConfig.js`).

- **controllers**: Contains route handlers and controller functions for each endpoint (`todoController.js`).

- **middlewares**: Contains middleware functions, including request validation (`validateTodo.js`).

- **models**: Contains Sequelize model definitions (`todoModel.js`).

- **routes**: Contains route definitions using Express.js (`todosRouter.js`).

- **schemas**: Contains validation schemas using the `yup` library (`todoSchema.js`).

- **server.js**: Entry point for your Node.js server.

- **package.json**: Project dependencies and scripts.

## Getting Started

### Prerequisites

Before running the project, make sure you have the following installed:

- Node.js
- PostgreSQL

### Installation

 1. Clone the repository:
```
  git clone https://github.com/mountblue-assignment/EXRESS_CRUD_API.git
```
 2. Navigate to the project directory:
```
 cd EXRESS_CRUD_API
``` 
3. Install dependencies :
```
npm install`
```
4.  Configure the database connection by updating the `config/dbConfig.js`  file with your PostgreSQL credentials.

5.  Start the server:
```
 npm start
  ```
 So the  Server will run on `http://localhost:8080` 

## Endpoints

-   **POST** `/api/todos`: Create a new todo.
-   **GET** `/api/todos`: Get a list of all todos.
-   **GET** `/api/todos/:id`: Get a single todo by ID.
-   **PUT** `/api/todos/:id`: Update a todo by ID.
-   **DELETE** `/api/todos/:id`: Delete a todo by ID.

## File Relationships

-   **server.js**: Entry point for the server. Initializes Express.js and sets up routes.
    
-   **config/dbConfig.js**: It  does  Database configuration using Sequelize.
    
-   **controllers/todoController.js**: Controller functions for handling CRUD operations.
    
 -   **models/todoModel.js**: Sequelize model definition for the Todo table.
    
-   **routes/todosRouter.js**: Defines API routes using Express.js and associates them with controller functions.

-   **middlewares/validateTodo.js**: Middleware for request body validation using `yup`.
    
    
-   **schemas/todoSchema.js**: Validation schema for todo data using `yup`.
   
   ## Database

This project uses PostgreSQL as the database.  Database tables are automatically created when the server starts for the first time and If the table exist It doesn't create new table .

## Validation

In this project, the validation of API requests is handled with the help of the `yup` library. Before processing incoming requests, the API validates the request data to ensure data integrity and security . 
