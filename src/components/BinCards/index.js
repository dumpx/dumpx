import React, { useState, useEffect } from "react";
import { Card, CardLeft, CardRight, BinVisuals, RefreshButton } from "./styles";
import Map from "../Map";

import { supabase } from "../../supabase";

const BinCards = ({ bin }) => {
    const [binColor, setBinColor] = useState("#0f0");
    const [perc, setPerc] = useState(0);
    const [updateTime, setUpdateTime] = useState("");
    const [binFilled, setBinFilled] = useState(bin.filled);
    const [isRefreshing, setIsRefreshing] = useState(false);

    const updateBinColor = () => {
        const prcnt = Math.floor((binFilled / bin.height) * 100);
        setPerc(prcnt > 100 ? 100 : prcnt);
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
        const hours = Math.floor((currDate-prevDate) / 36e5);
        const mins = Math.floor(((currDate-prevDate) / 36e5)*60);

        setUpdateTime(`${hours} hours and ${mins} mins ago`);
    };

    const postFilledData = async () => {
        await supabase
            .from("Bins")
            .update({ filled: binFilled })
            .eq("thingspeak_link", bin.thingspeak_link);
    };

    const connectArduino = async () => {
        setIsRefreshing(true);
        if (!bin.thingspeak_link) {
            console.log("Thingspeak not connected !");
        }
        const res = await fetch(bin.thingspeak_link);
        const data = await res.json();

        setBinFilled(data.feeds[0].field1);
        getUpdateTime(data.feeds[0].created_at);
        updateBinColor();
        setIsRefreshing(false);
        postFilledData();
    };

    useEffect(() => {
        connectArduino();
        console.log("Called");
    });

    return (
        <Card>
            <CardLeft>
                <RefreshButton onClick={connectArduino}>
                    {isRefreshing ? "Refreshing ...." : "Refresh 🗘"}
                </RefreshButton>
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
                    Filled: {perc}%
                </BinVisuals>
            </CardLeft>
            <CardRight>
                <Map position={[bin.latitude, bin.longitude]} />
            </CardRight>
        </Card>
    );
};

export default BinCards;
