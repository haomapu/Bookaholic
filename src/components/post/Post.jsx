import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
    return (
        <div className="post">
            <img
                className="postImg"
                src="https://i1.rgstatic.net/publication/356640995_Data_Structures_and_Algorithms_Made_Easy/links/61a62f816864311d938ab8d4/largepreview.png"
                alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">
                        <Link className="link" to="/posts?cat=">
                            {post.genres}
                        </Link>
                    </span>
                </div>
                <span className="postTitle">
                    <Link to="/book/abc" className="link">
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
