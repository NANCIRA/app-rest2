const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const {productsController } = require('../controllers')
const { getProducts, getProductByID, createProduct, updateProduct, removeProduct } = productsController

router.get('/', async (req, res) => {
    const products = await getProducts()
    res.send(products)
})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    const product = await getProductById(id)

    //para no hacer product === null, product === undefined, typeof product ...
    if (!product) {
        res.status(404)
        return res.send({
          message: 'Product: ${id} not found'  
        })
    }

    return res. send(product)
    
})

router.post('/', async (req,res) => {
    const body = req.body

    // ValidationError
try {
    const newProduct = await createProduct(body)
    res.status(201)

    res.send(newProduct)
} catch (err) {
    console.err(err)
    if (err instanceof mongoose.Error.ValidationError) {
        res.status(4000)
        return res.send({
            message: 'Error de validacion',
            reason: err.message
        })
    }
    res.status(500)
    return res.send({
        error: err.message
    })
}

})

router.put('/:id', async (req, res) => {
    const { id } = req.params
    const body = req.body

    const product = await updateProduct(id, body)

    if (!product) {
        res.status(404)
        return res.send({
            message: 'Product $(id) not found'
        })
    }

    res.send(products)
    })

    router.deleted('/:id', async (req, res) => {
        const { id } = req.params

        const result = await removeProducts(id)

        res.send(result)
    })


    module.exports = router