import React from "react";
import Image1 from "../../../assets/images/carousel/1.jpeg";
import Image2 from "../../../assets/images/carousel/2.jpeg";
import Image3 from "../../../assets/images/carousel/3.jpeg";
import Image4 from "../../../assets/images/carousel/4.jpeg";

const Carousel = () => {
  return (
    <div className="mt-12 max-w-7xl px-4 sm:px-6 lg:px-8 m-auto">
      <div className="flex gap-2 flex-wrap">
        <div>
          <img src={Image1} alt="" className="w-72 h-80" />
        </div>
        <div>
          <img src={Image2} alt="" className="w-72 h-80" />
        </div>
        <div>
          <img src={Image3} alt="" className="w-72 h-80" />
        </div>
        <div>
          <img src={Image4} alt="" className="w-72 h-80" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
