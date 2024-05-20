import asyncHandler from 'express-async-handler';
import Product from '../../models/productModel.js';

const getAllProducts = asyncHandler(async (req, res) => {
	const products = await Product.find({});

	res.json(products);
	throw new Error('Some error');
});
export default getAllProducts;
