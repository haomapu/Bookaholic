import "./comment.css";
import Ava from "./heof.jpg";
import AllComments from "../allComments/allComments";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Comment({ book }) {
    let cmt;
    const [textInput, setTextInput] = useState("");
    const id = localStorage.getItem("id");
    const onTextInputchange = e => {
        setTextInput(e.target.value);
    };

    function postCmt(test) {
        axios.post("http://localhost:8000/comment/", test);
    }

    const onClickBtn = e => {
        cmt = textInput;
        console.log(cmt);

        const test = {
            description: cmt,
            book: book._id,
            user: id,
        };
        postCmt(test);
        window.location.reload();
    };

    const [data, setData] = useState();

    useEffect(() => {
        const fetchCmt = async () => {
            const res = await axios.get("http://localhost:8000/comment/");
            setData(res.data);
        };
        fetchCmt();
    }, []);

    return (
        <div className="all">
            <div className="comment">
                <img className="ava" src={Ava} alt=""></img>
                <input
                    className="cmt"
                    placeholder="Write the comment..."
                    onChange={onTextInputchange}
                ></input>
                <button className="postBut" onClick={onClickBtn}>
                    Post
                </button>
            </div>
            <div>
                {data
                    ? data.map((element, index) => {
                          if (book._id)
                              if (book._id === element.book)
                                  return (
                                      <AllComments cmt={element} key={index} />
                                  );
                          return null;
                      })
                    : null}
            </div>
        </div>
    );
}
