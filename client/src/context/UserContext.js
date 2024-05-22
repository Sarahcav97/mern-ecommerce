import React, { createContext, useContext, useState, useEffect } from 'react';
import client from '../api/client';
import jwt, { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
const UserContext = createContext();
const UserProvider = ({ children }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [user, setUser] = useState({});
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [name, setName] = useState('');

	const login = async () => {
		try {
			setLoading(true);
			const { data } = await client.post('/users/login', {
				email,
				password,
			});
			console.log({ data });
			sessionStorage.setItem('token', data.token);
			sessionStorage.setItem('userInfo', JSON.stringify(data.user));
			setUser(data.user);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			return console.error(error);
		}
	};
	const signup = async () => {
		try {
			setLoading(true);

			const { data } = await client.post('/users/signup', {
				email,
				password,
				name,
			});
			console.log({ data });
			setIsLoggedIn(true);
			sessionStorage.setItem('token', data.token);
			sessionStorage.setItem('userInfo', JSON.stringify(data.user));
			setUser(data.user);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			return console.error(error);
		}
	};

	const fetchCurrentUser = async () => {
		const token = sessionStorage.getItem('token');
		if (token) {
			const { data } = await client.get(`/users/profile`);
			console.log({ data });
			setUser(data.user);
		}
	};
	const handleLogout = () => {
		sessionStorage.removeItem('token');
		sessionStorage.removeItem('userInfo');
		window.location.replace('/login');
	};
	useEffect(() => {
		fetchCurrentUser();
	}, []);

	useEffect(() => {
		console.log('checking if user is logged in...');
		if (user && user.name) {
			console.log('user is logged in');
			setIsLoggedIn(true);
		} else {
			console.log('user is not logged in');
			setIsLoggedIn(false);
		}
	}, [user]);

	if (!children) return console.log('no children');
	return (
		<UserContext.Provider
			value={{
				email,
				setEmail,
				password,
				setPassword,
				loading,
				setLoading,
				login,
				user,
				setUser,
				isLoggedIn,
				setIsLoggedIn,
				handleLogout,
				signup,
				name,
				setName,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};
export const useUser = () => useContext(UserContext);
export default UserProvider;
