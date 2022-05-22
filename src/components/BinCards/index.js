import React, { useState } from "react";
import {
    Card,
    CardLeft,
    CardRight,
    RefreshButton,
    DeleteButton,
    ButtonGroup,
} from "./styles";
import Map from "../Map";
import Table from "./Table";
import BinVisualBox from "./BinVisualBox";

import { supabase } from "../../supabase";

const BinCards = ({ bin }) => {
    const [binColor, setBinColor] = useState("#0f0");
    const [perc, setPerc] = useState(0);
    const [updateTime, setUpdateTime] = useState("0 hours 0 mins ago");
    const [binFilled, setBinFilled] = useState(
        (bin.height - bin.filled).toFixed(1)
    );
    const [isRefreshing, setIsRefreshing] = useState(false);

    const updateBinColor = () => {
        const prcnt = Math.floor(Math.abs((binFilled / bin.height) * 100));
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
        const hours = Math.floor((currDate - prevDate) / 36e5);
        const mins = Math.floor(
            ((currDate - prevDate) / 36e5) * 60 - hours * 60
        );

        setUpdateTime(`${hours} hours and ${mins} mins ago`);
    };

    const postUpdatedData = async (updatedTime) => {
        await supabase
            .from("Bins")
            .update({ filled: binFilled, updated_at: updatedTime })
            .eq("thingspeak_link", bin.thingspeak_link);
    };

    const connectArduino = async () => {
        setIsRefreshing(true);
        if (!bin.thingspeak_link) {
            console.log("Thingspeak not connected !");
        }
        const res = await fetch(bin.thingspeak_link);
        const data = await res.json();

        setBinFilled((bin.height - data.feeds[0].field1).toFixed(1));
        getUpdateTime(data.feeds[0].created_at);
        updateBinColor();
        setIsRefreshing(false);
        postUpdatedData(data.feeds[0].created_at);
    };

    const deleteBinHandler = async () => {
        const c = window.confirm("Are you sure you want to delete this bin ?");
        if (!c) return;

        const { data, error } = await supabase
            .from("Bins")
            .delete()
            .eq("thingspeak_link", bin.thingspeak_link);

        if (error) {
            alert("Could not delete bin, please try later.");
            return;
        }
        setIsRefreshing(false);
        alert("Bin has been successfulyy deleted !");
    };

    console.log(perc);

    return (
        <Card>
            <CardLeft>
                <ButtonGroup>
                    <RefreshButton
                        onClick={connectArduino}
                        title="Fetch latest fill detail"
                    >
                        {isRefreshing ? "Refreshing ...." : "Refresh 🗘"}
                    </RefreshButton>

                    <DeleteButton
                        onClick={deleteBinHandler}
                        title="Delete this bin from database"
                    >
                        Delete bin
                    </DeleteButton>
                </ButtonGroup>

                <Table
                    code={bin.code}
                    location={bin.location}
                    latitude={bin.latitude}
                    longitude={bin.longitude}
                    description={bin.description}
                    binHeight={bin.height}
                    updated={updateTime}
                />

                <BinVisualBox color={binColor} height={perc} />
            </CardLeft>
            <CardRight>
                <Map positions={[[bin.latitude, bin.longitude]]} />
            </CardRight>
        </Card>
    );
};

export default BinCards;
