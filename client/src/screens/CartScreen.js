import React, { useEffect } from 'react';
import {
	Button,
	Card,
	Col,
	FormControl,
	Image,
	ListGroup,
	ListGroupItem,
	Row,
} from 'react-bootstrap';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import Message from '../components/Message';
import { useProduct } from '../context/ProductContext';

const CartScreen = () => {
	const { id } = useParams();
	const location = useLocation();
	const { addToCart, cartItems, setCartItems, getCartItems, productDetails } =
		useProduct();
	const productId = id;
	const qty = location.search ? Number(location.search.split('=')[1]) : 1;

	const navigate = useNavigate();

	useEffect(() => {
		if (productId) {
			addToCart(productId, qty);
		}
	}, [productId, qty]);

	const removeFromCartHandler = (id) => {
		console.log('remove');
		const updatedCartItems = cartItems.filter((item) => item._id !== id);
		setCartItems(updatedCartItems);
		localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
	};

	const checkoutHandler = () => {
		navigate('/login?redirect=shipping');
	};

	return (
		<Row>
			<Col md={8}>
				<h1>Shopping Cart</h1>
				{getCartItems().length === 0 ? (
					<Message>
						Your cart is empty.
						<Link to='/'>Go Back</Link>
					</Message>
				) : (
					<ListGroup>
						{getCartItems().map((item, i) => (
							<ListGroupItem key={`${item._id}-${i}`}>
								<Row>
									<Col md={2}>
										<Image
											src={item.image}
											alt={item.name}
											fluid
											rounded
										/>
									</Col>
									<Col md={3}>
										<Link to={`/product/${item._id}`}>{item.name}</Link>
									</Col>
									<Col md={2}>${item.price}</Col>
									<Col md={2}>
										<FormControl
											as='select'
											value={item.qty}
											onChange={(e) =>
												addToCart(item._id, parseInt(e.target.value))
											}
										>
											{[...Array(item.countInStock).keys()].map((x) => (
												<option
													key={x + 1}
													value={x + 1}
												>
													{x + 1}
												</option>
											))}
										</FormControl>
									</Col>
									<Col md={2}>
										<Button
											type='button'
											variant='light'
											onClick={() => removeFromCartHandler(item._id)}
										>
											<i className='fas fa-trash'></i>
										</Button>
									</Col>
								</Row>
							</ListGroupItem>
						))}
					</ListGroup>
				)}
			</Col>
			<Col md={4}>
				<Card>
					<ListGroup variant='flush'>
						<ListGroupItem>
							<h2>
								Subtotal (
								{cartItems.reduce(
									(acc, currentItem) => acc + currentItem.qty,
									0
								)}
								) items
							</h2>
							$
							{cartItems
								.reduce(
									(acc, currentItem) =>
										acc + currentItem.qty * currentItem.price,
									0
								)
								.toFixed(2)}
						</ListGroupItem>
						<ListGroupItem>
							<Button
								type='button'
								className='btn-block'
								disabled={cartItems.length === 0}
								onClick={checkoutHandler}
							>
								Proceed to Checkout
							</Button>
						</ListGroupItem>
					</ListGroup>
				</Card>
			</Col>
		</Row>
	);
};

export default CartScreen;
