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
    width: 50%;

    ul{
        margin: 0 auto 0 2rem;
    }
`
export const CardRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
`

export const BinVisuals = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img{
        width: 50%;
        height: 50%;
    }

    div{
        height: 15rem;
        border-radius: 0.25rem;
        display: flex;
        flex-direction: column;
        justify-content: end;

        clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
        background: #eee;
        width: 15rem;
        overflow: hidden;

        div{
            width: 100%;
            border: none;
            border-radius: 0;
        }
    }
`