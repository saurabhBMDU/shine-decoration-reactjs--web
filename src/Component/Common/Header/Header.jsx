import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import Login from '../../Auth/Login/login';
import { IoBagOutline } from "react-icons/io5";
import './header.css'

function Header() {

  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleShowLoginModal = () => setShowLoginModal(true);
  const handleCloseLoginModal = () => setShowLoginModal(false);
  const location = useLocation();
  const currentURL = location.pathname;
  if (
    currentURL === '/login' ||
    currentURL === '/register'
  ) {
    return null
  }

  return (
    <>
      <header className="gi-header">
        <div className="header-top">
          <div className="container">
            <div className="row align-itegi-center">
              <div className="col text-left header-top-left d-lg-block">
                <div className="header-top-social">
                  <div className="header-top-message">
                    World's Fastest Online Shopping Destination
                  </div>

                </div>
              </div>
              <div className="col text-center header-top-center">
              </div>
              <div className="col header-top-right d-none d-lg-block">
                <div className="header-top-right-inner d-flex justify-content-end">
                  <Link className="gi-help" to="faq.html">Help?</Link>
                  <Link className="gi-help" to="track-order.html">Track Order?</Link>
                </div>
              </div>
              <div className="col header-top-res d-lg-none">
                <div className="gi-header-bottons">
                  <div className="right-icons">
                    <Link to="login.html" className="gi-header-btn gi-header-user">
                      <div className="header-icon"><i className="fa-regular fa-user"></i></div>
                    </Link>
                    <Link to="wishlist.html" className="gi-header-btn gi-wish-toggle">
                      <div className="header-icon"><i className="fa-regular fa-heart"></i></div>
                      <span className="gi-header-count gi-wishlist-count">3</span>
                    </Link>
                    <Link to="javascript:void(0)" className="gi-header-btn gi-cart-toggle">
                      <div className="header-icon"><i className="fa-solid fa-cart-shopping"></i>
                        <span className="main-label-note-new"></span>
                      </div>
                      <span className="gi-header-count gi-cart-count">3</span>
                    </Link>
                    <Link to="javascript:void(0)" className="gi-header-btn gi-site-menu-icon d-lg-none">
                      <i className="fa-solid fa-bars"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="gi-header-bottom d-lg-block">
          <div className="container position-relative">
            <div className="row">
              <div className="gi-flex">
                <div className="align-self-center gi-header-logo">
                  <div className="header-logo">
                    <Link to="index.html"><img src="/img/shinedecoration-logo.png" alt="Site Logo" style={{ width: "180px", height: "60px" }} /></Link>
                  </div>
                </div>
                <div className="align-self-center gi-header-search">
                  <div className="header-search">
                    <form className="gi-search-group-form" action="#">
                      <input className="form-control gi-search-bar" placeholder="Search Products..." type="text" />
                      <button className="search_submit" type="submit" style={{ background: "#E1AB0A" }}><i className="fa-solid fa-magnifying-glass"></i></button>
                    </form>
                  </div>
                </div>
                <div className="gi-header-action align-self-center">
                  <div className="gi-header-bottons">
                    {/* <!-- Header User Start --> */}
                    <Link to="wishlist.html" className="gi-header-btn gi-wish-toggle" title="Wishlist">
                      <div className="gi-btn-desc">
                        <i className="fa-solid fa-filter text-center py-2"></i>
                        <span className="gi-btn-stitle">Filter</span>
                      </div>
                    </Link>
                    <div className="gi-acc-drop">
                      <Link to="javascript:void(0)" className="gi-header-btn mt-1 gi-header-user dropdown-toggle gi-user-toggle"
                        title="Account">
                        <div className="gi-btn-desc">
                          <i className="fa-regular fa-user text-center py-2"></i>
                          <span className="gi-btn-stitle">Profile</span>
                        </div>
                      </Link>
                      <ul className="gi-dropdown-menu">
                        <li><Link className="dropdown-item" to="/">Register</Link></li>
                        <li><Link onClick={handleShowLoginModal}>Login</Link></li>
                      </ul>
                    </div>
                    <Link to="wishlist.html" className="gi-header-btn gi-wish-toggle" title="Wishlist">
                      <div className="gi-btn-desc">
                        <i className="fa-regular fa-heart text-center py-2"></i>
                        <span className="gi-btn-stitle">wishlilst</span>
                      </div>
                    </Link>
                    <Link to="javascript:void(0)" className="gi-header-btn gi-cart-toggle" title="Cart">
                      <div className="gi-btn-desc mt-1">
                        <i class="fa-solid fa-bag-shopping text-center py-2"></i>
                        <span className="gi-btn-stitle">Cart</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="gi-header-cat d-none d-lg-block">
          <div className="container">
            <div className="gi-nav-bar">
              <div id="gi-main-menu-desk" className="d-none d-lg-block sticky-nav">
                <div className="nav-desk">
                  <div className="row">
                    <div className="col-md-12 align-self-center">
                      <div className="gi-main-menu">
                        <ul className='my-2' >
                          <li className="dropdown drop-list position-static" style={{ width: "130px", borderRight: "1px solid #E1AB0A" }}>
                            <div className='d-flex justify-content-center'>
                              <img src="https://rukminim2.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100" alt="" style={{ width: "60px", borderRadius: "10px" }} />
                            </div>
                            <Link to="javascript:void(0)" className="dropdown-arrow d-flex justify-content-center">Bone China</Link>
                          </li>
                          <li className="dropdown drop-list" style={{ width: "130px", borderRight: "1px solid #E1AB0A" }} >
                            <div className='d-flex justify-content-center'>
                              <img src="https://rukminim2.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100" alt="" style={{ width: "60px", borderRadius: "10px" }} />
                            </div>
                            <Link to="javascript:void(0)" className="dropdown-arrow d-flex justify-content-center">Wooden</Link>
                          </li>
                          <li className="dropdown drop-list " style={{ width: "130px" }}>
                            <div className='d-flex justify-content-center'>
                              <img src="https://rukminim2.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100" alt="" style={{ width: "60px", borderRadius: "10px" }} />
                            </div>
                            <Link to="javascript:void(0)" className="dropdown-arrow d-flex justify-content-center">Ceramic</Link>
                            {/* <ul className="sub-menu">
                              <li><Link to="blog-left-sidebar.html">left sidebar</Link></li>
                              <li><Link to="blog-right-sidebar.html">right sidebar</Link></li>
                            </ul> */}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Mobile Menu sidebar Start --> */}
        <div className="gi-mobile-menu-overlay"></div>
        <div id="gi-mobile-menu" className="gi-mobile-menu">
          <div className="gi-menu-title">
            <span className="menu_title">My Menu</span>
            <button className="gi-close-menu">×</button>
          </div>
          <div className="gi-menu-inner">
            <div className="gi-menu-content">
              <ul>
                <li className="dropdown drop-list">
                  <Link to="javascript:void(0)" className="dropdown-arrow">Home</Link>
                  <ul className="sub-menu">
                    <li><Link to="index.html">Grocery</Link></li>
                    <li><Link to="demo-2.html">Fashion</Link></li>
                  </ul>
                </li>

                <li><Link to="javascript:void(0)">Categories</Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="javascript:void(0)">Classic Variation</Link>
                      <ul className="sub-menu">
                        <li><Link to="shop-left-sidebar-col-3.html">Left sidebar 3 column</Link></li>
                        <li><Link to="shop-left-sidebar-col-4.html">Left sidebar 4 column</Link></li>
                        <li><Link to="shop-right-sidebar-col-3.html">Right sidebar 3 column</Link></li>
                        <li><Link to="shop-right-sidebar-col-4.html">Right sidebar 4 column</Link></li>
                        <li><Link to="shop-full-width.html">Full width 4 column</Link></li>
                      </ul>
                    </li>
                    <li>
                      <Link to="javascript:void(0)">Classic Variation</Link>
                      <ul className="sub-menu">
                        <li><Link to="shop-banner-left-sidebar-col-3.html">Banner left sidebar 3
                          column</Link></li>
                        <li><Link to="shop-banner-left-sidebar-col-4.html">Banner left sidebar 4
                          column</Link></li>
                        <li><Link to="shop-banner-right-sidebar-col-3.html">Banner right sidebar 3
                          column</Link></li>
                        <li><Link to="shop-banner-right-sidebar-col-4.html">Banner right sidebar 4
                          column</Link></li>
                        <li><Link to="shop-banner-full-width.html">Banner Full width 4 column</Link></li>
                      </ul>
                    </li>
                    <li>
                      <Link to="javascript:void(0)">Columns Variation</Link>
                      <ul className="sub-menu">
                        <li><Link to="shop-full-width-col-3.html">3 Columns full width</Link></li>
                        <li><Link to="shop-full-width-col-4.html">4 Columns full width</Link></li>
                        <li><Link to="shop-full-width-col-5.html">5 Columns full width</Link></li>
                        <li><Link to="shop-full-width-col-6.html">6 Columns full width</Link></li>
                        <li><Link to="shop-banner-full-width-col-3.html">Banner 3 Columns</Link></li>
                      </ul>
                    </li>
                    <li>
                      <Link to="javascript:void(0)">List Variation</Link>
                      <ul className="sub-menu">
                        <li><Link to="shop-list-left-sidebar.html">Shop left sidebar</Link></li>
                        <li><Link to="shop-list-right-sidebar.html">Shop right sidebar</Link></li>
                        <li><Link to="shop-list-banner-left-sidebar.html">Banner left sidebar</Link></li>
                        <li><Link to="shop-list-banner-right-sidebar.html">Banner right sidebar</Link></li>
                        <li><Link to="shop-list-full-col-2.html">Full width 2 columns</Link></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li><Link to="javascript:void(0)">Products</Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="javascript:void(0)">Product page</Link>
                      <ul className="sub-menu">
                        <li><Link to="product-left-sidebar.html">Product left sidebar</Link></li>
                        <li><Link to="product-right-sidebar.html">Product right sidebar</Link></li>
                      </ul>
                    </li>
                    <li>
                      <Link to="javascript:void(0)">Product accordion</Link>
                      <ul className="sub-menu">
                        <li><Link to="product-accordion-left-sidebar.html">left sidebar</Link></li>
                        <li><Link to="product-accordion-right-sidebar.html">right sidebar</Link></li>
                      </ul>
                    </li>
                    <li><Link to="product-full-width.html">product full width</Link></li>
                    <li><Link to="product-accordion-full-width.html">accordion full width</Link></li>
                  </ul>
                </li>
                <li className="dropdown"><Link to="javascript:void(0)">Blog</Link>
                  <ul className="sub-menu">
                    <li><Link to="blog-left-sidebar.html">Blog left sidebar</Link></li>
                    <li><Link to="blog-right-sidebar.html">Blog right sidebar</Link></li>
                    <li><Link to="blog-detail-left-sidebar.html">Blog detail left sidebar</Link></li>
                    <li><Link to="blog-detail-right-sidebar.html">Blog detail right sidebar</Link></li>
                    <li><Link to="blog-full-width.html">Blog full width</Link></li>
                    <li><Link to="blog-detail-full-width.html">Blog detail full width</Link></li>
                  </ul>
                </li>
                <li><Link to="javascript:void(0)">Others</Link>
                  <ul className="sub-menu">
                    <li><Link to="about-us.html">About Us</Link></li>
                    <li><Link to="contact-us.html">Contact Us</Link></li>
                    <li><Link to="cart.html">Cart</Link></li>
                    <li><Link to="checkout.html">Checkout</Link></li>
                    <li><Link to="compare.html">Compare</Link></li>
                    <li><Link to="faq.html">FAQ</Link></li>
                    <li><Link to="login.html">Login</Link></li>
                    <li><Link to="register.html">Register</Link></li>
                    <li><Link to="track-order.html">Track Order</Link></li>
                    <li><Link to="terms-condition.html">Terms Condition</Link></li>
                    <li><Link to="privacy-policy.html">Privacy Policy</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="header-res-lan-curr">
              {/* <!-- Social Start --> */}
              <div className="header-res-social">
                <div className="header-top-social">
                  <ul className="mb-0">
                    <li className="list-inline-item"><Link to="#"><i className="gicon gi-facebook"></i></Link></li>
                    <li className="list-inline-item"><Link to="#"><i className="gicon gi-twitter"></i></Link></li>
                    <li className="list-inline-item"><Link to="#"><i className="gicon gi-instagram"></i></Link></li>
                    <li className="list-inline-item"><Link to="#"><i className="gicon gi-linkedin"></i></Link></li>
                  </ul>
                </div>
              </div>
              {/* <!-- Social End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Mobile Menu sidebar End --> */}
      </header>

      <Login
        show={showLoginModal}
        handleClose={handleCloseLoginModal}
      // handleAdd={() => handleAdd()}
      />
    </>
  )
}
export default Header;


