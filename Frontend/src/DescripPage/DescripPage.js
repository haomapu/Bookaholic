import Book from "./BookGeneral/book";
import Header from "../components/header/Header";
import Comment from "./Comment/comment";
import Recommend from "./recommend/Recommend";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function DescripPage() {
    const [BookInfo, setBookInfo] = useState([]);
    useEffect(() => {
        const fetchInfo = async () => {
            const res = await axios.get("http://localhost:8000/book");
            setBookInfo(res.data);
        };
        fetchInfo();
    }, []);

    const { id } = useParams();

    return (
        <div>
            <Header />
            {BookInfo.map((p, i) => {
                if (p.title === id) return <Book SpecBook={p} key={i} />;
                return null;
            })}
            <Recommend />
            {BookInfo.map((p, i) => {
                if (p.title === id) return <Comment book={p} key={i} />;
                return null;
            })}
        </div>
    );
}

export default DescripPage;
