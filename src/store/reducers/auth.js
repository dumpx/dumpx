import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loggedIn: false,
};

const authSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        login: (state) => {
            state.loggedIn = true;
        },
        logout: (state) => {
            state.loggedIn = false;
        },
    }
});

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;