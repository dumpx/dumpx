import React from "react";
import { Card, CardLeft, CardRight, BinVisuals } from "./styles";
import Map from '../Map';

const BinCards = ({bin}) => {
    console.log(bin);
    return <Card>
        <CardLeft>
            <p>Code: {bin.code}</p>
            <p>Location: {bin.location}</p>
            <p>Latitude: {bin.lat}</p>
            <p>Longitude: {bin.long}</p>
            <BinVisuals>
                <div>
                    <div></div>
                </div>
                Filled: {bin.filled}%
            </BinVisuals>
        </CardLeft>
        <CardRight>
            <Map />
        </CardRight>
    </Card>;
};

export default BinCards;
