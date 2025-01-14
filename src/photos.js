import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "./media/img1.jpg";
import img2 from "./media/img2.jpg";
import img3 from "./media/img3.jpg";
import img4 from "./media/img4.jpg";
import img5 from "./media/img5.jpg";
import img6 from "./media/img6.jpg";
import img7 from "./media/img7.jpg";
import img8 from "./media/img8.jpg";
import img9 from "./media/img9.jpg";
import img10 from "./media/img10.jpg";
import { Link } from "react-router-dom";

function PhotoSlideshow() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slideshow">
      <h1>Our Memories Together 💖</h1>
      <Slider {...settings}>
        <div>
          <img src={img1} alt="Memory 1" />
        </div>
        <div>
          <img src={img2} alt="Memory 2" />
        </div>
        <div>
          <img src={img3} alt="Memory 3" />
        </div>
        <div>
          <img src={img4} alt="Memory 4" />
        </div>
        <div>
          <img src={img5} alt="Memory 5" />
        </div>
        <div>
          <img src={img6} alt="Memory 6" />
        </div>
        <div>
          <img src={img7} alt="Memory 7" />
        </div>
        <div>
          <img src={img8} alt="Memory 8" />
        </div>
        <div>
          <img src={img9} alt="Memory 9" />
        </div>
        <div>
          <img src={img10} alt="Memory 10" />
        </div>
      </Slider>
      <p></p>
      <Link to="/videos" className="button">Videossssssss</Link>
    </div>
  );
}

export default PhotoSlideshow;
