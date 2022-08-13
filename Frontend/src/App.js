import TopBar from "./components/topbar/TopBar";
import Homepage from "./pages/homepage/Homepage";
import LoginPage from "./LoginPage/LoginPage";
import RegisterPage from "./RegisterPage/RegisterPage";
import DescripPage from "./DescripPage/DescripPage";
import Settings from "./pages/settingspage/Settings";
import Manage from "./pages/managepage/Manage";
import WishList from "./pages/wishlistpage/WishList";
import Upload from "./UploadPage/UploadPage";
import Search from "./SearchPage/Search";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    const user = localStorage.getItem("username");
    const admin = localStorage.getItem("admin");
    return (
        <Router>
            <TopBar />
            <Routes>
                <Route exact path="/" element={<Homepage />} />
                <Route
                    path="/login"
                    element={user ? <Homepage /> : <LoginPage />}
                />
                <Route
                    path="/register"
                    element={user ? <Homepage /> : <RegisterPage />}
                />
                <Route
                    path="/settings"
                    element={user ? <Settings /> : <LoginPage />}
                />
                <Route
                    path="/upload"
                    element={user && admin === "0" ? <Upload /> : <LoginPage />}
                />
                <Route
                    path="/manage"
                    element={user && admin === "1" ? <Manage /> : <LoginPage />}
                />

                <Route path="/book/:id" element={<DescripPage />} />

                <Route
                    path="/wishlist"
                    element={
                        user && admin === "0" ? <WishList /> : <LoginPage />
                    }
                />

                <Route path="/search" element={<Search />} />
            </Routes>
        </Router>
    );
}

export default App;
