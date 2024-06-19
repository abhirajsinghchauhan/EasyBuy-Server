const mongoose = require('mongoose')

const Product = mongoose.model('Product', {
 name: String,
 description: String,
 price: Number,
 imageURL: String,
 rating: Number
})

module.exports = Product