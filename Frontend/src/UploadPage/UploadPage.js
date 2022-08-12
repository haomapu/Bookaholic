import "./UploadPage.css";
import axios from "axios";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";

function UploadPage() {
    var categories = [];
    var link = "";
    var title = "";
    var author = "";
    var description = "";
    

    function postBook(test) {
        axios.post("http://localhost:8000/book/", test)
    }

    function onClickBtn() {
        var arr = document.getElementsByTagName("input");
        link = arr[0].value;
        title = arr[1].value;
        author = arr[2].value;
        description = arr[3].value;
        document
            .querySelectorAll('input[type = "checkbox"]:checked')
            .forEach(cb => categories.push(cb.value));
        var flag = 0;
        if(title === ""){
            alert("Can't fill blank title");
            flag = 1
        }
        if(author === ""){
            alert("Can't fill blank author");
            flag = 1
        }
        if(description === ""){
            alert("Can't fill blank description");
            flag = 1
        }
        var test = {
            title: title,
            publishedDate: null,
            description: description,
            genre: categories,
            author: author,
            bookImg: link
        }    
        postBook(test)
    }

    return (
        <>
            <Header />
            <div className="upload">
                <div className="uploadTitle">
                    <form className="Form">
                        <div className="content"> Upload</div>
                        <h2> Picture</h2>
                        <div className="input">
                            <input type="text" name="" placeholder="Please paste your link picture here"/>
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
                                Self-help:
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
                            <h3>
                                Study:
                                <input
                                    type="checkbox"
                                    id="option-e"
                                    value="Study"
                                />
                            </h3>
                            <h3>
                                Romance:
                                <input
                                    type="checkbox"
                                    id="option-f"
                                    value="Romance"
                                />
                            </h3>
                            <h3>
                                Mystery:
                                <input
                                    type="checkbox"
                                    id="option-g"
                                    value="Mystery"
                                />
                            </h3>
                            <h3>
                                History:
                                <input
                                    type="checkbox"
                                    id="option-h"
                                    value="History"
                                />
                            </h3>
                            <h3>
                                Stories:
                                <input
                                    type="checkbox"
                                    id="option-i"
                                    value="Stories"
                                />
                            </h3>
                            <h3>
                                Essays:
                                <input
                                    type="checkbox"
                                    id="option-j"
                                    value="Essays"
                                />
                            </h3>
                            <h3>
                                Cookbooks:
                                <input
                                    type="checkbox"
                                    id="option-k"
                                    value="Cookbooks"
                                />
                            </h3>
                            <h3>
                                Horror:
                                <input
                                    type="checkbox"
                                    id="option-l"
                                    value="Horror"
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
