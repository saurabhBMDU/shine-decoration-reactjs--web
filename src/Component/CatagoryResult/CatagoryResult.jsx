import React, { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import '../SearchResult/searchResult.css';
import { FaRegStarHalfStroke as HalfStar } from "react-icons/fa6";
import { FaStar as FullStar } from "react-icons/fa6";
import { FaRegStar as EmptyStar } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Sliders from "../Home/Sliders";
import { toast } from "react-toastify";
import axios from "axios";
import { API_URL } from "../../service/api";
import { filterProducts } from "../../action/filterAction";
import ProductSlider from "../product slider/ProductSlider";

const CategoryResult = () => {
    const { id } = useParams();
    const [relatedProducts, setRelatedProducts] = useState([]);
    const products = useSelector(state => state.filteredProducts?.products?.products);
    const allProducts = useSelector(state=>state.productData?.data?.result?.products)
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch()

 


    const flatendChildArray = useCallback(() => {
        if (!relatedProducts || relatedProducts.length === 0) return;

        const flattenedProducts = relatedProducts.reduce((acc, product) => {
            acc.push(product);
            if (product.related_products && product.related_products.length > 0) {
                acc.push(...product.related_products);
            }
            return acc;
        }, []);

        setRelatedProducts(flattenedProducts);
    }, [relatedProducts]);

    const getRelatedProducts = useCallback(async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                // toast.error('Please login');
                return;
            }

            setLoading(true); // Set loading state before the request

            const response = await axios.get(`${API_URL}/mobileApi/product/related-product/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.status === 200) {
                const { statusCode, message, result } = response.data; // Access data directly from response
                if (statusCode === 200) {
                    setRelatedProducts(result);
                    // toast.success('Data fetched successfully');
                } else {
                    toast.error(message);
                }
            } else {
                toast.error('Failed to fetch data');
            }
        } catch (error) {
            console.error('Error fetching related products:', error);
            toast.error('An error occurred while fetching data');
        } finally {
            setLoading(false); // Set loading state after the request completes
        }
    }, [id]);

    useEffect(() => {
        getRelatedProducts().then(flatendChildArray);
    }, [getRelatedProducts]);

    return (
        <>
            {loading ? (
                <div className="loader"></div>
            ) : (
                <section>
                    <div className="first-box">
                        <div className="fs-5 ml-4">New arrivals of "{id}"</div>
                    </div>
                    <div className="s-container">
                        {products && products.length > 0 ? (
                            <ProductSlider products={products}/>
                            // relatedProducts.map(product => (
                            //     <main key={product._id}>
                            //         <div className="s-pic-container">
                            //             <img src={product.productImage} alt="blank" />
                            //         </div>
                            //         <div className="s-text-main-container">
                            //             <div className="s-text-container">
                            //                 <Link>{product.product_name}</Link>
                            //                 <div className="rating">
                            //                     <div>
                            //                         Rating: <FullStar size={18} /> 5
                            //                     </div>
                            //                 </div>
                            //             </div>
                            //             <div className="s-price-details-container">
                            //                 <div>
                            //                     <h5 className="fs-md-3">₹{product.selling_price}</h5>
                            //                     <h6 className="text-muted">M.R.P ₹{product.mrp_price}</h6>
                            //                     <h6>
                            //                         <span style={{ fontWeight: 500 }} className="text-success">
                            //                             Save {((product.mrp_price - product.selling_price) / product.mrp_price * 100).toFixed(2)}%
                            //                         </span>
                            //                     </h6>
                            //                 </div>
                            //             </div>
                            //             <div className="s-button-container">
                            //                 <button>add to cart</button>
                            //                 <button>wishlist <FaRegHeart /></button>
                            //             </div>
                            //         </div>
                            //     </main>
                            // ))
                        ) : (
                            <p>No products found</p>
                        )}
                    </div>
                    <div className="mx-4">
                        <Sliders products={allProducts} />
                    </div>
                </section>
            )}
        </>
    );
};

export default CategoryResult;
