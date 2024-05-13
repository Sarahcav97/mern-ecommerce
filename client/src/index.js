import React from 'react';
import ReactDOM from 'react-dom/client';

import './bootstrap.min.css';
import './index.css';
import App from './App';
import ProductProvider from './context/ProductContext';
import AlertProvider from './context/AlertContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<AlertProvider>
		<ProductProvider>
			<App />
		</ProductProvider>
	</AlertProvider>
);
