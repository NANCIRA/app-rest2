const mongoose = require('mongoose')
const { Schema } = mongoose


const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: String
}, {
    versionKey: false,
    timestamps: true
})

const ProductModel = mongoose.model('Products', productSchema)

module.exports = ProductModel