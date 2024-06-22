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
        slidesToShow: 2,
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
    {products &&
            products.result.products &&
            products.result.products.map((product, index) => (
              <div key={index} className="px-2">
                <div className=" card-custom ">
                  <div className="position-relative card-img-container">
                   <img src={'https://gramic-store-demo.myshopify.com/cdn/shop/products/11.1.jpg?v=1593683051'} className="card-img-top" alt="Product" style={{ height: "240px",  }} />
                   <HeartButton/>
                  </div>
                  <Link to={`/productdetail/${product._id}`}>
                    <div className="card-body" style={{width:'100%'}}>
                      <h6 className="card-title" style={{ color: "#626161", fontSize: "14px" }}>{product.category} Ripple Vase</h6>
                      <span className="text-danger" style={{ fontSize: "12px" }}>{product.description}</span>
                      <p className="price" style={{ color: "#626161" }}>₹ {product.mrp_price}</p>
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
