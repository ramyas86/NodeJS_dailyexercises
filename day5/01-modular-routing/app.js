const express = require('express')
const app = express()

// Import the user routes
const userRoutes = require('./routes/userRoutes')

// Use the user routes for the '/users' path
app.use('/users', userRoutes)

const PORT = 3000
app.listen(PORT, () => console.log('Server running on http://localhost:${PORT}'))