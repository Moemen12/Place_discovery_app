import PropTypes from "prop-types";

const SubmitBtn = ({
  text,
  textLoading,
  className = "",
  style,
  loading = false,
}) => {
  return (
    <button
      type="submit"
      disabled={loading}
      className={`${className}`}
      style={style}
    >
      {loading ? (
        <span className="loading loading-spinner">{textLoading}</span>
      ) : (
        text
      )}
    </button>
  );
};

SubmitBtn.propTypes = {
  textLoading: PropTypes.string,
  loading: PropTypes.bool,
  text: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default SubmitBtn;
