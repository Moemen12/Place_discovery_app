import { IoIosArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const BreadCrumbs = ({ image, title }) => {
  const baseUrl = useSelector((store) => store.baseUrl);
  return (
    <div className="px-2 sm:px-10 flex items-center justify-between sm:bg-slate-200 py-2 mt-4 sm:mt-0">
      <div className="flex items-center justify-center text-white sm:text-black">
        <p>page</p>
        <IoIosArrowForward />
        <p className="font-bold sm:font-normal">{title}</p>
      </div>
      <img
        className="w-12 h-12 object-cover rounded-full hidden sm:block"
        src={
          image
            ? baseUrl + `/storage` + image
            : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/768px-Default_pfp.svg.png"
        }
        alt="Saved"
      />
    </div>
  );
};
BreadCrumbs.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
};

export default BreadCrumbs;
