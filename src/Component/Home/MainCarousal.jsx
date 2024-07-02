import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NextArrow, PrevArrow } from './Arrow';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';

const MainCarousel = ({ data }) => {
  const settings = {
    dots: true,
    autoplay:true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    NextArrow: <IoIosArrowDroprightCircle  size={100} color='red' />  ,
    PrevArrow:<IoIosArrowDropleftCircle size={100} color='red'/>,
  };

  return (
    <Slider {...settings}>
      {data && data.map((item, index) => (
        <div key={index}>
          <img src={item.image} alt={`Banner ${index + 1}`} className="d-block w-100" />
        </div>
      ))}
    </Slider>
  );
};

export default MainCarousel;
