import "./comment.css"
import Ava from './heof.jpg'
import AllComments from '../allComments/allComments'
import axios from "axios";
import { useEffect, useState } from "react";

export default function Comment({book}) {
  const [cmt, setCmt] = useState()
  const [textInput, setTextInput] = useState("")

  const onTextInputchange = (e) => {
    setTextInput(e.target.value);
  }  

  const onClickBtn = (e) => {
    setCmt(textInput)
    const test = {
      description: cmt,
      book: book._id,
      user: '62f7086cc2db18080d236e4d'
    }
    postCmt(test)
  }
  //console.log(book)
  function postCmt(test) {
    let url = "http://localhost:8000/comment/";
    axios.post(url , test);
  }

  const [data, setData] = useState()

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
        <input className="cmt" placeholder="Write the comment..."  onChange={onTextInputchange}></input>
        <button className="postBut" onClick={onClickBtn}>Post</button>
      </div>
      <div>
        {data? data.map((element, index) => {
          if (book._id)
            if (book._id === element.book)
              return <AllComments cmt={element} key={index}/> ;
            return;
        }) : null}
        
      </div>
    </div>
  )
}
