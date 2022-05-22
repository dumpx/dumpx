import styled from "styled-components";

export const SectionContainer = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    height: calc(100vh - 4rem - 1px);
`;

export const MainContainer = styled.main`
    flex: 1;
    height: 100%;
    padding: 1rem;
    overflow-y: scroll;
    position: relative;
`;
