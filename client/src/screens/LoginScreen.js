import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
	Form,
	Button,
	Row,
	Col,
	FormLabel,
	FormControl,
} from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { useUser } from '../context/UserContext';

const LoginScreen = () => {
	const { email, setEmail, password, setPassword, login } = useUser();
	const navigate = useNavigate();
	const location = useLocation();
	console.log(location);
	const redirect = location.search ? location.search.split('=')[1] : '/';

	const submitHandler = (e) => {
		e.preventDefault();
		login();
		navigate('/');
	};

	return (
		<FormContainer>
			<h1>Sign In</h1>
			<Form onSubmit={submitHandler}>
				<Form.Group controlId='email'>
					<FormLabel>Email Address</FormLabel>
					<FormControl
						type='email'
						placeholder='Enter email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					></FormControl>
				</Form.Group>
				<Form.Group controlId='password'>
					<FormLabel>Password</FormLabel>
					<FormControl
						type='password'
						placeholder='Enter password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					></FormControl>
				</Form.Group>
				<Button
					type='submit'
					variant='primary'
				>
					Sign In
				</Button>
			</Form>
			<Row className='py-3'>
				<Col>
					New Customer?{' '}
					<Link to={redirect ? `/signup?redirect=${redirect}` : '/signup'}>
						Sign up
					</Link>
				</Col>
			</Row>
		</FormContainer>
	);
};
export default LoginScreen;
