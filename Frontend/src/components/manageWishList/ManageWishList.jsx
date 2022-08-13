import "./manageWishList.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function manageWishList({ wishBook }) {
    const onClickBtn = () => {
        const id = localStorage.getItem("id");
        let url = "http://localhost:8000/user/" + id;
        axios.get(url).then(res => {
            const temp = res.data.wishlist;
            temp.pop(wishBook);
            const test = {
                wishlist: temp,
            };
            console.log(test);
            axios.put(url, test);
            window.location.reload();
        });
    };
    return (
        <div className="wishBook">
            <Link className="link" to={"/book/" + wishBook.title}>
                <img className="wishBookImg" src={wishBook.bookImg} alt="" />
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
                <button className="RButtonTitle" onClick={onClickBtn}>
                    Remove
                </button>
            </div>
        </div>
    );
}
