import styled from "styled-components";

export const Container = styled.aside`
    display: flex;
    flex-direction: column;
    width: 20%;
    height: 100%;
    border-right: 1px solid #aaaaaa;

   
`;

export const UserIdContainer = styled.div`
    background-color: #dfdbe0;
    margin: 0.75rem auto;
    text-align: center;
    padding: 0.75rem 1rem;
    border-radius: 0.75rem;
    width: 12rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    cursor: pointer;

    h4 {
        margin: 0;
    }

    img {
        width: 2.25rem;
    }
`;

export const MenuOptionsContainer = styled.nav`
    width: 100%;
    display: flex;
    margin: 0;
    flex-direction: column;
    justify-content: center;
`;

export const Option = styled.a`
    display: flex;
    width: 100%;
    text-align: center;
    margin: auto;
    padding: 1rem 1.5rem;

    :hover {
        background-color: #ebf8f2;
        cursor: pointer;
        border-right: 2px solid #00ab55;

        h5 {
            transform: scale(1.05);
            color: #00ab55;
        }
    }

    :focus {
        background-color: #b1ffdb;
        border-right: 2px solid #000000;
    }

    h5 {
        margin: 1.25rem auto;
        color: #637381;
    }
`;
