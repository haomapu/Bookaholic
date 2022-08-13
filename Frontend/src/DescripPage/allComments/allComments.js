import React from 'react'
import "./allComments.css"
import Ava from './heof.jpg'
import { useEffect, useState } from "react";
import axios from "axios";

export default function AllComments({cmt}) {
  const [data, setData] = useState()
  useEffect(() => {
    const fetchCmt = async () => {
        const url = "http://localhost:8000/comment/";
        const res = await axios.get(url + cmt._id);
        setData(res.data);
    };
    fetchCmt();
  }, []);
  
  return (
    <div className="allCmted">
      <img className="avacmted" src={Ava} alt=""></img>
      <div className="user">
        <span className="username">{data? data.user.username : null}</span>
        <span className="userCmt">{data? data.description : null}</span>
      </div>
    </div>
  )
}
