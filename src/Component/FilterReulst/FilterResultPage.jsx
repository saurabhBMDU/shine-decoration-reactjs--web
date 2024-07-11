import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { FaRegStarHalfStroke as HalfStar } from "react-icons/fa6";
import { FaStar as FullStar} from "react-icons/fa6";
import { FaRegStar as EmptyStar } from "react-icons/fa6";
import '../SearchResult/searchResult.css'

const FilterResultPage = () => {
    const {id } = useParams()
    const products = useSelector(state =>state.filteredProducts?.products?.products)
    console.log(products,'filterrrr')
  return (
    <>
        <section>
        <div className="first-box first-box-banner">
        
    </div>
    <h2 className="badge text-bg-warning py-2 fs-1 mx-auto d-flex justify-content-center ">{id}</h2>
    <div className="s-container">
        {products && products.map(product => {
            return (
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

            )
        })}
       
    </div>

        </section>
    </>
  )
};

export default FilterResultPage;
