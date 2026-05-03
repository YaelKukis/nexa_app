
# NEXA Client – React Frontend

## Overview

The NEXA client is a React-based frontend application responsible for user interaction, routing, state management, and communication with the backend REST API.

The frontend was designed with scalability and maintainability in mind, using reusable logic patterns, modular components, protected routing, and centralized API management.

It communicates with a real Express + MySQL backend connected to a cloud-hosted Aiven database.

---

## Live Application

https://nexa-fullstack-dashboard.vercel.app/

---

## Frontend Responsibilities

- User authentication
- Protected routes
- Todos management
- Posts and comments management
- Albums and photos management
- Incremental image loading
- Session persistence
- API communication
- Notification handling

---

## Frontend Architecture

The frontend follows a modular component-based architecture.

```
src/
│
├── pages/
├── components/
├── hooks/
├── context/
├── API/
└── styles/
```


---

## State Management

The application uses:

* Context API for global state
* Custom hooks for reusable business logic
* Local component state for UI interactions

This structure keeps the application scalable while avoiding unnecessary complexity.

---

## Reusable Logic

Reusable logic is abstracted into custom hooks.

Examples:

* `useItemActions` → generic CRUD operations
* `useToolBar` → filtering and sorting logic

This improves:

* Code reuse
* Maintainability
* Scalability
* Cleaner component structure

---

## Routing

The client implements:

* Route-based page architecture
* Nested relational routing
* Protected authenticated routes

Examples:

* Posts → Comments
* Albums → Photos

---

## Performance Features

* Incremental data loading
* Optimized rendering patterns
* Centralized API calls
* Lightweight reusable state logic

---

## Frontend Technologies

* React
* React Router DOM
* Context API
* Axios
* Vite
* CSS

---

## API Communication

The frontend communicates with:

* Express backend server
* MySQL cloud database through REST endpoints

Features include:

* CRUD requests
* Authentication requests
* Dynamic filtering
* Pagination support

---

## Running Locally

```bash
npm install
npm run dev
```

Runs on:

```text
http://localhost:5173
```

---

## Engineering Highlights

* Modular scalable architecture
* Reusable hooks and abstractions
* Context-based global state
* Protected routing implementation
* Dynamic relational navigation
* Cloud-connected backend integration
* Separation of UI and business logic

---

## Project Goal

The frontend was built to simulate a modern scalable React application integrated with a production-style backend infrastructure and relational cloud database.

---


## Author

**Yael Kukis**  
- GitHub: https://github.com/YaelKukis


