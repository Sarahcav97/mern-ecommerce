import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

config();
connectDB();
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
	res.json({ message: 'API is running' });
});
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(5000, () =>
	console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
