import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "./Arrow";
import HeartButton from "./HeartButton";

const Sliders = ({products}) => {
    const setting = {
        infinite: true,
        speed: 400,
        autoplay: true,
        slidesToShow: 4,
        arrows: true, // Enable arrows
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1440,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              autoplay: false,
              infinite: true,
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              autoplay: false,
              infinite: true,
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              autoplay: false,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              autoplay: false,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              autoplay: false,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
    <Slider {...setting}>
    {
            products &&
            products.map((product, index) => (
              <div key={index} className="px-2">
                <div className=" card-custom ">
                  <div className="position-relative card-img-container">
                    <Link to={`/productdetail/${product._id}`}>
                    <img src={product.productImage} className="card-img-top" alt="Product" style={{ height: "240px",  }} />
                    </Link>    
                   <HeartButton productId={product._id}/>
                   <div className="product-badge"> </div>
                  </div>
                  <Link to={`/productdetail/${product._id}`}>
                    <div className="card-body" style={{width:'100%'}}>
                      <h6 className="card-title" style={{ color: "#626161", fontSize: "14px" }}>{product.product_name} </h6>
                      <span className="text-secondary slide-discription" style={{ fontSize: "12px" }}>{product.category}</span>
                      <div className='slider-price-container d-flex justify-content-start align-items-center'style={{gap:'10%'}} >
                        <h5 className='fs-4 text-dark' style={{fontWeight:700}}> ₹{product.selling_price }</h5>
                        <h6 className='text-secondary fs-6' style={{textDecoration:'line-through'}}> ₹{product.mrp_price} </h6>
                        <span className='fs-6 badge text-bg-warning text-center py-1'>{Math.ceil(((product.mrp_price - product.selling_price) / product.mrp_price) * 100).toFixed()}% off</span>
                      </div>
                      <p className="text-muted font-weight-bold" style={{fontSize:'.8rem'}}>Check delivery date and more details &gt;</p>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
    </Slider>
    </>
  )
};

export default Sliders;
