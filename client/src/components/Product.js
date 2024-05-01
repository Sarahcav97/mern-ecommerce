import React from 'react';
import { Card } from 'react-bootstrap';

const Product = () => {
	return (
		<Card className='my-3 p-3 rounded'>
			<a href='/product/${product}'></a>
		</Card>
	);
};
export default Product;
