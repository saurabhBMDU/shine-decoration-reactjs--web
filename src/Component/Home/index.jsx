import React, {  useCallback, useEffect, useState } from 'react';
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
import { getUser } from '../../action/authaction';
import { toast } from 'react-toastify';
import axios from 'axios';
import { API_URL } from '../../service/api';
import MainCarousel from './MainCarousal';

function Home() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data.data);
  const products = useSelector(state => state.productData?.data?.result?.products);
  const category = useSelector(state => state.categories);
  const toaken = localStorage.getItem('token')
  // const recentProducts = useSelector(state => state.recentProducts?.products);
  const [recentProducts , setRecentProducts] = useState([])
 
  const getRecent = useCallback(async()=> {

   try {
      const token = localStorage.getItem('token');
      if(!token) {
          // toast.error('please login');
          return ;
      }
      const response = await axios.get(`${API_URL}/mobileApi/product/recently-view-product`, {
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
      }});
      const { statusCode, message, result } = response.data;
      
      if (statusCode === 200) {
          setRecentProducts(result.products);
          // toast.success('Recent products received');
      } else {
          toast.error(message);
      }
  } catch (error) {
      console.log('Error:',error ,'from jsx');
      toast.error('An error occurred while fetching recent products');
  }
}, []);

useEffect(() => {
  getRecent();
    dispatch(getUser());
    dispatch(getCategory());
    dispatch(fetchImages());
    
  }, [dispatch, getRecent]);
  console.log(recentProducts)
  // console.log("dsf", data);
  // console.log("dsf__________", products);
  // console.log('category @ home ' ,category)



 
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
      <section className=" pb-1 pt-2" >
        <div className='slider-container'>

        <MainCarousel data={data}/>
        </div>
      </section>

      {/* <PopularCategory /> */}
      <Excusivecategory />
      <Banner2/>
      {
        toaken ? (
          <section className="container-fluid py-4">
          <h3>Recently Viewed Stores</h3>
          <Sliders products={recentProducts}/>
        </section>
        ) :(
          <section className="container-fluid py-2">
          <h3>Latest Collection</h3>
          <Sliders products={products}/>
        </section>

        )
      }
     
      <Banner3/>
      <section className="container-fluid " >
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
