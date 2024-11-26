import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getListCampaign } from '../../services/campaignList';

export const fetchCampaignList = createAsyncThunk('campaign/fetchCampaignList', async () => {
    return await getListCampaign();
})

const campaignSlice = createSlice({
    name: 'campaigns',
    initialState: {
        items: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchCampaignList.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchCampaignList.fulfilled, (state, action) => {
            state.loading = false;
            state.campaignList = action.payload;
        })
        .addCase(fetchCampaignList.rejected, (state, action) => {
            state.loading = false;
            state.error = "Failed to fetch data";
        });
    },
});

export default campaignSlice.reducer