import PropTypes from "prop-types";
import { useState } from "react";

const InputForm = ({
  type = "text",
  name,
  className,
  placeholder,
  style,
  disabled = false,
  value = "",
}) => {
  const defaultStyle = { outline: "none", ...style };

  const [newValue, setNewValue] = useState(value);

  const changeValue = (e) => {
    setNewValue(e.target.value);
  };

  return (
    <>
      <input
        id={name}
        type={type}
        name={name}
        value={newValue}
        onChange={changeValue}
        disabled={disabled}
        className={`input input-bordered w-full${
          className ? ` ${className}` : ""
        }`}
        placeholder={placeholder}
        style={defaultStyle}
        autoComplete="on"
      />
    </>
  );
};

InputForm.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  value: PropTypes.string,
};

export default InputForm;
