import React from 'react';
import { useState, useEffect } from 'react';
import Product from '../components/Product';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import client from '../api/client';

const HomeScreen = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		const fetchProducts = async () => {
			const { data } = await client.get('/products');
			setProducts(data);
		};
		fetchProducts();
	}, []);
	return (
		<>
			<h1>Latest Products</h1>
			<Row>
				{products &&
					products.map((product) => (
						<Col
							key={product._id}
							sm={12}
							md={6}
							lg={4}
							xl={3}
						>
							<Product product={product} />
						</Col>
					))}
			</Row>
		</>
	);
};
export default HomeScreen;
