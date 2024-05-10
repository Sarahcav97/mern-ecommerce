import { createSlice } from '@reduxjs/toolkit';
import {
	PRODUCT_DETAILS_REQUEST,
	PRODUCT_DETAILS_SUCCESS,
	PRODUCT_DETAILS_FAIL,
} from '../constants/constants';
//
export const productListReducer = (
	state = { products: [] },
	action = { type: '', payload: {} }
) => {
	switch (action.type) {
		case 'PRODUCT_LIST_REQUEST':
			return { loading: true, products: [] };
		case 'PRODUCT_LIST_SUCCESS':
			return { loading: false, products: action.payload };
		case 'PRODUCT_LIST_FAIL':
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const productDetailsReducer = (
	state = { product: { reviews: [] } },
	action = { type: '', payload: {} }
) => {
	switch (action.type) {
		case 'PRODUCT_DETAILS_REQUEST':
			return { loading: true, ...state };
		case 'PRODUCT_DETAILS_SUCCESS':
			return { loading: false, product: action.payload };
		case 'PRODUCT_DETAILS_FAIL':
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

//need to export productDetailsReducer//

export const productSlice = createSlice({
	name: 'productList',
	initialState: {
		loading: false,
		products: [],
	},

	reducers: productListReducer,
});
export default productSlice.reducer;

//{
// productListRequest: (state) => {
// 	return { ...state, loading: true, products: [] };
// },
// productListSuccess: (state) => {
// 	return { ...state, loading: false, products: state.payload };
// },
// productListFail: (state) => {
// 	return { ...state, loading: false, error: state.payload };
// },
//},
