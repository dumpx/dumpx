import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainContainer, SectionContainer } from "./styles";
import Sidebar from "../Sidebar";

// pages
import Home from "../../pages/Home";
import Error from "../../pages/Error";
import Register from "../../pages/Register";
import Bins from "../../pages/Bins";

const Index = () => {
    // console.log("Main");
    return (
        <SectionContainer>
            <Sidebar />
            <MainContainer>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/bins" element={<Bins />} />
                    <Route path="/:others" element={<Error />} />
                </Routes>
            </MainContainer>
        </SectionContainer>
    );
};

export default Index;
