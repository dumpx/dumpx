import styled from "styled-components";

export const DashboardContainer = styled.div`
    width: 100%;
    min-height: 100vh;
`;

export const DashBoardHeader = styled.header`
    width: 100%;
    padding: 1rem;
    border-bottom: 1px solid #aaa;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const DashboardHeaderLeft = styled.div`
    width: 5rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const DashboardHeaderRight = styled.div`
    width: 5rem;
    text-align: center;
`;

export const DashboardHeaderSearch = styled.form`
    input[type="text"],
    input[type="submit"] {
        outline: none;
        border: 1px solid #ccc;
        border-radius: 0.5rem;
        padding: 0.5rem 0.75rem;
        font-size: 0.75rem;
        margin: 0 0.25rem;
    }
    input[type="text"] {
        width: 20rem;
    }
    input[type="submit"] {
        background: #00ab55;
        border:none;
        color: #fff;
        transition: background 0.3s ease-in-out; 
        
        :hover {
            background: #00cc55;
            cursor: pointer;
        }
    }
`;

export const HeaderLogo = styled.img`
    width: 2rem;
    height: 2rem;
    background: cadetblue;
    border-radius: 50%;
    aspect-ratio: 1/1;
`;

export const LogoutButton = styled.button`
    outline: none;
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem 0.75rem;
    font-size: 0.75rem;
    background: #f00;
    color: #fff;
    transition: background 0.3s ease-in-out; 

    :hover {
        cursor: pointer;
        background: #c00;
    }
`;

export const DashboardCard = styled.div`
    display: flex;
    flex-direction: column;
    background: #00ab55;
    border-radius: 0.8rem;
    padding: 1rem 2rem;
    row-gap: 0.5rem;
    width: 12rem;
    color: #fff;
    background-image: linear-gradient(19deg,#266e7e 0%,#00ab55 100%);

    h3{
        text-transform: uppercase;
        font-size: 0.75rem;
        font-weight: 500;
        color: #dedede;
    }

    h2{
        font-size: 1.25rem;
        font-weight: 600;
        color: #fff;
    }

`;