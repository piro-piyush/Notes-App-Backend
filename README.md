# Notes App Backend

A simple backend for a Notes App built with Node.js, Express, and MongoDB. This backend provides endpoints for creating, deleting, and listing notes. It is ready for deployment on Render.com.

## Features

- **Add Note**: Adds a new note for a user.
- **Delete Note**: Deletes a specific note.
- **List Notes**: Lists all notes for a specific user.

## Project Structure

```plaintext
Notes-App-Backend/src
├── models/
│   └── Note.js           // Mongoose schema for notes
├── routes/
│   └── Route.js          // Routes for /notes endpoint
├── server.js             // Main server file
├── .env                  // Environment variables
└── README.md             // Project documentation
```

## Tech Stack

- **Node.js** and **Express**: Server and routing.
- **MongoDB**: Database to store notes.
- **Mongoose**: MongoDB object modeling for Node.js.
- **Nodemon**: For auto-restarting the server during development.
- **DotEnv**: For loading environment variables from a `.env` file.

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Express](https://www.npmjs.com/package/express)
- [Mongoose](https://www.npmjs.com/package/mongoose)
- [Nodemon](https://www.npmjs.com/package/nodemon) (optional but recommended for development)
- [DotEnv](https://www.npmjs.com/package/dotenv) (optional but recommended for development)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/piro-piyush/Notes-App-Backend.git
   cd Notes-App-Backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your MongoDB connection string:

   ```plaintext
    MONGO_USERNAME="Username"
    MONGO_PASSWORD="Password"
    MONGO_CLUSTER="your_mongodb_cluster_string"
    PORT=5000
   ```

4. Start the server with Nodemon:

   ```bash
   npm nodemon server.js
   ```

   The server will run at `http://localhost:5000`.

### API Endpoints

#### 1. Get API Status

- **URL**: `/`
- **Method**: `GET`
- **Response**: `{ message: "Congratulations, API works fine!" }`

#### 2. Add Note

- **URL**: `/notes/add`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "id": "073c5930-98db-11ef-aacf-4bc6cb857e67",
    "userId": "user123",
    "title": "Sample Note",
    "content": "This is a sample note content.",
    "dateAdded": "2024-11-02T05:25:47.208+00:00"
  }
  ```
- **Response**:
  ```json
  {
    "message": "New note created !"
  }
  ```

#### 3. Delete Note

- **URL**: `/notes/delete`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "id": "id"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Note Deleted! "
  }
  ```

#### 4. List Notes for a User

- **URL**: `/notes/list`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "userId": "piyush@gmail.com"
  }
  ```
- **Response**:
  ```json
  {
    "notes": [
      {
        "_id": "6725b7db2d80f119e515af1c",
        "id": "e4b95b60-98da-11ef-aacf-4bc6cb857e67",
        "userId": "piyush@gmail.com",
        "title": "Note 1 ",
        "content": "content 1\n",
        "dateAdded": "2024-11-02T05:25:47.208Z",
        "__v": 0
      },
      {
        "_id": "6725b8142d80f119e515af1f",
        "id": "073c5930-98db-11ef-aacf-4bc6cb857e67",
        "userId": "piyush@gmail.com",
        "title": "Note 2 ",
        "content": "content 2 ",
        "dateAdded": "2024-11-02T05:26:44.247Z",
        "__v": 0
      },
      {
        "_id": "6725bcd332c42f3fc58ca6b7",
        "id": "db8d4e40-98dd-11ef-a50b-cba1f174f161",
        "userId": "piyush@gmail.com",
        "title": "Hey I am third note",
        "content": "Third content",
        "dateAdded": "2024-11-02T05:46:59.755Z",
        "__v": 0
      }
    ]
  }
  ```

## Deployment

1. **Push your code to GitHub**.
2. Go to [Render.com](https://render.com/) and create a new **Web Service**.
3. Link the repository and set the root directory to your project folder.
4. Set environment variables in Render’s dashboard:
   - `MONGO_USERNAME`: Your MongoDB username.
   - `MONGO_PASSWORD`: Your MongoDB password.
5. Click **Deploy** and wait for the deployment to complete.

## Sample Screenshots

### Code Example

![Code Screenshot](/assets/code.png)


### API Status Test in Browser

![API Test Screenshot](/assets/api.png)

---
 
  
   
