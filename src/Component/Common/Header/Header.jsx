import { SearchBar } from './SearchBar';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import './header.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../../action/getCartAction';
import { getWishlist } from '../../../action/wishListAciton';
import { getUser } from '../../../action/authaction';
import { FaRegUserCircle } from 'react-icons/fa';





function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [SidebarOpen, setSidebarOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const cartQuantity = useSelector(state=>state?.CartData?.data?.totalQuantity)
  const wishListQuantity = useSelector(state=>state?.WishlistData?.data?.totalItem)
  const currentURL = location.pathname;
  const user = useSelector(state => state?.getUser?.user)
 
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(getCart())
    dispatch(getWishlist())
  },[dispatch ,cartQuantity])

  useEffect(() => {
    if (!user) {
      dispatch(getUser());
    }
  }, [dispatch, user]); 
  

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
                    <Link to="/wishlist" className="gi-header-btn gi-wish-toggle">
                      <div className="header-icon"><i className="fa-regular fa-heart"></i></div>
                      <span className="gi-header-count gi-wishlist-count">3</span>
                    </Link>
                    <Link to="/cart" className="gi-header-btn gi-cart-toggle">
                      <div className="header-icon"><i className="fa-solid fa-cart-shopping"></i>
                        <span className="main-label-note-new"></span>
                      </div>
                      <span className="gi-header-count gi-cart-count">{cartQuantity}</span>
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
              <SearchBar   SidebarOpen={SidebarOpen} handleCloseSidebar={handleCloseSidebar}  />

                  </div>
                </div>
                <div className="gi-header-action align-self-center">
                  <div className="gi-header-bottons">
                    {/* <!-- Header User Start --> */}
                  {user?(
                     <Link to="/" className="gi-header-btn gi-wish-toggle" title="home">
                     <div className="gi-btn-desc d-flex flex-col align-items-end py-2 justify-content-center " style={{gap:'8px', }}>
                     <FaRegUserCircle color=' #EDB70B ' size={23}  className='text-center align-self-center'/>
                       <span className="gi-btn-stitle" style={{ color: "#EDB70B" }}>{user.name}</span>
                     </div>
                   </Link>
                  ):(
                    null
                  )}
                    <div className="gi-acc-drop">
                      <Link to="/" className="gi-header-btn mt-1 gi-header-user dropdown-toggle gi-user-toggle"
                        title="Account">
                        <div className="gi-btn-desc">
                          <i className="fa-regular fa-user text-center py-2" style={{ color: "#EDB70B" }}></i>
                          <span className="gi-btn-stitle" style={{ color: "#EDB70B" }}>Profile</span>
                        </div>
                      </Link>
                      
                      <ul className="gi-dropdown-menu">
                        {user ? (
                             <li><Link className="dropdown-item" to="/logout">logout</Link></li>

                        ):(
                          <>
                          <li><Link className="dropdown-item" to="/register">Register</Link></li>
                          <li><Link to={"/login"}>Login</Link></li>
                          </>
                        )}
                     
                      </ul>
                    </div>
                   
                    <Link to="/wishlist" className="gi-header-btn gi-wish-toggle" title="Wishlist">
                      <div className="gi-btn-desc">
                      <span className=" badge-ab ">{wishListQuantity && wishListQuantity}</span>
                        <i className="fa-regular fa-heart text-center py-2" style={{ color: "#EDB70B", }}></i>
                        <span className="gi-btn-stitle" style={{ color: "#EDB70B" }}>wishlilst</span>
                      </div>
                    </Link>
                    <Link to="/cart" className="gi-header-btn gi-cart-toggle" title="Cart">
                      <div className="gi-btn-desc">
                      <span className=" badge-ab ab-2 ">{cartQuantity? cartQuantity :0}</span>
                        <i className="fa-solid fa-bag-shopping text-center py-2" style={{ color: "#EDB70B" }}></i>
                        <span className="gi-btn-stitle" style={{ color: "#EDB70B" }}>Cart</span>
                      </div>
                    </Link>
                    <div className="gi-header-action align-self-center" style={{cursor:"pointer"}}>      
                      <div className="px-2 d-flex justify-content-center px-3" style={{ padding: "5px 0px" ,cursor:"pointer" }} 
                        onClick={handleToggleSidebar}>
                        <span className="gi-btn-stitle text-center p-1" style={{ color: "#EDB70B", marginRight:'2px', fontSize:'.8rem' }}>FILTER</span>
                        <img src="/img/Vector.png" alt="" className='d-flex justify-content-center position-relative align-top ' style={{ width: "22px", top: "5px", height: "20px" }} />
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


