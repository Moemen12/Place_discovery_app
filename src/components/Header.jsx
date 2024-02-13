import { Link } from "react-router-dom";
import landingImage from "../assets/images/landing.svg";
import Wrapper from "../assets/wrappers/Header";

import { PiStarFourFill } from "react-icons/pi";

const Header = () => {
  return (
    <>
      <Wrapper className="grid grid-cols-1 md:grid-cols-2 p-12 pb-0 place-items-center flex-auto">
        <div className="flex flex-col">
          <img
            className="max-h-96 sm:hidden mb-4 mx-auto"
            src={landingImage}
            alt="landing_image"
            loading="lazy"
          />
          <h2 className="text-black text-center sm:text-left">
            Dicover All places with just <br className="hidden md:block" /> one
            click.
          </h2>
          <br />
          <div className="text-black md:text-xl text-center sm:text-left">
            Where curiosity meets discovery welcome to
            <br className="hidden md:block" />
            <span> Wanderwise</span>, your personalized guide to the
            <br className="hidden md:block" />
            world&apos;s most captivating places.
          </div>

          <Link
            to="/trips"
            className="btn max-w-xs w-fit mt-12 mx-auto sm:mx-0 px-8 rounded-2xl tracking-widest"
          >
            <PiStarFourFill size="1.1rem" />
            Discover
          </Link>
        </div>
        <div className="hidden md:block">
          <img className="max-h-96" src={landingImage} alt="" loading="lazy" />
        </div>
      </Wrapper>
    </>
  );
};

export default Header;
