import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./reducers/auth";
import authReducer from "./reducers/auth";

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

export default store;
