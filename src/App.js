import TopBar from "./components/topbar/TopBar";
import Homepage from "./pages/homepage/Homepage";
import LoginPage from "./LoginPage/LoginPage";
import DescripPage from "./DescripPage/DescripPage";
import Settings from "./pages/settingspage/Settings";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    const currentUser = false;
    return (
        <Router>
            <TopBar />
            <Routes>
                <Route exact path="/" element={<Homepage />} />
                <Route
                    path="/login"
                    element={currentUser ? <Homepage /> : <LoginPage />}
                />
                <Route
                    path="/settings"
                    element={currentUser ? <Settings /> : <LoginPage />}
                />
                <Route path="/book/abc" element={<DescripPage />} />
            </Routes>
        </Router>
    );
}

export default App;
