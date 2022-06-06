import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProductById = createAsyncThunk(
  'product/productSlice',
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/products/${id}`
      );
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState: {
    data: null,
    error: '',
    loading: false,
  },
  extraReducers: {
    [fetchProductById.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [fetchProductById.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchProductById.rejected]: (state, action) => {
      state.error = action.payload.response.data.message;
      state.loading = false;
    },
  },
});

export default productSlice.reducer;
