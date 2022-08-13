import "./wishlist.css";
import Sidebar from "../../components/sidebar/Sidebar";
import ManageWishList from "../../components/manageWishList/ManageWishList";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Manage() {
    const [wishList, setWishList] = useState([]);
    useEffect(() => {
        const fetchWishList = async () => {
            const res = await axios.get("http://localhost:8000/book");
            setWishList(res.data);
        };
        fetchWishList();
    }, []);
    return (
        <>
            <div className="wishList">
                <div className="wishListP">
                    <div className="wishListTitle">WishList</div>
                    <div className="wishListBook">
                        {wishList.map((b, i) => (
                            <ManageWishList wishBook={b} key={i} />
                        ))}
                    </div>
                </div>
                <Sidebar />
            </div>
        </>
    );
}
