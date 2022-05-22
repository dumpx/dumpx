import React, { Fragment, useEffect, useState } from "react";
import Map from "../components/Map";
import Card from "../components/Dashboard/Card";

import { HomeContainer } from "./GlobalStyles";
import { DashboardHeader } from "./styles";

import { useDispatch } from "react-redux";
import { supabase } from "../supabase";
import { updateBins } from "../store/reducers/bins";

const Home = () => {
    const dispatch = useDispatch();
    // const [total, setTotal] = useState(0)
    const [active, setActive] = useState(0);
    const [full, setFull] = useState(0);
    const [empty, setEmpty] = useState(0);
    const position = [26.8439, 75.5652];

    const fetchBins = async () => {
        let { data: Bins, error } = await supabase.from("Bins").select("*");
        if (error) {
            alert("Could not get bin details !!");
            return;
        }
        setActive(Bins.length);
        setFull(Bins.reduce((previousValue, curr) =>previousValue + (curr.filled >= 75 ? 1 : 0),0));
        setEmpty(Bins.reduce((previousValue, curr) =>previousValue + (curr.filled === "0" ? 1 : 0),0));
        dispatch(updateBins(Bins));
        console.log(Bins, error);
    };

    useEffect(() => {
        fetchBins();
    }, []);

    return (
        <Fragment>
            <HomeContainer>
                <DashboardHeader>
                    {/* <Card title="Total bins" amount={total} /> */}
                    <Card title="Active bins" amount={active} />
                    <Card title="Full bins" amount={full} />
                    <Card title="Empty bins" amount={empty} />
                </DashboardHeader>
                <Map position={position} />
            </HomeContainer>
        </Fragment>
    );
};

export default Home;
