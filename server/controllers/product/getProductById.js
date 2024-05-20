import asyncHandler from 'express-async-handler';
import Product from '../../models/productModel.js';

const getProductById = asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id);
	if (product) {
		res.json(product);
	} else {
		res.json(404);
		throw new Error('Product not found');
	}
});

export default getProductById;
