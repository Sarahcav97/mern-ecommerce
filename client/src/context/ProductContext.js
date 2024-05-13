import React, { createContext, useContext, useState, useEffect } from 'react';
import client from '../api/client';
import { useAlert } from './AlertContext';
const ProductContext = createContext();

const ProductProvider = ({ children }) => {
	const [productList, setProductList] = useState([]);
	const [productDetails, setProductDetails] = useState({});
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const { setAlert } = useAlert();

	const fetchProductDetails = async (id) => {
		try {
			setLoading(true);
			const { data } = await client.get(`/products/${id}`);
			setProductDetails(data);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			setError(error);
			setAlert('error', error);
			return console.error(error);
		}
	};

	const fetchProductList = async () => {
		try {
			setLoading(true);
			const { data } = await client.get(`/products`);
			setProductList(data);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			setError(error);
			return console.error(error);
		}
	};
	return (
		<ProductContext.Provider
			value={{
				productList,
				setProductList,
				productDetails,
				setProductDetails,
				error,
				setError,
				loading,
				setLoading,
				fetchProductDetails,
				fetchProductList,
			}}
		>
			{children}
		</ProductContext.Provider>
	);
};

/**
 *
 *
 * @returns Product Context
 *
 * @example
 * const {productList,
				setProductList,
				productDetails,
				setProductDetails,
				error,
				setError,
				loading,
				setLoading,
				fetchProductDetails,
				fetchProductList} = useProduct()
 */
export const useProduct = () => useContext(ProductContext);
export default ProductProvider;
