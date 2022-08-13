import "./book.css";
import { Link } from "react-router-dom";

export default function Book({ Book }) {
    console.log(Book);
    return (
        <div className="Book">
            <Link className="link" to={"/book/" + Book.title}>
                <img className="BookImg" src={Book.bookImg} alt="" />
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
