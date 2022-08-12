import React from "react";
import "./book.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { useState } from "react";

export default function Book({ SpecBook }) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

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
                            onClick={() => setRating(index)}
                            onMouseEnter={() => setHover(index)}
                            onMouseLeave={() => setHover(rating)}
                        >
                            <span className="star">&#9733;</span>
                        </button>
                    );
                })}
                <span className="rating">({rating})</span>
            </div>
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
                <span className="Description">{SpecBook.description}</span>
                <div>
                    <div className="Fav">
                        <button className="FavBut">Wishlist</button>
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
