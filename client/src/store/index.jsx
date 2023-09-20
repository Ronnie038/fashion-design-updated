import { configureStore } from '@reduxjs/toolkit';
// import { userSlice } from "./slices/UserSlices";
import UserSlices from './slices/UserSlices';
import CategorySlices, { fetchCategories } from './slices/CategorySlices';
import ItemsSlices from './slices/ItemsSlices';
import CartSlices from './slices/CartSlices';

const store = configureStore({
	reducer: {
		users: UserSlices,
		categories: CategorySlices,
		items: ItemsSlices,
		cartItems: CartSlices,
	},
});
store.dispatch(fetchCategories());
export default store;
