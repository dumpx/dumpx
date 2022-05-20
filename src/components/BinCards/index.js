import React, { useState, useEffect } from "react";
import { Card, CardLeft, CardRight, BinVisuals } from "./styles";
import Map from "../Map";

const BinCards = ({ bin }) => {
    const [binColor, setBinColor] = useState("#0f0");
    const [perc, setPerc] = useState(0);
    // let binColor = "#0f0";
    // let perc = 0;

    const updateBinColor = () => {
        setPerc(parseInt((bin.filled / bin.height) * 100));
        // perc = (bin.filled / bin.height )* 100;
        if (perc < 30) {
            setBinColor("#0f0");
            // binColor = "#0f0";
        } else if (perc < 50) {
            setBinColor("#2f0");
            // binColor = "#2f0";
        } else if (perc < 75) {
            setBinColor("#a00");
            // binColor = "#a00";
        } else {
            setBinColor("#f00");
            // binColor = "#f00";
        }
    };

    useEffect(() => {
        updateBinColor();
        console.log(binColor);
    });

    return (
        <Card>
            <CardLeft>
                <ul>
                    <li>
                        <p>Code: {bin.code}</p>
                    </li>
                    <li>
                        <p>Location: {bin.location}</p>
                    </li>
                    <li>
                        <p>Latitude: {bin.latitude}</p>
                    </li>
                    <li>
                        <p>Longitude: {bin.longitude}</p>
                    </li>
                    <li>
                        <p>Description: {bin.description}</p>
                    </li>
                </ul>
                <BinVisuals>
                    <div>
                        <div
                            style={{
                                backgroundColor: binColor,
                                height: `${perc}%`,
                            }}
                        ></div>
                    </div>
                    Filled: {bin.filled}%
                </BinVisuals>
            </CardLeft>
            <CardRight>
                <Map position={[bin.latitude, bin.longitude]}/>
            </CardRight>
        </Card>
    );
};

export default BinCards;
