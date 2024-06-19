const Product = require('../models/products.js')

const getProducts = async (req, res) => {
  try {
    const products = await Product.find()
    res.json({
      status: 'SUCCESS',
      data: products
    })
  } catch (error) {
    res.status(500).json({
      status: 'FAILED',
      message: 'Something went wrong'
    })
  }
}

const createProduct = async (req, res) => {
  try {
    const { name, description, imageURL, price, rating } = req.body
    await Product.create({ name, description, imageURL, price, rating })
    res.json({
      status: 'SUCCESS',
      message: 'Product created successfully'
    })
  } catch (error) {
    res.status(500).json({
      status: 'FAILED',
      message: 'Something went wrong'
    })
  }
}

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params
    const { name, description, imageURL, price, rating } = req.body
    await Product.findByIdAndUpdate(id, { name, description, imageURL, price, rating })
    res.json({
      status: 'SUCCESS',
      message: 'Product updated successfully'
    })
  } catch (error) {
    res.status(500).json({
      status: 'FAILED',
      message: 'Something went wrong'
    })
  }
}

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params
    await Product.findByIdAndDelete(id)
    res.json({
      status: 'SUCCESS',
      message: 'Product deleted successfully'
    })
  } catch (error) {
    res.status(500).json({
      status: 'FAILED',
      message: 'Something went wrong'
    })
  }
}

module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct
}