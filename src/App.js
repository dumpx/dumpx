import { Fragment } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Register from "./pages/Register";
import Authenticaton from "./pages/Authenticaton";

function App() {
    return (
        <Fragment>
            <div className="app--display">
                <Router>
                    <Sidebar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/register" element={<Register />} />
                        <Route
                            path="/authentication"
                            element={<Authenticaton />}
                        />
                        <Route path="/:id" element={<Error />} />
                    </Routes>
                </Router>
            </div>
        </Fragment>
    );
}

export default App;
