import styled from "styled-components";

export const ButtonTable = styled.table`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-collapse: collapse;
    padding: 0 3rem;

    tbody {
        width: 100%;
        border: 1px solid #aaa;
    }
`;

export const TableHeader = styled.tr`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #aaa;

    th {
        flex: 1;
        padding: 0.5rem;
    }
`;

export const Row = styled.tr`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    td {
        flex: 1;
        text-align: center;
    }
`;
