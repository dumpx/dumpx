import React from "react";
import { TableStyle } from "./styles";

const Table = ({
    code,
    location,
    latitude,
    longitude,
    description,
    binHeight,
    updated,
}) => {
    return (
        <TableStyle>
            <tbody>
                <tr>
                    <td>Code</td>
                    <td>{code}</td>
                </tr>
                <tr>
                    <td>Location</td>
                    <td>{location}</td>
                </tr>
                <tr>
                    <td>Latitude</td>
                    <td>{latitude}</td>
                </tr>
                <tr>
                    <td>Longitude</td>
                    <td>{longitude}</td>
                </tr>
                <tr>
                    <td>Description</td>
                    <td>{description}</td>
                </tr>
                <tr>
                    <td>Bin Height</td>
                    <td>{binHeight} cm</td>
                </tr>
                <tr>
                    <td>Updated at</td>
                    <td>{updated}</td>
                </tr>
            </tbody>
        </TableStyle>
    );
};

export default Table;
