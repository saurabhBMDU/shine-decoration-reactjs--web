import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Footer() {

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
      <footer className="gi-footer m-t-40">
        <div className="footer-container">
          <div className="footer-top padding-tb-80">
            <div className="container">
              <div className="row m-minus-991">
                <div className="col-sm-12 col-lg-3 gi-footer-cat wow fadeInUp">
                  <div className="gi-footer-widget gi-footer-company">
                    <img src="/img/shinedecoration-logo.png" className="gi-footer-logo" alt="footer logo" />
                    <p className="gi-footer-detail">Grabit is the biggest market of grocery products. Get your
                      daily
                      needs from our store.</p>
                    {/* <div className="gi-app-store">
                      <Link to="#" className="app-img"><img src="assets/img/app/android.png" className="adroid"
                        alt="apple" /></Link>
                      <Link to="#" className="app-img"><img src="assets/img/app/apple.png" className="apple"
                        alt="apple" /></Link>
                    </div> */}
                  </div>
                </div>
                <div className="col-sm-12 col-lg-2 gi-footer-info wow fadeInUp" data-wow-delay="0.2s">
                  <div className="gi-footer-widget">
                    <h4 className="gi-footer-heading">Category</h4>
                    <div className="gi-footer-links gi-footer-dropdown">
                      <ul className="align-itegi-center">
                        <li className="gi-footer-link"><Link to="shop-left-sidebar-col-3.html">Dairy &
                          Milk</Link></li>
                        <li className="gi-footer-link"><Link to="shop-banner-left-sidebar-col-3.html">Snack &
                          Spice</Link></li>
                        <li className="gi-footer-link"><Link to="shop-full-width-col-5.html">Fast Food</Link>
                        </li>
                        <li className="gi-footer-link"><Link to="shop-list-left-sidebar.html">Juice &
                          Drinks</Link></li>
                        <li className="gi-footer-link"><Link to="shop-list-full-col-2.html">Bakery</Link></li>
                        <li className="gi-footer-link"><Link
                          to="shop-banner-right-sidebar-col-4.html">Seafood</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-2 gi-footer-account wow fadeInUp" data-wow-delay="0.3s">
                  <div className="gi-footer-widget">
                    <h4 className="gi-footer-heading">Company</h4>
                    <div className="gi-footer-links gi-footer-dropdown">
                      <ul className="align-itegi-center">
                        <li className="gi-footer-link"><Link to="about-us.html">About us</Link></li>
                        <li className="gi-footer-link"><Link to="track-order.html">Delivery</Link></li>
                        <li className="gi-footer-link"><Link to="privacy-policy.html">Legal Notice</Link></li>
                        <li className="gi-footer-link"><Link to="terms-condition.html">Terms & conditions</Link>
                        </li>
                        <li className="gi-footer-link"><Link to="checkout.html">Secure payment</Link></li>
                        <li className="gi-footer-link"><Link to="contact-us.html">Contact us</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-2 gi-footer-service wow fadeInUp" data-wow-delay="0.4s">
                  <div className="gi-footer-widget">
                    <h4 className="gi-footer-heading">Account</h4>
                    <div className="gi-footer-links gi-footer-dropdown">
                      <ul className="align-itegi-center">
                        <li className="gi-footer-link"><Link to="register.html">Sign In</Link></li>
                        <li className="gi-footer-link"><Link to="cart.html">View Cart</Link></li>
                        <li className="gi-footer-link"><Link to="privacy-policy.html">Return Policy</Link></li>
                        <li className="gi-footer-link"><Link to="#">Become a Vendor</Link></li>
                        <li className="gi-footer-link"><Link to="#">Affiliate Program</Link></li>
                        <li className="gi-footer-link"><Link to="checkout.html">Payments</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-3 gi-footer-cont-social wow fadeInUp" data-wow-delay="0.5s">
                  <div className="gi-footer-contact">
                    <div className="gi-footer-widget">
                      <h4 className="gi-footer-heading">Contact</h4>
                      <div className="gi-footer-links gi-footer-dropdown">
                        <ul className="align-itegi-center">
                          <li className="gi-footer-link gi-foo-call">
                            <span className='mt-3'>
                              <i className="fa-solid fa-location-dot"></i>
                            </span>
                            <p>2548 Broaddus Maple Court, Madisonville KY 4783, USA.</p>
                          </li>
                          <li className="gi-footer-link gi-foo-call">
                            <span>
                              <i className="fa-brands fa-whatsapp"></i>
                            </span>
                            <Link to="tel:+009876543210">+00 9876543210</Link>
                          </li>
                          <li className="gi-footer-link gi-foo-mail">
                            <span>
                              <i className="fa-regular fa-envelope"></i>
                            </span>
                            <Link to="mailto:example@email.com">example@email.com</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="gi-footer-social">
                    <div className="gi-footer-widget">
                      <div className="gi-footer-links gi-footer-dropdown">
                        <ul className="align-itegi-center">
                          <li className="gi-footer-link"><Link to="#"><i className="fa-brands fa-facebook-f"></i></Link></li>
                          <li className="gi-footer-link"><Link to="#"><i className="fa-brands fa-x-twitter"></i></Link></li>
                          <li className="gi-footer-link"><Link to="#"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                          <li className="gi-footer-link"><Link to="#"><i className="fa-brands fa-instagram"></i></Link></li>
                          <li className="gi-footer-link"><Link to="#"><i className="fa-brands fa-youtube"></i></Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="row">
                <div className="gi-copy">Copyright © <Link className="site-name" to="/" style={{ color: "#E1AB0A", fontWeight: "500" }}>Shine decoration </Link>
                  all
                  rights reserved. Powered by  <Link className="site-name" to="/" style={{ color: "#E1AB0A", fontWeight: "500" }}>BMDU </Link>.</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
