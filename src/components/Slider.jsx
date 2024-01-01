import PropTypes from "prop-types";
// import SliderHelper from "./SliderHelper";
import React from "react";

const Slider = ({ perView = 3, speed = 500, loop = false, children }) => {
  return (
    <swiper-container
      autoplay-delay="5000"
      slides-per-view={perView}
      speed={speed}
      loop={loop}
      lazy={true}
    >
      {React.Children.map(children, (child, index) => (
        <swiper-slide key={index}>{child}</swiper-slide>
      ))}
    </swiper-container>
  );
};

Slider.propTypes = {
  perView: PropTypes.number,
  speed: PropTypes.number,
  loop: PropTypes.bool,
  children: PropTypes.node,
};

export default Slider;
