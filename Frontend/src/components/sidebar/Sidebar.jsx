import "./sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT US</span>
                <img
                    src="https://th.bing.com/th/id/OIP.v2Cssq8tUeqA21AtHtrpFQHaFj?w=224&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
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
                    <i className="sidebarIconF fa-brands fa-facebook-square"></i>
                    <i className="sidebarIconG fa-brands fa-google"></i>
                    <i className="sidebarIconT fa-brands fa-twitter-square"></i>
                </div>
            </div>
        </div>
    );
}
