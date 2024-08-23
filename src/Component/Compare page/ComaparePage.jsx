import React, { useEffect, useRef, useState } from "react";
import './compare.css';
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

// Component for Top Product Box
const CompBoxTopProduct = ({ id, image }) => {
  return (
    <section className="comp-box">
      <Link to={`/product/${id}`}>
        <img src={image} style={{ width: '15rem', height: '12rem', objectFit: "cover" }} alt="" />
      </Link>
    </section>
  );
};

// Component for Second Price Details
const CompBoxSecondPriceDetails = () => {
  return (
    <section className="comp-box">
      <div className="mt-4 sticky" style={{ top: '4rem' }}>
        <div className="comp-box-productdetails">
          <span className="">Lorem ipsum dolor</span>
        </div>
        <div className="comp-box-product-pricebox">
          <span> ₹25000</span>
          <span>3000</span>
          <span>40%</span>
        </div>
      </div>
    </section>
  );
};

// Component for Ratings and Reviews
const CompRatingAndReview = () => {
  return (
    <section className="comp-box">
      <div className="rating-icon badge text-bg-success d-flex justify-content-start align-items-center gap-2" style={{ width: 'max-content', fontSize: '.8rem' }}>
        <FaStar size={15} color="white" /> 5
      </div>
      <p className="text-secondary">5333 ratings & 4333 Reviews</p>
    </section>
  );
};

// Component for Highlights
const CompHighlights = () => {
  return (
    <section className="comp-box">
      <ul className="comp-highlights">
        <li>Lorem ipsum dolor sit.</li>
        <li>Lorem ipsum dolor sit.</li>
        <li>Lorem ipsum dolor sit.</li>
      </ul>
    </section>
  );
};

// Component for Delivery Information
const CompDelivery = () => {
  return (
    <section className="comp-box">
      <p className="comp-delivery"><span>30 Aug</span>, Monday </p>
    </section>
  );
};

// Component for Specifications
const CompSpecifications = () => {
  return (
    <section className="comp-box">
      <span className="mb-2">Specifications:</span>
      <div className="mt-4 d-flex flex-column gap-2">
        <span>30" W x 30" D x 40" H</span>
        <span>Orange</span>
        <span>40 lbs</span>
        <span>Crystal, Metal</span>
      </div>
    </section>
  );
};

// Component for Last Box
const CompLastBox = ({ lastboxRef }) => {
  return (
    <section className="comp-box" ref={lastboxRef}>
      <Link to={'/product/id'}>
        <img src="/img/pottery4.jpg" style={{ width: '15rem', height: '12rem', objectFit: "cover" }} alt="" />
      </Link>
      <div className="comp-box-productdetails">
        <span className="">Lorem ipsum dolor</span>
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
  );
};

// Main Comparison Page Component
const ComparisonPage = () => {
  const [products, setProducts] = useState([]);
  const lastboxRef = useRef(null);
  const stickydivRef = useRef(null);

  const observerCallback = (entries) => {
    entries.forEach(entry => {
      const stickydiv = stickydivRef.current;
      if (entry.isIntersecting) {
        stickydiv.classList.add('sticky2');
      } else {
        stickydiv.classList.remove('sticky2');
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      threshold: .1
    });

    if (lastboxRef.current) {
      observer.observe(lastboxRef.current);
    }

    return () => {
      if (lastboxRef.current) {
        observer.unobserve(lastboxRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Fetch the data from API and set the state
    fetch('your-api-endpoint') // Replace with your actual API endpoint
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <section style={{ width: '100%' }}>
      <main className="d-flex justify-content-start align-item-center rowz mt-5 px-4 ">
        <section className="comp-index sticky" style={{ bottom: '15px' }}>
          <span>Lorem, ipsum dolor s</span>
        </section>
        <CompBoxTopProduct id='12' image='/img/pottery4.jpg' />
      </main>

      <main className='d-flex justify-content-start align-item-center rowz sticky px-4 ' ref={stickydivRef} style={{ top: '0rem', zIndex: 20 }}>
        <section className="comp-index"></section>
        <CompBoxSecondPriceDetails />
      </main>

      <main className="d-flex justify-content-start align-item-center rowz px-4 ">
        <section className="comp-index">
          <span>Ratings and Review</span>
        </section>
        <CompRatingAndReview />
      </main>

      <main className="d-flex justify-content-start align-item-center rowz px-4 ">
        <section className="comp-index">
          <span>Highlights</span>
        </section>
        <CompHighlights />
      </main>

      <main className="d-flex justify-content-start align-item-center rowz px-4">
        <section className="comp-index">
          <span>Delivery</span>
        </section>
        <CompDelivery />
      </main>

      <main className="d-flex justify-content-start align-item-center rowz px-4">
        <section className="comp-index">
          <span>Specifications</span>
          <div className="mt-2 d-flex flex-column gap-2 text-capitalize">
            <span>Dimensions</span>
            <span>Color</span>
            <span>Weight</span>
            <span>Material</span>
          </div>
        </section>
        <CompSpecifications />
      </main>

      <main className="d-flex justify-content-start align-item-center rowz px-4">
        <section className="comp-index"></section>
        <CompLastBox lastboxRef={lastboxRef} />
      </main>
    </section>
  );
};

export default ComparisonPage;
