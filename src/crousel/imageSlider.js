import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import "../crousel/image.css";
import images from "./images.js";
export default function SimpleSlider() {
  var settings = {
     dots: true,
    infinite: true,
    speed: 750,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed :2000,
    pauseOnHover:false,
    pauseOnDotsHover:true,
    arrows:false,

  };
  return (
    <Slider {...settings} className="slider">
      <div className="home_image">
      <img src ={images[0].src} />
      </div>
      <div className="home_image">
        <img src ={images[1].src} />
      </div>
      <div className="home_image">
      <img src ={images[2].src} />
      </div>

    </Slider>
  );
}

