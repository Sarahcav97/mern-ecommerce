import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
	Row,
	Col,
	ListGroup,
	Image,
	Form,
	Button,
	Card,
} from 'react-bootstrap';
import { addToCart } from '../redux/actions/cartActions';
const CartScreen = ({ match, location, history }) => {
	const productId = match.params.id;

	return (
		<div>
			<h1>CartScreen</h1>
		</div>
	);
};
export default CartScreen;
