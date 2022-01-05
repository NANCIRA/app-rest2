const ProductModel = require('../models/products')

const getProducts = async () => {

    return ProductModel.find({})
}

const getProductById = async (_id) => {
    return ProductModel.findOne({ _id })
}

const createProduct = async (body) => {
    const newProd = new ProductModel(body)

    await newProd.save()

    return newProd
}

const updateProduct = async (_id, updateObject) => {
    return ProductModel.findOneAndUpdate({ _id }) , updateObject, {
        upsert: false,
        new: true
    }
}

const removeProduct = async (_id) => {
    return ProductModel.finOneAndDelete({ _id })
}

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    removeProduct
}   