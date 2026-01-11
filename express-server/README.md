# Express Server - Task Management API

## Overview
This Node.js Express server replicates the functionality of the Python FastAPI server located in `/python-server`.

## Migration Context

### Python Server Technology Stack
- **Framework**: FastAPI (modern, high-performance web framework)
- **Server**: Uvicorn (ASGI server)
- **Validation**: Pydantic (data validation using Python type hints)

### Node.js Server Technology Stack
- **Framework**: Express.js
- **Runtime**: Node.js 18
- **Validation**: TODO - Need to add validation (consider using express-validator or joi)

## API Endpoints

### Implemented
- `GET /` - Returns "Hello World" (matches Python server)
- `GET /health` - Health check endpoint (additional feature)

### To Be Implemented
The following endpoints exist in the Python server and need to be replicated:

1. **GET /tasks**
   - **Purpose**: Retrieve all tasks
   - **Python Implementation**: Returns `{"tasks": tasks}` where tasks is an array of strings
   - **Response Format**: `{ "tasks": ["task1", "task2", ...] }`
   - **Status Code**: 200

2. **POST /tasks**
   - **Purpose**: Add a new task to the list
   - **Python Implementation**: Uses Pydantic model `Task` with required field `text: str`
   - **Request Body**: `{ "text": "task description" }`
   - **Response Format**: `{ "message": "Task added successfully" }`
   - **Validation Requirements**:
     - Request body must contain `text` field
     - `text` must be a non-empty string
   - **Status Code**: 200 (Python server doesn't specify 201, but that would be REST best practice)

## Data Structure

### Task List (In-Memory)
Initial tasks array contains 5 default tasks:
```javascript
[
  "Write a diary entry from the future",
  "Create a time machine from a cardboard box",
  "Plan a trip to the dinosaurs",
  "Draw a futuristic city",
  "List items to bring on a time-travel adventure"
]
```

## Development Notes

### Key Differences from Python Server
1. **Validation**: Python uses Pydantic for automatic validation; Node.js will need manual validation or a library
2. **JSON Parsing**: FastAPI handles JSON automatically; Express requires `express.json()` middleware
3. **Type Safety**: Python has type hints; JavaScript is dynamically typed (consider adding TypeScript in the future)

### Suggested Libraries for Enhancement
- `express-validator` - For request validation similar to Pydantic
- `joi` - Schema description and validation
- `helmet` - Security middleware
- `cors` - CORS middleware if frontend is on different domain

## Running the Server

### Development
```bash
yarn start
```

### Docker
```bash
docker compose up -d node-app
```

## Port Configuration
- **Development**: 8001 (default)
- **Environment Variable**: PORT can be set to override
- **Docker**: Exposed on port 8001, mapped to host port 8001
