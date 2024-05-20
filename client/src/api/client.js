import axios from 'axios';
const client = axios.create({
	baseURL: 'http://localhost:5000/api',
	headers: {
		Authorization: `Bearer ${sessionStorage.getItem('token')}`,
	},
});

export default client;
