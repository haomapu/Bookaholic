import React from 'react'
import "./allComments.css"
import Ava from './heof.jpg'

export default function allComments({cmt}) {
  return (
    <div className="allCmted">
      <img className="avacmted" src={Ava} alt=""></img>
      <div className="user">
        <span className="username">Hao Pham</span>
        <span className="userCmt">{cmt}</span>
      </div>
    </div>
  )
}
