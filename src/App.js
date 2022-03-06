import { Fragment } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Register from "./pages/Register";
import Authenticaton from "./pages/Authenticaton";
import { useSelector } from "react-redux";
import Sidebar from "./components/Sidebar/index";
import { DashboardContainer} from "./components/Dashboard/styles";

function App() {
    const isLoggedIn = useSelector((state) => state.loggedIn);
    console.log("Logged in ? : ", isLoggedIn);

    return (
        <Fragment>
            {!isLoggedIn && (
                <Routes>
                    <Route path="/" element={<Authenticaton />} />
                    <Route path="/:id" element={<Error />} />
                </Routes>
            )}
            {isLoggedIn && (
                <DashboardContainer>
                    <Sidebar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/:id" element={<Error />} />
                    </Routes>
                </DashboardContainer>
            )}
        </Fragment>
    );
}

export default App;
