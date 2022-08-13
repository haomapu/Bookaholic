import React from "react";
import "./book.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { useState } from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Book({ SpecBook }) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const onClickBtn = () => {
        const id = localStorage.getItem("id");
        let url = "http://localhost:8000/user/" + id;

        axios.get(url).then(res => {
            const temp = res.data.wishlist;
            temp.push(SpecBook);
            const test = {
                wishlist: temp,
            };
            axios.put(url, test);
            window.location.reload();
        });
    };
    const [avgRating, setAvgRating] = useState()
    const url = "http://localhost:8000/book/" + SpecBook._id;

    useEffect(() => {
        const fetchRate = async () => {
            const res = await axios.get(url);
            setAvgRating(res.data.rating);
        };
        fetchRate();
    }, [url]);
    
    function rate(rating) {
        axios.get(url).then(res => {
            const temp = res.data.rating;
            temp.push(rating);
            const test = {
                rating: temp,
            };
            axios.put(url, test);
        });
    }
    function avg(){
        let sum = 0
        for (let i = 0; i < avgRating.length; i++){
            sum += avgRating[i];
        }
        return sum/avgRating.length
    }

    const StarRating = () => {
        return (
            <div className="star-rating">
                {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                        <button
                            type="button"
                            key={index}
                            className={
                                index <= (hover || rating) ? "on" : "off"
                            }
                            
                            onMouseEnter={() => setHover(index)}
                            onMouseLeave={() => setHover(rating)}
                            onClick={() => {setRating(index);
                                rate(index);}}
                        >
                            <span className="star">&#9733;</span>
                        </button>
                    );
                })}
                <span className="rating">({avgRating? avg(avgRating).toFixed(2) : 0})</span>
            </div>
        );
    };

    const ReadMore = ({ children }) => {
        const text = children;

        const [isReadMore, setIsReadMore] = useState(true);
        const toggleReadMore = () => {
            setIsReadMore(!isReadMore);
        };
        if (text == null) return;
        return (
            <p className="text">
                {isReadMore ? text.slice(0, 150) : text}
                <span onClick={toggleReadMore} className="read-or-hide">
                    {isReadMore ? "...read more" : " show less"}
                </span>
            </p>
        );
    };

    return (
        <div className="BookDes">
            <img
                className="BookPic"
                src={SpecBook.bookImg}
                alt="Godfather"
            ></img>
            <div className="Des">
                <span className="Title">{SpecBook.title}</span>
                <span className="Author">Author: {SpecBook.author}</span>
                <span className="Description">
                    <ReadMore>{SpecBook.description}</ReadMore>
                </span>
                <div>
                    <div className="Fav">
                        <button className="FavBut" onClick={onClickBtn}>
                            Wishlist
                        </button>
                    </div>
                    <div className="rateStar">
                        <StarRating />
                    </div>
                </div>
            </div>
            <Sidebar />
        </div>
    );
}
