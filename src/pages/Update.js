import React, { useState } from "react";
import styled from "styled-components";

import Table from "../components/Update/Table";
import UpdateForm from "../components/Update/UpdateForm";
import { useSelector } from "react-redux";

import EmptyCanvas from "../assets/empty.svg";

const EmptyDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 2rem;
    height: 100%;
`;

const UpdateContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const Update = () => {
    const bins = useSelector((state) => state.bin.bins);
    const [selectedBin, setSelectedBin] = useState(bins[0]);

    if (bins.length === 0) {
        return (
            <EmptyDiv>
                <img src={EmptyCanvas} alt="empty" style={{ width: "25%" }} />
                <p>No bin to uodate ! Try adding some and then come back later.</p>
            </EmptyDiv>
        );
    }

    return (
        <UpdateContainer>
            <Table bins={bins} setSelectedBin={setSelectedBin} />
            <UpdateForm
                bin={selectedBin}
                style={{ padding: "3rem", columnGap: "2rem" }}
            />
        </UpdateContainer>
    );
};

export default Update;
