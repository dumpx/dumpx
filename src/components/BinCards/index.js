import React, { useState, useEffect } from "react";
import { Card, CardLeft, CardRight, BinVisuals } from "./styles";
import Map from "../Map";

const BinCards = ({ bin }) => {
    const [binColor, setBinColor] = useState("#0f0");
    const [perc, setPerc] = useState(0);
    const [updateTime, setUpdateTime] = useState("");
    const [binFilled, setBinFilled] = useState(bin.filled);

    const updateBinColor = () => {
        setPerc(parseInt((binFilled / bin.height) * 100));
        if (perc < 30) {
            setBinColor("#0f0");
        } else if (perc < 50) {
            setBinColor("#2f0");
        } else if (perc < 75) {
            setBinColor("#a00");
        } else {
            setBinColor("#f00");
        }
    };

    const getUpdateTime = (time) => {
        const prevDate = new Date(time);
        const currDate = new Date();

        const hours = ((currDate - prevDate) / (1000 * 60 * 60)).toFixed(2);
        const mins = Math.floor((currDate - prevDate) / (1000 * 60 * 60*24));

        setUpdateTime(`${hours} hours and ${mins} mins ago`);
    }

    const connectArduino = async () => {
        if(!bin.thingspeak_link){
            console.log("Thingspeak not connected !");
        }
        const res = await fetch(bin.thingspeak_link);
        const data = await res.json();
        
        setBinFilled(data.feeds[0].field1);
        getUpdateTime(data.channel.updated_at);
        updateBinColor();
    }

    useEffect(() => {
        connectArduino();
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
                    <li>
                        <p>Updated: {updateTime}</p>
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
                    Filled: {binFilled}%
                </BinVisuals>
            </CardLeft>
            <CardRight>
                <Map position={[bin.latitude, bin.longitude]}/>
            </CardRight>
        </Card>
    );
};

export default BinCards;
