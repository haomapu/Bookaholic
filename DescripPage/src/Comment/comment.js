import { useState } from 'react'
import "./comment.css"
import Ava from './heof.jpg'
import AllComments from '../allComments/allComments'
import { v4 } from 'uuid'

export default function Comment() {
  const [cmt, setCmt] = useState([])
  const [textInput, setTextInput] = useState("")
  const onTextInputchange = (e) => {
    setTextInput(e.target.value);
  }  
  const onClickBtn = (e) => {
    setCmt([...cmt, {id: v4(), name: textInput, isCompleted: false}]) 
  }
  return (
    <div class="all">
      <div class="comment">
        <img class="ava" src={Ava} alt=""></img>
        <input class="cmt" placeholder="Write the comment..."  onChange={onTextInputchange}></input>
        <button class="postBut" onClick={onClickBtn}>Post</button>
      </div>
        <AllComments cmt={cmt}/>
        <AllComments cmt={textInput}/>
    </div>
  )
}
