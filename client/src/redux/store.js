import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counterSlice';
import { productDetailsReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import { productListReducer } from './reducers/productReducers';

export default configureStore({
	reducer: {
		counter: counterReducer,
		productList: productReducers,
		productDetails: productDetailsReducer,
		cart: cartReducer,
	},
});
