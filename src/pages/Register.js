import React, { Fragment } from 'react'
import Registry from './../components/Registry';
import { RegisterContainer } from './GlobalStyles';

const Register = () => {
    return (
        <Fragment>
            <RegisterContainer>
                <h1>Register</h1>
                <Registry />
            </RegisterContainer>
        </Fragment>
    )
}

export default Register