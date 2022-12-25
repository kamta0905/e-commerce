import React from "react";
import Slider from "react-slick";
import Header from "./Header";
const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    className: "slider variable-width",
    speed: 500,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slideToScroll: 1,
  };
  return (
    <div>
      <Header />
      <div className="hero mt-5 p-5">
        <Slider {...settings}>
          <img src="assets/bg.jpg" alt="book cover" height={700} />

          <img src="assets/bg2.jpg" alt="book cover" height={700} />

          <img src="assets/bg3.jpg" alt="book cover" height={700} />
        </Slider>
      </div>
    </div>
  );
};

export default Home;
