import React, { useEffect, useState } from "react";
import './compare.css';
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ComparisonPage = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    // Fetch the data from API and set the state
    fetch('your-api-endpoint')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  
  return (
    <>
    <section className=" " style={{width:'100'}}>
      
      <main className="d-flex justify-content-start align-item-center rowz mt-5 px-4 ">
        <section className="comp-index sticky" style={{bottom:'15px'}}>
          <span>
            Lorem, ipsum dolor s
          </span>
        </section>
        <section className="comp-box ">
          <Link to={'id'}>
           <img src="/img/pottery4.jpg" style={{width:'15rem', height:'12rem', objectFit:"cover"}} alt="" />
          </Link>
      
        </section>
      </main>

      <main className='d-flex justify-content-start align-item-center rowz sticky px-4 ' style={{top:'0rem',zIndex:10}}>
        <section className="comp-index">

        </section>
        <section className="comp-box">
        <div className="mt-4 sticky" style={{top:'4rem'}}>
            <div className="comp-box-productdetails">
                <span className="">Lorem ipsum dolor </span>
                span
            </div>
            <div className="comp-box-product-pricebox">
                <span> ₹25000</span>
                <span>3000</span>
                <span>40%</span>
            </div>
          </div>

        </section>
      </main>

      <main className="d-flex justify-content-start align-item-center rowz mt-5 px-4 ">
        <section className="comp-index ">
          <span>Ratings and Review</span>
        </section>
        <section className="comp-box">
          <div className="rating-icon badge text-bg-success  d-flex justify-content-start align-items-center gap-2" style={{width:'max-content', fontSize:'.8rem'}}>
          <FaStar size={15} color="white" /> 5
          </div>
          <p className="text-secondary">5333 ratings & 4333 Reviews</p>
        </section>
      </main>

      <main className="d-flex justify-content-start align-item-center rowz mt-5 px-4 ">
        <section className="comp-index ">
          <span>Highlights</span>
        </section>
        <section className="comp-box">
          <ul className="comp-highlights">
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit.</li>
          </ul>
        </section>
      </main>
      <main className="d-flex justify-content-start align-item-center rowz mt-5 px-4">
        <section className="comp-index">
         <span> Delivery</span>
        </section>
        <section className="comp-box">
          <p className="comp-delivery"><span>30 Aug</span>,monday </p>

        </section>
      </main >
      <main className="d-flex justify-content-start align-item-center rowz mt-5 px-4">
        <section className="comp-index">
          <span>
            specifications
          </span>
          <div className="mt-2 d-flex flex-column gap-2 text-capitalize">
            <span>dimensions</span>
            <span>color</span>
            <span>weight</span>
            <span>material</span>

          </div>
        </section>
        <section className="comp-box">
          <span className="mb-2"> </span>
          <div className="mt-4 d-flex flex-column gap-2">
            <span>	30" W x 30" D x 40" H</span>
            <span>Orange</span>
            <span>40 lbs</span>
            <span>Crystal, Metal</span>
          </div>


        </section>

      </main>
      <main className="d-flex justify-content-start align-item-center rowz mt-5 px-4">
        <section className="comp-index">

        </section>
        <section className="comp-box ">
          <Link to={'id'}>
           <img src="/img/pottery4.jpg" style={{width:'15rem', height:'12rem', objectFit:"cover"}} alt="" />
          </Link>
           <div className="comp-box-productdetails">
              <span className="">Lorem ipsum dolor </span>
              span
           </div>
           <div className="comp-box-product-pricebox">
              <span> ₹25000</span>
              <span>3000</span>
              <span>40%</span>
           </div>
           <div className="px-4 d-flex flex-column gap-2">
            <button className="px-4 py-3 text-white" style={{ background: "#FB641B", width: "180px" }}>       
                  <i className="fas fa-bolt px-2"></i>
                  BUY NOW
              </button>
              <button className="px-4 py-3 me-2 text-white" style={{ background: "#FF9F00", width: "180px" }}>
                     ADD TO CART
              </button>
                      
           </div>
        </section>
      </main>

    
      
    </section>
    </>
  
  );
};

export default ComparisonPage;
