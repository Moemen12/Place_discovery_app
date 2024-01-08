import { FaArrowLeft } from "react-icons/fa";
import PropTypes from "prop-types";

const Reviews = ({ reviews }) => {
  return (
    <>
      <div
        className="flex-col gap-8 w-1/2 hidden overflow-y-scroll right-0 absolute top-12 md:h-2/4 lg:h-3/4 px-12"
        id="review"
      >
        <div className="flex items-center gap-4">
          <FaArrowLeft size={"1.5rem"} />
          <p>Comments</p>
        </div>
        {reviews.map((singleReview) => {
          const { id, review, created_at, profile_image } = singleReview;
          return (
            <div className="flex items-center gap-4" key={id}>
              <img
                src={
                  profile_image ||
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/768px-Default_pfp.svg.png"
                }
                className="rounded-full w-12 h-12"
                alt=""
              />
              <p>{review}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.array,
};

export default Reviews;
