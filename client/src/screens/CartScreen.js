import React from 'react';
import { useEffect } from 'react';
import Message from '../components/Message';
import { Link, useParams } from 'react-router-dom';
import {
	Row,
	Col,
	ListGroup,
	Image,
	Form,
	Button,
	Card,
} from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { useProduct } from '../context/ProductContext';
import ProductProvider from '../context/ProductContext';

const CartScreen = ({}) => {
	const { id } = useParams();
	const location = useLocation();
	const { addToCart, cartItems, setCartItems, getCartItems } = useProduct();
	const productId = id;
	const qty = location.search ? Number(location.search.split('=')[1]) : 1;

	useEffect(() => {
		if (productId) {
			addToCart(productId, qty);
		}
	}, [productId]);

	return (
		<Row>
			<Col md={8}>
				<h1>Shopping Cart</h1>
				{getCartItems().length === 0 ? (
					<Message>
						Your fucking cart is empty idiot.
						<Link to='/'>Go Back</Link>
					</Message>
				) : (
					getCartItems().map((item, i) => (
						<p key={`${item._id}-${i}`}>{item.description}</p>
					))
				)}
			</Col>
			<Col md={2}></Col>
			<Col md={2}></Col>
		</Row>
	);
};
export default CartScreen;
