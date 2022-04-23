import React, { Fragment } from 'react'
import Registry from './../components/Registry';
import { RegisterContainer } from './GlobalStyles';

const Register = () => {
    return (
        <>
            <RegisterContainer>
                <h1>Register a bin</h1>
                <Registry />
            </RegisterContainer>
        </>
    )
}

export default Register