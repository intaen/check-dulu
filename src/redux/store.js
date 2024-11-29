import { configureStore } from "@reduxjs/toolkit";
import campaignsReducer from "./slices/campaignSlice";
import authsReducer from "./slices/authSlice";

export const store = configureStore({
    reducer: {
        campaigns: campaignsReducer,
        auths: authsReducer
    },
})