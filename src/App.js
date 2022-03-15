import "./App.css";

import { Routes, Route } from "react-router-dom";
import Authenticaton from "./pages/Authenticaton";
import Header from "./components/Dashboard/Header";
import { DashboardContainer } from "./components/Dashboard/styles";
import Section from "./components/Section";

// import Home from "./pages/Home";
// import Register from "./pages/Register";
// import Error from "./pages/Error";

import { useSelector } from "react-redux";

function App() {
    const isLoggedIn = useSelector((state) => state.auth.loggedIn);
    console.log("Logged In : ", isLoggedIn);

    return (
        <>
            {!isLoggedIn && (
                <Routes>
                    <Route path="*" element={<Authenticaton />} />
                </Routes>
            )}
            {isLoggedIn && (
                <DashboardContainer>
                    <Header />
                    <Section />
                    {/* <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/:others" element={<Error />} />
                    </Routes> */}
                </DashboardContainer>
            )}
        </>
    );
}

export default App;
