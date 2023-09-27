import { configureStore } from '@reduxjs/toolkit';
// import { userSlice } from "./slices/UserSlices";
import UserSlices, { fetchUserProfile } from './slices/UserSlices';
import CategorySlices, { fetchCategories } from './slices/CategorySlices';
import ItemsSlices from './slices/ItemsSlices';
import CartSlices from './slices/CartSlices';
import ProductsSlices from './slices/productsSlices';

const store = configureStore({
	reducer: {
		user: UserSlices,
		categories: CategorySlices,
		items: ItemsSlices,
		cartItems: CartSlices,
		products: ProductsSlices,
	},
});
store.dispatch(fetchUserProfile());
store.dispatch(fetchCategories());
export default store;
