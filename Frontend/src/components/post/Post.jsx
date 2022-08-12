import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
    return (
        <div className="post">
            <img className="postImg" src={post.bookImg} alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">
                        <Link className="link" to="/posts?cat=">
                            {post.genres}
                        </Link>
                    </span>
                </div>
                <span className="postTitle">
                    <Link to={"/book/" + post.title} className="link">
                        {post.title}
                    </Link>
                </span>
                <hr />
                <span className="postDate">{post.publishedDate}</span>
            </div>
            <p className="postDesc">{post.description}</p>
        </div>
    );
}
