const express = require('express');
const app = express();
const port = 8000;

app.use(express.json());

// In-memory tasks array
const tasks = [
  "Write a diary entry from the future",
  "Create a time machine from a cardboard box",
  "Plan a trip to the dinosaurs",
  "Draw a futuristic city",
  "List items to bring on a time-travel adventure"
];

// GET route for the root endpoint
app.get('/', (req, res) => {
  res.send('Hello World');
});

// POST route to add a task
app.post('/tasks', (req, res) => {
  const taskText = req.body.text;
  if (typeof taskText === 'string') {
    const trimmedTask = taskText.trim();
    if (trimmedTask.length > 0) {
      tasks.push(trimmedTask);
      const newTaskId = tasks.length - 1;
      return res.status(201).json({
        message: 'Task added successfully',
        task: {
          id: newTaskId,
          text: trimmedTask
        }
      });
    }
  }
  res.status(400).json({ error: 'Task text must be a non-empty string' });
});

// GET route to retrieve all tasks
app.get('/tasks', (req, res) => {
  res.json({ tasks });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
