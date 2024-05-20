import React from 'react';
import ReactDOM from 'react-dom/client';

import './bootstrap.min.css';
import './index.css';
import App from './App';
import ProductProvider from './context/ProductContext';
import AlertProvider from './context/AlertContext';
import UserProvider from './context/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<AlertProvider>
		<UserProvider>
			<ProductProvider>
				<App />
			</ProductProvider>
		</UserProvider>
	</AlertProvider>
);
