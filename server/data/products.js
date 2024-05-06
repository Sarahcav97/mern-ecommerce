const AIRPOD_IMG = '../images/airpods.jpg';
const ALEXA_IMG = '../images/alexa.jpg';
const CAMERA_IMG = '../images/camera.jpg';
const MOUSE_IMG = '../images/mouse.jpg';
const PHONE_IMG = '../images/phone.jpg';
const PLAYSTATION_IMG = '../images/playstation.jpg';
const SAMPLE_IMG = '../images/sample.jpg';

const products = [
	{
		_id: '1',
		name: 'Apple Airpods',
		image: AIRPOD_IMG,
		description: 'Bluetooth headphones with charging case. ',
		brand: 'Apple',
		category: 'Electronics',
		price: 89.99,
		countInStock: 3,
		rating: 4.5,
		numReviews: 4,
	},
	{
		_id: '2',
		name: 'Amazon Alexa',
		image: ALEXA_IMG,
		description: 'Smart speaker',
		brand: 'Amazon',
		category: 'Electronics',
		price: 39.99,
		countInStock: 5,
		rating: 4.0,
		numReviews: 4,
	},
	{
		_id: '3',
		name: 'Canon EOS 80D',
		image: CAMERA_IMG,
		description: 'DSLR Camera',
		brand: 'Canon',
		category: 'Electronics',
		price: 929.99,
		countInStock: 2,
		rating: 3.5,
		numReviews: 3,
	},
	{
		_id: '4',
		name: 'Logitech G-Series Mouse',
		image: MOUSE_IMG,
		description: 'Gaming Mouse',
		brand: 'Logitech',
		category: 'Electronics',
		price: 49.99,
		countInStock: 7,
		rating: 4.5,
		numReviews: 3,
	},
	{
		_id: '5',
		name: 'iPhone 11 Pro',
		image: PHONE_IMG,
		description: 'Apple smartphone',
		brand: 'Apple',
		category: 'Electronics',
		price: 599.99,
		countInStock: 0,
		rating: 5.0,
		numReviews: 3,
	},
	{
		_id: '6',
		name: 'PlayStation 4 Pro',
		image: PLAYSTATION_IMG,
		description: 'Sony gaming console',
		brand: 'Sony',
		category: 'Electronics',
		price: 399.99,
		countInStock: 11,
		rating: 4.5,
		numReviews: 3,
	},
];

module.exports = products;
