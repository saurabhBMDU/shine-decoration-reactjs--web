import React, { useCallback, useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { addWishList } from "../../action/productdetailaction";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";
import { API_URL } from "../../service/api";
import { removeFromWishlist } from "../../action/wishListAciton";

const HeartButton = ({ productId }) => {
    const dispatch = useDispatch();
    const products = useSelector(state=>state.productData.data.result);

    const [like, setLike] = useState(false);
    
    const handleAddToWishlist = useCallback(() => {
        console.count('calling add to wishlist');
        dispatch(addWishList(productId));
    }, [dispatch, productId]);

    const handleHeartButton = () => {
        setLike(prevLike => {
            const newLike = !prevLike;
            if (newLike) {
                handleAddToWishlist();
            }else{
             dispatch( removeFromWishlist(productId))
            }
            return newLike;
        });
    };







    return (
        <div className="heartbutton-container">
            {like ? (
                <FaHeart size={23} color="red" onClick={handleHeartButton} />
            ) : (
                <FaRegHeart size={23} onClick={handleHeartButton} />
            )}
        </div>
    );
};

export default HeartButton;
