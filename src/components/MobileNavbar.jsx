// Icons

import { MdOutlineHome } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const MobileNavbar = () => {
  return (
    <footer
      className="flex mobile-footer text-white items-center justify-around fixed bottom-0 pb-3 left-0 w-full sm:hidden"
      style={{ background: "linear-gradient(rgb(0, 7, 25), rgb(0, 46, 135))" }}
    >
      <NavLink to="/trips" className="p-2" end>
        <MdOutlineHome size={"1.75rem"} />
      </NavLink>
      <NavLink to="/trips/saved" className="p-2">
        <FaRegHeart size={"1.75rem"} />
      </NavLink>
      <NavLink className="p-2" to="/trips/add/">
        <IoMdAdd size={"1.75rem"} />
      </NavLink>
      <NavLink to="/auth/profile" className="p-2">
        <FaRegUser size={"1.75rem"} />
      </NavLink>
    </footer>
  );
};

export default MobileNavbar;
