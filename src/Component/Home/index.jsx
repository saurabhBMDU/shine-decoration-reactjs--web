import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './index.css';
// import PopularCategory from './PopularCategory';
import { NextArrow, PrevArrow } from './Arrow';
import Excusivecategory from './Excusivecategory';
import PopularCategory from './PopularCategory';
import About from './About';
import Offer from './Offer';
import Testimonial from './Testimonial';

function Home() {

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
    slidesToShow: 4,
    arrows: false,
    slidesToScroll: 1,


    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
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
            <div className=''>
              <img src="https://images.squarespace-cdn.com/content/v1/638a549813e4ce689b4dcb03/be7b24ed-55c9-4035-8182-6f7236858496/Narumi-banner-79.png" alt="" className='w-100 rounded-1' />
            </div>
            <div className=''>
              <img src="https://nestasia.in/cdn/shop/files/N1.png?v=1715786111&width=2000" alt="" className='w-100 rounded-1' />
            </div>
          </Slider>
        </div>
      </section>

      {/* <PopularCategory /> */}
      <Excusivecategory />

      <section className="container-fluid py-4">
        <h3>Recently Viewed Stores</h3>
        <div className="row">
          <div className="col-lg-3">
            <div class=" card-custom">
              <img src="/img/Rectangle 137.png" class="card-img-top" alt="Product" />
              <div class="card-body">
                <Link to='shop'> <h6 class="card-title" style={{ color: "#626161" }}>Cello Pack of 47 Opalware Dazzle Opalware Oleander Dinn...</h6></Link>
                <p class="text-danger">Green, Microwave Safe</p>
                <p class="price" style={{ color: "#626161" }}>₹ 599</p>
                {/* <button class="btn btn-heart"><i class="fas fa-heart"></i></button> */}
                <Link href="#" class="d-block mt-2" style={{ color: "#626161" }}>Check Delivery Date and More Details</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div class=" card-custom">
              <img src="/img/Rectangle 128.png" class="card-img-top" alt="Product" />
              <div class="card-body">
                <Link></Link>
                <Link to='shop'> <h6 class="card-title" style={{ color: "#626161" }}>Cello Pack of 47 Opalware Dazzle Opalware Oleander Dinn...</h6></Link>
                <p class="text-danger">Green, Microwave Safe</p>
                <p class="price" style={{ color: "#626161" }}>₹ 599</p>
                {/* <button class="btn btn-heart"><i class="fas fa-heart"></i></button> */}
                <Link href="#" class="d-block mt-2" style={{ color: "#626161" }}>Check Delivery Date and More Details</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div class=" card-custom">
              <img src="/img/Rectangle 137.png" class="card-img-top" alt="Product" />
              <div class="card-body">
                <Link to='shop'> <h6 class="card-title" style={{ color: "#626161" }}>Cello Pack of 47 Opalware Dazzle Opalware Oleander Dinn...</h6></Link>
                <p class="text-danger">Green, Microwave Safe</p>
                <p class="price" style={{ color: "#626161" }}>₹ 599</p>
                {/* <button class="btn btn-heart"><i class="fas fa-heart"></i></button> */}
                <Link href="#" class="d-block mt-2" style={{ color: "#626161" }}>Check Delivery Date and More Details</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div class=" card-custom">
              <img src="/img/Rectangle 128.png" class="card-img-top" alt="Product" />
              <div class="card-body">
                <Link to='shop'> <h6 class="card-title" style={{ color: "#626161" }}>Cello Pack of 47 Opalware Dazzle Opalware Oleander Dinn...</h6></Link>
                <p class="text-danger">Green, Microwave Safe</p>
                <p class="price" style={{ color: "#626161" }}>₹ 599</p>
                {/* <button class="btn btn-heart"><i class="fas fa-heart"></i></button> */}
                <Link href="#" class="d-block mt-2" style={{ color: "#626161" }}>Check Delivery Date and More Details</Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="container-fluid py-4">
        <h3>Recently Viewed Stores</h3>
        <div className="row">
          <div className="col-lg-3">
            <div class=" card-custom">
              <img src="/img/Rectangle 128.png" class="card-img-top" alt="Product" />
              <div class="card-body">
                <Link to='shop'> <h6 class="card-title" style={{ color: "#626161" }}>Cello Pack of 47 Opalware Dazzle Opalware Oleander Dinn...</h6></Link>
                <p class="text-danger">Green, Microwave Safe</p>
                <p class="price" style={{ color: "#626161" }}>₹ 599</p>
                {/* <button class="btn btn-heart"><i class="fas fa-heart"></i></button> */}
                <Link href="#" class="d-block mt-2" style={{ color: "#626161" }}>Check Delivery Date and More Details</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div class=" card-custom">
              <img src="/img/Rectangle 128.png" class="card-img-top" alt="Product" />
              <div class="card-body">
                <Link to='shop'> <h6 class="card-title" style={{ color: "#626161" }}>Cello Pack of 47 Opalware Dazzle Opalware Oleander Dinn...</h6></Link>
                <p class="text-danger">Green, Microwave Safe</p>
                <p class="price" style={{ color: "#626161" }}>₹ 599</p>
                {/* <button class="btn btn-heart"><i class="fas fa-heart"></i></button> */}
                <Link href="#" class="d-block mt-2" style={{ color: "#626161" }}>Check Delivery Date and More Details</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div class=" card-custom">
              <img src="/img/Rectangle 128.png" class="card-img-top" alt="Product" />
              <div class="card-body">
                <Link to='shop'> <h6 class="card-title" style={{ color: "#626161" }}>Cello Pack of 47 Opalware Dazzle Opalware Oleander Dinn...</h6></Link>
                <p class="text-danger">Green, Microwave Safe</p>
                <p class="price" style={{ color: "#626161" }}>₹ 599</p>
                {/* <button class="btn btn-heart"><i class="fas fa-heart"></i></button> */}
                <Link href="#" class="d-block mt-2" style={{ color: "#626161" }}>Check Delivery Date and More Details</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div class=" card-custom">
              <img src="/img/Rectangle 128.png" class="card-img-top" alt="Product" />
              <div class="card-body">
                <Link to='shop'> <h6 class="card-title" style={{ color: "#626161" }}>Cello Pack of 47 Opalware Dazzle Opalware Oleander Dinn...</h6></Link>
                <p class="text-danger">Green, Microwave Safe</p>
                <p class="price" style={{ color: "#626161" }}>₹ 599</p>
                {/* <button class="btn btn-heart"><i class="fas fa-heart"></i></button> */}
                <Link href="#" class="d-block mt-2" style={{ color: "#626161" }}>Check Delivery Date and More Details</Link>
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
            <div className="px-2">
              <div class=" card-custom">
                <img src="/img/Rectangle 137.png" class="card-img-top" alt="Product" />
                <div class="card-body">
                  <Link to='shop'> <h6 class="card-title" style={{ color: "#626161" }}>Cello Pack of 47 Opalware Dazzle Opalware Oleander Dinn...</h6></Link>
                  <p class="text-danger">Green, Microwave Safe</p>
                  <p class="price" style={{ color: "#626161" }}>₹ 599</p>
                  {/* <button class="btn btn-heart"><i class="fas fa-heart"></i></button> */}
                  <Link href="#" class="d-block mt-2" style={{ color: "#626161" }}>Check Delivery Date and More Details</Link>
                </div>
              </div>
            </div>
            <div className="px-2">
              <div class=" card-custom">
                <img src="/img/Rectangle 128.png" class="card-img-top" alt="Product" />
                <div class="card-body">
                  <Link to='shop'> <h6 class="card-title" style={{ color: "#626161" }}>Cello Pack of 47 Opalware Dazzle Opalware Oleander Dinn...</h6></Link>
                  <p class="text-danger">Green, Microwave Safe</p>
                  <p class="price" style={{ color: "#626161" }}>₹ 599</p>
                  {/* <button class="btn btn-heart"><i class="fas fa-heart"></i></button> */}
                  <Link href="#" class="d-block mt-2" style={{ color: "#626161" }}>Check Delivery Date and More Details</Link>
                </div>
              </div>
            </div>
            <div className="px-2">
              <div class=" card-custom">
                <img src="/img/Rectangle 137.png" class="card-img-top" alt="Product" />
                <div class="card-body">
                  <Link to='shop'> <h6 class="card-title" style={{ color: "#626161" }}>Cello Pack of 47 Opalware Dazzle Opalware Oleander Dinn...</h6></Link>
                  <p class="text-danger">Green, Microwave Safe</p>
                  <p class="price" style={{ color: "#626161" }}>₹ 599</p>
                  {/* <button class="btn btn-heart"><i class="fas fa-heart"></i></button> */}
                  <Link href="#" class="d-block mt-2" style={{ color: "#626161" }}>Check Delivery Date and More Details</Link>
                </div>
              </div>
            </div>
            <div className="px-2">
              <div class=" card-custom">
                <img src="/img/Rectangle 128.png" class="card-img-top" alt="Product" />
                <div class="card-body">
                  <Link to='shop'> <h6 class="card-title" style={{ color: "#626161" }}>Cello Pack of 47 Opalware Dazzle Opalware Oleander Dinn...</h6></Link>
                  <p class="text-danger">Green, Microwave Safe</p>
                  <p class="price" style={{ color: "#626161" }}>₹ 599</p>
                  {/* <button class="btn btn-heart"><i class="fas fa-heart"></i></button> */}
                  <Link href="#" class="d-block mt-2" style={{ color: "#626161" }}>Check Delivery Date and More Details</Link>
                </div>
              </div>
            </div>
            <div className="px-2">
              <div class=" card-custom">
                <img src="/img/Rectangle 137.png" class="card-img-top" alt="Product" />
                <div class="card-body">
                  <Link to='shop'> <h6 class="card-title" style={{ color: "#626161" }}>Cello Pack of 47 Opalware Dazzle Opalware Oleander Dinn...</h6></Link>
                  <p class="text-danger">Green, Microwave Safe</p>
                  <p class="price" style={{ color: "#626161" }}>₹ 599</p>
                  {/* <button class="btn btn-heart"><i class="fas fa-heart"></i></button> */}
                  <Link href="#" class="d-block mt-2" style={{ color: "#626161" }}>Check Delivery Date and More Details</Link>
                </div>
              </div>
            </div>
            <div className="px-2">
              <div class=" card-custom">
                <img src="/img/Rectangle 128.png" class="card-img-top" alt="Product" />
                <div class="card-body">
                  <Link to='shop'> <h6 class="card-title" style={{ color: "#626161" }}>Cello Pack of 47 Opalware Dazzle Opalware Oleander Dinn...</h6></Link>
                  <p class="text-danger">Green, Microwave Safe</p>
                  <p class="price" style={{ color: "#626161" }}>₹ 599</p>
                  {/* <button class="btn btn-heart"><i class="fas fa-heart"></i></button> */}
                  <Link href="#" class="d-block mt-2" style={{ color: "#626161" }}>Check Delivery Date and More Details</Link>
                </div>
              </div>
            </div>
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
