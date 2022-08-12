import "./Search.css";
import Sidebar from "../components/sidebar/Sidebar";
import Book from "../components/books/book";
import Header from "../components/header/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import FormSearch from "./FormSearch"
export default function Search() {

    const [List, setList] = useState([]);
    
    useEffect(() => {
        const fetchList = async () => {
            const res = await axios.get("http://localhost:8000/book");
            setList(res.data);
        };
        fetchList();
    }, []);


    // function onClickBtn() {
    //     var arr = document.getElementsByTagName("input");
    //     title = arr[0].value;
    //     author = arr[1].value;
    //     description = arr[2].value;
    //     document
    //         .querySelectorAll('input[type = "checkbox"]:checked')
    //         .forEach(cb => categories.push(cb.value));

    //     var test = {
    //         title: title,
    //         publishedDate: null,
    //         description: description,
    //         genre: categories,
    //         author: author
    //     }    
    //     postBook(test)
    //     console.log(test)
    //     alert(title)
    //     alert(author)
    // }
    

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
                            {List.map((b, i) => (
                                <Book Book={b} key={i} />
                            ))}
                        </div>
                    </div>
                </div>
                <Sidebar />
            </div>
        </>
    );
}
