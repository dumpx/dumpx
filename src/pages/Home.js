import React, { Fragment } from "react";
import Map from "../components/Map";
import Card from "../components/Dashboard/Card";

import { HomeContainer } from "./GlobalStyles";
import { DashboardHeader } from "./styles";
// import Map from "../assets/map.png";

const Home = () => {

    const position=[26.8439, 75.5652];
    return (
        <Fragment>
            <HomeContainer>
                <DashboardHeader>
                    <Card title="Total bins" amount="3" />
                    <Card title="Active bins" amount="5" />
                    <Card title="Full bins" amount="1" />
                    <Card title="Empty bins" amount="8" />
                </DashboardHeader>
                <Map position={position} />
                {/* <img src={Map} alt="Logo" /> */}
            </HomeContainer>
        </Fragment>
    );
};

export default Home;
