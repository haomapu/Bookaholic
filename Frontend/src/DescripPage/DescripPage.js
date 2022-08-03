import Book from "./BookGeneral/book";
import Header from "../components/header/Header";
import Comment from "./Comment/comment";
import Recommend from "./recommend/Recommend";
import { useParams } from 'react-router-dom'
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
    var Onebook
    const { id } = useParams()
    if (BookInfo.length !== 0) {
        Onebook = BookInfo.find(item => item.title === id);
    }
    return (
        <div>
            <Header />
            <Book SpecBook={BookInfo.length === 0? BookInfo : Onebook}/>
            <Recommend />
            <Comment />
        </div>
    );
}

export default DescripPage;
