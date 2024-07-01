import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import '../SearchResult/searchResult.css';
import { FaRegStarHalfStroke as HalfStar } from "react-icons/fa6";
import { FaStar as FullStar } from "react-icons/fa6";
import { FaRegStar as EmptyStar } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import Sliders from "../Home/Sliders";

const CategoryResult = () => {
    const { id } = useParams();
    const [relatedProducts, setRelatedProducts] = useState([]);
    const products = useSelector(state => state.productData.data);

    const sortProducts = () => {
        if (!products) return;

        let sortedProducts = products.result.products.filter((product) => product.category === id) || [];

        sortedProducts = sortedProducts.reduce((acc, product) => {
            acc.push(product);
            if (product.related_products) {
                acc.push(...product.related_products);
            }
            return acc;
        }, []);

        setRelatedProducts(sortedProducts);
    };

    useEffect(() => {
        sortProducts();
    }, [products, id]);

    return (
        <section>
            <div className="first-box">
                <div className="fs-5 ml-4">New arrivals of "{id}"</div>
            </div>
            <div className="s-container">
                {relatedProducts.map(product => (
                    <main key={product._id}>
                        <div className="s-pic-container">
                            <img src={product.productImage} alt="blank" />
                        </div>
                        <div className="s-text-main-container">
                            <div className="s-text-container">
                                <Link>{product.product_name}</Link>
                                <div className="rating">
                                    <div>
                                        Rating: <FullStar size={18} /> 5
                                    </div>
                                </div>
                            </div>
                            <div className="s-price-details-container">
                                <div>
                                    <h5 className="fs-md-3">₹{product.selling_price}</h5>
                                    <h6 className="text-muted">M.R.P ₹{product.mrp_price}</h6>
                                    <h6>
                                        <span style={{ fontWeight: 500 }} className="text-success">Save {((product.mrp_price - product.selling_price) / product.mrp_price * 100).toFixed(2)}%</span>
                                    </h6>
                                </div>
                            </div>
                            <div className="s-button-container">
                                <button>add to cart</button>
                                <button>wishlist <FaRegHeart /></button>
                            </div>
                        </div>
                    </main>
                ))}
            </div>
            <div className="mx-4">

                <Sliders products={products}/>
            </div>
        </section>
    );
};

export default CategoryResult;
