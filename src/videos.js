import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import vid1 from "./media/vid3.mp4";
import vid2 from "./media/vid2.mp4"; 
import vid3 from "./media/vid4.mp4";
import vid4 from "./media/vid5.mp4";// Import the second video
import vid5 from "./media/vid6.mp4";
import vid6 from "./media/vid7.mp4";
import vid7 from "./media/vid8.mp4";
import { Link } from "react-router-dom";


function VideoGallery() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="video-gallery">
      <h1>Our Special Moments 🎥</h1>
      <Slider {...settings}>
        <div>
          <video controls className="video-player">
            <source src={vid1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <video controls className="video-player">
            <source src={vid2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <video controls className="video-player">
            <source src={vid3} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <video controls className="video-player">
            <source src={vid4} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <video controls className="video-player">
            <source src={vid5} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <video controls className="video-player">
            <source src={vid6} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <video controls className="video-player">
            <source src={vid7} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </Slider>
      <p>    </p>
      <p>Now For The Best Part. Please click on the Next Button Baby❤️</p>
      <Link to="/valentine" className="button">EXCITEDDD!!!</Link>
    </div>
  );
}

export default VideoGallery;
