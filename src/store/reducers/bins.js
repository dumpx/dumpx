import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bins: null
};

const binSlice = createSlice({
    name: "bin",
    initialState: initialState,
    reducers: {
        updateBins: (state, action) => {
            // state.loggedIn = true;
            state.bins = action.payload
        }
    }
});

export const {updateBins} = binSlice.actions;
export default binSlice.reducer;