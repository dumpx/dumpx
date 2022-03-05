import React from "react";
import binImage from "../assets/recycle-bin.png";
import {AuthPage} from './styles';

const Authenticaton = () => {
    return (
        <AuthPage>
            <div className="auth-frame">
                <div className="heading">
                    <div className="logo-image-div">
                        <img src={binImage} className="logo-image" alt="logo" />
                    </div>
                    <h2 className="logo-name">DUMPX</h2>
                    <p className="tagline">Make it work !</p>
                </div>
                <form className="login-form">
                    <input type="text" name="username" id="username" placeholder="Enter Username"/>
                    <input type="password" name="password" id="password" placeholder="Enter Password"/>
                    <input type="button" value="Login" />
                </form>
                <div className="horizontal-line">OR</div>
                <div className="context-switch">
                    <button type="submit" className="submit-btn">Continue with Google</button>
                </div>
                <div className="register-shortcut">
                    <div className="create-account-text">
                        <p>Don't have an account ?</p>
                    </div>
                    <a href="http://localhost:3000" className="create-account-link">Create an account</a>
                </div>
            </div>
        </AuthPage>
    );
};

export default Authenticaton;
