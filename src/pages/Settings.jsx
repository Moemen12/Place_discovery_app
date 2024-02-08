import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfileImage, logoutUser } from "../features/user/userSlice";
import { Link, useNavigate } from "react-router-dom";

import { GrUpdate } from "react-icons/gr";
import { FaUser, FaMoon } from "react-icons/fa";
import { IoMdSettings, IoIosArrowForward } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";
import { Form, useLoaderData, useNavigation } from "react-router-dom";
import {
  Countries,
  InputForm,
  LandingNavbar,
  Loading,
  MobileNavbar,
  ProfileSide,
} from "../components";
import { FaLocationDot } from "react-icons/fa6";
import { changeMode } from "../features/config/modeSlice";

const Settings = () => {
  const responseData = useLoaderData();
  const {
    data: { profile_image, country_name },
  } = responseData;
  const navigate = useNavigate();

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const isPageLoading = navigation.state === "loading";
  const [showSidebar, setShowSidebar] = useState(true);

  const handleLinkClick = () => {
    if (window.innerWidth < 640) {
      setShowSidebar(false);
      document.getElementById("aside-bar").classList.add("hidden");
    }
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

  const theme = localStorage.getItem("theme");

  const HandleMode = () => {
    dispatch(changeMode());
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
      {isPageLoading ? (
        <Loading />
      ) : (
        <>
          <LandingNavbar
            style={{
              width: "100%",
              left: "0",
              top: "0",
              position: "fixed",
              zIndex: "3",
            }}
          />
          <section className="flex min-h-screen">
            <div
              className="w-screen sm:w-1/3 xl:w-1/4 shadow-2xl"
              id="aside-bar"
            >
              <aside
                className="h-screen flex flex-col items-center fixed"
                style={{ width: "inherit" }}
              >
                <ProfileSide imageUrl={imageUrl} />
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
                        type="checkbox"
                        defaultChecked={theme === "light" ? false : true}
                        id="mode"
                        onChange={HandleMode}
                        className="toggle bg-white [--tglbg:#DDDDDD] border-transparent h-8"
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
              className={`flex-auto sm:p-10 ${
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

              <Form
                method="post"
                id="update_form"
                className="px-6 mt-20 sm:mt-8 pb-20 sm:pb-0"
              >
                <div className="flex flex-col">
                  <b className="text-2xl capitalize tracking-wider py-4 sm:py-8 hidden sm:block">
                    Settings
                  </b>
                  <div className="flex flex-col gap-3 sm:gap-8">
                    <div className="font-bold text-lg capitalize flex items-center justify-between sm:max-w-[30rem] w-full">
                      <p>Location</p>
                      <div className="flex items-center">
                        <FaLocationDot color="red" />
                        <span>{country_name}</span>
                      </div>
                    </div>

                    <Countries />

                    <div className="font-bold text-lg capitalize">
                      Current Password
                    </div>
                    <InputForm
                      className="max-w-none w-full sm:max-w-[30rem]"
                      name="current_password"
                    />
                    <div className="font-bold text-lg capitalize">
                      New Password
                    </div>
                    <InputForm
                      className="max-w-none w-full sm:max-w-[30rem]"
                      name="new_password"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="static mt-4 ml-auto capitalize text-white flex items-center w-fit rounded-md lg:fixed right-8 bottom-8 gap-2 py-2 px-3 sm:py-4 sm:px-6"
                  disabled={isSubmitting}
                  style={{ background: "rgb(0, 14, 48)" }}
                >
                  {isSubmitting ? (
                    <>
                      <span className="loading loading-spinner"></span>
                      updating...
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
      )}
    </>
  );
};

export default Settings;
