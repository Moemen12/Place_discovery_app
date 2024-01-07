import PropTypes from "prop-types";
import React from "react";

const Slider = ({ id, perView = 0, speed = 500, loop = false, children }) => {
  return (
    <swiper-container
      slides-per-view={perView}
      speed={speed}
      loop={loop}
      id={id}
      lazy={true}
    >
      {React.Children.map(children, (child, index) => (
        <swiper-slide key={index}>{child}</swiper-slide>
      ))}
    </swiper-container>
  );
};

Slider.propTypes = {
  id: PropTypes.string,
  perView: PropTypes.number,
  speed: PropTypes.number,
  loop: PropTypes.bool,
  children: PropTypes.node,
};

export default Slider;
