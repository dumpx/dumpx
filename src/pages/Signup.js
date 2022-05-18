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

const Signup = () => {
    const dispatch = useDispatch();
    const [isValid, setIsValid] = useState(true);

    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const cPasswordRef = useRef(null);

    const signupHandler = async (e) => {
        e.preventDefault();
        if (
            usernameRef.current.value === "" ||
            passwordRef.current.value === "" ||
            passwordRef.current.value !== cPasswordRef.current.value
        ) {
            setIsValid(false);
            return;
        }
        // dispatch({ type: "LOGIN" });
        // let { user, error } = await supabase.auth.signIn({
        //     email: "yadav.199302068@muj.manipal.edu",
        //     password: "Password@123",
        // });

        // console.log(user, error);
        // dispatch(login());
        const email = usernameRef.current.value;
        dispatch(login(email));
    };

    
    async function signInWithGoogle() {
        const { user, session, error } = await supabase.auth.signIn({
            provider: 'google',
        })
        console.log(user, session, error);
        const email = usernameRef.current.value;
        dispatch(login(email));
      }

    return (
        <AuthPage>
            <AuthFrame>
                <FormHeading>
                    <LogoImageDiv>
                        <LogoImage src={binImage} alt="logo" />
                    </LogoImageDiv>
                    <h2>DUMPX</h2>
                    <p>Make it work !</p>
                </FormHeading>
                <LoginForm onSubmit={signupHandler} isValid={isValid}>
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
                    <input
                        type="password"
                        name="cpassword"
                        id="cpassword"
                        ref={cPasswordRef}
                        placeholder="Enter Password Again"
                    />
                    <input
                        type="submit"
                        value="Signup"
                        onClick={signupHandler}
                    />
                </LoginForm>
                <HRLine>OR</HRLine>
                <div className="context-switch">
                    <GoogleButton onClick={signInWithGoogle}>Continue with Google</GoogleButton>
                </div>
                <RegisterShortcut>
                    <div>
                        <p>Already have an account ?</p>
                    </div>
                    <Link to="/login" className="create-account-link">
                        Login to your account
                    </Link>
                </RegisterShortcut>
            </AuthFrame>
        </AuthPage>
    );
};

export default Signup;
