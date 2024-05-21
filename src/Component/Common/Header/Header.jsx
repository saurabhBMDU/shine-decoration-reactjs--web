import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import './header.css'

function Header() {


  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const currentURL = location.pathname;
  if (
    currentURL === '/login' ||
    currentURL === '/register'
  ) {
    return null
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="gi-header">
        <div className="header-top">
          <div className="container-fluid">
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
                    <Link to="/" className="gi-header-btn gi-wish-toggle">
                      <div className="header-icon"><i className="fa-regular fa-heart"></i></div>
                      <span className="gi-header-count gi-wishlist-count">3</span>
                    </Link>
                    <Link to="/" className="gi-header-btn gi-cart-toggle">
                      <div className="header-icon"><i className="fa-solid fa-cart-shopping"></i>
                        <span className="main-label-note-new"></span>
                      </div>
                      <span className="gi-header-count gi-cart-count">3</span>
                    </Link>
                    <button onClick={toggleSidebar} className="gi-header-btn gi-site-menu-icon d-lg-none">
                      <i className="fa-solid fa-bars"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {isSidebarOpen && (
            <div className="sidebar">
              <button onClick={toggleSidebar} className="close-btn">&times;</button>
              <nav>
                <ul>
                  <div className="category-dropdown px-2">
                    <li className="d-flex justify-content-between text-black border-bottom" onClick={toggleDropdown}>Shop by category
                      <span>{isOpen ? '−' : '+'}</span>
                    </li>
                    {isOpen && (
                      <div className="dropdown">
                        <ul>
                          <li><Link to="/">Bone China</Link></li>
                          <li><Link to="/">Wooden</Link></li>
                          <li><Link to="/">Ceramic</Link></li>
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="px-2">
                    <li className="border-bottom"><Link to="/profile">Profile</Link></li>
                  </div>
                  <div className="px-2">
                    <li className="border-bottom"><Link to="/profile">Order</Link></li>
                  </div>
                  <div className="px-2">
                    <li className="border-bottom"><Link to="/profile">Logout</Link></li>
                  </div>
                </ul>
              </nav>
            </div>
          )}
        </div>

        <div className="gi-header-bottom d-lg-block">
          <div className="container-fluid position-relative">
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
                    <Link to="/" className="gi-header-btn gi-wish-toggle" title="Wishlist">
                      <div className="gi-btn-desc">
                        <i className="fa-solid fa-filter text-center py-2"></i>
                        <span className="gi-btn-stitle">Filter</span>
                      </div>
                    </Link>
                    <div className="gi-acc-drop">
                      <Link to="/" className="gi-header-btn mt-1 gi-header-user dropdown-toggle gi-user-toggle"
                        title="Account">
                        <div className="gi-btn-desc">
                          <i className="fa-regular fa-user text-center py-2"></i>
                          <span className="gi-btn-stitle">Profile</span>
                        </div>
                      </Link>
                      <ul className="gi-dropdown-menu">
                        <li><Link className="dropdown-item" to="/">Register</Link></li>
                        <li><Link>Login</Link></li>
                      </ul>
                    </div>
                    <Link to="/" className="gi-header-btn gi-wish-toggle" title="Wishlist">
                      <div className="gi-btn-desc">
                        <i className="fa-regular fa-heart text-center py-2"></i>
                        <span className="gi-btn-stitle">wishlilst</span>
                      </div>
                    </Link>
                    <Link to="/" className="gi-header-btn gi-cart-toggle" title="Cart">
                      <div className="gi-btn-desc mt-1">
                        <i className="fa-solid fa-bag-shopping text-center py-2"></i>
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
          <div className="container-fluid">
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
                            <Link to="/" className="dropdown-arrow d-flex justify-content-center">Bone China</Link>
                          </li>
                          <li className="dropdown drop-list" style={{ width: "130px", borderRight: "1px solid #E1AB0A" }} >
                            <div className='d-flex justify-content-center'>
                              <img src="https://rukminim2.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100" alt="" style={{ width: "60px", borderRadius: "10px" }} />
                            </div>
                            <Link to="/" className="dropdown-arrow d-flex justify-content-center">Wooden</Link>
                          </li>
                          <li className="dropdown drop-list " style={{ width: "130px" }}>
                            <div className='d-flex justify-content-center'>
                              <img src="https://rukminim2.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100" alt="" style={{ width: "60px", borderRadius: "10px" }} />
                            </div>
                            <Link to="/" className="dropdown-arrow d-flex justify-content-center">Ceramic</Link>
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
      </header>
    </>
  )
}
export default Header;


