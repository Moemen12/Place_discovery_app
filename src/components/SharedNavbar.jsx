import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";

const SharedNavbar = ({ data, className }) => {
  const [checked, setChecked] = useState(false);
  const displaySideBar = () => {
    setChecked(!checked);
  };

  return (
    <nav className={`shared-navbar flex justify-between ${className}`}>
      <b className="text-2xl" style={{ color: "#4E8AFF" }}>
        Wanderwise
      </b>

      <div className="flex items-center">
        {data.map((link) => {
          const { url, text, id } = link;
          return (
            <Link to={url} key={id}>
              {text}
            </Link>
          );
        })}

        <label className="btn btn-circle swap swap-rotate md:hidden">
          <input
            type="checkbox"
            defaultChecked={checked}
            onClick={displaySideBar}
          />

          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
      </div>
    </nav>
  );
};

SharedNavbar.propTypes = {
  data: PropTypes.array,
  className: PropTypes.string,
};

export default SharedNavbar;
