// server.cjs
const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 4000

app.use(
    cors({
        origin: 'http://localhost:5173',
    }),
)
app.use(express.json())

let todos = [
    { id: 1, title: 'Learn React basics', completed: true },
    { id: 2, title: 'Build Todo app UI', completed: false },
    { id: 3, title: 'Connect to mock API', completed: false },
]
let nextId = 4

// GET /todos - list all todos
app.get('/todos', (req, res) => {
    res.json(todos)
})

// POST /todos - create a new todo
// Body: { title: string }
app.post('/todos', (req, res) => {
    const { title } = req.body

    if (typeof title !== 'string' || !title.trim()) {
        return res.status(400).json({ error: 'Title is required' })
    }

    const newTodo = {
        id: nextId++,
        title: title.trim(),
        completed: false,
    }

    todos.push(newTodo)
    res.status(201).json(newTodo)
})

// PATCH /todos/:id - update a todo (e.g. toggle completed)
// Body can include: { title?: string, completed?: boolean }
app.patch('/todos/:id', (req, res) => {
    const id = Number(req.params.id)
    const todo = todos.find((t) => t.id === id)

    if (!todo) {
        return res.status(404).json({ error: 'Todo not found' })
    }

    const { title, completed } = req.body

    if (typeof title === 'string') {
        todo.title = title.trim()
    }

    if (typeof completed === 'boolean') {
        todo.completed = completed
    }

    res.json(todo)
})

// DELETE /todos/:id - delete a todo
app.delete('/todos/:id', (req, res) => {
    const id = Number(req.params.id)
    const existingLength = todos.length

    todos = todos.filter((t) => t.id !== id)

    if (todos.length === existingLength) {
        return res.status(404).json({ error: 'Todo not found' })
    }

    res.status(204).send()
})

app.listen(PORT, () => {
    console.log(`Mock Todo API running on http://localhost:${PORT}`)
})
