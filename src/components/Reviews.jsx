import { FaArrowLeft } from "react-icons/fa";
import PropTypes from "prop-types";
import { formatDistanceToNow } from "date-fns";
import { enUS } from "date-fns/locale";
import { useState } from "react";

const Reviews = ({ reviews, baseUrl }) => {
  const goBack = () => {
    document.getElementById("review").style.display = "none";
    document.getElementById("single-info").style.display = "flex";
    document.getElementById("single-slider").style.width = "100%";
  };

  const [Allreviews, setAllReviews] = useState(reviews);

  console.log(Allreviews);
  return (
    <>
      <div
        className="flex-col gap-8 w-1/2 hidden overflow-y-scroll right-0 absolute top-12 md:h-3/5 lg:h-3/4 px-12"
        id="review"
      >
        <div
          className="flex items-center gap-4 cursor-pointer"
          onClick={goBack}
        >
          <FaArrowLeft size={"1.5rem"} />
          <p>Comments</p>
        </div>
        {Allreviews.map((singleReview) => {
          const { id, review, profile_image, created_at } = singleReview;
          const utcDate = new Date(created_at);
          return (
            <div className="flex items-center gap-4" key={id}>
              <img
                src={
                  profile_image
                    ? `${baseUrl}/storage${profile_image}`
                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/768px-Default_pfp.svg.png"
                }
                className="rounded-full w-12 h-12 object-cover"
                alt=""
              />
              <div className="flex flex-col flex-grow">
                <p>{review}</p>
                <p className="self-end text-xs font-bold pt-3">
                  {formatDistanceToNow(utcDate, {
                    addSuffix: true,
                    locale: enUS,
                  })}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.array,
  baseUrl: PropTypes.string,
};

export default Reviews;
