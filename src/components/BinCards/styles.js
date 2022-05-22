import styled from "styled-components";

export const Card = styled.div`
    border: 1px solid #aaa;
    padding: 2rem;
    display: flex;
    flex-direction: row;
`;

export const CardLeft = styled.div`
    border-right: 1px solid #aaa;
    display: flex;
    flex-direction: column;
    justify-content: start;
    row-gap: 1rem;
    width: 50%;

    ul {
        margin: 0 auto 0 2rem;
    }
`;
export const CardRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
`;

export const BinVisuals = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
        width: 50%;
        height: 50%;
    }

    div {
        height: 15rem;
        border-radius: 0.25rem;
        display: flex;
        flex-direction: column;
        justify-content: end;
        margin-bottom: 1rem;

        clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
        background: #eee;
        width: 15rem;
        overflow: hidden;

        div {
            width: 100%;
            border: none;
            border-radius: 0;
        }
    }
`;

export const RefreshButton = styled.button`
    padding: 0.5rem 1rem;
    align-self: center;
    border-radius: 1rem;
    background: #b1ffdb;
    border: none;
    transition: 0.2s background ease-in-out;
    white-space: nowrap;
    text-align: center;

    :hover {
        background: #70ffbd;
        cursor: pointer;
    }
`;
