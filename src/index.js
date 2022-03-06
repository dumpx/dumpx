import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import { authReducer } from "./store/reducers/auth";

const store = createStore(authReducer);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById("root")
);
