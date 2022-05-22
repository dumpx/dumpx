import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./reducers/auth";
import authReducer from "./reducers/auth";
import binReducer from "./reducers/bins";

const store = configureStore({
    reducer: {
        auth: authReducer,
        bin: binReducer
    },
});

export default store;
