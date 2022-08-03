import "./request.css";

export default function Request() {
    return (
        <div className="request">
            <img
                className="avatar"
                src="https://cdn.pixabay.com/photo/2015/07/27/20/16/book-863418_1280.jpg"
                alt=""
            />
            <span className="title">Username:Hai</span>
            <span className="title">Data structure</span>
            <span className="title">22/07/2022</span>
            <button className="button">Accept</button>
            <button className="button">Deny</button>
        </div>
    );
}
