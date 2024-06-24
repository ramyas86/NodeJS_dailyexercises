const express = require('express')
const app = express()
const usersRouter = require('./routes/usersRouter')

app.use('/users', usersRouter)

app.get('/', (req, res) => {
    res.send('Example for nested routes')
})

const PORT = 3000
app.listen(PORT, () => console.log('Server running on http://localhost:${PORT}'))