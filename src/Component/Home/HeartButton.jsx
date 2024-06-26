import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const HeartButton = () => {
    const [like ,setLike] = useState(false)
  return (
    <div className="heartbutton-container">
        {like?(

            <FaHeart size={23} color="red" onClick={()=>{setLike(!like)}} />
        ):(
            <FaRegHeart size={23}  onClick={()=>{setLike(!like)}} />
        )}

    </div>
  )
};

export default HeartButton;
