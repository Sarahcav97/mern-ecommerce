import { useDispatch, useSelector } from 'react-redux';
import productReducers, { productSlice } from '../reducers/productReducers';
import store from '../store';
import client from '../../api/client';
import {
	PRODUCT_LIST_FAIL,
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
} from '../constants/constants';
const { actions } = productSlice;
const { productListRequest, productListFail, productListSuccess } = actions;

export const listProducts = () => async (dispatch) => {
	try {
		dispatch({
			type: PRODUCT_LIST_REQUEST,
		});
		const { data } = client.get('/products');

		dispatch({
			type: PRODUCT_LIST_SUCCESS,
			payload: {
				products: data.products,
			},
		});
		return data;
	} catch (error) {
		dispatch({
			type: PRODUCT_LIST_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
