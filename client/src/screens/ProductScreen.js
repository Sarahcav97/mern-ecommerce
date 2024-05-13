import React, { useEffect, useState } from 'react';
import {
	Button,
	Card,
	Col,
	Form,
	Image,
	ListGroup,
	Row,
} from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Rating from '../components/Rating';
import { useProduct } from '../context/ProductContext';
import { useAlert } from '../context/AlertContext';

const ProductScreen = ({}) => {
	const [qty, setQty] = useState(1);
	const { setAlert } = useAlert();
	const { fetchProductDetails, loading, error, productDetails } = useProduct();
	const navigate = useNavigate();
	const { id } = useParams();

	useEffect(() => {
		fetchProductDetails(id);
	}, []);

	const addToCartHandler = () => {
		navigate(`/cart/${id}?qty=${qty}`);
	};
	return (
		<>
			<Link
				className='btn btn-light my-3'
				to='/'
			>
				Go Back
			</Link>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<Row>
					<Col md={6}>
						<Image
							src={productDetails.image}
							alt={productDetails.name}
							fluid
						></Image>
					</Col>
					<Col md={3}>
						<ListGroup variant='flush'>
							<ListGroup.Item>
								<h3>{productDetails.name}</h3>
							</ListGroup.Item>
							<ListGroup.Item>
								<Rating
									value={productDetails.rating}
									text={`${productDetails.numReviews} reviews`}
								/>
							</ListGroup.Item>
							<ListGroup.Item> Price: ${productDetails.price}</ListGroup.Item>
							<ListGroup.Item>
								{' '}
								Description: {productDetails.description}
							</ListGroup.Item>
						</ListGroup>
					</Col>
					<Col md={3}>
						<Card>
							<ListGroup variant='flush'>
								<ListGroup.Item>
									<Row>
										<Col>Price:</Col>
										<Col>
											<strong>${productDetails.price}</strong>
										</Col>
									</Row>
								</ListGroup.Item>
								<ListGroup.Item>
									<Row>
										<Col>Status:</Col>
										<Col>
											{productDetails.countInStock > 0
												? 'In Stock'
												: 'Out of Stock'}
										</Col>
									</Row>
								</ListGroup.Item>
								{productDetails.countInStock > 0 && (
									<ListGroup.Item>
										<Row>
											<Col>Qty</Col>
											<Col>
												<Form.Control
													as='select'
													value={qty}
													onChange={(e) => setQty(e.target.value)}
												>
													{[...Array(productDetails.countInStock).keys()].map(
														(x) => (
															<option
																key={x + 1}
																value={x + 1}
															>
																{x + 1}
															</option>
														)
													)}
												</Form.Control>
											</Col>
										</Row>
									</ListGroup.Item>
								)}

								<ListGroup.Item>
									<Button
										onClick={addToCartHandler}
										className='btn-block'
										type='button'
										disabled={productDetails.countInStock === 0}
									>
										{productDetails.countInStock > 0
											? 'Add To Cart'
											: 'Out of Stock'}
									</Button>
								</ListGroup.Item>
							</ListGroup>
						</Card>
					</Col>
				</Row>
			)}
		</>
	);
};
export default ProductScreen;
