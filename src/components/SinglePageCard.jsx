import { GoPeople } from "react-icons/go";
import PropTypes from "prop-types";
import { FaRegComment, FaStar } from "react-icons/fa";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { format } from "date-fns";
import Rating from "./Rating";
import { useState } from "react";

const SinglePageCard = ({ trip, baseUrl }) => {
  const { created_at, rating, average_rating, reviews } = trip.trip;

  const [isRated, setIsRated] = useState(false);

  const handleRatingSubmit = () => {
    setIsRated(true);
  };
  return (
    <article className="md:hidden flex flex-col gap-2 mt-4">
      <Rating isRated={isRated} setIsRated={setIsRated} />
      <div className="flex items-center gap-4">
        <MdOutlineCalendarMonth size={"1.75rem"} />
        <p>{format(new Date(created_at), "dd/MM/yyyy")}</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-4">
          <GoPeople size={"1.75rem"} />
          <div className="avatar-group -space-x-4 rtl:space-x-reverse">
            {rating.lastFive_People_image.map((person, index) => (
              <div key={index} className="avatar">
                <div className="w-8 h-8">
                  <img
                    src={
                      person.image_url
                        ? `${baseUrl}/storage${person.image_url}`
                        : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/768px-Default_pfp.svg.png"
                    }
                    alt={`Person ${index + 1}`}
                  />
                </div>
              </div>
            ))}

            <div className="avatar placeholder">
              <div className="w-8 h-8 bg-slate-600 text-white">
                <span>+{rating.rating_people_count}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex items-center gap-4 cursor-pointer"
        onClick={() => handleRatingSubmit()}
      >
        {" "}
        <FaStar size={"1.75rem"} /> <b>{average_rating} out of 5</b>{" "}
      </div>
      <div className="flex items-center gap-4 cursor-pointer">
        <FaRegComment size={"1.75rem"} />
        <p>+{reviews.length} reviews</p>
      </div>
    </article>
  );
};

SinglePageCard.propTypes = {
  trip: PropTypes.object,
  baseUrl: PropTypes.string,
  setIsRated: PropTypes.func,
};

export default SinglePageCard;
