import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import connectDB from './config/db.js';

import products from './data/products.js';
config();
connectDB();
const app = express();

app.use(cors());

app.get('/', (req, res) => {
	res.json({ message: 'API is running' });
});
app.get('/api/products', (req, res) => {
	res.json(products);
});
app.get('/api/products/:id', (req, res) => {
	const product = find((p) => p._id === req.params.id);
	res.json(product);
});

const PORT = process.env.PORT || 5000;
app.listen(5000, () =>
	console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
