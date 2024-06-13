import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from 'react-redux';
import Slider from "react-slick";
import './index.css';
// import PopularCategory from './PopularCategory';
import { NextArrow, PrevArrow } from './Arrow';
import { fetchImages } from '../../action/index';
import Excusivecategory from './Excusivecategory';
import PopularCategory from './PopularCategory';
import About from './About';
import Offer from './Offer';
import Testimonial from './Testimonial';

function Home() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data.data);
 
  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  const product = [
    {
      img: "/img/Rectangle 128.png",
      title: "Cello Pack of 47 Opalware Dazzle Opalware Oleander Dinn...",
      titleth: "Green, Microwave Safe",
      price: "490",
    },
    {
      img: "/img/Rectangle 128.png",
      title: "Cello Pack of 47 Opalware Dazzle Opalware Oleander Dinn...",
      titleth: "Green, Microwave Safe",
      price: "490",
    },
    {
      img: "/img/Rectangle 128.png",
      title: "Cello Pack of 47 Opalware Dazzle Opalware Oleander Dinn...",
      titleth: "Green, Microwave Safe",
      price: "490",
    },
    {
      img: "/img/Rectangle 128.png",
      title: "Cello Pack of 47 Opalware Dazzle Opalware Oleander Dinn...",
      titleth: "Green, Microwave Safe",
      price: "490",
    },
    {
      img: "/img/Rectangle 128.png",
      title: "Cello Pack of 47 Opalware Dazzle Opalware Oleander Dinn...",
      titleth: "Green, Microwave Safe",
      price: "490",
    }
  ]

  const sliderone = useRef();
  const settingone = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplaySpeed: 3000,
  };


  const slider = useRef();
  const setting = {
    infinite: true,
    speed: 400,
    autoplay: true,
    slidesToShow: 5,
    arrows: false,
    slidesToScroll: 1,


    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <section className='container-fluid py-2'>
        <div>
          <Slider ref={sliderone} {...settingone} className="">
            {data && data.result && data.result.images &&
              data.result.images.map((image, index) => (
                <img key={index} src={image} alt={`Banner ${index + 1}`} />
              )
              )}
          </Slider>
        </div>
      </section>

      {/* <PopularCategory /> */}
      <Excusivecategory />

      <section className="container-fluid py-4">
        <h3>Recently Viewed Stores</h3>
        <div className="row">
          <div className="col-lg-3">
            <div className=" card-custom">
              <img src="/img/Rectangle 128.png" className="card-img-top" alt="Product" />
              <div className="card-body">
                <Link to='shop'> <h6 className="card-title" style={{ color: "#626161", fontSize: "14px" }}>Cello Pack of 47 Opalware Dazzle Opalware Oleander Dinn...</h6></Link>
                <span className="text-danger" style={{ fontSize: "12px" }}>Green, Microwave Safe</span>
                <p className="price" style={{ color: "#626161" }}>₹ 599</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className=" card-custom">
              <img src="/img/Rectangle 128.png" className="card-img-top" alt="Product" />
              <div className="card-body">
                <Link to='shop'> <h6 className="card-title" style={{ color: "#626161", fontSize: "14px" }}>Cello Pack of 47 Opalware Dazzle Opalware Oleander Dinn...</h6></Link>
                <span className="text-danger" style={{ fontSize: "12px" }}>Green, Microwave Safe</span>
                <p className="price" style={{ color: "#626161" }}>₹ 599</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className=" card-custom">
              <img src="/img/Rectangle 128.png" className="card-img-top" alt="Product" />
              <div className="card-body">
                <Link to='shop'> <h6 className="card-title" style={{ color: "#626161", fontSize: "14px" }}>Cello Pack of 47 Opalware Dazzle Opalware Oleander Dinn...</h6></Link>
                <span className="text-danger" style={{ fontSize: "12px" }}>Green, Microwave Safe</span>
                <p className="price" style={{ color: "#626161" }}>₹ 599</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className=" card-custom">
              <img src="/img/Rectangle 128.png" className="card-img-top" alt="Product" />
              <div className="card-body">
                <Link to='shop'> <h6 className="card-title" style={{ color: "#626161", fontSize: "14px" }}>Cello Pack of 47 Opalware Dazzle Opalware Oleander Dinn...</h6></Link>
                <span className="text-danger" style={{ fontSize: "12px" }}>Green, Microwave Safe</span>
                <p className="price" style={{ color: "#626161" }}>₹ 599</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='container-fluid py-4'>
        <div>
          <h2 className='fw-bold fs-3' style={{ color: "#6B6363" }}>Shop by Occasion</h2>
        </div>
        <div>
          <Slider ref={slider} {...setting} className="">
            {product.map((shop, index) => {
              const { title, img, price, titleth } = shop;
              return (
                <div className='col-md-3'>
                  <div className="px-2">
                    <div className=" card-custom">
                      <img src={img} className="card-img-top" alt="Product" />
                      <div className="card-body">
                        <h6 className="card-title" style={{ color: "#626161", fontSize: "14px" }}>{title}</h6>
                        <span className="text-danger" style={{ fontSize: "12px" }}>{titleth}</span>
                        <p className="price" style={{ color: "#626161" }}>₹{price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
      <section>
        <div className='why-shine'>
          <div className='container'>
            <h2 className='text-center'>Why Shine Decoration</h2>
          </div>
          <div className="container">
            <div className="row pt-4">
              <div className="col-lg-4">
                <div className='d-flex justify-content-center'>
                  <img src="https://www.ugaoo.com/cdn/shop/files/Packaging_2x_48553436-be2f-4d7a-a08e-495c8665abae_small.png?v=1656421502" alt="" style={{ width: "70px" }} />
                </div>
                <p className='text-center'>Secure and Recyclable  <br />Packaging</p>
              </div>
              <div className="col-lg-4">
                <div className='d-flex justify-content-center'>
                  <img src="https://www.ugaoo.com/cdn/shop/files/Packaging_2x_48553436-be2f-4d7a-a08e-495c8665abae_small.png?v=1656421502" alt="" style={{ width: "70px" }} />
                </div>
                <p className='text-center'>Secure and Recyclable  <br />Packaging</p>
              </div>
              <div className="col-lg-4">
                <div className='d-flex justify-content-center'>
                  <img src="https://www.ugaoo.com/cdn/shop/files/Packaging_2x_48553436-be2f-4d7a-a08e-495c8665abae_small.png?v=1656421502" alt="" style={{ width: "70px" }} />
                </div>
                <p className='text-center'>Secure and Recyclable  <br />Packaging</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonial />
      <section className='py-3'>
        <div className='shipping'>
          <div className="container">
            <div className="row pt-4">
              <div className="col-lg-3">
                <div className='d-flex justify-content-center'>
                  <img src="https://www.ugaoo.com/cdn/shop/files/Packaging_2x_48553436-be2f-4d7a-a08e-495c8665abae_small.png?v=1656421502" alt="" style={{ width: "70px" }} />
                </div>
                <p className='text-center'>FREE SHIPPING</p>
              </div>
              <div className="col-lg-3">
                <div className='d-flex justify-content-center'>
                  <img src="https://www.ugaoo.com/cdn/shop/files/Packaging_2x_48553436-be2f-4d7a-a08e-495c8665abae_small.png?v=1656421502" alt="" style={{ width: "70px" }} />
                </div>
                <p className='text-center'>SAFE PAYMENT</p>
              </div>
              <div className="col-lg-3">
                <div className='d-flex justify-content-center'>
                  <img src="https://www.ugaoo.com/cdn/shop/files/Packaging_2x_48553436-be2f-4d7a-a08e-495c8665abae_small.png?v=1656421502" alt="" style={{ width: "70px" }} />
                </div>
                <p className='text-center'>ONTIME DELIVERY</p>
              </div>
              <div className="col-lg-3">
                <div className='d-flex justify-content-center'>
                  <img src="https://as1.ftcdn.net/v2/jpg/04/57/48/44/1000_F_457484457_VI3coEQISDa7zu2WuG5PhYF1Bkrla2Pt.jpg" alt="" style={{ width: "70px" }} />
                </div>
                <p className='text-center'>MADE IN INDIA</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Offer />
    </>
  );
}
export default Home;
