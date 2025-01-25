import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Leaderboard from "./pages/Leaderboard.jsx";
import Events from "./pages/Events.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
    return (
        <Router>
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/leaderboard" element={<Leaderboard />} />
                    <Route path="/events" element={<Events />} />
                </Routes>
            </main>
        </Router>
    );
};

export default App;
