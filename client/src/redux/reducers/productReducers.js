import { createSlice } from '@reduxjs/toolkit';
//
const productListReducer = (
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

export const productSlice = createSlice({
	name: 'productList',
	initialState: {
		loading: false,
		products: [],
	},

	reducers: productListReducer, //{
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
});
export default productSlice.reducer;
