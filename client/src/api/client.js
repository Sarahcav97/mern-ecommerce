import axios from 'axios';

const isProd = window.location.href.includes('sarahcavs.com');
const prodUrl = 'https://shop.sarahcavs.com/api';
const devUrl = 'http://localhost:6002/api';

const client = axios.create({
	baseURL: isProd ? prodUrl : devUrl,
	headers: {
		Authorization: `Bearer ${sessionStorage.getItem('token')}`,
	},
});

export default client;
