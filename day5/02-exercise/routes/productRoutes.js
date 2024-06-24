const express = require('express')
const router = express.Router()
const reviewsRouter = require('./reviewRoutes')

// GET products listing
router.get('/', (req, res) => {
    console.log(req.query)
    res.send('GET request for listing all products' +
        (req.query.price_range ? " Filter for price between " + req.query.price_range : "") +
        (req.query.sortBy ? ` Sort Products by ${req.query.sortBy} ${req.query.sortOrder}` : "") 
    )
 // curl "http://localhost:3000/products?price_range=100-200&sortBy=price&sortOrder=asc" 
})

// POST request to add a new product
router.post('/', (req, res) => {
    res.send('POST request to add a new product.')
})

// PUT request to update an existing product
router.put('/:productId', (req, res) => {
    res.send(`PUT request to update product ${req.params.productId}`)
})

// DELETE request to delete an existing product
router.delete('/:productId', (req, res) => {
    res.send(`DELETE request to remove product ${req.params.productId}`)
})

router.use('/:productId/reviews', reviewsRouter)
module.exports = router