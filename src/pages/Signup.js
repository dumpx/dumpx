import React, { useState, useRef } from "react";
import { supabase } from "../supabase";
import binImage from "../assets/recycle-bin.png";
import {
    AuthPage,
    AuthFrame,
    LoginForm,
    RegisterShortcut,
    HRLine,
    // GoogleButton,
    FormHeading,
    LogoImageDiv,
    LogoImage,
} from "./styles";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { login } from "../store/reducers/auth";

const Signup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isValid, setIsValid] = useState(true);
    const [isSigning, setIsSigning] = useState(false);

    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const cPasswordRef = useRef(null);

    const signupHandler = async (e) => {
        e.preventDefault();
        setIsSigning(true);
        if (
            usernameRef.current.value.trim() === "" ||
            passwordRef.current.value.trim() === "" ||
            passwordRef.current.value.trim() !== cPasswordRef.current.value.trim()
        ) {
            setIsValid(false);
            alert("Password did not match !");
            setIsSigning(false);
            return;
        }
        let { user, error } = await supabase.auth.signUp({
            email: usernameRef.current.value.trim(),
            password: passwordRef.current.value.trim()
        })

        if(error){
            alert("Failed to sign up!");
            setIsSigning(false);
            return;
        }

        const email = user.email;
        setIsSigning(false);
        alert("You've successfully signed up !");
        navigate("/dashboard");
        dispatch(login(email));
    };

    
    // async function signInWithGoogle() {
    //     const { user, session, error } = await supabase.auth.signIn({
    //         provider: 'google',
    //     })
    //     console.log(user, session, error);
    //     const email = usernameRef.current.value;
    //     dispatch(login(email));
    //   }

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
                <LoginForm onSubmit={signupHandler} isValid={isValid}>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        ref={usernameRef}
                        placeholder="Enter Email"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        ref={passwordRef}
                        placeholder="Enter Password"
                        required
                    />
                    <input
                        type="password"
                        name="cpassword"
                        id="cpassword"
                        ref={cPasswordRef}
                        placeholder="Enter Password Again"
                        required
                    />
                    <input
                        type="submit"
                        value={isSigning ? "Signing up ..." : "Sign up"}
                        onClick={signupHandler}
                    />
                </LoginForm>
                <HRLine>OR</HRLine>
                {/* <div className="context-switch">
                    <GoogleButton onClick={signInWithGoogle}>Continue with Google</GoogleButton>
                </div> */}
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
