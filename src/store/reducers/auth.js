// import * as authActions from "../actions/auth";

const initialState = {
    loggedIn: false,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                loggedIn: true,
            };
        case "LOGOUT":
            return {
                loggedIn: false,
            }
        default:
            return state;
    }
};
