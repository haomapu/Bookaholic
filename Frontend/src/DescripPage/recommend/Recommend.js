import "./recommend.css";
import Post from "../../components/post/Post";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Recommend() {
    const [posts, setPosts] = useState([]);
        useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("http://localhost:8000/book");
            setPosts(res.data);
        };
        fetchPosts();
    }, []);
    return (
        <div className="recommends">
            {posts.slice(0,2).map((p, i) => (
                <Post post={p} key={i} />
            ))}
        </div>
    );
}
