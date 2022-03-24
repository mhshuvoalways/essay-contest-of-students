import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EssayCompositioi from "../../../assets/images/essayComposition.jpg";
import Srijonsil from "../../../assets/images/srijonsil.jpg";

const Home = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full overflow-x-hidden">
      <Slider {...settings}>
        <div>
          <img src={EssayCompositioi} alt=""className="" />
        </div>
        <div>
          <img src={Srijonsil} alt=""  className=""/>
        </div>
      </Slider>
    </div>
  );
};

export default Home;
