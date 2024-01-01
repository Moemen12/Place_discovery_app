import { useNavigation } from "react-router-dom";
import PropTypes from "prop-types";

const SubmitBtn = ({ text, className, style }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <button disabled={isSubmitting} className={className} style={style}>
      {isSubmitting ? (
        <>
          <span className="loading loading-spinner"></span>sending...
        </>
      ) : (
        text || "submit"
      )}
    </button>
  );
};

SubmitBtn.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default SubmitBtn;
