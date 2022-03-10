import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loggedIn: false,
};

export const authSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        login: (state) => {
            const newState = {...initialState};
            newState.loggedIn = true;
            return newState;
        },
        logout: (state) => {
            return initialState;
        },
    }
});

export const authActions = authSlice.actions;
