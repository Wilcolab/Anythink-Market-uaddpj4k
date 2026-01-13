# Anythink Market - Multi-Server Project

This project contains a FastAPI server (Python) and an Express server (Node.js) for managing a task list. Both servers run simultaneously via Docker Compose.

## Project Structure

The project has the following files and directories:

**Python Server:**
- `python-server/src/main.py`: FastAPI server implementation with task management routes.
- `python-server/src/__init__.py`: Python package marker.
- `python-server/requirements.txt`: Python dependencies (FastAPI, Uvicorn, etc.).
- `python-server/Dockerfile`: Docker configuration for the Python server (port 8000).

**Node.js Server:**
- `express-server/src/app.js`: Express server implementation with task management routes.
- `express-server/package.json`: Node.js dependencies (Express, etc.).
- `express-server/Dockerfile`: Docker configuration for the Node server (port 8001).

**Docker:**
- `docker-compose.yml`: Multi-container configuration for running both services.

## Getting Started

To run both servers using Docker Compose, follow these steps:

```shell
docker compose up --build
```

This command will build Docker images for both servers and start the containers.

- **Python Server**: Running on `http://localhost:8000`
- **Node.js Server**: Running on `http://localhost:8001`

## API Routes

Both servers provide identical API routes:

- `GET /`: Returns "Hello World"
- `POST /tasks`: Adds a task to the task list (request body: `{ "text": "task description" }`)
- `GET /tasks`: Retrieves the complete task list
