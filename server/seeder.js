import dotenv from 'dotenv';

import connectDB from './config/db.js';
import products from './data/products.js';
import users from './data/users.js';
import Order from './models/orderModel.js';
import Product from './models/productModel.js';
import User from './models/userModel.js';

dotenv.config();
await connectDB();

const importData = async () => {
	try {
		await Order.deleteMany();

		await Product.deleteMany();
		await User.deleteMany();
		console.log('deleted items');
		const createdUsers = await User.insertMany(users);
		console.log('created users');

		const adminUser = createdUsers[0];

		const sampleProducts = products.map((product) => {
			return {
				...product,
				user: adminUser._id,
			};
		});
		console.log({ sampleProducts });

		const dbProducts = await Product.insertMany(sampleProducts);
		console.log({ dbProducts });

		console.log('Data imported ');
		process.exit();
	} catch (error) {
		console.error(`${error}`);
		process.exit(1);
	}
};
const destroyData = async () => {
	try {
		await Order.deleteMany();
		await Product.deleteMany();
		await User.deleteMany();

		console.log('Data destroyed');
		process.exit();
	} catch (error) {
		console.error(`${error}`);
		process.exit(1);
	}
};

if (process.argv[2] === '-d') {
	destroyData();
} else {
	importData();
}
