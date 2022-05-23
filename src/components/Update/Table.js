import React from "react";
import { ButtonTable, TableHeader, Row } from "./style";

const Table = ({ bins, setSelectedBin }) => {
    const onClickHandler = (bin) => {
        setSelectedBin(bin);
    };

    return (
        <ButtonTable>
            <caption style={{padding: "0.5rem"}}><h3>ACTIVE BINS</h3></caption>
            <tbody>
                <TableHeader>
                    <th>Code</th>
                    <th>Height</th>
                    <th>Latitude</th>
                    <th>Longitude</th>
                    <th>Location</th>
                    <th>Description</th>
                </TableHeader>
                {bins.map((bin) => {
                    return (
                        <Row onClick={onClickHandler.bind(this, bin)} key={bin.id}>
                            <td>{bin.code}</td>
                            <td>{bin.height}</td>
                            <td>{Number(bin.latitude).toFixed(5)}N</td>
                            <td>{Number(bin.longitude).toFixed(5)}E</td>
                            <td>{bin.location}</td>
                            <td>{bin.description}</td>
                        </Row>
                    );
                })}
            </tbody>
        </ButtonTable>
    );
};

export default Table;
