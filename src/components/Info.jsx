import PropTypes from "prop-types";
const Info = ({ label, style, className, data }) => {
  return (
    <div className="flex flex-col">
      <div className="font-bold text-lg">{label}</div>
      <div
        style={style}
        className={`shadow-lg h-12 text-slate-400 input rounded-lg mt-4 flex items-center p-4 ${className}`}
        id={label}
      >
        {data}
      </div>
    </div>
  );
};
Info.propTypes = {
  label: PropTypes.string,
  data: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Info;
