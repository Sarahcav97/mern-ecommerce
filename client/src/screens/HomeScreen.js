import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Product from '../components/Product';
import { useProduct } from '../context/ProductContext';
const HomeScreen = () => {
	const { error, loading, productList, fetchProductList } = useProduct();
	useEffect(() => {
		fetchProductList();
	}, []);
	return (
		<>
			<h1>Latest Products</h1>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<Row>
					{productList &&
						productList.map((product) => (
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
			)}
		</>
	);
};
export default HomeScreen;
