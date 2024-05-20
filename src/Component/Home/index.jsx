import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './index.css';
// import PopularCategory from './PopularCategory';
import Excusivecategory from './Excusivecategory';

function Home() {

  const sliderone = useRef();
  const settingone = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
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
      <section className='container py-2'>
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

      <section className="container py-4">
        <div>
          <h2 className='fw-bold fs-3' style={{ color: "#6B6363" }}>New Product</h2>
        </div>
        <div className="row">
          <div className="col-6 col-lg-3 mt-2">
            <div className="slide-sec">
              <img src="https://images.pexels.com/photos/4706134/pexels-photo-4706134.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              <div className="slide-text">
                <p className="">Pitcher</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3 mt-2">
            <div className="slide-sec">
              <img src="https://images.pexels.com/photos/6739703/pexels-photo-6739703.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              <div className="slide-text">
                <p className="">Cup</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3 mt-2">
            <div className="slide-sec">
              <img src="https://images.pexels.com/photos/5302893/pexels-photo-5302893.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              <div className="slide-text">
                <p className="">Plates</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3 mt-2">
            <div className="slide-sec">
              <img src="https://images.pexels.com/photos/4502965/pexels-photo-4502965.jpeg?auto=compress&cs=tinysrgb&w=600D" alt="" />
              <div className="slide-text">
                <p className="">Plates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-3">
        <div>
          <h2 className='fw-bold fs-3' style={{ color: "#6B6363" }}>Popular Product</h2>
        </div>
        <div className="row">
          <div className="col-6 col-lg-3 mt-2">
            <div className="slide-sec">
              <img src="https://images.pexels.com/photos/4706134/pexels-photo-4706134.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              <div className="slide-text">
                <p className="">Pitcher</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3 mt-2">
            <div className="slide-sec">
              <img src="https://images.pexels.com/photos/6739703/pexels-photo-6739703.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              <div className="slide-text">
                <p className="">Cup</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3 mt-2">
            <div className="slide-sec">
              <img src="https://images.pexels.com/photos/5302893/pexels-photo-5302893.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              <div className="slide-text">
                <p className="">Plates</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3 mt-2">
            <div className="slide-sec">
              <img src="https://images.pexels.com/photos/4502965/pexels-photo-4502965.jpeg?auto=compress&cs=tinysrgb&w=600D" alt="" />
              <div className="slide-text">
                <p className="">Bowl</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='container py-4'>
        <div>
          <h2 className='fw-bold fs-3' style={{ color: "#6B6363" }}>Shop by Occasion</h2>
        </div>
        <div>
          <Slider ref={slider} {...setting} className="">
            <div className="gi-product-content px-2">
              <div className="gi-product-inner">
                <div className="gi-pro-image-outer">
                  <div className="gi-pro-image">
                    <Link to="/shop" className="image">
                      <span className="label veg">
                        <span className="dot"></span>
                      </span>
                      <img className="main-image" src="https://maraviyainfotech.com/wrapbootstrap/grabit-html/grabit-html/assets/img/product-images/6_1.jpg" alt="Product" />
                      <img className="hover-image" src="https://maraviyainfotech.com/wrapbootstrap/grabit-html/grabit-html/assets/img/product-images/6_2.jpg" alt="Product" />
                    </Link>
                    <span className="flags">
                      <span className="sale">Sale</span>
                    </span>
                    <div className="gi-pro-actions">
                      <Link className="gi-btn-group wishlist" title="Wishlist"><i className="fa-regular fa-heart"></i></Link>
                      <Link to="" title="Add To Cart" className="gi-btn-group add-to-cart"><i className="fa-solid fa-cart-plus"></i></Link>
                    </div>
                  </div>
                </div>
                <div className="gi-pro-content">
                  <Link to="/shop">
                    <h6 className="gi-pro-stitle">Dried Fruits</h6>
                  </Link>
                  <h5 className="gi-pro-title"><Link to="/shop">Mixed Nuts
                    Berries Pack</Link></h5>
                  <div className="gi-pro-rat-price">
                    <span className="gi-price">
                      <span className="new-price">$45.00</span>
                      <span className="old-price">$56.00</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="gi-product-content px-2">
              <div className="gi-product-inner">
                <div className="gi-pro-image-outer">
                  <div className="gi-pro-image">
                    <Link to="/shop" className="image">
                      <span className="label veg">
                        <span className="dot"></span>
                      </span>
                      <img className="main-image" src="https://maraviyainfotech.com/wrapbootstrap/grabit-html/grabit-html/assets/img/product-images/6_1.jpg" alt="Product" />
                      <img className="hover-image" src="https://maraviyainfotech.com/wrapbootstrap/grabit-html/grabit-html/assets/img/product-images/6_2.jpg" alt="Product" />
                    </Link>
                    <span className="flags">
                      <span className="sale">Sale</span>
                    </span>
                    <div className="gi-pro-actions">
                      <Link className="gi-btn-group wishlist" title="Wishlist"><i className="fa-regular fa-heart"></i></Link>
                      <Link to="" title="Add To Cart" className="gi-btn-group add-to-cart"><i className="fa-solid fa-cart-plus"></i></Link>
                    </div>
                  </div>
                </div>
                <div className="gi-pro-content">
                  <Link to="/shop">
                    <h6 className="gi-pro-stitle">Dried Fruits</h6>
                  </Link>
                  <h5 className="gi-pro-title"><Link to="/shop">Mixed Nuts
                    Berries Pack</Link></h5>
                  <div className="gi-pro-rat-price">
                    <span className="gi-price">
                      <span className="new-price">$45.00</span>
                      <span className="old-price">$56.00</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="gi-product-content px-2">
              <div className="gi-product-inner">
                <div className="gi-pro-image-outer">
                  <div className="gi-pro-image">
                    <Link to="/shop" className="image">
                      <span className="label veg">
                        <span className="dot"></span>
                      </span>
                      <img className="main-image" src="https://maraviyainfotech.com/wrapbootstrap/grabit-html/grabit-html/assets/img/product-images/6_1.jpg" alt="Product" />
                      <img className="hover-image" src="https://maraviyainfotech.com/wrapbootstrap/grabit-html/grabit-html/assets/img/product-images/6_2.jpg" alt="Product" />
                    </Link>
                    <span className="flags">
                      <span className="sale">Sale</span>
                    </span>
                    <div className="gi-pro-actions">
                      <Link className="gi-btn-group wishlist" title="Wishlist"><i className="fa-regular fa-heart"></i></Link>
                      <Link to="" title="Add To Cart" className="gi-btn-group add-to-cart"><i className="fa-solid fa-cart-plus"></i></Link>
                    </div>
                  </div>
                </div>
                <div className="gi-pro-content">
                  <Link to="/shop">
                    <h6 className="gi-pro-stitle">Dried Fruits</h6>
                  </Link>
                  <h5 className="gi-pro-title"><Link to="/shop">Mixed Nuts
                    Berries Pack</Link></h5>
                  <div className="gi-pro-rat-price">
                    <span className="gi-price">
                      <span className="new-price">$45.00</span>
                      <span className="old-price">$56.00</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="gi-product-content px-2">
              <div className="gi-product-inner">
                <div className="gi-pro-image-outer">
                  <div className="gi-pro-image">
                    <Link to="/shop" className="image">
                      <span className="label veg">
                        <span className="dot"></span>
                      </span>
                      <img className="main-image" src="https://maraviyainfotech.com/wrapbootstrap/grabit-html/grabit-html/assets/img/product-images/6_1.jpg" alt="Product" />
                      <img className="hover-image" src="https://maraviyainfotech.com/wrapbootstrap/grabit-html/grabit-html/assets/img/product-images/6_2.jpg" alt="Product" />
                    </Link>
                    <span className="flags">
                      <span className="sale">Sale</span>
                    </span>
                    <div className="gi-pro-actions">
                      <Link className="gi-btn-group wishlist" title="Wishlist"><i className="fa-regular fa-heart"></i></Link>
                      <Link to="" title="Add To Cart" className="gi-btn-group add-to-cart"><i className="fa-solid fa-cart-plus"></i></Link>
                    </div>
                  </div>
                </div>
                <div className="gi-pro-content">
                  <Link to="/shop">
                    <h6 className="gi-pro-stitle">Dried Fruits</h6>
                  </Link>
                  <h5 className="gi-pro-title"><Link to="/shop">Mixed Nuts
                    Berries Pack</Link></h5>
                  <div className="gi-pro-rat-price">
                    <span className="gi-price">
                      <span className="new-price">$45.00</span>
                      <span className="old-price">$56.00</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="gi-product-content px-2">
              <div className="gi-product-inner">
                <div className="gi-pro-image-outer">
                  <div className="gi-pro-image">
                    <Link to="/shop" className="image">
                      <span className="label veg">
                        <span className="dot"></span>
                      </span>
                      <img className="main-image" src="https://maraviyainfotech.com/wrapbootstrap/grabit-html/grabit-html/assets/img/product-images/6_1.jpg" alt="Product" />
                      <img className="hover-image" src="https://maraviyainfotech.com/wrapbootstrap/grabit-html/grabit-html/assets/img/product-images/6_2.jpg" alt="Product" />
                    </Link>
                    <span className="flags">
                      <span className="sale">Sale</span>
                    </span>
                    <div className="gi-pro-actions">
                      <Link className="gi-btn-group wishlist" title="Wishlist"><i className="fa-regular fa-heart"></i></Link>
                      <Link to="" title="Add To Cart" className="gi-btn-group add-to-cart"><i className="fa-solid fa-cart-plus"></i></Link>
                    </div>
                  </div>
                </div>
                <div className="gi-pro-content">
                  <Link to="/shop">
                    <h6 className="gi-pro-stitle">Dried Fruits</h6>
                  </Link>
                  <h5 className="gi-pro-title"><Link to="/shop">Mixed Nuts
                    Berries Pack</Link></h5>
                  <div className="gi-pro-rat-price">
                    <span className="gi-price">
                      <span className="new-price">$45.00</span>
                      <span className="old-price">$56.00</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
}
export default Home;
