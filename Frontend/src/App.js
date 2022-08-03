import TopBar from "./components/topbar/TopBar";
import Homepage from "./pages/homepage/Homepage";
import LoginPage from "./LoginPage/LoginPage";
import RegisterPage from "./RegisterPage/RegisterPage";
import DescripPage from "./DescripPage/DescripPage";
import Settings from "./pages/settingspage/Settings";
import Manage from "./pages/managepage/Manage";
<<<<<<< HEAD
=======
import WishList from "./pages/wishlistpage/WishList";

>>>>>>> 19c9193593d37dd1e613720c6389346e1026cf8b
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
                    path="/register"
                    element={currentUser ? <Homepage /> : <RegisterPage />}
                />
                <Route
                    path="/settings"
                    element={currentUser ? <Settings /> : <LoginPage />}
                />
                <Route
                    path="/manage"
                    element={currentUser ? <Manage /> : <LoginPage />}
                />

                <Route 
                    path="/book/:id" 
                    element={<DescripPage />} 
                />

                <Route
                    path="/wishlist"
                    element={currentUser ? <WishList /> : <LoginPage />}
                />
            </Routes>
        </Router>
    );
}

export default App;
