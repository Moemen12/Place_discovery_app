import { useState } from "react";
import { Form } from "react-router-dom";
import PropTypes from "prop-types";
const Modal = ({ username }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [rating, setRating] = useState("");

  const handleStarHover = (index) => {
    setHoveredIndex(index);
  };

  const handleStarClick = (index) => {
    setRating((index + 1).toString());
    setHoveredIndex(null);
  };

  const closeModal = () => {
    var dialog = document.getElementById("my_modal_2");

    if (dialog) {
      dialog.close();
    }
  };

  return (
    <dialog id="my_modal_2" className="modal hidden sm:grid">
      <div className="modal-box flex flex-col items-center gap-8">
        <h3 className="text-lg">
          Hello 🤩! I&apos;m <b>{username}</b> rate my trip
        </h3>
        <div className="rating rating-lg">
          {Array.from({ length: 5 }, (_, index) => (
            <input
              key={index}
              type="radio"
              name="rating-8"
              className={`mask mask-star-2 ${
                (hoveredIndex !== null && index <= hoveredIndex) ||
                (hoveredIndex === null && index < rating)
                  ? "bg-yellow-400"
                  : "bg-gray-500"
              }`}
              style={{ width: "4rem", height: "4rem" }}
              onMouseEnter={() => handleStarHover(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleStarClick(index)}
            />
          ))}
        </div>
        <Form method="POST">
          <input type="hidden" name="stars_rating" value={rating} />
          <button
            onClick={closeModal}
            type="submit"
            className="btn"
            name="reviewSubmit"
            value="select_Start"
          >
            Sure 😍
          </button>
        </Form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};
Modal.propTypes = {
  username: PropTypes.string,
};

export default Modal;
