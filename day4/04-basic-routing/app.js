const express = require('express')
const app = express()

// Middleware to parse JSON bodies
app.use(express.json())

// GET route
app.get('/users', (req, res) => {
    res.send('GET Request to the homepage')
})

// POST route
app.post('/users', (req, res) => {
    res.send('POST Request to the homepage')
})

// PUT route
app.put('/users/:id', (req, res) => {
    res.send(`PUT Request to user ${req.params.id}`)
})

// DELETE route
app.delete('/users/:id', (req, res) => {
    res.send(`DELETE Request for user ${req.params.id}`)
})

const PORT = 3000
app.listen(PORT, () => console.log('Server running on http://localhost:${PORT}'))