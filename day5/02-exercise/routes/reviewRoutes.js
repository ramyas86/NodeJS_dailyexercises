const express = require('express')
const router = express.Router({ mergeParams: true })

// GET reviews of product
router.get('/', (req, res) => {
    console.log(req.query);
    res.send(`GET reviews for product id ${req.params.productId}`)
})

// POST request to add a new review for a product
router.post('/', (req, res) => {
    res.send(`POST a new review for the product id ${req.params.productId}`)
})

// DELETE request to delete an existing review of a product
router.delete('/:id', (req, res) => {
    res.send(`DELETE request to remove review ${req.params.id} of product id ${req.params.productId}`)
})

module.exports = router