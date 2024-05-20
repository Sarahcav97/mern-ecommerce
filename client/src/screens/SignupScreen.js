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

const SignupScreen = () => {
	const { email, setEmail, password, setPassword, signup, name, setName } =
		useUser();
	const navigate = useNavigate();
	const location = useLocation();
	console.log(location);
	const redirect = location.search ? location.search.split('=')[1] : '/';

	const submitHandler = (e) => {
		e.preventDefault();
		signup();
		navigate('/profile');
	};

	return (
		<FormContainer>
			<h1>Sign In</h1>
			<Form onSubmit={submitHandler}>
				<Form.Group controlId='name'>
					<FormLabel>Name</FormLabel>
					<FormControl
						type='text'
						placeholder='Enter name'
						value={name}
						required
						onChange={(e) => setName(e.target.value)}
					></FormControl>
				</Form.Group>
				<Form.Group controlId='email'>
					<FormLabel>Email Address</FormLabel>
					<FormControl
						type='email'
						placeholder='Enter email'
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					></FormControl>
				</Form.Group>
				<Form.Group controlId='password'>
					<FormLabel>Password</FormLabel>
					<FormControl
						type='password'
						placeholder='Enter password'
						required
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
					Already a Customer? <Link to='/login'>Login</Link>
				</Col>
			</Row>
		</FormContainer>
	);
};
export default SignupScreen;
