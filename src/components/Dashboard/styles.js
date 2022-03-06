import styled from 'styled-components';

export const DashboardContainer = styled.div`
    width: 75vw;
    margin:  1rem ;
`;

export const SearchPanelContainer = styled.div`
    width: 100%;
    margin: auto ;
    background-color: #C8FACD;
    border-radius: 1rem;


    form {
        padding: 1rem;
        border-radius: 1rem;

        input {
            width: 50%;
            outline: none;
            border: 2px solid #E6E9EB;
            padding:.25rem;
            font-family: inherit;
            border-radius: 0.5rem;
         
        }

        button {
            background-color: grey;
            width: max-content;
            border:none;
            outline:none;
            font-family: inherit;
            padding : 0.25rem;
            border-radius: 0.25rem;
            color: white;
        }
    }
`;

export const CardsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

export const Card = styled.div`
    /* display: flex; */
    width: 16vw;
    border-radius: 0.75rem;
    padding: 1rem;
    text-align: center;
    /* justify-content: space-evenly; */
`;