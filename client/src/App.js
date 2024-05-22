import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	redirect,
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import SignupScreen from './screens/SignupScreen';
import MainLayout from './MainLayout';
import { useUser } from './context/UserContext';
import HomeScreenUnauthenticated from './screens/HomeScreenUnauthenticated';

const App = () => {
	const { isLoggedIn } = useUser();

	const routes = [
		{
			path: '/',
			element: <MainLayout />,
			children: [
				{
					path: '',
					element: isLoggedIn ? <HomeScreen /> : <HomeScreenUnauthenticated />,
				},
				{ path: 'login', element: <LoginScreen /> },
				{ path: 'signup', element: <SignupScreen /> },
				{
					path: 'product/:id',
					element: isLoggedIn ? <ProductScreen /> : redirect('/login'),
				},
				{
					path: 'cart/:id?',
					element: isLoggedIn ? <CartScreen /> : redirect('/login'),
				},
				{
					path: 'profile',
					element: isLoggedIn ? <ProfileScreen /> : redirect('/login'),
				},
			],
		},
	];

	const router = createBrowserRouter(routes);

	return <RouterProvider router={router} />;
};

export default App;
