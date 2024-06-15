import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import './header.css';
import Sidebar from './sidebar'

function Header() {


  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [SidebarOpen, setSidebarOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const currentURL = location.pathname;
  if (
    currentURL === '/login' ||
    currentURL === '/register' ||
    currentURL === '/forgot'
  ) {
    return null
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleToggleSidebar = () => {
    setSidebarOpen(!SidebarOpen);
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
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
                    <Link to="/"><img src="/img/shinedecoration-logo.png" alt="Site Logo" style={{ width: "180px", height: "60px" }} /></Link>
                  </div>
                </div>
                <div className="align-self-center gi-header-search">
                  <div className="header-search ">
                    <form className="gi-search-group-form">
                      <input className="form-control gi-search-bar px-5" placeholder="Search Products..." type="text" />
                      <div className='position-absolute' style={{ left: "1px" }}>
                        <i className="fa-solid fa-magnifying-glass px-3" style={{ color: "#EDB70B" }}></i>
                      </div>
                      <div>
                        <div className="gi-header-action align-self-center" style={{cursor:"pointer"}}>
                          <div onClick={handleToggleSidebar} className="gi-header-btn gi-wish-toggle d-flex justify-content-center" title="Filter" style={{ border: "1px solid #EDB70B" }}>
                            <div className="px-2 d-flex justify-content-center px-3" style={{ padding: "5px 0px" }}>
                              <img src="/img/Vector.png" alt="" className='d-flex justify-content-center position-relative' style={{ width: "22px", top: "5px", height: "20px" }} />
                              <span className="gi-btn-stitle text-center p-1" style={{ color: "#EDB70B" }}>FILTER</span>
                            </div>
                          </div>
                        </div>
                        <Sidebar Open={SidebarOpen} onClose={handleCloseSidebar} />
                      </div>
                    </form>

                  </div>
                </div>
                <div className="gi-header-action align-self-center">
                  <div className="gi-header-bottons">
                    {/* <!-- Header User Start --> */}
                    <div className="gi-acc-drop">
                      <Link to="/" className="gi-header-btn mt-1 gi-header-user dropdown-toggle gi-user-toggle"
                        title="Account">
                        <div className="gi-btn-desc">
                          <i className="fa-regular fa-user text-center py-2" style={{ color: "#EDB70B" }}></i>
                          <span className="gi-btn-stitle" style={{ color: "#EDB70B" }}>Profile</span>
                        </div>
                      </Link>
                      <ul className="gi-dropdown-menu">
                        <li><Link className="dropdown-item" to="/register">Register</Link></li>
                        <li><Link to={"/login"}>Login</Link></li>
                      </ul>
                    </div>
                    <Link to="/" className="gi-header-btn gi-wish-toggle" title="Wishlist">
                      <div className="gi-btn-desc">
                        <i className="fa-regular fa-heart text-center py-2" style={{ color: "#EDB70B" }}></i>
                        <span className="gi-btn-stitle" style={{ color: "#EDB70B" }}>wishlilst</span>
                      </div>
                    </Link>
                    <Link to="/" className="gi-header-btn gi-cart-toggle" title="Cart">
                      <div className="gi-btn-desc">
                        <i className="fa-solid fa-bag-shopping text-center py-2" style={{ color: "#EDB70B" }}></i>
                        <span className="gi-btn-stitle" style={{ color: "#EDB70B" }}>Cart</span>
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
                          <li className="dropdown drop-list position-static" style={{ width: "140px", borderRight: "1px solid #EDB70B" }}>
                            <div className='d-flex justify-content-center'>
                              <img src="/img/Ellipse 53.png" alt="" style={{ width: "70px" }} />
                            </div>
                            <Link to="/" className="dropdown-arrow d-flex justify-content-center py-1">Bone China</Link>
                          </li>
                          <li className="dropdown drop-list position-static" style={{ width: "140px", borderRight: "1px solid #EDB70B" }}>
                            <div className='d-flex justify-content-center'>
                              <img src="/img/Ellipse 53.png" alt="" style={{ width: "70px" }} />
                            </div>
                            <Link to="/" className="dropdown-arrow d-flex justify-content-center py-1">Bone China</Link>
                          </li>
                          <li className="dropdown drop-list position-static" style={{ width: "140px", borderRight: "1px solid #EDB70B" }}>
                            <div className='d-flex justify-content-center'>
                              <img src="/img/Ellipse 53.png" alt="" style={{ width: "70px" }} />
                            </div>
                            <Link to="/" className="dropdown-arrow d-flex justify-content-center py-1">Bone China</Link>
                          </li>
                          <li className="dropdown drop-list" style={{ width: "140px", borderRight: "1px solid #EDB70B" }} >
                            <div className='d-flex justify-content-center'>
                              <img src="/img/Ellipse 53.png" alt="" style={{ width: "70px" }} />
                            </div>
                            <Link to="/" className="dropdown-arrow d-flex justify-content-center py-1">Wooden</Link>
                          </li>
                          <li className="dropdown drop-list " style={{ width: "140px" }}>
                            <div className='d-flex justify-content-center'>
                              <img src="/img/Ellipse 53.png" alt="" style={{ width: "70px" }} />
                            </div>
                            <Link to="/" className="dropdown-arrow d-flex justify-content-center py-1">Ceramic</Link>
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


