import { createSlice } from '@reduxjs/toolkit';
import { CART_REMOVE_ITEM, CART_ADD_ITEM } from '../constants/constants';

export const cartReducer = (
	state = { cartItems: [] },
	action = { type: '', payload: {} }
) => {
	switch (action.type) {
		case CART_ADD_ITEM: {
			const item = action.payload;
			const itemExists = state.cartItems.find(
				(x) => x.product === item.product
			);

			if (itemExists) {
				return {
					...state,
					cartItems: state.cartItems.map((x) =>
						x.product === itemExists.product ? item : x
					),
				};
			} else {
				return {
					...state,
					cartItems: [...state.cartItems, item],
				};
			}
			return;
		}
		case CART_REMOVE_ITEM: {
			return;
		}
		default:
			return state;
	}
};
const cartItemsFromStorage = localStorage.getItem('cartItems')
	? JSON.parse(localStorage.getItem('cartItems'))
	: [];

const initialState = {
	cart: { cartItems: cartItemsFromStorage },
};
export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: cartReducer,
});
export default cartSlice.reducer;
