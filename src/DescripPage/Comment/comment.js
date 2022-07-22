import { useState } from 'react'
import "./comment.css"
import Ava from './heof.jpg'
import AllComments from '../allComments/allComments'

export default function Comment() {
  const [cmt, setCmt] = useState([])
  const [textInput, setTextInput] = useState("")
  const onTextInputchange = (e) => {
    setTextInput(e.target.value);
  }  
  const onClickBtn = (e) => {
    setCmt(current => [textInput, ...current])
  }

  return (
    <div className="all">
      <div className="comment">
        <img className="ava" src={Ava} alt=""></img>
        <input className="cmt" placeholder="Write the comment..."  onChange={onTextInputchange}></input>
        <button className="postBut" onClick={onClickBtn}>Post</button>
      </div>
        {cmt.map((element, index) => {
          return (
            <div key={index}>
              <AllComments cmt={element}/>
            </div>
          );
        })}
    </div>
  )
}
