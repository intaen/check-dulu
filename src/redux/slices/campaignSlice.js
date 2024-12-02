import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addCampaign, getListCampaign } from '../../services/campaignService';


export const fetchCampaignList = createAsyncThunk('campaigns/fetchCampaignList', async () => {
    return await getListCampaign();
})

export const addCampaignThunk = createAsyncThunk('campaigns/addCampaign', async (data) => {
    return await addCampaign(data);
})

const campaignSlice = createSlice({
    name: 'campaigns',
    initialState: {
        items: [{}],
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
            state.items = action.payload;
        })
        .addCase(fetchCampaignList.rejected, (state, action) => {
            state.loading = false;
            state.error = "Failed to fetch data";
        })
        .addCase(addCampaignThunk.fulfilled, (state, action) => {
            state.items.push(action.payload);
        });
    },
});

export default campaignSlice.reducer