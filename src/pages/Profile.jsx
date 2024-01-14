import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateProfileImage,
  resetProfileImage,
  logoutUser,
} from "../features/user/userSlice";
import { Link, useNavigate } from "react-router-dom";

import { GrUpdate } from "react-icons/gr";
import { FaUser, FaMoon } from "react-icons/fa";
import { IoMdSettings, IoIosArrowForward } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";
import { Form, useLoaderData, useNavigation } from "react-router-dom";
import { Info, InputForm, MobileNavbar, ProfileSide } from "../components";

const Profile = () => {
  const responseData = useLoaderData();
  const {
    data: { name, email, published_trip_num, bio, profile_image },
  } = responseData;
  const navigate = useNavigate();

  const user = useSelector((state) => state.userState);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  // const profileImage = useSelector((state) => state.userState.profile_image);

  const [bioValue, setBioValue] = useState(bio);

  const handleBioChange = (e) => {
    setBioValue(e.target.value);
  };

  const [showSidebar, setShowSidebar] = useState(true);

  const handleLinkClick = () => {
    if (window.innerWidth < 640) {
      setShowSidebar(false);
    }

    const asideBar = document
      .getElementById("aside-bar")
      .classList.add("hidden");
  };

  const baseUrl = useSelector((store) => store.baseUrl);
  const dispatch = useDispatch();
  const [profileImage, setProfileImage] = useState(profile_image || "");

  const fileInputRef = useRef(null);

  const handleImageClick = (event) => {
    if (window.innerWidth < 640) {
      const profileElements = document.querySelectorAll(".profile-circle");

      const index = Array.from(profileElements).indexOf(event.target);

      if (index === 0) {
        return null;
      } else if (index === 1) {
        // Clicked the second element, trigger file input click
        fileInputRef.current.click();
      }
    } else {
      fileInputRef.current.click();
    }
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

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/auth/login");
  };

  const defaultImageUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/768px-Default_pfp.svg.png";

  const imageUrl =
    profileImage && profileImage.startsWith("data:")
      ? profileImage
      : profileImage
      ? baseUrl + "/storage" + profileImage
      : defaultImageUrl;

  return (
    <>
      <section className="flex min-h-screen">
        <div className="w-screen sm:w-1/3 xl:w-1/4 shadow-2xl" id="aside-bar">
          <aside
            className="h-screen flex flex-col items-center fixed"
            style={{ width: "inherit" }}
          >
            <ProfileSide
              imageUrl={imageUrl}
              handleImageClick={handleImageClick}
              handleFileInputChange={handleFileInputChange}
              fileInputRef={fileInputRef}
              showIcon={false}
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
                    checked
                  />
                </label>
              </div>
              <button
                className="pb-4 flex items-center gap-4"
                onClick={handleLogout}
              >
                <BiLogOut className="sm:hidden" />
                Logout
              </button>
            </div>
          </aside>
        </div>
        <div
          className={`flex-auto sm:p-10 bg-slate-100 ${
            showSidebar ? "hidden sm:block" : "block"
          }`}
        >
          <ProfileSide
            imageUrl={imageUrl}
            handleImageClick={handleImageClick}
            handleFileInputChange={handleFileInputChange}
            fileInputRef={fileInputRef}
            showIcon={true}
            className="sm:hidden"
          />
          <button
            className="text-sm mt-2 text-blue-500 cursor-pointer block sm:hidden relative top-16 mx-auto"
            onClick={handleDeleteImage}
          >
            Delete Profile Image
          </button>
          <Form
            method="post"
            id="update_form"
            className="px-6 mt-20 sm:mt-0 pb-20 sm:pb-0"
          >
            <div className="flex flex-col">
              <b className="text-2xl capitalize tracking-wider py-4 sm:py-8 hidden sm:block">
                profile
              </b>
              <div className="flex flex-col gap-3 sm:gap-8">
                <div className="font-bold text-lg capitalize">name</div>
                <InputForm
                  className="max-w-none w-full sm:max-w-[30rem]"
                  value={name}
                  name="name"
                />
                <Info
                  className="w-full text-sm sm:text-base sm:max-w-[30rem]"
                  label="Email"
                  data={email}
                />
                <Info
                  label="Published Trip Number"
                  data={published_trip_num}
                  className="w-full sm:w-1/6"
                />
                <div className="font-bold text-lg capitalize">bio</div>
                <textarea
                  className="textarea-lg text-sm md:text-lg sm:max-w-[30rem]"
                  onChange={handleBioChange}
                  placeholder="Bio"
                  name="bio"
                  value={bioValue}
                ></textarea>
              </div>
            </div>
            <input
              type="hidden"
              id="image_url"
              name="image_url"
              value={user.profile_image || ""}
            />
            <button
              type="submit"
              className="static mt-4 ml-auto capitalize text-white flex items-center w-fit rounded-md lg:fixed right-8 bottom-8 gap-2 py-2 px-3 sm:py-4 sm:px-6"
              disabled={isSubmitting}
              style={{ background: "rgb(0, 14, 48)" }}
            >
              {isSubmitting ? (
                <>
                  <span className="loading loading-spinner"></span>sending...
                </>
              ) : (
                <>
                  <GrUpdate />
                  <p>update</p>
                </>
              )}
            </button>
          </Form>
        </div>
      </section>
      <MobileNavbar />
    </>
  );
};

export default Profile;
