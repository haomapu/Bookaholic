import "./book.css";
import { Link } from "react-router-dom";

export default function book({ Book }) {
    return (
        <div className="Book">
            <Link className="link" to={"/book/" + Book.title}>
                <img
                    className="BookImg"
                    src="https://i1.rgstatic.net/publication/356640995_Data_Structures_and_Algorithms_Made_Easy/links/61a62f816864311d938ab8d4/largepreview.png"
                    alt=""
                />
            </Link>
            <div className="BookInfo">
                <span className="BookTitle">
                    <Link className="link" to={"/book/" + Book.title}>
                        Title: {Book.title}
                    </Link>
                </span>
                <span className="BookAuthor">
                    <Link className="link" to={"/book/" + Book.title}>
                        Author: {Book.author}
                    </Link>
                </span>
                <hr />
                <span className="BookDate">
                    <Link className="link" to={"/book/" + Book.title}>
                        Published: {Book.publishedDate}
                    </Link>
                </span>
            </div>
        </div>
    );
}
