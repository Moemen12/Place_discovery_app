import PropTypes from "prop-types";
const InputForm = ({ type = "text", name, className, placeholder, style }) => {
  const defaultStyle = { outline: "none", ...style };
  return (
    <>
      <input
        type={type}
        name={name}
        className={`${className} input input-bordered w-full max-w-xs`}
        placeholder={placeholder}
        style={defaultStyle}
        autoComplete="on"
      />
    </>
  );
};

InputForm.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default InputForm;
