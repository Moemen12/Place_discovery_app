import Wrapper from "../assets/wrappers/TripHeader.jsx";
import { TripSliders } from "../utils/index.js";
import Slider from "./Slider";
import { FaLocationDot } from "react-icons/fa6";
import SliderHelper from "./SliderHelper";
import PropTypes from "prop-types";
import { Accordion, AppAutocomplete } from "./index.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  clearFilterValues,
  toggleSideBar,
} from "../features/filter/filterSlice.js";
import { Form, Link } from "react-router-dom";
import { changeMode } from "../features/config/modeSlice.js";

const TripHeader = ({ data }) => {
  const store = useSelector((store) => store.algoliaState);
  const image = useSelector((store) => store.userState.user?.image);
  const filterValue = useSelector(
    (store) => store.filterState.isFilterSideBarOpened
  );
  const [isChanged, setIsChanged] = useState(false);
  const dispatch = useDispatch();
  const baseUrl = useSelector((store) => store.baseUrl);
  const [perView, setPerView] = useState(
    window.innerWidth < 640 ? true : false
  );
  const theme = localStorage.getItem("theme");
  const handleResetAll = () => {
    dispatch(clearFilterValues());
    dispatch(toggleSideBar());
  };
  const handleChaneMode = () => {
    dispatch(changeMode());
    setIsChanged(true);
    setIsChanged(!isChanged);
  };
  useEffect(() => {
    const handleResize = () => {
      setPerView(window.innerWidth < 640 ? true : false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Wrapper>
      {filterValue && window.innerWidth < 640 && (
        <div className="bg-white p-4 shadow-xl fixed top-0 left-0 w-full h-screen z-10">
          <div className="flex items-center justify-between border-b border-b-slate-800 pb-4">
            <h2 className="text-xl font-bold text-black">Filters</h2>
            <Link
              to="/trips"
              className="btn text-white min-h-0 h-10"
              onClick={handleResetAll}
              style={{ background: "rgb(0, 14, 48)" }}
            >
              Reset All
            </Link>
          </div>

          <Form onSubmit={() => dispatch(toggleSideBar(false))}>
            <Accordion
              name="category type"
              type="list"
              input_name="category"
              isOpen={true}
              data={data?.trips.trip_types}
            />
            <Accordion
              name="rating"
              input_name="stars"
              type="btn"
              isOpen={true}
            />
            <button
              className="capitalize mt-8 btn w-full text-white tracking-widest"
              style={{ background: "rgb(0, 14, 48)" }}
              type="submit"
            >
              filter
            </button>
          </Form>
        </div>
      )}

      <div className="mx-2 sm:mx-0">
        <div className="flex items-center justify-between mb-2 sm:hidden">
          {/* For Filters !! */}
          <label className="btn bg-transparent border-none btn-circle swap swap-rotate">
            <input
              type="checkbox"
              defaultChecked={false}
              id="Filter"
              onChange={() => dispatch(toggleSideBar(true))}
            />
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>filter-horizontal</title>
              <g id="Layer_2" data-name="Layer 2">
                <g id="invisible_box" data-name="invisible box">
                  <rect width="48" height="48" fill="none" />
                </g>
                <g id="icons_Q2" data-name="icons Q2">
                  <path
                    fill={theme === "night" ? "#ffffff" : "#000000"}
                    d="M41.8,8H21.7A6.2,6.2,0,0,0,16,4a6,6,0,0,0-5.6,4H6.2A2.1,2.1,0,0,0,4,10a2.1,2.1,0,0,0,2.2,2h4.2A6,6,0,0,0,16,16a6.2,6.2,0,0,0,5.7-4H41.8A2.1,2.1,0,0,0,44,10,2.1,2.1,0,0,0,41.8,8ZM16,12a2,2,0,1,1,2-2A2,2,0,0,1,16,12Z"
                  />
                  <path
                    fill={theme === "night" ? "#ffffff" : "#000000"}
                    d="M41.8,22H37.7A6.2,6.2,0,0,0,32,18a6,6,0,0,0-5.6,4H6.2a2,2,0,1,0,0,4H26.4A6,6,0,0,0,32,30a6.2,6.2,0,0,0,5.7-4h4.1a2,2,0,1,0,0-4ZM32,26a2,2,0,1,1,2-2A2,2,0,0,1,32,26Z"
                  />
                  <path
                    fill={theme === "night" ? "#ffffff" : "#000000"}
                    d="M41.8,36H24.7A6.2,6.2,0,0,0,19,32a6,6,0,0,0-5.6,4H6.2a2,2,0,1,0,0,4h7.2A6,6,0,0,0,19,44a6.2,6.2,0,0,0,5.7-4H41.8a2,2,0,1,0,0-4ZM19,40a2,2,0,1,1,2-2A2,2,0,0,1,19,40Z"
                  />
                </g>
              </g>
            </svg>
          </label>
          <div className="flex items-center">
            <FaLocationDot color="red" />
            <p>Lebanon</p>
          </div>
          <div className="flex items-center gap-4">
            {/* For Mobile Navbar */}
            <label className="swap swap-rotate" onClick={handleChaneMode}>
              <input
                id="mode"
                type="checkbox"
                defaultChecked={theme === "night" ? true : false}
                onChange={() => dispatch(changeMode())}
              />

              <svg
                className={`swap-on fill-current w-6 h-6${
                  theme === "light" ? " text-black" : " text-white"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              <svg
                className={`swap-off fill-current w-6 h-6${
                  theme === "light" ? " text-black" : " text-white"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
            <div
              className="w-8 h-8 rounded-full"
              style={{
                background: `url(${
                  image
                    ? baseUrl + "/storage" + image
                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/768px-Default_pfp.svg.png"
                })`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </div>

        {perView && (
          <AppAutocomplete
            algoliaAppId={store.ALGOLIA_ID}
            algoliaAppKey={store.ALGOLIA_KEY}
          />
        )}

        <Slider perView={"1"} delayTime={3000} loop={true}>
          {TripSliders.map((slider) => {
            const { id, shortDesc, image, longDesc } = slider;
            return (
              <SliderHelper key={id}>
                <div
                  className="sm:h-screen h-[200px] text-center rounded-md sm:rounded-none flex items-center justify-center"
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <b className="text-white text-lg">{shortDesc}</b>
                </div>

                <div className="trip-slider hidden sm:block">
                  <div className="flex items-center justify-center h-screen">
                    <div
                      className="text-white h-[80%] max-w-[60%] rounded-3xl"
                      style={{
                        background: `url(${image})`,
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="mx-auto mt-8" style={{ width: "90%" }}>
                        <p className="capitalize text-5xl mt-24">{shortDesc}</p>
                        <p className="mt-8">{longDesc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SliderHelper>
            );
          })}
        </Slider>
      </div>
    </Wrapper>
  );
};
TripHeader.propTypes = {
  data: PropTypes.object,
};

export default TripHeader;
