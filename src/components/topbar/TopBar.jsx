import { Link } from "react-router-dom";
import "./topbar.css";

export default function TopBar() {
    const user = true;
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fa-brands fa-facebook-square"></i>
                <i className="topIcon fa-brands fa-google"></i>
                <i className="topIcon fa-brands fa-twitter-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">
                            HOME
                        </Link>
                    </li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">
                        {user && <li className="topListItem">LOGOUT</li>}
                    </li>
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
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    );
}
