import "./App.css";

import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Header from "./components/Dashboard/Header";
import { DashboardContainer } from "./components/Dashboard/styles";
import Section from "./components/Section";

import { useSelector } from "react-redux";

function App() {
    const isLoggedIn = useSelector((state) => state.auth.loggedIn);
    console.log("Logged In : ", isLoggedIn);

    return (
        <>
            {!isLoggedIn && (
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="/:others" element={<Login />} />
                </Routes>
            )}
            {isLoggedIn && (
                <DashboardContainer>
                    <Header />
                    <Section />
                </DashboardContainer>
            )}
        </>
    );
}

export default App;
