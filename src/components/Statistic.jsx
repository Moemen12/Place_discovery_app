import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Wrapper from "../assets/wrappers/Statistic";
import { BiWorld, BiUser, BiMap } from "react-icons/bi";

const AnimatedNumber = ({ value }) => {
  const [displayedValue, setDisplayedValue] = useState(0);

  useEffect(() => {
    let currentValue = 0;
    const interval = setInterval(() => {
      if (currentValue < value) {
        currentValue++;
        setDisplayedValue(currentValue);
      } else {
        clearInterval(interval);
      }
    }, 100); // Change the interval as per your preference

    return () => clearInterval(interval);
  }, [value]);

  return (
    <span className="text-4xl md:text-6xl font-bold">{displayedValue}</span>
  );
};

AnimatedNumber.propTypes = {
  value: PropTypes.number.isRequired,
};

const Statistic = ({ data }) => {
  return (
    <Wrapper>
      <div className="p-12 flex flex-col items-center justify-between md:flex-row gap-8 sm:gap-16 mx-auto text-black">
        <div className="flex items-center justify-center flex-col">
          <BiMap className="text-5xl md:text-8xl text-gray-600" />
          <p className="text-center">Trips Published</p>
          <AnimatedNumber value={data.published_trips_count} />
        </div>

        <div className="flex items-center justify-center flex-col">
          <BiUser className="text-5xl md:text-8xl text-gray-600" />
          <p className="text-center">Active Users</p>
          <AnimatedNumber value={data.user_count} />
        </div>

        <div className="flex items-center justify-center flex-col">
          <BiWorld className="text-5xl md:text-8xl text-gray-600" />
          <p className="text-center">Countries Available</p>
          <AnimatedNumber value={data.country_count} />
        </div>
      </div>
    </Wrapper>
  );
};

Statistic.propTypes = {
  data: PropTypes.shape({
    published_trips_count: PropTypes.number.isRequired,
    user_count: PropTypes.number.isRequired,
    country_count: PropTypes.number.isRequired,
  }).isRequired,
};

export default Statistic;
