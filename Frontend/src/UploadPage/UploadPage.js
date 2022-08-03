import "./UploadPage.css";
import axios from 'axios';
import { useEffect} from "react";
import Headers from "../components/header/Header";

function UploadPage() {
    const test = {
        "title": tilte,
        "publishedDate": null,
        "description": description,
        "genres": categories,
        "author": author
      }
    
    useEffect(() => {
        const postBook = async () => {
            const res = await axios.post("http://localhost:8000/book/post", test);
        };
        postBook();
    }, []);


    var categories = [];
    var tilte = '';
    var author = '';
    var description = '';

    function onClickBtn(){
        var arr = document.getElementsByTagName('input');
        tilte = arr[0].value;
        author = arr[1].value;
        description = arr[2].value;
        document.querySelectorAll('input[type = "checkbox"]:checked').forEach((cb) => categories.push(cb.value));
        alert(tilte);
        alert(author);
        alert(description);
        alert(categories);
    }

    return (
        <div>
            <Headers /> 
            <div className ="content">
                <h2> Upload</h2>
            </div>
            <form className="Form">
                <div className= "picture">
                    <img src="picture.jpg" alt=""/>
                    <button type ="add"> Add Pic</button>
                </div>
                <h2> Title</h2>
                <div className="input">
                    <input type = "text" name="" />
                </div>
                <h2> Author</h2>
                <div className="input">
                    <input type = "text" name="" />
                </div>
                <h2> Description</h2>
                <div className="input">
                    <input type = "description" name="" />
                </div>
                <h2> Categories</h2>

                <div className = "tick">
                    <h3>Lifestyle:<input type="checkbox" id = "option-a" value= "Lifestyle"/></h3>
                    <h3>Self help:<input type="checkbox" id = "option-b" value="Seflhelp"/></h3>
                    <h3>Novel:<input type="checkbox" id = "option-c" value="Novel"/></h3>
                    <h3>Sport:<input type="checkbox" id = "option-d" value="Sport"/></h3>
                </div>
                
                <button type ="upload" onClick = {onClickBtn}> Upload</button>
            </form> 
        </div>
    );
}

export default UploadPage;
