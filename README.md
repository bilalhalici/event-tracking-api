# Event Tracking API (NestJS + Prisma + PostgreSQL)

A backend service for collecting and querying analytics events.  
This project demonstrates a production‑style backend architecture using **NestJS**, **Prisma**, and **PostgreSQL**.

The API supports:

- Event ingestion
- JWT authentication
- Event querying with filtering
- Pagination
- Request validation
- Interactive API documentation with Swagger

---

# Features

- **JWT Authentication** (register / login)
- **Batch Event Ingestion API**
- **Event Filtering** (by event name)
- **Pagination support**
- **DTO Validation** using class-validator
- **Prisma ORM** with PostgreSQL
- **Dockerized PostgreSQL database**
- **Swagger API Documentation**

---

# Tech Stack

- **NestJS**
- **TypeScript**
- **Prisma ORM**
- **PostgreSQL**
- **Docker**
- **JWT Authentication**
- **class-validator / class-transformer**
- **Swagger (@nestjs/swagger)**

---

# Architecture

```
Controller → Service → Prisma → PostgreSQL
```

Authentication flow:

```
Register
   ↓
Login
   ↓
JWT Token
   ↓
Protected Endpoints
```

---

# Getting Started

Clone the repository

```
git clone https://github.com/yourusername/event-tracking-api.git
cd event-tracking-api
```

Install dependencies

```
npm install
```

Run the development server

```
npm run start:dev
```

---

# Environment Variables

Create a `.env` file in the root directory:

```
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/event_tracking"
JWT_SECRET="supersecret"
```

---

# Running PostgreSQL with Docker

```
docker run --name event-tracking-postgres \
-e POSTGRES_PASSWORD=postgres \
-e POSTGRES_USER=postgres \
-e POSTGRES_DB=event_tracking \
-p 5432:5432 \
-d postgres
```

---

# Database Migration

Run Prisma migration:

```
npx prisma migrate dev
```

---

# API Endpoints

## Authentication

```
POST /auth/register
POST /auth/login
```

## Events

```
POST /events/batch
GET /events
```

Query parameters supported:

```
page
limit
eventName
```

Example request:

```
GET /events?page=1&limit=10&eventName=page_view
```

---

# Example Response

```
{
  "data": [...],
  "page": 1,
  "limit": 10,
  "count": 10,
  "total": 42
}
```

---

# Swagger API Documentation

Swagger UI is available at:

```
http://localhost:3000/api
```

This interface allows you to explore and test the API endpoints directly from your browser.

---

# License

MIT
