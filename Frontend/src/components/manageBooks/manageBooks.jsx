import "./manageBooks.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function manageBooks({ book }) {
    function deleteBook(test) {
        let url = "http://localhost:8000/book/";
        axios.delete(url + book._id, test);
    }
    function onClickBtnDeny() {
        deleteBook(book);
        window.location.reload();
    }
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
                    <Link className="link" to={"/book/" + book.title}>
                        View
                    </Link>
                </button>
                <button className="buttonTitle" onClick={onClickBtnDeny}>
                    Delete
                </button>
            </div>
        </div>
    );
}
