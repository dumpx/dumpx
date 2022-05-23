import { React } from "react";
import { NavLink } from "react-router-dom";
import { MenuOptionsContainer } from "./styles";
import "./styles.scss";
// import Home from '@mui/icons-material/Home'

const MenuOptions = () => {
    const options = [
        { title: "Dashboard", path: "dashboard" },
        { title: "Register", path: "register" },
        { title: "Bins", path: "bins" },
        { title: "Update", path: "update" },
    ];

    return (
        <>
            <MenuOptionsContainer>
                {options.map((item, index) => {
                    return (
                        <NavLink
                            key={index}
                            className={(navData) =>
                                navData.isActive ? "active" : "router"
                            }
                            to={item.path}
                        >
                            {item.title}
                        </NavLink>
                    );
                })}
            </MenuOptionsContainer>
        </>
    );
};

export default MenuOptions;
