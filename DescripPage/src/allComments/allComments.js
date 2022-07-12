import React from 'react'
import "./allComments.css"
import Ava from './heof.jpg'

export default function allComments({cmt}) {
  return (
    <div class="allCmted">
      <img class="avacmted" src={Ava} alt=""></img>
      <div class="user">
        <span class="username">Hao Pham</span>
        <span class="userCmt">{cmt}</span>
      </div>
    </div>
  )
}
