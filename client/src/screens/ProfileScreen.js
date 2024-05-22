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
import { useUser } from '../context/UserContext';

const ProfileScreen = () => {
	const { user } = useUser();

	const { email, setEmail, password, setPassword, signup, name, setName } =
		useUser();
	const navigate = useNavigate();
	const location = useLocation();
	console.log(location);
	const { isLoggedIn } = useUser();
	useEffect(() => {
		if (!user) {
			navigate('/login');
		} else {
			setName(user.name);
			setEmail(user.email);
		}
	});
	const submitHandler = (e) => {
		e.preventDefault();
		signup();
		navigate('/profile');
	};

	return (
		<Row>
			<Col md={3}>
				<h2>Hi, {user.name}!</h2>
				<Form onSubmit={submitHandler}>
					<Form.Group controlId='name'>
						<FormLabel>Name</FormLabel>
						<FormControl
							type='text'
							placeholder={user.name}
							value={name}
							required
							onChange={(e) => setName(e.target.value)}
						></FormControl>
					</Form.Group>
					<Form.Group controlId='email'>
						<FormLabel>Email Address</FormLabel>
						<FormControl
							type='email'
							placeholder={user.email}
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
						className='my-3'
					>
						Update
					</Button>
				</Form>
			</Col>
			<Col md={9}>
				<h2>My Orders</h2>
			</Col>
		</Row>
	);
};
export default ProfileScreen;

// import React from 'react';
// import { useUser } from '../context/UserContext';
// import formatDate from '../utils/formatDate';
// export default function ProfileScreen() {
// 	const { user } = useUser();
// 	return (
// 		<div>
// 			<h1>Profile Screen</h1>
// 			{user && (
// 				<div>
// 					<p>{user.name}</p>
// 					<p>{user.email}</p>
// 					<p>member since: {user.createdAt}</p>
// 				</div>
// 			)}
// 		</div>
// 	);
// }
