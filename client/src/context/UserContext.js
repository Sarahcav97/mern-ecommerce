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

	const login = async () => {
		try {
			setLoading(true);

			const { data } = await client.post('/users/login', {
				email,
				password,
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
		const { data } = await client.get(`/users/profile`);
		console.log({ data });
		setUser(data.user);
	};
	const handleLogout = () => {
		sessionStorage.removeItem('token');
		sessionStorage.removeItem('userInfo');
		window.location.replace('/login');
	};
	useEffect(() => {
		fetchCurrentUser();
	}, []);

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
			}}
		>
			{children}
		</UserContext.Provider>
	);
};
export const useUser = () => useContext(UserContext);
export default UserProvider;
