import { Link } from "react-router-dom";
import "./topbar.css";

export default function TopBar() {
    const user = localStorage.getItem("username");
    const admin = localStorage.getItem("admin");

    const handleClick = () => {
        localStorage.clear();
        window.location.reload();
    };
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIconF fa-brands fa-facebook-square"></i>
                <i className="topIconG fa-brands fa-google"></i>
                <i className="topIconT fa-brands fa-twitter-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">
                            HOME
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/about">
                            ABOUT
                        </Link>
                    </li>
                    <>
                        {user && admin === "0" && (
                            <li className="topListItem">
                                <Link className="link" to="/wishlist">
                                    WISHLIST
                                </Link>
                            </li>
                        )}
                    </>
                    <>
                        {user && admin === "0" && (
                            <li className="topListItem">
                                <Link className="link" to="/upload">
                                    UPLOAD
                                </Link>
                            </li>
                        )}
                    </>
                    <>
                        {user && admin === "1" && (
                            <li className="topListItem">
                                <Link className="link" to="/manage">
                                    MANAGE
                                </Link>
                            </li>
                        )}
                    </>
                    <>
                        {user && (
                            <li className="topListItem">
                                <Link
                                    className="link"
                                    to="/"
                                    onClick={handleClick}
                                >
                                    LOGOUT
                                </Link>
                            </li>
                        )}
                    </>
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <Link className="link" to="/settings">
                        <img
                            className="topImg"
                            src="https://cdn.pixabay.com/photo/2015/07/27/20/16/book-863418_1280.jpg"
                            alt=""
                        />
                    </Link>
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/login">
                                LOGIN
                            </Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/register">
                                REGISTER
                            </Link>
                        </li>
                    </ul>
                )}
                <Link className="link" to="/search">
                    <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
                </Link>
            </div>
        </div>
    );
}
