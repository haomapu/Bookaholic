import "./manageWishList.css";
import { Link } from "react-router-dom";

export default function manageWishList({ wishBook }) {
    return (
        <div className="wishBook">
            <Link className="link" to={"/book/" + wishBook.title}>
                <img
                    className="wishBookImg"
                    src="https://i1.rgstatic.net/publication/356640995_Data_Structures_and_Algorithms_Made_Easy/links/61a62f816864311d938ab8d4/largepreview.png"
                    alt=""
                />
            </Link>
            <div className="wishBookInfo">
                <span className="wishBookTitle">
                    <Link className="link" to={"/book/" + wishBook.title}>
                        Title: {wishBook.title}
                    </Link>
                </span>
                <span className="wishBookAuthor">
                    <Link className="link" to={"/book/" + wishBook.title}>
                        Author: {wishBook.author}
                    </Link>
                </span>
                <hr />
                <span className="wishBookDate">
                    <Link className="link" to={"/book/" + wishBook.title}>
                        Published: {wishBook.publishedDate}
                    </Link>
                </span>
            </div>
            <div className="RButtons">
                <button className="RButtonTitle">Remove</button>
            </div>
        </div>
    );
}
