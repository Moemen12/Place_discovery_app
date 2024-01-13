// Icons

import { MdOutlineHome } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

const MobileNavbar = () => {
  return (
    <footer className="flex items-center justify-around fixed bottom-8 left-0 w-full sm:hidden">
      <Link to="/trips" className="p-2">
        <MdOutlineHome size={"2rem"} />
      </Link>
      <Link to="/trips/saved" className="p-2">
        <FaRegHeart size={"2rem"} />
      </Link>
      <Link className="p-2">
        <IoMdAdd size={"2rem"} />
      </Link>
      <Link to="/auth/profile" className="p-2">
        <FaRegUser size={"2rem"} />
      </Link>
    </footer>
  );
};

export default MobileNavbar;
