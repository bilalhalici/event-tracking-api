# Event Tracking API (NestJS + Prisma + PostgreSQL)

A backend service for collecting and querying analytics events.

Modern SaaS and e‑commerce products collect user interaction events
(page views, product clicks, purchases, etc.) for analytics and marketing automation.

This project demonstrates how a backend service can ingest, store and query these events using a modern backend stack.

---

# Why This Project Exists

Analytics systems rely on collecting large volumes of interaction events. These events must be:

- ingested efficiently
- stored reliably
- queried with filtering and pagination

This project demonstrates a simplified version of an **event ingestion backend** that powers analytics and product insights.

---

# Key Features

- **JWT Authentication** (register / login)
- **Batch Event Ingestion API** for efficient event collection
- **Event Filtering** (by event name)
- **Pagination support**
- **DTO Validation** using class-validator
- **Prisma ORM** with PostgreSQL
- **Dockerized PostgreSQL database**
- **Swagger API Documentation**

---

# Batch Event Ingestion

The API supports **batch event ingestion**, allowing clients to send multiple events in a single request for better performance.

Instead of sending each event individually, clients can send many events at once.

---

# Example Event Ingestion

POST /events/batch

```
{
  "events": [
    {
      "eventName": "page_view",
      "properties": {
        "page": "/pricing"
      }
    },
    {
      "eventName": "button_click",
      "properties": {
        "button": "buy-now"
      }
    }
  ]
}
```

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

# API Endpoints

| Method | Endpoint       | Description                              |
| ------ | -------------- | ---------------------------------------- |
| POST   | /auth/register | Create a new user                        |
| POST   | /auth/login    | Authenticate user and return JWT         |
| POST   | /events/batch  | Ingest multiple events                   |
| GET    | /events        | Query events with pagination and filters |

Supported query parameters:

```
page
limit
eventName
```

Example:

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

# Local Development Setup

## Clone the repository

```
git clone https://github.com/yourusername/event-tracking-api.git
cd event-tracking-api
```

## Install dependencies

```
npm install
```

## Create environment variables

Create a `.env` file in the project root:

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

# Run Database Migration

```
npx prisma migrate dev
```

---

# Start the Server

```
npm run start:dev
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
