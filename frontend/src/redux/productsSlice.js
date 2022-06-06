import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

export const fetchProducts = createAsyncThunk(
    'products/productsSlice',
     async (dispatch , thunkAPI)=>{
         const { rejectWithValue  } = thunkAPI;
        try{
            const response = await axios.get('http://localhost:5000/api/products');
            return response.data
        }catch (error) {
           return  rejectWithValue(error);
        }

     }
)

const productsSlice = createSlice({
   name:'products',
   initialState:{
       data:[],
       loading:false,
       error:''
   },
    extraReducers:{
       [fetchProducts.fulfilled]:(state , { payload } )=>{
           state.data=  payload
           state.loading= false
       },
       [fetchProducts.pending]:(state ,  action )=>{
           state.loading = true
       },
       [fetchProducts.rejected]:(state , action  )=>{
           state.loading = false
           state.error = action.payload.response.data.message
       }
    }
});


export default productsSlice.reducer;