import "./request.css";
import axios from "axios";

export default function Request({ book }) {
    function putBook(test) {
        let url = "http://localhost:8000/book/";
        axios.put(url + book._id, test);
    }
    function deleteBook(test) {
        let url = "http://localhost:8000/book/";
        axios.delete(url + book._id, test);
    }
    function onClickBtnAccept() {
        book.pending = true;
        putBook(book);
        window.location.reload();
    }
    function onClickBtnDeny() {
        deleteBook(book);
        window.location.reload();
    }
    return (
        <div className="request">
            <img
                className="avatar"
                src="https://cdn.pixabay.com/photo/2015/07/27/20/16/book-863418_1280.jpg"
                alt=""
            />
            <span className="title">{book.author}</span>
            <span className="title">{book.title}</span>
            <span className="title">{book.publishedDate}</span>
            <button className="button" onClick={onClickBtnAccept}>
                Accept
            </button>
            <button className="button" onClick={onClickBtnDeny}>
                Deny
            </button>
        </div>
    );
}
