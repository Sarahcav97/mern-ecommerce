import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counterSlice';
import productReducers from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';

export default configureStore({
	reducer: {
		counter: counterReducer,
		productList: productReducers,
		cart: cartReducer,
	},
});
