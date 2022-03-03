import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 20vw;
    height: 100vh;
    border: 2px solid #E6E9EB;
    
    h1 {
        margin: 1rem auto;
    }
`;

export const UserIdContainer = styled.div`
    background-color: #DFDBE0;
    margin: 1rem auto;
    text-align: center;
    padding: 1.25rem 1rem;
    border-radius: 1rem;
    width: 10rem;
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

export const MenuOptionsContainer = styled.div`
    width: 100%;
    display: flex;
    margin: 0.5rem auto;
    flex-direction: column;
    justify-content: center;
`;

export const Option = styled.div`
    display: flex;
    width: 100%;
    text-align: center;
    margin: auto;

    :hover {
        background-color: #EBF8F2;
        cursor: pointer;
        transition: 0.3s ease;
        border-right: 2px solid #00AB55;

        h5 {
            transform: scale(1.05);
            color: #00AB55;
        }
    }

    h5 {
        margin: 1.25rem auto;
        color: #637381;
    }
    
`;