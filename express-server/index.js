/**
 * Express Server for Task Management API
 * 
 * This server replicates the functionality of the Python FastAPI server.
 * The Python server uses FastAPI with Pydantic models for validation.
 * 
 * Original Python Server Features:
 * - GET /tasks: Returns a list of tasks (array of strings)
 * - POST /tasks: Adds a new task to the list (expects JSON body with 'text' field)
 * - GET /: Returns a simple "Hello World" message
 * 
 * Python Dependencies: fastapi, uvicorn, pydantic
 * Node.js Dependencies: express (for routing and middleware)
 */

const express = require('express');
const app = express();
const port = process.env.PORT || 8001;

// Middleware: Parse incoming JSON request bodies
// This is equivalent to FastAPI's automatic JSON parsing
app.use(express.json());

// Data Store: In-memory task list
// Initial tasks match the Python server's default task list
// TODO: Consider adding input validation similar to Pydantic's BaseModel
const tasks = [
    "Write a diary entry from the future",
    "Create a time machine from a cardboard box",
    "Plan a trip to the dinosaurs",
    "Draw a futuristic city",
    "List items to bring on a time-travel adventure"
];

/**
 * GET /
 * Returns a simple greeting message
 * Python equivalent: @app.get("/") -> return "Hello World"
 */
app.get('/', (req, res) => {
    res.send('Hello World');
});

/**
 * Health check endpoint
 * This is an additional endpoint not in the Python server
 */
app.get('/health', (req, res) => {
    res.json({ status: 'healthy' });
});

/**
 * GET /tasks
 * Returns the list of all tasks
 * Python equivalent: @app.get("/tasks") -> return {"tasks": tasks}
 * Response format: { "tasks": ["task1", "task2", ...] }
 */
// TODO: Implement GET /tasks endpoint

/**
 * POST /tasks
 * Adds a new task to the list
 * Python equivalent: @app.post("/tasks") with Task(BaseModel) having 'text' field
 * Expected request body: { "text": "task description" }
 * Response format: { "message": "Task added successfully" }
 * 
 * Note: Python server uses Pydantic for validation, ensuring 'text' field exists
 * TODO: Add validation to ensure request body contains 'text' field
 */
// TODO: Implement POST /tasks endpoint

// Start the server
app.listen(port, '0.0.0.0', () => {
    console.log(`Express server listening on port ${port}`);
});
