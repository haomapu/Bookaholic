import TopBar from "./components/topbar/TopBar";
import Homepage from "./pages/homepage/Homepage";
import Settings from "./pages/settingspage/Settings";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
    return (
        <Router>
            <TopBar />
            <Routes>
                <Route exact path="/" element={<Homepage />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </Router>
    );
}

export default App;
