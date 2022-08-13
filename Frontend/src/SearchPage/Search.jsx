import "./Search.css";
import Sidebar from "../components/sidebar/Sidebar";
import Book from "../components/books/book";
import Post from "../components/post/Post";
import Header from "../components/header/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import FormSearch from "./FormSearch";
export default function Search() {
    const [List, setList] = useState([]);

    useEffect(() => {
        const fetchList = async () => {
            const res = await axios.get("http://localhost:8000/book");
            setList(res.data);
        };
        fetchList();
    }, []);

    const title = localStorage.getItem("title");
    var books;
    if (List) {
        books = List.find(item => item.title === title);
    }

    return (
        <>
            <Header />
            <div className="List">
                <div className="ListP">
                    <div>
                        <FormSearch />
                    </div>
                    <div className="Result">
                        <span className="ListTitle">List</span>
                        <div className="ListBook">
                            {books ? <Book Book={books} /> : null};
                        </div>
                    </div>
                </div>
                <Sidebar />
            </div>
        </>
    );
}
