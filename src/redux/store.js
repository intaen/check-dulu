import { configureStore } from "@reduxjs/toolkit";
import campaignsReducer from "./slices/campaignSlice";
import authsReducer from "./slices/authSlice";
import leadsReducer from "./slices/reportLeadsSlice";

export const store = configureStore({
    reducer: {
        campaigns: campaignsReducer,
        auths: authsReducer,
        report: leadsReducer
    },
})