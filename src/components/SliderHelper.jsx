// SliderHelper.jsx
import PropTypes from "prop-types";

const SliderHelper = ({ children, style, className }) => {
  const defaultStyle = { position: "relative" };
  return (
    <div className={className} style={{ ...defaultStyle, ...style }}>
      {children}
    </div>
  );
};

SliderHelper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default SliderHelper;
