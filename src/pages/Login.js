import React, { useState, useRef } from "react";
import { supabase } from "../supabase";
import binImage from "../assets/recycle-bin.png";
import {
    AuthPage,
    AuthFrame,
    LoginForm,
    RegisterShortcut,
    HRLine,
    GoogleButton,
    FormHeading,
    LogoImageDiv,
    LogoImage,
} from "./styles";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/reducers/auth";

import GoogleLogin from "react-google-login";

const Login = () => {
    const dispatch = useDispatch();
    const [isValid, setIsValid] = useState(true);

    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const failedLogin = (message) => {
        alert(message);
    };

    const loginHandler = async (e) => {
        e.preventDefault();
        if (
            usernameRef.current.value === "" ||
            passwordRef.current.value === ""
        ) {
            setIsValid(false);
            return;
        }
        // dispatch({ type: "LOGIN" });
        let { user, error } = await supabase.auth.signIn({
            email: "yadav.199302068@muj.manipal.edu",
            password: "Password@123",
        });

        console.log(user, error);
        if (error) {
            failedLogin(error.message);
            return;
        }

        const email = user.email;
        dispatch(login(email));
    };

    async function signInWithGoogle() {
        const { user, session, error } = await supabase.auth.signIn({
            provider: "google",
        });
        console.log(user, session, error);

        if (error) {
            failedLogin(error.message);
            return;
        }
        const email = usernameRef.current.value;
        dispatch(login(email));
    }

    // const handleAuthentication = async (googleResponse) => {
    //     //     headers: {"Content-Type":"application/json"};
    //     const response = await fetch("/api/v1/auth/google", {
    //         method: "POST",
    //         token: googleResponse.tokenId,
    //         body: JSON.stringify({
    //             token: googleResponse.tokenId,
    //         }),
    //     });
    //     const data = await response.json();
    //     localStorage.setItem('login-data', JSON.stringify(data));
    //     console.log(googleResponse, data);
    // };

    return (
        <AuthPage>
            <AuthFrame>
                <FormHeading>
                    <LogoImageDiv>
                        <LogoImage src={binImage} alt="logo" />
                    </LogoImageDiv>
                    <h2>SWMS</h2>
                    <p>Smart Waste Management System</p>
                </FormHeading>
                <LoginForm onSubmit={loginHandler} isValid={isValid}>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        ref={usernameRef}
                        placeholder="Enter Username"
                    />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        ref={passwordRef}
                        placeholder="Enter Password"
                    />
                    <input type="submit" value="Login" onClick={loginHandler} />
                </LoginForm>
                <HRLine>OR</HRLine>
                <div className="context-switch">
                    <GoogleButton onClick={signInWithGoogle}>
                        Continue with Google
                    </GoogleButton>
                </div>
                <RegisterShortcut>
                    <div>
                        <p>Don't have an account ?</p>
                    </div>
                    <Link to="/signup" className="create-account-link">
                        Create an account
                    </Link>
                </RegisterShortcut>
                {/* <GoogleLogin
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                    buttonText="Continue with Google"
                    onSuccess={handleAuthentication}
                    onFailure={handleAuthentication}
                    cookiePolicy={"single_host_origin"}
                /> */}
            </AuthFrame>
        </AuthPage>
    );
};

export default Login;
