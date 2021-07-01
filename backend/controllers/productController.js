import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc Fetch all products
// @route GET /api/product
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})
  // throw new Error('Sum err')
  res.json(products)
})

// @desc Fetch single product
// @route GET /api/product/:id
// @access Public
const getProductsById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    res.send(product)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

export { getProducts, getProductsById }
