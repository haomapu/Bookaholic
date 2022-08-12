import "./posts.css";
import Post from "../post/Post";

export default function Posts({ posts }) {
    return (
        <div className="posts">
            {posts.map((p, i) => {
                if (p.pending === true) return <Post post={p} key={i} />;
                return null;
            })}
        </div>
    );
}
