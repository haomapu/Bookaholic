import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Setting() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">
                        Update Your Account
                    </span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img
                            src="https://cdn.pixabay.com/photo/2015/07/27/20/16/book-863418_1280.jpg"
                            alt=""
                        />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fa-solid fa-circle-user"></i>
                        </label>
                        <input
                            type="file"
                            id="fileInput"
                            style={{ display: "none" }}
                        />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="maihoang215" />
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="maihoang2152002@gmail.com"
                    />
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    );
}
