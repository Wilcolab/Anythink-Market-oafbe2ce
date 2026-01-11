# Anythink Market - Task Management API

This project contains a task management API implemented in two different technology stacks:
- **Python Server**: FastAPI implementation
- **Node.js Server**: Express.js implementation

Both servers provide identical functionality for managing a task list.

## Project Structure

```
.
├── python-server/           # FastAPI (Python) server
│   ├── src/
│   │   ├── main.py         # FastAPI server implementation
│   │   └── __init__.py     # Python package marker
│   ├── Dockerfile          # Docker configuration for Python server
│   └── requirements.txt    # Python dependencies (fastapi, uvicorn)
│
├── express-server/          # Express.js (Node.js) server
│   ├── index.js            # Express server implementation
│   ├── package.json        # Node.js dependencies
│   ├── Dockerfile          # Docker configuration for Node.js server
│   └── README.md           # Detailed Express server documentation
│
└── docker-compose.yml      # Multi-container Docker configuration
```

## Getting Started

### Running with Docker Compose (Recommended)

Build and start both servers using Docker:

```shell
docker compose up -d --build
```

This command will:
- Build Docker images for both servers
- Start both containers in detached mode
- Python server: http://localhost:8000
- Node.js server: http://localhost:8001

### Running Individually

**Python Server:**
```shell
cd python-server
pip install -r requirements.txt
uvicorn src.main:app --reload --host 0.0.0.0 --port 8000
```

**Node.js Server:**
```shell
cd express-server
yarn install
yarn start
```

## API Routes

Both servers provide the following API endpoints:

### GET /
Returns a simple "Hello World" message.

**Response:**
```
Hello World
```

### GET /tasks
Retrieves the complete task list.

**Response:**
```json
{
  "tasks": [
    "Write a diary entry from the future",
    "Create a time machine from a cardboard box",
    "Plan a trip to the dinosaurs",
    "Draw a futuristic city",
    "List items to bring on a time-travel adventure"
  ]
}
```

### POST /tasks
Adds a new task to the task list.

**Request Body:**
```json
{
  "text": "Your new task description"
}
```

**Response:**
```json
{
  "message": "Task added successfully"
}
```

## Technology Stack

### Python Server (Port 8000)
- **Framework**: FastAPI
- **Server**: Uvicorn (ASGI)
- **Validation**: Pydantic
- **Features**: Automatic API documentation, type hints, async support

### Node.js Server (Port 8001)
- **Framework**: Express.js
- **Runtime**: Node.js 18
- **Package Manager**: Yarn
- **Features**: Middleware support, flexible routing, manual validation

## Development Notes

The Node.js server was migrated from the Python server and provides identical functionality. Key differences include:

- **Validation**: Python uses Pydantic models; Node.js uses manual validation
- **Type Safety**: Python has built-in type hints; Node.js is dynamically typed
- **API Docs**: FastAPI provides automatic OpenAPI docs; Express requires manual documentation

For detailed information about the Express server implementation, see [express-server/README.md](express-server/README.md).

## Docker Configuration

Both services are configured in `docker-compose.yml`:
- Python service: `python-app` on port 8000
- Node.js service: `node-app` on port 8001
- Hot-reload enabled via volume mounts
- Isolated networks for security
