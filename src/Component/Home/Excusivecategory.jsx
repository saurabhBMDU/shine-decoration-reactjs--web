import React, { useRef } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from './Arrow';
import './index.css' // Import custom arrow components


function Excusivecategory() {

  const slider = useRef();
  const setting = {
    infinite: true,
    speed: 400,
    autoplay: false,
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
          <h2 className='fw-bold fs-3' style={{ color: "#6B6363" }}>Exclusive Product</h2>
        </div>
        <Slider ref={slider} {...setting} className="">
          <div className="px-2">
            <div className="slide-sec">
              <img src="https://cdn.shopify.com/s/files/1/2690/0106/files/squareplates_1_360x.jpg?v=1709638222" alt="" style={{ height: "474px" }} />
              <div className="slide-text">
                <p className="">Plates</p>
              </div>
            </div>
          </div>
          <div className="px-2">
            <div className="slide-sec">
              <img src="https://img.freepik.com/free-photo/still-life-glass-cups_23-2149646399.jpg?t=st=1715929850~exp=1715933450~hmac=4154e1154180ba972c613e1705bfeee4db6553074f51d61c6c60f1377022ebc5&w=360" alt="" style={{ height: "474px" }} />
              <div className="slide-text">
                <p className="">Glass</p>
              </div>
            </div>
          </div>
          <div className="px-2">
            <div className="slide-sec">
              <img src="https://images.pexels.com/photos/5302893/pexels-photo-5302893.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" style={{ height: "474px" }} />
              <div className="slide-text">
                <p className="">Plates</p>
              </div>
            </div>
          </div>
          <div className="px-2">
            <div className="slide-sec">
              <img src="https://cdn.shopify.com/s/files/1/2690/0106/products/DSC6230_360x.jpg?v=1680939115" alt="" style={{ height: "474px" }} />
              <div className="slide-text">
                <p className="">Plates</p>
              </div>
            </div>
          </div>
          <div className="px-2">
            <div className="slide-sec">
              <img src="https://cdn.shopify.com/s/files/1/2690/0106/files/candlestand_2_b5f5ef30-3158-4412-9ab5-9d53f466d6c8_360x.webp?v=1696861513" alt="" style={{ height: "474px" }} />
              <div className="slide-text">
                <p className="">Flower</p>
              </div>
            </div>
          </div>
        </Slider>
      </section>
    </>
  );
}
export default Excusivecategory;
