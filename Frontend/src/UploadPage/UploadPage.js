import "./UploadPage.css";
import axios from "axios";
import { useEffect } from "react";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";

function UploadPage() {
    var categories = [];
    var title = "";
    var author = "";
    var description = "";

    const test = {
        title: title,
        publishedDate: null,
        description: description,
        genres: categories,
        author: author,
    };

    useEffect(() => {
        const postBook = async () => {
            const res = await axios.post("http://localhost:8000/book/", test);
        };
        postBook();
    }, []);

    function onClickBtn() {
        var arr = document.getElementsByTagName("input");
        title = arr[0].value;
        author = arr[1].value;
        description = arr[2].value;
        document
            .querySelectorAll('input[type = "checkbox"]:checked')
            .forEach(cb => categories.push(cb.value));
        alert(title);
        alert(author);
        alert(description);
        alert(categories);
    }

    return (
        <>
            <Header />
            <div className="upload">
                <div className="uploadTitle">
                    <form className="Form">
                        <span className="content"> Upload</span>
                        <div className="picture">
                            <img src="picture.jpg" alt="" />
                            <button type="add"> Add Pic</button>
                        </div>
                        <h2> Title</h2>
                        <div className="input">
                            <input type="text" name="" />
                        </div>
                        <h2> Author</h2>
                        <div className="input">
                            <input type="text" name="" />
                        </div>
                        <h2> Description</h2>
                        <div className="input">
                            <input type="description" name="" />
                        </div>
                        <h2> Categories</h2>

                        <div className="tick">
                            <h3>
                                Lifestyle:
                                <input
                                    type="checkbox"
                                    id="option-a"
                                    value="Lifestyle"
                                />
                            </h3>
                            <h3>
                                Self help:
                                <input
                                    type="checkbox"
                                    id="option-b"
                                    value="Selfhelp"
                                />
                            </h3>
                            <h3>
                                Novel:
                                <input
                                    type="checkbox"
                                    id="option-c"
                                    value="Novel"
                                />
                            </h3>
                            <h3>
                                Sport:
                                <input
                                    type="checkbox"
                                    id="option-d"
                                    value="Sport"
                                />
                            </h3>
                        </div>

                        <button type="upload" onClick={onClickBtn}>
                            {" "}
                            Upload
                        </button>
                    </form>
                </div>
                <Sidebar />
            </div>
        </>
    );
}

export default UploadPage;
