import React, { useState } from "react";
import styled from "styled-components";

import Table from "../components/Update/Table";
import UpdateForm from "../components/Update/UpdateForm";
import { useSelector } from "react-redux";

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
        return <h2>No bins found in database, Maybe try adding some !</h2>;
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
