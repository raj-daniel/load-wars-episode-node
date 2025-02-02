# Load Wars Episode Node

## Description

This project is an Express server that connects to PostgreSQL and Redis databases. The server is dockerized and can be run easily using Docker Compose.

## Prerequisites
- Docker
- Docker Compose

## Setup

### 1. Clone the Repository

Clone the project repository to your local machine:

```bash
git clone https://github.com/yourusername/load-wars-episode-node.git
cd load-wars-episode-node
```

### 2. Build and Run with Docker Compose

Build and start the Docker containers:

```bash
docker-compose up --build
```

### 3. Stop the Docker Compose Application

To stop the application, run:

```bash
docker-compose down
```

Server Details
- URL: http://localhost:3000/endpoint
- Port: 3000

Environment Variables

Ensure the following environment variables are configured:
-	DATABASE_URL: Connection string for PostgreSQL
-	REDIS_URL: Connection string for Redis

## License

This project is licensed under the ISC License.