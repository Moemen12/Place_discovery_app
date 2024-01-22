import { Form } from "react-router-dom";
import { IoSend } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";
import { formatDistanceToNow } from "date-fns";
import { enUS } from "date-fns/locale";
import PropTypes from "prop-types";
const ReviewMobile = ({ reviews, baseUrl }) => {
  const goBack = () => {
    document.querySelector(".review-mobile").style.display = "none";
  };
  return (
    <div className="bg-white w-full absolute hidden top-0 left-0 h-screen z-20 review-mobile">
      <div
        className="flex-col gap-8 h-[70%] overflow-y-scroll right-0 absolute top-12 px-6 flex"
        id="review"
      >
        <div className="flex items-center gap-4" onClick={goBack}>
          <FaArrowLeft size={"1.5rem"} />
          <p>back</p>
        </div>
        {reviews.map((singleReview) => {
          const { id, review, profile_image, created_at } = singleReview;
          const utcDate = new Date(created_at);
          return (
            <div className="flex gap-4" key={id}>
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
      <Form
        method="POST"
        className="gap-4 flex self-end mb-8 mx-2"
        style={{ width: "-webkit-fill-available" }}
      >
        <textarea
          className="textarea-sm w-full"
          placeholder="write a review"
          name="review"
          style={{
            background: "rgb(221 221 221 / 41%)",
          }}
        ></textarea>

        <button type="submit" name="reviewSubmit" value="review">
          <IoSend className="cursor-pointer" size={"2rem"} />
        </button>
      </Form>
    </div>
  );
};

ReviewMobile.propTypes = {
  reviews: PropTypes.array,
  baseUrl: PropTypes.string,
};

export default ReviewMobile;
