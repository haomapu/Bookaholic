import React from "react";
import "./book.css";
import Sidebar from "../../components/sidebar/Sidebar";

import { useEffect, useState } from "react";
import axios from "axios";
var flag = 0;
let AuthorName = "";

export default function Book() {
    const [Title, setTitle] = useState("");
    const [Author, setAuthor] = useState("");
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    useEffect(() => {
        const fetchTitle = async () => {
            const res = await axios.get("http://localhost:5000/book");
            setTitle(res.data[0]);
        };
        fetchTitle();
    }, []);
    useEffect(() => {
        const fetchAuthor = async () => {
            const res = await axios.get("http://localhost:5000/author");
            setAuthor(res.data);
        };
        fetchAuthor();
    }, []);

    function getName() {
        Object.keys(Author).map(a => {
            if (Title.author === Author[a]._id && flag === 0) {
                AuthorName = Author[a].name;
                flag = 1;
            }
            return;
        });
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
                  className={index <= (hover || rating) ? "on" : "off"}
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
    getName()
    return (
        <div className="BookDes">
            <img
                className="BookPic"
                src="https://images-na.ssl-images-amazon.com/images/I/61cfS2XXyEL.jpg"
                alt="Godfather"
            ></img>
            <div className="Des">
                <span className="Title">{Title.title}</span>
                <span className="Author">Author: {AuthorName}</span>
                <span className="Description">{Title.description}</span>
                <div>
                    <div className="Fav">
                        <button className="FavBut">Favorite</button>
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
