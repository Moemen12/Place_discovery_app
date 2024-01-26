import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";
import { useSelector } from "react-redux";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { format } from "date-fns";
import { HiOutlineShare } from "react-icons/hi";
import ShareComponent from "./ShareComponent";
import { useEffect, useRef, useState } from "react";

const Card = ({ trip }) => {
  const baseUrl = useSelector((store) => store.baseUrl);
  const [isButtonClicked, setButtonClicked] = useState(false);
  const shareComponentRef = useRef(null);

  const {
    address,
    images,
    id,
    user_profile,
    slug,
    created_at,
    title,
    user_name,
  } = trip;

  const handleClickOutside = (event) => {
    if (
      shareComponentRef.current &&
      !shareComponentRef.current.contains(event.target)
    ) {
      setButtonClicked(false);
    }
  };

  const [isBookmarked, setIsBookmarked] = useState(
    JSON.parse(localStorage.getItem("bookmarkedItems"))?.some(
      (item) => item.id === id
    ) || false
  );

  const handleBookmarkClick = () => {
    const bookmarkedItems =
      JSON.parse(localStorage.getItem("bookmarkedItems")) || [];

    const existingItemIndex = bookmarkedItems.findIndex(
      (item) => item.id === id
    );

    if (existingItemIndex !== -1) {
      bookmarkedItems.splice(existingItemIndex, 1);
    } else {
      const newItem = {
        id,
        slug: slug,
        location: address,
        title: title,
        date: created_at,
        user_name: user_name,
        imageUrl: images.image_url,
      };
      bookmarkedItems.push(newItem);
    }

    localStorage.setItem("bookmarkedItems", JSON.stringify(bookmarkedItems));
    setIsBookmarked(!isBookmarked);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex h-72 sm:h-64 bg-white relative sm:rounded-r-lg">
      <img
        loading="lazy"
        className="sm:w-[45%] w-full rounded cursor-pointer sm:cursor-auto sm:rounded-l-lg object-cover"
        src={images.image_url}
        alt=""
      />

      {/* Mobile */}
      <div className="h-full w-full block sm:hidden">
        <article
          className="absolute py-2 left-0 bottom-0 w-full px-4 flex flex-col gap-2 sm:hidden"
          style={{ background: "rgb(0,0,0,0.7)" }}
        >
          <b className="text-white text-sm">{address}</b>
          <div className="flex items-center gap-4 text-white">
            <MdOutlineCalendarMonth size={"1rem"} />
            <p className="text-sm">
              {format(new Date(created_at), "dd/MM/yyyy")}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img
                src={
                  user_profile
                    ? `${baseUrl}/storage${user_profile}`
                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/768px-Default_pfp.svg.png"
                }
                className="rounded-full h-7 w-7 cursor-pointer object-cover"
                alt=""
              />
              <p className="text-white font-sans text-sm">{user_name}</p>
            </div>
            <FaBookmark
              className="cursor-pointer"
              color="white"
              size={"1rem"}
            />
          </div>
        </article>
      </div>

      {/* Desktop */}
      <article className="sm:flex flex-1 flex-col p-4 shadow-2xl justify-between hidden">
        <div className="flex justify-between">
          <b className="text-base">{title}</b>
          <FaBookmark
            color={isBookmarked ? "#FFFF00" : "black"}
            className="cursor-pointer"
            size={"1.75rem"}
            onClick={handleBookmarkClick}
          />
        </div>
        <div className="flex items-center gap-2 text-sm text-black flex-col justify-between">
          <div className="flex items-center gap-4">
            <img
              className="w-10 h-10 rounded-full object-cover"
              src={`${baseUrl}/storage` + user_profile}
              alt=""
            />
            <p className="text-base">{user_name}</p>
          </div>
          <p className="text-lg">{address}</p>
          <div className="flex items-center gap-4">
            <MdOutlineCalendarMonth size={"1.75rem"} />
            <p className="text-lg">
              {format(new Date(created_at), "dd/MM/yyyy")}
            </p>
          </div>
        </div>

        <div
          className="w-fit ml-auto relative"
          ref={shareComponentRef}
          onClick={() => setButtonClicked(true)}
        >
          <HiOutlineShare className="cursor-pointer" size={"1.75rem"} />
          {isButtonClicked && <ShareComponent url={slug} id={id} />}
        </div>
      </article>
    </div>
  );
};

Card.propTypes = {
  trip: PropTypes.shape({
    address: PropTypes.string.isRequired,
    images: PropTypes.shape({
      image_url: PropTypes.string.isRequired,
    }).isRequired,
    id: PropTypes.number.isRequired,
    user_profile: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    user_name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
