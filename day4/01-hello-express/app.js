const express = require('express')
const app = express()

app.get('/hello/:name', (req, res) => {
    const name = req.params.name
    res.send(`Hello, ${name}!`)
})

const PORT = 3000
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))