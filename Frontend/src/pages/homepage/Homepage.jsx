import "./homepage.css";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Homepage() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("http://localhost:8000/book");
            setPosts(res.data);
        };
        fetchPosts();
    }, []);
    return (
        <>
            <Header />
            <div className="homepage">
                <Posts posts={posts} />
                <Sidebar />
            </div>
        </>
    );
}
