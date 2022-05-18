import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loggedIn: false,
    email: null,
};

const authSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        login: (state, action) => {
            state.loggedIn = true;
            state.email = action.payload
        },
        logout: (state) => {
            state.loggedIn = false;
            state.email = null
        },
    }
});

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;