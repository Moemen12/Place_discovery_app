import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateProfileImage,
  resetProfileImage,
} from "../features/user/userSlice";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Icons

import { FaUser } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import MobileNavbar from "./MobileNavbar";
import { ProfileSide } from ".";

const SideBar = ({ profile_image, onLinkClick }) => {
  const baseUrl = useSelector((store) => store.baseUrl);
  const dispatch = useDispatch();
  const [profileImage, setProfileImage] = useState(profile_image || "");

  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };
  const handleLinkClick = () => {
    onLinkClick();
  };

  const handleFileInputChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const base64String = e.target.result;

        if (base64String !== profileImage) {
          setProfileImage(base64String);
          dispatch(updateProfileImage(base64String));
        }
      };

      reader.readAsDataURL(selectedFile);
    }
  };

  const handleDeleteImage = () => {
    setProfileImage(null);
    dispatch(resetProfileImage());
  };

  const defaultImageUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/768px-Default_pfp.svg.png";

  const imageUrl =
    profileImage && profileImage.startsWith("data:")
      ? profileImage
      : profileImage
      ? baseUrl + "/storage" + profileImage
      : defaultImageUrl;

  const changeMode = () => {
    dispatch(changeMode());
  };
  return (
    <>
      <aside
        className="h-screen flex flex-col items-center fixed"
        style={{ width: "inherit" }}
      >
        <ProfileSide
          imageUrl={imageUrl}
          handleImageClick={handleImageClick}
          handleFileInputChange={handleFileInputChange}
          fileInputRef={fileInputRef}
        />
        <button
          className="text-sm mt-2 text-blue-500 cursor-pointer hidden sm:block relative top-16"
          onClick={handleDeleteImage}
        >
          Delete Profile Image
        </button>
        <div className="flex flex-col w-full px-8 text-xl mt-28 gap-6 sm:gap-0">
          <Link
            className="pb-4 flex items-center justify-between"
            to="/auth/profile"
            onClick={handleLinkClick}
          >
            <div className="flex items-center justify-between gap-4">
              <FaUser className="sm:hidden" />
              Profile
            </div>
            <IoIosArrowForward className="sm:hidden" />
          </Link>
          <Link
            className="pb-4 flex items-center justify-between"
            to="/auth/Settings"
            onClick={handleLinkClick}
          >
            <div className="flex items-center gap-4">
              <IoMdSettings className="sm:hidden" />
              Settings
            </div>
            <IoIosArrowForward className="sm:hidden" />
          </Link>
          <div className="form-control pb-4">
            <label className="label cursor-pointer p-0">
              <div className="flex items-center gap-4">
                <FaMoon className="sm:hidden" />
                <span className="label-text text-xl">Dark Mode</span>
              </div>
              <input
                readOnly
                type="checkbox"
                className="toggle bg-white [--tglbg:#DDDDDD] border-transparent h-8"
                name="mode"
                onChange={changeMode}
              />
            </label>
          </div>
          <Link className="pb-4 flex items-center gap-4">
            <BiLogOut className="sm:hidden" />
            Logout
          </Link>
        </div>
      </aside>
      <MobileNavbar />
    </>
  );
};

SideBar.propTypes = {
  profile_image: PropTypes.string,
  onLinkClick: PropTypes.func,
};
export default SideBar;
