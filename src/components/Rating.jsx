import { useState, useEffect } from "react";
import { Form } from "react-router-dom";
import PropTypes from "prop-types";

const Rating = ({ isRated, setIsRated }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [rating, setRating] = useState("");
  const [showRain, setShowRain] = useState(false);
  const sentences = [
    "Not Recommended",
    "Needs Improvement",
    "Satisfactory",
    "Good",
    "Highly Recommended",
  ];

  const ribbonColors = ["#FF6B6B", "#FFD166", "#FFFCB9", "#A0E7E5", "#81C784"];

  const handleStarHover = (index) => {
    setHoveredIndex(index);
  };

  const handleStarClick = (index, event) => {
    event.stopPropagation(); // Prevent event propagation to the backdrop
    setRating((index + 1).toString());
    setHoveredIndex(null);
    setShowRain(true);
  };

  useEffect(() => {
    let timeout;
    if (showRain) {
      timeout = setTimeout(() => {
        setShowRain(false);
      }, 1500);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [showRain]);

  const renderRain = () => {
    const raindrops = [];
    for (let i = 0; i < 100; i++) {
      raindrops.push(
        <div
          key={i}
          className="raindrop"
          style={{
            background: ribbonColors[i % ribbonColors.length],
            left: `${Math.random() * 100}vw`,
            animationDelay: `${Math.random()}s`,
          }}
        ></div>
      );
    }
    return raindrops;
  };

  const handleBackdropClick = () => {
    setIsRated(false); // Hide the backdrop
  };

  return (
    <div
      className={`w-screen h-screen fixed z-40 bottom-0 left-0 place-items-center overflow-hidden ${
        isRated ? "grid" : "hidden"
      }`}
      style={{ background: "rgba(0, 0, 0, 0.9)", color: "#fff" }}
      onClick={handleBackdropClick} // Add click handler to hide the backdrop
    >
      {showRain && <div className="rain-container">{renderRain()}</div>}
      <Form method="POST" onSubmit={() => setIsRated(false)}>
        <div className="flex flex-col items-center relative">
          <p className="mb-8 text-lg">
            {hoveredIndex !== null
              ? `${sentences[hoveredIndex]}`
              : rating !== ""
              ? `${sentences[parseInt(rating) - 1]}`
              : "Hover over stars to rate"}
          </p>
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
                onClick={(event) => handleStarClick(index, event)} // Pass the event
              />
            ))}
          </div>
          <input type="hidden" name="stars_rating" value={rating} />

          <button
            name="reviewSubmit"
            value="select_Start"
            type="submit"
            className="mt-8"
          >
            Submit Rating
          </button>
        </div>
      </Form>
    </div>
  );
};

Rating.propTypes = {
  isRated: PropTypes.bool.isRequired,
  setIsRated: PropTypes.func.isRequired,
};

export default Rating;
