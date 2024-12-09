import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from "../../services/authService";


export const fetchLogin = createAsyncThunk('auth/fetchLogin', async (data) => {
    return await login(data.email, data.password);
})

const authSlice = createSlice({
    name: 'auths',
    initialState: {
        items: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchLogin.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchLogin.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload;
        })
        .addCase(fetchLogin.rejected, (state, action) => {
            state.loading = false;
            state.error = "Failed to fetch data";
        });
    }
})

export default authSlice.reducer