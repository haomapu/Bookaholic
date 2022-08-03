import "./sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT US</span>
                <img
                    src="https://icdn.dantri.com.vn/thumb_w/770/2022/05/30/iu-11-1653887051969.jpg"
                    height="433"
                    width="236"
                    frameBorder="0"
                    scrolling="no"
                    alt=""
                />
                <p>Information about us</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <Link className="link" to="/posts?cat=Life">
                            Life
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Link className="link" to="/posts?cat=Music">
                            Music
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Link className="link" to="/posts?cat=Sport">
                            Sport
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Link className="link" to="/posts?cat=Style">
                            Style
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Link className="link" to="/posts?cat=Tech">
                            Tech
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Link className="link" to="/posts?cat=Cinema">
                            Cinema
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-facebook-square"></i>
                    <i className="sidebarIcon fa-brands fa-google"></i>
                    <i className="sidebarIcon fa-brands fa-twitter-square"></i>
                </div>
            </div>
        </div>
    );
}
