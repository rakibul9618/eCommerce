import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './redux/productsSlice';
import productSlice from './redux/productSlice';
import cartSlice from './redux/cartSlice';
const store = configureStore({
  reducer: {
    products: productsSlice,
    product: productSlice,
    cart: cartSlice,
  },
});

export default store;
