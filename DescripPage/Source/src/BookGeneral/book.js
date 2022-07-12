import React from 'react'
import godfather from './godfather.jpg'
import './book.css'
import Sidebar from "../sidebar/sidebar";

export default function Book() {
  return (
    <div class="BookDes">
        <img class="BookPic" src={godfather} alt="Godfather" ></img>
        <div class="Des">
          <span class="Title">The Godfather</span>
          <span class="Author">Author: Mario Puzo</span>
          <span class="Description">The Godfather by Mario Puzo (Author), Illustrated by Robert Carter, Introduced by Jonathan Freedland. Mario Puzo’s brilliant and brutal story of Mafia feuds and retribution in post-war New York is published in a sensational new illustrated Folio Society edition, introduced...</span>   
          <div class="rateStar">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
          </div>
          <div class="Fav">    
            <button class="FavBut">Favorite</button>
            <button class="FavBut">Wishlist</button>
          </div>   
        </div>
        <Sidebar />
    </div>
  )
}
