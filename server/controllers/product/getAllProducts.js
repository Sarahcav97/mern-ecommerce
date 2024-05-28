import asyncHandler from 'express-async-handler';
import Product from '../../models/productModel.js';

const getAllProducts = asyncHandler(async (req, res) => {
	try {
		const products = await Product.find({});

		res.json(products);
	} catch (error) {
		res.status(500).json({ error });
	}
});
export default getAllProducts;
