import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../../Home/Arrow";
export function HeaderEndBar() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          autoplay: true,
          slidesToScroll: 1
        }
      }
    ]
  };
  return <> <div className='d-flex justify-content-start align-items-baseline py-2' style={{
      backgroundColor: "#ededed",
      paddingLeft: '2rem'
    }}>
          <h5>SORT BY</h5>
          <select name="" id="" className=' px-3 py-1 rounded border-0' style={{
        boxShadow: '0px 8px 10px  1px #b9b9b9',
        fontSize: '1rem',
        marginLeft: "1rem"
      }}>
            <option value="">Price Category</option>
          </select>
          
        </div>

        <div className="header-slider">
          <Slider {...settings}>
            <div className="dropdown drop-list position-static">
              <div className='d-flex justify-content-center'>
                <img src="/img/Ellipse 53.png" alt="" style={{
              width: "110px",
              height: 'auto'
            }} />
              </div>
              <Link to="/" className="dropdown-arrow d-flex justify-content-center py-1 links text-dark font-weight-bold text-captilize">Bone China</Link>
            </div>
            <div className="dropdown drop-list position-static">
              <div className='d-flex justify-content-center'>
                <img src="/img/Ellipse 53.png" alt="" style={{
              width: "110px",
              height: 'auto'
            }} />
              </div>
              <Link to="/" className="dropdown-arrow d-flex justify-content-center py-1 links text-dark font-weight-bold text-captilize">Bone China</Link>
            </div>
            <div className="dropdown drop-list position-static">
              <div className='d-flex justify-content-center'>
                <img src="/img/Ellipse 53.png" alt="" style={{
              width: "110px",
              height: 'auto'
            }} />
              </div>
              <Link to="/" className="dropdown-arrow d-flex justify-content-center py-1 links text-dark font-weight-bold text-captilize">Bone China</Link>
            </div>
            <div className="dropdown drop-list position-static">
              <div className='d-flex justify-content-center'>
                <img src="/img/Ellipse 53.png" alt="" style={{
              width: "110px",
              height: 'auto'
            }} />
              </div>
              <Link to="/" className="dropdown-arrow d-flex justify-content-center py-1 links text-dark font-weight-bold text-captilize">Bone China</Link>
            </div>
            <div className="dropdown drop-list position-static">
              <div className='d-flex justify-content-center'>
                <img src="/img/Ellipse 53.png" alt="" style={{
              width: "110px",
              height: 'auto'
            }} />
              </div>
              <Link to="/" className="dropdown-arrow d-flex justify-content-center py-1 links text-dark font-weight-bold text-captilize">Bone China</Link>
            </div>
            <div className="dropdown drop-list position-static">
              <div className='d-flex justify-content-center'>
                <img src="/img/Ellipse 53.png" alt="" style={{
              width: "110px",
              height: 'auto'
            }} />
              </div>
              <Link to="/" className="dropdown-arrow d-flex justify-content-center py-1 links text-dark font-weight-bold text-captilize">Bone China</Link>
            </div>
            <div className="dropdown drop-list position-static">
              <div className='d-flex justify-content-center'>
                <img src="/img/Ellipse 53.png" alt="" style={{
              width: "110px",
              height: 'auto'
            }} />
              </div>
              <Link to="/" className="dropdown-arrow d-flex justify-content-center py-1 links text-dark font-weight-bold text-captilize">Bone China</Link>
            </div>

            <div className="dropdown drop-list position-static">
              <div className='d-flex justify-content-center'>
                <img src="/img/Ellipse 53.png" alt="" style={{
              width: "110px",
              height: 'auto'
            }} />
              </div>
              <Link to="/" className="dropdown-arrow d-flex justify-content-center py-1 links text-dark font-weight-bold text-captilize">Bone China</Link>
            </div>
          </Slider>
      </div></>;
}
  