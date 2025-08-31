 import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// action return promise
export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const result = await axios.get("https://dummyjson.com/products");
    sessionStorage.setItem("allProducts", JSON.stringify(result.data.products));
    return result.data.products;
});

const productSlice = createSlice({
    name: 'products',
    initialState: {
        allProducts: [],
        dummyAllProducts: [],
        loading: false,
        errorMsg: ""
    },
    reducers: {
        searchProduct: (state, actionByHeader) => {
            state.allProducts = state.dummyAllProducts.filter(item =>
                item.title.toLowerCase().includes(actionByHeader.payload)
            );
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, apiResult) => {
            state.dummyAllProducts = apiResult.payload;
            state.allProducts = apiResult.payload;   // ✅ FIX: populate products shown in UI
            state.loading = false;
            state.errorMsg = "";
        });
        builder.addCase(fetchProducts.pending, (state) => {
            state.dummyAllProducts = [];
            state.allProducts = [];   // clear while loading
            state.loading = true;
            state.errorMsg = "";
        });
        builder.addCase(fetchProducts.rejected, (state) => {
            state.dummyAllProducts = [];
            state.allProducts = [];
            state.loading = false;
            state.errorMsg = "API Call Rejected";
        });
    }
});

export const { searchProduct } = productSlice.actions;
export default productSlice.reducer;
