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

const getUpdateTime = (time) => {
    const prevDate = new Date(time);
    const currDate = new Date();
    const hours = Math.floor((currDate - prevDate) / 36e5);
    const mins = Math.floor(((currDate - prevDate) / 36e5) * 60 - hours * 60);
    return `${hours} hours and ${mins} mins ago`;
};

const BinCards = ({ bin }) => {
    const [updateTime, setUpdateTime] = useState(getUpdateTime(bin.updated_at));
    const [binFilled, setBinFilled] = useState(bin.filled);
    const [isRefreshing, setIsRefreshing] = useState(false);

    const postUpdatedData = async (updatedFilled, updatedTime) => {
        await supabase
            .from("Bins")
            .update({ filled: updatedFilled, updated_at: updatedTime })
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
        setUpdateTime(getUpdateTime(data.feeds[0].created_at));
        postUpdatedData(data.feeds[0].field1, data.feeds[0].created_at);
        setIsRefreshing(false);
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

                <BinVisualBox height={bin.height} lFromArd={binFilled} />
            </CardLeft>
            <CardRight>
                <Map positions={[[bin.latitude, bin.longitude]]} />
            </CardRight>
        </Card>
    );
};

export default BinCards;
