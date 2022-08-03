import "./manageBooks.css";
import { Link } from "react-router-dom";

export default function manageBooks({ book }) {
    return (
        <div className="book">
            <img
                className="bookImg"
                src="https://i1.rgstatic.net/publication/356640995_Data_Structures_and_Algorithms_Made_Easy/links/61a62f816864311d938ab8d4/largepreview.png"
                alt=""
            />
            <div className="bookInfo">
                <span className="bookTitle">Title: {book.title}</span>
                <span className="bookAuthor">Author: {book.author}</span>
                <hr />
                <span className="bookDate">
                    Published: {book.publishedDate}
                </span>
            </div>
            <div className="buttons">
                <button className="buttonTitle">
                    <Link className="link" to="/book/abc">
                        View
                    </Link>
                </button>
                <button className="buttonTitle">Delete</button>
            </div>
        </div>
    );
}
