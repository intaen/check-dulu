import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getReport } from "../../services/reportLeadsServices";

export const fetchReportThunk = createAsyncThunk('reportLeads/getReportLeads', async () => {
    return await getReport();
})

export const reportLeadsSlice = createSlice({
    name: 'leads',
    initialState: {
        items: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchReportThunk.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchReportThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload;
        })
        .addCase(fetchReportThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = "Failed to fetch data";
        })
    }
})

export default reportLeadsSlice.reducer;