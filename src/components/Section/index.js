import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { MainContainer, SectionContainer } from "./styles";
import Sidebar from "../Sidebar";

// pages
import Home from "../../pages/Home";
import Error from "../../pages/Error";
import Register from "../../pages/Register";
import Bins from "../../pages/Bins";
import Update from "../../pages/Update";

const Index = () => {
    return (
        <SectionContainer>
            <Sidebar />
            <MainContainer>
                <Routes>
                    <Route path="/" element={<Navigate replace to="/dashboard" />} />
                    <Route path="/dashboard" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/bins" element={<Bins />} />
                    <Route path="/update" element={<Update />} />
                    <Route path="/:others" element={<Error />} />
                </Routes>
            </MainContainer>
        </SectionContainer>
    );
};

export default Index;
