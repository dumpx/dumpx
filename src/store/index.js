import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./reducers/auth";
import { authSlice } from "./reducers/auth";

const store = configureStore({
    reducer: {
        authSliceReducer: authSlice.reducer,
    },
});

export default store;
