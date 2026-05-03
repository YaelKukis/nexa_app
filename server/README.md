# NEXA Server

## Overview

NEXA Server is a modular RESTful API built with Node.js, Express, and MySQL, designed to power the NEXA full-stack application.

The backend provides authentication, persistent database management, and complete CRUD operations across multiple resource domains including todos, posts, comments, albums, and photos.

The project follows a clean layered architecture that separates routing, business logic, and data access, resulting in a scalable and maintainable backend structure.

---

## Key Features

- Full REST API architecture
- Modular Express 5 backend
- MySQL database integration using `mysql2`
- Complete CRUD operations
- User registration and login system
- Username availability validation
- Parameterized SQL queries for SQL injection protection
- Pagination support for photo resources
- Query filtering using URL parameters
- Environment-based configuration with `.env`
- Clear separation of concerns using Routes → Controllers → Models architecture
- Consistent JSON responses and HTTP status codes

---

## Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express 5 | Backend framework |
| MySQL | Relational database |
| mysql2 | Database driver |
| dotenv | Environment configuration |
| cors | Cross-origin requests |
| nodemon | Development server |

---

## Architecture

The server is structured using a clean 3-layer architecture:

```text
Routes → Controllers → Models
````

## Folder Structure

```text
server/
├── app.js
├── server.js
├── config/
│   └── db.js
├── controllers/
├── models/
├── routes/
└── .env
```

---

## Authentication System

The server includes a custom authentication flow.

### Registration

* Creates a new user
* Validates username uniqueness
* Stores credentials in a dedicated passwords table

### Login

* Validates username and password
* Returns authenticated user data
* Passwords are never returned in API responses

### Username Availability Check

A dedicated endpoint allows real-time username validation before registration.

---

## Security Considerations

The backend includes several security-oriented design decisions:

* Parameterized SQL queries using `?` placeholders
* Environment variables for sensitive configuration
* Password data isolated in a separate database table
* Passwords never exposed in user responses
* Consistent error handling and status codes

---

## API Endpoints

### Authentication

| Method | Endpoint               | Description                 |
| ------ | ---------------------- | --------------------------- |
| POST   | `/auth/login`          | Authenticate user           |
| POST   | `/auth/register`       | Register new user           |
| POST   | `/auth/check-username` | Check username availability |

---

### Todos

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| GET    | `/todos?userId=` | Get todos by user |
| POST   | `/todos`         | Create todo       |
| PUT    | `/todos/:id`     | Update todo       |
| DELETE | `/todos/:id`     | Delete todo       |

---

### Posts

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| GET    | `/posts?userId=` | Get posts by user |
| GET    | `/posts?id=`     | Get post by ID    |
| POST   | `/posts`         | Create post       |
| PUT    | `/posts/:id`     | Update post       |
| DELETE | `/posts/:id`     | Delete post       |

---

### Comments

| Method | Endpoint            | Description          |
| ------ | ------------------- | -------------------- |
| GET    | `/comments?postId=` | Get comments by post |
| POST   | `/comments`         | Create comment       |
| PUT    | `/comments/:id`     | Update comment       |
| DELETE | `/comments/:id`     | Delete comment       |

---

### Albums

| Method | Endpoint          | Description        |
| ------ | ----------------- | ------------------ |
| GET    | `/albums`         | Get all albums     |
| GET    | `/albums?userId=` | Get albums by user |
| GET    | `/albums?id=`     | Get album by ID    |
| POST   | `/albums`         | Create album       |
| PUT    | `/albums/:id`     | Update album       |
| DELETE | `/albums/:id`     | Delete album       |

---

### Photos

| Method | Endpoint                           | Description            |
| ------ | ---------------------------------- | ---------------------- |
| GET    | `/photos`                          | Get photos             |
| GET    | `/photos?id=`                      | Get photo by ID        |
| GET    | `/photos?albumId=`                 | Get photos by album    |
| GET    | `/photos?albumId=&_start=&_limit=` | Paginated album photos |
| POST   | `/photos`                          | Create photo           |
| PUT    | `/photos/:id`                      | Update photo           |
| DELETE | `/photos/:id`                      | Delete photo           |

---

## Database Design

The backend uses MySQL as the primary relational database.

### Database Highlights

* Dedicated `userspasswords` table for credential isolation
* Parameterized queries for secure database interaction
* Shared singleton database connection
* Promise-based async database layer

---

## Error Handling

The server implements structured error handling using:

* `try/catch` blocks
* Consistent JSON error responses
* Appropriate HTTP status codes

---

## Getting Started

### Prerequisites

* Node.js
* MySQL
* npm

---

## Installation

### Clone the repository

```bash
git clone <repository-url>
```

### Navigate to the server folder

```bash
cd server
```

### Install dependencies

```bash
npm install
```

---

## Environment Variables

Create a `.env` file inside the server directory:

```env
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=your_database
PORT=5000
```

---

## Running the Server

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

---

## Engineering Highlights

* Clean modular architecture
* RESTful API design principles
* Separation of concerns
* SQL abstraction through models
* Environment-driven configuration
* Pagination support
* Consistent API response handling
* Secure database query practices
* Extensible authentication structure
* Maintainable project organization

---

## Future Improvements

* JWT authentication
* Authorization middleware
* Password hashing with bcrypt
* Request schema validation
* Rate limiting
* Unit and integration testing
* Docker support
* Connection pooling
* API documentation with Swagger

---

## Author

**Yael Kukis**  
- GitHub: https://github.com/YaelKukis
