import "./wishlist.css";
import Sidebar from "../../components/sidebar/Sidebar";
import ManageWishList from "../../components/manageWishList/ManageWishList";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Manage() {
    const [wishList, setWishList] = useState([]);
    const id = localStorage.getItem("id");
    let url = "http://localhost:8000/user/" + id;
    useEffect(() => {
        const fetchWishList = async () => {
            const res = await axios.get(url);
            setWishList(res.data);
        };
        fetchWishList();
    }, [url]);
    console.log(wishList.wishlist);
    return (
        <>
            <div className="wishList">
                <div className="wishListP">
                    <div className="wishListTitle">WishList</div>
                    <div className="wishListBook">
                        {wishList.wishlist
                            ? wishList.wishlist.map((b, i) => {
                                  if (b.pending === true)
                                      return (
                                          <ManageWishList
                                              wishBook={b}
                                              key={i}
                                          />
                                      );
                                  return null;
                              })
                            : null}
                    </div>
                </div>
                <Sidebar />
            </div>
        </>
    );
}
