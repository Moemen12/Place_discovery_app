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
      space-between="0"
    >
      {React.Children.map(children, (child, index) => (
        <swiper-slide class="sm" key={index}>
          {child}
        </swiper-slide>
      ))}
    </swiper-container>
  );
};

Slider.propTypes = {
  id: PropTypes.string,
  perView: PropTypes.string,
  speed: PropTypes.number,
  loop: PropTypes.bool,
  children: PropTypes.node,
  space-between:PropTypes.string
};

export default Slider;
