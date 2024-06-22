import React, {  useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from 'react-redux';
import './index.css';
// import PopularCategory from './PopularCategory';

import { fetchImages, fetchProduct } from '../../action/index';
import Excusivecategory from './Excusivecategory';
import About from './About';
import Offer from './Offer';
import Testimonial from './Testimonial';
import PotteryEnd from './PotteryEnd';
import Banner2 from './Banner2';
import Sliders from './Sliders';
import Banner3 from './Banner3';
import HeaderEndBar from '../Common/Header/HeaderEndBar';
import { getCategory } from '../../action/categoryAction';

function Home() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data.data);
  const products = useSelector(state => state.productData.data);
  const category = useSelector(state => state.categories)
 

  useEffect(() => {
    dispatch(fetchProduct());
    dispatch(fetchImages());
    dispatch(getCategory());
    
  }, [dispatch]);
  console.log("dsf", data);
  console.log("dsf__________", products);
  console.log('category @ home ' ,category)



 
  // const settingone = {
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   arrows: true,
  //   nextArrow: <NextArrow />,
  //   prevArrow: <PrevArrow />,
  //   autoplaySpeed: 3000,
  // };


 
  

  return (
    <>
     <HeaderEndBar  />
      <section className=" py-2">
        <div>

          <div 
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
             {data&&
          data.map((data, index) => (
            <div key={index} className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100 banner-img" 
                // src={data.image}
                src='/img/bannermain.webp'
                 alt={`Banner ${index + 1}`}  />
              </div>
            </div>
             ))} 
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>

      {/* <PopularCategory /> */}
      <Excusivecategory />
      <Banner2/>
      <section className="container-fluid py-4">
        <h3>Recently Viewed Stores</h3>
        <Sliders products={products}/>
      </section>
      <Banner3/>
      <section className="container-fluid py-4">
        <div>
          <h2 className="fw-bold fs-3" style={{ color: "#6B6363" }}>
            Shop by Occasion
          </h2>
        </div>
       <Sliders products={products}/>
      </section>
      <PotteryEnd/>
      <section>
        <div className="why-shine">
          <div className="container">
            <h2 className="text-center">Why Shine Decoration</h2>
          </div>
          <div className="container">
            <div className="row pt-4">
              <div className="col-lg-4">
                <div className="d-flex justify-content-center">
                  <img
                    src="https://www.ugaoo.com/cdn/shop/files/Packaging_2x_48553436-be2f-4d7a-a08e-495c8665abae_small.png?v=1656421502"
                    alt=""
                    style={{ width: "70px" }}
                  />
                </div>
                <p className="text-center">
                  Secure and Recyclable <br />
                  Packaging
                </p>
              </div>
              <div className="col-lg-4">
                <div className="d-flex justify-content-center">
                  <img
                    src="https://www.ugaoo.com/cdn/shop/files/Packaging_2x_48553436-be2f-4d7a-a08e-495c8665abae_small.png?v=1656421502"
                    alt=""
                    style={{ width: "70px" }}
                  />
                </div>
                <p className="text-center">
                  Secure and Recyclable <br />
                  Packaging
                </p>
              </div>
              <div className="col-lg-4">
                <div className="d-flex justify-content-center">
                  <img
                    src="https://www.ugaoo.com/cdn/shop/files/Packaging_2x_48553436-be2f-4d7a-a08e-495c8665abae_small.png?v=1656421502"
                    alt=""
                    style={{ width: "70px" }}
                  />
                </div>
                <p className="text-center">
                  Secure and Recyclable <br />
                  Packaging
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonial />
      <section className="py-3">
        <div className="shipping">
          <div className="container">
            <div className="row pt-4">
              <div className="col-lg-3">
                <div className="d-flex justify-content-center">
                  <img
                    src="https://www.ugaoo.com/cdn/shop/files/Packaging_2x_48553436-be2f-4d7a-a08e-495c8665abae_small.png?v=1656421502"
                    alt=""
                    style={{ width: "70px" }}
                  />
                </div>
                <p className="text-center">FREE SHIPPING</p>
              </div>
              <div className="col-lg-3">
                <div className="d-flex justify-content-center">
                  <img
                    src="https://www.ugaoo.com/cdn/shop/files/Packaging_2x_48553436-be2f-4d7a-a08e-495c8665abae_small.png?v=1656421502"
                    alt=""
                    style={{ width: "70px" }}
                  />
                </div>
                <p className="text-center">SAFE PAYMENT</p>
              </div>
              <div className="col-lg-3">
                <div className="d-flex justify-content-center">
                  <img
                    src="https://www.ugaoo.com/cdn/shop/files/Packaging_2x_48553436-be2f-4d7a-a08e-495c8665abae_small.png?v=1656421502"
                    alt=""
                    style={{ width: "70px" }}
                  />
                </div>
                <p className="text-center">ONTIME DELIVERY</p>
              </div>
              <div className="col-lg-3">
                <div className="d-flex justify-content-center">
                  <img
                    src="https://as1.ftcdn.net/v2/jpg/04/57/48/44/1000_F_457484457_VI3coEQISDa7zu2WuG5PhYF1Bkrla2Pt.jpg"
                    alt=""
                    style={{ width: "70px" }}
                  />
                </div>
                <p className="text-center">MADE IN INDIA</p>
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
