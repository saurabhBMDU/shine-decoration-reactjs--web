import React from "react";
import { Link, useParams } from "react-router-dom";
import './searchResult.css'
import { FaRegStarHalfStroke as HalfStar } from "react-icons/fa6";
import { FaStar as FullStar} from "react-icons/fa6";
import { FaRegStar as EmptyStar } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import NoResults from "./NoResults";
import ProductSlider from "../product slider/ProductSlider";

const SearchResult = () => {
    const param = useParams();
    const resultProducts = useSelector(state => state.filteredProducts?.products?.products || []);
    console.log(resultProducts)
   if(resultProducts.length<1){
    return(
        <>
          <div className="notfound">
            <div className="text-center " style={{paddingTop:'0rem'}}>
                <img  className="noimg" src="/img/search-not-found.png"  alt="" />
                <h1 style={{margin:0, lineHeight:'15px'}} className="text-white">We couldn't find any matches!</h1>
                <p style={{fontSize:'.8rem' ,marginTop:'2rem', color:'white'}}>Please check the spelling or try searching something else</p>
            </div>
            <div>
                <NoResults/>
            </div>
          </div>
        </>
    )
   }


  return (
    <>
   <section>
    {/* <div className="first-box">
        <div className="fs-5 ml-4 ">Results for "{param.id}"</div>
    </div> */}
    <div className="s-container ">
        {resultProducts && <ProductSlider products={resultProducts}/>}

           {/* {resultProducts && resultProducts.map(product=>(
                <main key={product._id}>
                <div className="s-pic-container">
                    <img src={product.productImage} alt="blank" />
                </div>
                <div className="s-text-main-container">
                    <div className="s-text-container">
                        <Link>{product.product_name}</Link>
                        <div className="rating">
                            <div>
                               Rating : <FullStar size={18} className="" /> 5
                            </div>
                        </div>
    
                    </div>
                    <div className="s-price-details-container">
                        <div>
                            <h5 className="fs-md-3">₹{product.selling_price}</h5>
                            <h6 className="text-muted">M.R.P ₹{product.mrp_price}</h6>
                            <h6>
                            <span style={{fontWeight:500}} className="text-success">Save {((product.mrp_price - product.selling_price) / product.mrp_price) * 100}%</span> </h6>
                        </div>
                    </div>
                    <div className="s-button-container">
                        <button>add to cart</button>
                        <button> wishlist <FaRegHeart/>  </button>
                    </div>
                </div>
            </main>
           ))} */}
                

    
       
    </div>
   </section>
    </>
  )
};

export default SearchResult;
