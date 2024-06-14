import React, { useEffect, useRef } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from './Arrow';
import { Link } from 'react-router-dom';
import './index.css' // Import custom arrow components
import { fetchProduct } from '../../action/index';
import { useDispatch, useSelector } from 'react-redux';


function Excusivecategory() {
  const dispatch = useDispatch()
  const products = useSelector(state => state.productData.data);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch])

  const slider = useRef();
  const setting = {
    infinite: true,
    speed: 400,
    autoplay: false,
    slidesToShow: 5,
    arrows: true, // Enable arrows
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
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
          slidesToShow: 3,
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
      <section className="container-fluid py-4">
        <div>
          <h3>Products</h3>
        </div>
        <Slider ref={slider} {...setting} className="">
          {products && products.result.products &&
            products.result.products.map((product, index) => (
              <div key={index} className="px-2">
                <div className=" card-custom">
                  <img src={product.productImage} className="card-img-top" alt="Product" style={{ height: "200px" }} />
                  <div className="card-body">
                    <h6 className="card-title" style={{ color: "#626161", fontSize: "14px" }}>{product.category}</h6>
                    <span className="text-danger" style={{ fontSize: "12px" }}>{product.description}</span>
                    <p className="price" style={{ color: "#626161" }}>₹ {product.mrp_price}</p>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      </section>
    </>
  );
}
export default Excusivecategory;
