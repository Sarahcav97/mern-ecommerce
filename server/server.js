import express from 'express';
import path from 'path';

import cors from 'cors';
import { config } from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

const __dirname = path.resolve();

config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
	console.log(req.method, req.url);
	next();
});
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

// prod deployment
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '..', 'client/build')));
	app.get('*', function (req, res) {
		res.sendFile(path.join(__dirname, '..', 'client/build', 'index.html'));
	});
}
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 6002;
app.listen(PORT, () =>
	console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
