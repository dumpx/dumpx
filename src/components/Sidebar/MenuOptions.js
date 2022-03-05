import { React, Fragment } from "react";
import { Link } from "react-router-dom";
import { MenuOptionsContainer, Option } from "./styles";
// import Home from '@mui/icons-material/Home'

const MenuOptions = () => {
    const options = [
        { component: "Home", title: "Dashboard", path: "/" },
        { component: "AccountCircle", title: "User", path: `/user/` },
        { component: "Input", title: "Register", path: "/register" },
    ];

    return (
        <Fragment>
            <MenuOptionsContainer>
                {options.map((item) => {
                    return (
                        <Option key={Math.random()}>
                            {/* <h5><a href={item.path}>{item.title}</a></h5> */}
                            <h5>
                                <Link to={item.path}>{item.title}</Link>
                            </h5>
                        </Option>
                    );
                })}
            </MenuOptionsContainer>
        </Fragment>
    );
};

export default MenuOptions;
