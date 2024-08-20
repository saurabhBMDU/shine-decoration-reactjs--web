import React, { useEffect } from "react";
import Sliders from "./Sliders";
import { useDispatch } from "react-redux";
import { newProducts } from "../../action/productdetailaction";

const TopRatedproducts = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(newProducts())

  },[])

  return(
    <>
    <div>

    {/* <Sliders products={} /> */}
    </div>
    </>
  )

}

export default TopRatedproducts;
