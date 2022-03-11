import styled from "styled-components";

export const AuthPage = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23d5ffe1' fill-opacity='0.58'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`;

export const AuthFrame = styled.div`
    width: 28rem;
    height: 40rem;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem 3rem;
    box-shadow: 0 0 32px #ddd;
    row-gap: 1rem;

    > * {
        width: 100%;
    }

    @media (max-width: 620px) {
        box-shadow: none;
    }
`;

export const LogoImageDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 0.5rem;
`;
export const FormHeading = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 0.5rem;
`;

export const LogoImage = styled.img`
    width: 4rem;
    height: 4rem;
    aspect-ratio: 1/1;
`;

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    row-gap: 1rem;

    input {
        width: 100%;
        padding: 0.8rem 1rem;
        border-radius: 0.5rem;
        outline: none;
        color: #333;
        transition: box-shadow, border 0.25s ease-in-out;
        border: ${(props) =>
            props.isValid ? "solid 1px #eee" : "1px solid #f004"};
    }

    input[type="text"]:focus,
    input[type="password"]:focus {
        box-shadow: 0 0 32px 0 #eee;
    }

    input[type="submit"] {
        background-color: #00a82d;
        color: #fff;
        cursor: pointer;
        transition: background-color 0.3s ease-in-out;

        &:hover {
            background-color: #008f26;
        }
    }
`;

export const HRLine = styled.div`
    text-align: center;
    position: relative;
    z-index: 10;

    &:before,
    &:after {
        content: "";
        position: absolute;
        z-index: 1;
        border: 1px solid #ccc;
        width: 40%;
    }

    &:before {
        transform: translate(0, -50%);
        top: 50%;
        left: 0;
    }

    &:after {
        transform: translate(0, -50%);
        top: 50%;
        left: 60%;
    }
`;

export const GoogleButton = styled.button`
    width: 100%;
    padding: 0.8rem 1rem;
    border-radius: 0.5rem;
    outline: none;
    border: solid 1px #eee;
    color: #333;
    transition: box-shadow 0.25s ease-in-out;

    &:hover {
        cursor: pointer;
    }
`;

export const RegisterShortcut = styled.div`
    text-align: center;
    margin: 2rem auto 0;
`;

export const CreateAccountText = styled.a`
    color: #008f26;
`;
