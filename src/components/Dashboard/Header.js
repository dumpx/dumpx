import React from "react";
import {
    DashBoardHeader,
    DashboardHeaderLeft,
    DashboardHeaderRight,
    DashboardHeaderSearch,
    LogoutButton,
    HeaderLogo,
} from "./styles";
import binImage from "../../assets/bin.png";
import { supabase } from "../../supabase";

import { useDispatch } from "react-redux";
import { logout } from "../../store/reducers/auth";

const Header = () => {
    const dispatch = useDispatch();
    const searchSubmitHandler = (e) => {
        e.preventDefault();
        console.log("Searched something ?");
    };

    const logoutHandler = async () => {
        await supabase.auth.signOut();
        dispatch(logout());
        console.log("LOGGING OUT ...");
    };

    return (
        <DashBoardHeader>
            <DashboardHeaderLeft>
                <HeaderLogo src={binImage}/>
                <h3>DUMPX</h3>
            </DashboardHeaderLeft>
            <DashboardHeaderSearch onSubmit={searchSubmitHandler}>
                <input
                    type="text"
                    name="searchQuery"
                    placeholder="Type something ..."
                />
                <input
                    type="submit"
                    value="Search"
                    onClick={searchSubmitHandler}
                />
            </DashboardHeaderSearch>
            <DashboardHeaderRight>
                <LogoutButton onClick={logoutHandler}>LOGOUT</LogoutButton>
            </DashboardHeaderRight>
        </DashBoardHeader>
    );
};

export default Header;
