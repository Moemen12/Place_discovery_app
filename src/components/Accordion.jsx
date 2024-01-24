import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedValues } from "../features/filter/filterSlice";

const Accordion = ({
  name,
  input_name,
  type = "list",
  isOpen = false,
  data,
}) => {
  // Use state to track whether the list is visible or not
  const [isListVisible, setIsListVisible] = useState(isOpen);

  // Function to toggle the visibility of the list
  const toggleListVisibility = () => {
    setIsListVisible(!isListVisible);
  };

  const numberOfStars = 5;

  // Create an array of stars
  const stars = Array.from({ length: numberOfStars }, (_, index) => index + 1);

  // const [selected, setSelected] = useState({
  //   category: "",
  //   stars: "",
  // });

  const store = useSelector((store) => store.filterState.isAccordionSelected);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col">
      <div
        className="flex cursor-pointer items-center justify-between py-3 px-2 border-b border-b-slate-500"
        onClick={toggleListVisibility}
      >
        <b className="capitalize">{name}</b>
        <IoIosArrowDown size={20} />
      </div>

      {type === "list" && isListVisible && (
        <div
          className="h-32 flex-col bg-slate-400 overflow-y-scroll mt-2 custom-scrollbar flex"
          style={{ direction: "rtl" }}
        >
          {data.map((link, index) => {
            return (
              <div
                key={index}
                className="capitalize px-2 py-1 mt-2 text-black mx-2 rounded-sm bg-slate-500 cursor-pointer"
                style={{ direction: "ltr" }}
                onClick={() => dispatch(setSelectedValues({ category: link }))}
              >
                {link}
              </div>
            );
          })}
          <input
            type="hidden"
            name={input_name}
            defaultValue={store.category}
          />
        </div>
      )}

      {type === "btn" && isListVisible && (
        <div className="flex flex-wrap items-center justify-start p-4">
          {stars.map((starBtn, index) => (
            <div
              key={index}
              className="btn text-white min-h-0 h-fit py-2 px-3 rounded-full"
              style={{ background: "#000E30" }}
              onClick={() => dispatch(setSelectedValues({ stars: starBtn }))}
            >
              {`${starBtn} star${starBtn > 1 ? "s" : ""}`}
            </div>
          ))}
          <input type="hidden" name={input_name} defaultValue={store.stars} />
        </div>
      )}
    </div>
  );
};

Accordion.propTypes = {
  input_name: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  isOpen: PropTypes.bool,
};

export default Accordion;
