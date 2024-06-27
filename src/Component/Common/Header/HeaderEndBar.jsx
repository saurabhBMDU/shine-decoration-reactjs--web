import React, {  useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../../Home/Arrow";
import { useSelector } from "react-redux";

const HeaderEndBar = () => {
  const category = useSelector(state => state.categories)
  useEffect(()=>{
    console.log(category)
  })

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
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          autoplay: true,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div
        className="d-flex justify-content-start align-items-baseline py-2"
        style={{
          backgroundColor: "#ededed",
          paddingLeft: "2rem",
        }}
      >
        <h5>SORT BY</h5>
        <select
          name=""
          id=""
          className="px-3 py-1 rounded border-0"
          style={{
            boxShadow: "0px 8px 10px 1px #b9b9b9",
            fontSize: "1rem",
            marginLeft: "1rem",
          }}
        >
          <option value="">Price Category</option>
        </select>
      </div>

      <div className="header-slider">
        <Slider {...settings}>
          {category &&
            category.categories &&
            category.categories.category.map((cat) => (
              <div className="dropdown drop-list position-static" key={cat._id}>
                <div className="d-flex justify-content-center">
                  <img
                  className="nav-headend-img"
                    src={cat.image}
                    alt={cat.name}
                  
                  />
                </div>
                <Link
                  to={`/${cat._id}`}
                  className="dropdown-arrow d-flex justify-content-center py-1 links text-dark font-weight-bold text-capitalize"
                >
                  {cat.name}
                </Link>
              </div>
            ))}
        </Slider>
      </div>
    </>
  );
};

export default HeaderEndBar;
