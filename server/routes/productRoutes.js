import express from 'express';
import getAllProducts from '../controllers/product/getAllProducts.js';
import getProductById from '../controllers/product/getProductById.js';

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);

export default router;
