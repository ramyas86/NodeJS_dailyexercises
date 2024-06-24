const express = require('express')
const app = express()
const productsRouter = require('./routes/productRoutes')

app.use('/products', productsRouter)

app.get('/', (req, res) => {
    res.send('Exampls of Products router. Try for /products')
})

const PORT = 3000
app.listen(PORT, () => console.log('Server running on http://localhost:${PORT}'))