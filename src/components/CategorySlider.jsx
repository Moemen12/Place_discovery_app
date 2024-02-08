import { LuFilter } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "../features/filter/filterSlice";
import PropTypes from "prop-types";
const CategorySlider = ({ count }) => {
  const dispatch = useDispatch();
  const toggleFilterSideBar = () => {
    dispatch(toggleSideBar(true));
  };
  return (
    <div className="sm:flex items-center justify-between py-8 hidden">
      <p className="sm:text-2xl text-lg">Results: {count} Trips found</p>
      <LuFilter
        onClick={toggleFilterSideBar}
        className="hidden sm:block cursor-pointer mr-8 border border-black"
        size={"1.75rem"}
      />
    </div>
  );
};

CategorySlider.propTypes = {
  count: PropTypes.number, // count prop should be a string
};

export default CategorySlider;
