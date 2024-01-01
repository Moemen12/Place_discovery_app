import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Accordion = ({ name, type = "list", isOpen = false }) => {
  // Use state to track whether the list is visible or not
  const [isListVisible, setIsListVisible] = useState(isOpen);

  // Function to toggle the visibility of the list
  const toggleListVisibility = () => {
    setIsListVisible(!isListVisible);
  };

  const numberOfStars = 5;

  // Create an array of stars
  const stars = Array.from({ length: numberOfStars }, (_, index) => index + 1);

  return (
    <div className="flex flex-col">
      <div
        className="flex cursor-pointer items-center justify-between py-3 px-2 border-b border-b-slate-500"
        onClick={toggleListVisibility}
        style={{ background: "#F1F1F1" }}
      >
        <b className="capitalize">{name}</b>
        <IoIosArrowDown size={20} />
      </div>

      {type === "list" && isListVisible && (
        <div
          className="h-32 flex-col bg-slate-400 overflow-y-scroll mt-2 custom-scrollbar flex"
          style={{ direction: "rtl" }}
        >
          <Link
            className="capitalize px-2 py-1 mt-2 text-black mx-2 rounded-sm bg-slate-500"
            style={{ direction: "ltr" }}
          >
            Hotel
          </Link>
        </div>
      )}

      {type === "btn" && isListVisible && (
        <div className="flex flex-wrap items-center justify-start p-4">
          {stars.map((starBtn, index) => (
            <button
              key={index}
              className="btn text-white min-h-0 h-fit px-6 py-2 rounded-full"
              style={{ background: "#000E30" }}
            >
              {`${starBtn} star${starBtn > 1 ? "s" : ""}`}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

Accordion.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  isOpen: PropTypes.bool,
};

export default Accordion;
