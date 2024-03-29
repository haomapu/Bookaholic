import "./manage.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Request from "../../components/request/Request";
import ManageBooks from "../../components/manageBooks/manageBooks";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Manage() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        const fetchBooks = async () => {
            const res = await axios.get("http://localhost:8000/book");
            setBooks(res.data);
        };
        fetchBooks();
    }, []);
    return (
        <>
            <div className="manage">
                <div className="manageTitles">
                    <div className="administration">
                        <span className="administrationTitle">
                            Administration
                        </span>
                        <div className="listRequests">
                            {books.map((b, i) => {
                                if (b.pending === false)
                                    return <Request book={b} key={i} />;
                                return null;
                            })}
                        </div>
                    </div>
                    <div className="management">
                        <span className="managementTitle">Management</span>
                        <div className="listBook">
                            {books.map((b, i) => {
                                if (b.pending === true)
                                    return <ManageBooks book={b} key={i} />;
                                return null;
                            })}
                        </div>
                    </div>
                </div>
                <Sidebar />
            </div>
        </>
    );
}
