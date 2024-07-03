import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BArrow from './BannerArrow';


const MainCarousel = ({ data }) => {
  const settings = {
    infinite: true,
    speed: 400,
    autoplay: true,
    slidesToShow: 1,
    arrows: true,
    nextArrow: <BArrow direction="next" />,
    prevArrow: <BArrow direction="prev" />,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {data && data.map((item, index) => (
        <div key={index}>
          <img src={item.image} alt={`Banner ${index + 1}`} className="d-block "  style={{objectFit:'contain'}}/>
        </div>
      ))}
    </Slider>
  );
};

export default MainCarousel;
