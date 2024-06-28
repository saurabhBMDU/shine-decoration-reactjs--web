import React from "react";
import { Link, useParams } from "react-router-dom";
import './searchResult.css'
import { FaRegStarHalfStroke as HalfStar } from "react-icons/fa6";
import { FaStar as FullStar} from "react-icons/fa6";
import { FaRegStar as EmptyStar } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";

const SearchResult = () => {
    const param = useParams();
  return (
    <>
   <section>
    <div className="first-box">
        <div className="fs-5 ml-4 ">Results for "{param.id}"</div>
    </div>
    <div className="s-container">
        <main>
            <div className="s-pic-container">
                <img src="https://i.etsystatic.com/36181113/r/il/1fc0ff/4920503527/il_1080xN.4920503527_qrax.jpg" alt="" />
            </div>
            <div>
                <div className="s-text-container">
                    <Link>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, Lorem, ipsum dolor sit amet consectetur adipisicing elit. quod.</Link>
                    <div className="rating">
                        <div>
                           Rating : <FullStar size={18} className="" /> 5
                        </div>
                    </div>

                </div>
                <div className="s-price-details-container">
                    <div>
                        <h5 className="fs-3">$6999</h5>
                        <h6 className="text-muted">M.R.P $8999</h6>
                        <h6>
                        <span style={{fontWeight:500}} className="text-success">Save 22%</span> </h6>
                        
                    </div>

                </div>
                <div className="s-button-container">
                    <button>add to cart</button>
                    <button> wishlist <FaRegHeart/>  </button>
                </div>
            </div>
        </main>
        <main>
            <div className="s-pic-container">
                <img src="https://i.etsystatic.com/36181113/r/il/1fc0ff/4920503527/il_1080xN.4920503527_qrax.jpg" alt="" />
            </div>
            <div>
                <div className="s-text-container">
                    <Link>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, Lorem, ipsum dolor sit amet consectetur adipisicing elit. quod.</Link>
                    <div className="rating">
                        <div>
                           Rating : <FullStar size={18} className="" /> 5
                        </div>
                    </div>

                </div>
                <div className="s-price-details-container">
                    <div>
                        <h5 className="fs-3">$6999</h5>
                        <h6 className="text-muted">M.R.P $8999</h6>
                        <h6>
                        <span style={{fontWeight:500}} className="text-success">Save 22%</span> </h6>
                        
                    </div>

                </div>
                <div className="s-button-container">
                    <button>add to cart</button>
                    <button> wishlist <FaRegHeart/>  </button>
                </div>
            </div>
        </main>
        <main>
            <div className="s-pic-container">
                <img src="https://i.etsystatic.com/36181113/r/il/1fc0ff/4920503527/il_1080xN.4920503527_qrax.jpg" alt="" />
            </div>
            <div>
                <div className="s-text-container">
                    <Link>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, Lorem, ipsum dolor sit amet consectetur adipisicing elit. quod.</Link>
                    <div className="rating">
                        <div>
                           Rating : <FullStar size={18} className="" /> 5
                        </div>
                    </div>

                </div>
                <div className="s-price-details-container">
                    <div>
                        <h5 className="fs-3">$6999</h5>
                        <h6 className="text-muted">M.R.P $8999</h6>
                        <h6>
                        <span style={{fontWeight:500}} className="text-success">Save 22%</span> </h6>
                        
                    </div>

                </div>
                <div className="s-button-container">
                    <button>add to cart</button>
                    <button> wishlist <FaRegHeart/>  </button>
                </div>
            </div>
        </main>
        <main>
            <div className="s-pic-container">
                <img src="https://i.etsystatic.com/36181113/r/il/1fc0ff/4920503527/il_1080xN.4920503527_qrax.jpg" alt="" />
            </div>
            <div>
                <div className="s-text-container">
                    <Link>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, Lorem, ipsum dolor sit amet consectetur adipisicing elit. quod.</Link>
                    <div className="rating">
                        <div>
                           Rating : <FullStar size={18} className="" /> 5
                        </div>
                    </div>

                </div>
                <div className="s-price-details-container">
                    <div>
                        <h5 className="fs-3">$6999</h5>
                        <h6 className="text-muted">M.R.P $8999</h6>
                        <h6>
                        <span style={{fontWeight:500}} className="text-success">Save 22%</span> </h6>
                        
                    </div>

                </div>
                <div className="s-button-container">
                    <button>add to cart</button>
                    <button> wishlist <FaRegHeart/>  </button>
                </div>
            </div>
        </main>
        <main>
            <div className="s-pic-container">
                <img src="https://i.etsystatic.com/36181113/r/il/1fc0ff/4920503527/il_1080xN.4920503527_qrax.jpg" alt="" />
            </div>
            <div>
                <div className="s-text-container">
                    <Link>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, Lorem, ipsum dolor sit amet consectetur adipisicing elit. quod.</Link>
                    <div className="rating">
                        <div>
                           Rating : <FullStar size={18} className="" /> 5
                        </div>
                    </div>

                </div>
                <div className="s-price-details-container">
                    <div>
                        <h5 className="fs-3">$6999</h5>
                        <h6 className="text-muted">M.R.P $8999</h6>
                        <h6>
                        <span style={{fontWeight:500}} className="text-success">Save 22%</span> </h6>
                        
                    </div>

                </div>
                <div className="s-button-container">
                    <button>add to cart</button>
                    <button> wishlist <FaRegHeart/>  </button>
                </div>
            </div>
        </main>
        <main>
            <div className="s-pic-container">
                <img src="https://i.etsystatic.com/36181113/r/il/1fc0ff/4920503527/il_1080xN.4920503527_qrax.jpg" alt="" />
            </div>
            <div>
                <div className="s-text-container">
                    <Link>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, Lorem, ipsum dolor sit amet consectetur adipisicing elit. quod.</Link>
                    <div className="rating">
                        <div>
                           Rating : <FullStar size={18} className="" /> 5
                        </div>
                    </div>

                </div>
                <div className="s-price-details-container">
                    <div>
                        <h5 className="fs-3">$6999</h5>
                        <h6 className="text-muted">M.R.P $8999</h6>
                        <h6>
                        <span style={{fontWeight:500}} className="text-success">Save 22%</span> </h6>
                        
                    </div>

                </div>
                <div className="s-button-container">
                    <button>add to cart</button>
                    <button> wishlist <FaRegHeart/>  </button>
                </div>
            </div>
        </main>

    </div>
   </section>
    </>
  )
};

export default SearchResult;
