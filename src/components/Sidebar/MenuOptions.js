import { React } from "react";
import { NavLink } from "react-router-dom";
import { MenuOptionsContainer, Option } from "./styles";
// import Home from '@mui/icons-material/Home'

const MenuOptions = () => {
    const options = [
        { component: "Home", title: "Dashboard", path: "/" },
        { component: "AccountCircle", title: "User", path: `user` },
        { component: "Input", title: "Register", path: "register" },
    ];

    return (
        <>
            <MenuOptionsContainer>
                {options.map((item, index) => {
                    return (
                        <NavLink
                            key={index}
                            className={(navData) =>
                                navData.isActive ? "active-router" : Option
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
