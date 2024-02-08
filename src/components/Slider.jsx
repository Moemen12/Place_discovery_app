import PropTypes from "prop-types";
import React from "react";

const Slider = ({
  id,
  perView = 0,
  className,
  speed = 500,
  delayTime,
  spaceBetween, //As px
  loop = false,
  children,
}) => {
  return (
    <swiper-container
      class="z-0"
      slides-per-view={perView}
      speed={speed}
      autoplay-delay={delayTime}
      loop={loop}
      id={id}
      lazy={true}
      space-between={spaceBetween}
      {...(delayTime && { "autoplay-delay": delayTime })}
    >
      {React.Children.map(children, (child, index) => (
        <swiper-slide class={className} key={index}>
          {child}
        </swiper-slide>
      ))}
    </swiper-container>
  );
};

Slider.propTypes = {
  id: PropTypes.string,
  delayTime: PropTypes.number,
  perView: PropTypes.string,
  speed: PropTypes.number,
  className: PropTypes.string,
  loop: PropTypes.bool,
  children: PropTypes.node,
  spaceBetween: PropTypes.string,
};

export default Slider;
