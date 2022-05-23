import { React } from "react";
import { NavLink } from "react-router-dom";
import { MenuOptionsContainer } from "./styles";
import './styles.scss';
// import Home from '@mui/icons-material/Home'

const MenuOptions = () => {
    const options = [
        { component: "Home", title: "Dashboard", path: "dashboard" },
        { component: "AccountCircle", title: "Bins", path: `bins` },
        { component: "Input", title: "Register", path: "register" },
        { component: "Input", title: "Update", path: "update" },
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
