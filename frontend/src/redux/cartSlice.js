import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {};

const initialState = {
  cartItems: cartItemsFromStorage,
  shippingAddress: shippingAddressFromStorage,
};

export const addToCert = createAsyncThunk(
  'cart/addToCert',
  async ({ id, qty }) => {
    const { data } = await axios.get(`/api/products/${id}`);
    return {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    };
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (x) => x.product !== action.payload
      );
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    saveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
      localStorage.setItem('shippingAddress', JSON.stringify(action.payload));
    },
    savePaymentMethod: (state, action) => {
      state['paymentMethod'] = action.payload;
      localStorage.setItem('paymentMethod', JSON.stringify(action.payload));
    },
    cartClearItems: (state, action) => {
      state.cartItems = [];
    },
  },
  extraReducers: {
    [addToCert.pending]: (state, action) => {},
    [addToCert.fulfilled]: (state, action) => {
      const item = action.payload;
      console.log(item);
      const existItem = state.cartItems.find((x) => x.product === item.product);
      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x.product === existItem.product ? item : x
        );
      } else {
        state.cartItems.push(item);
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    [addToCert.rejected]: (state, action) => {},
  },
});

export const {
  removeFromCart,
  saveShippingAddress,
  savePaymentMethod,
  cartClearItems,
} = cartSlice.actions;
export default cartSlice.reducer;
