import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/LandingNavbar";
import { navbarLink } from "../utils";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const LandingNavbar = ({ style }) => {
  const defaultStyle = { background: "#000E30", ...style };
  const [loggedIn, setLoggedIn] = useState(false); // Manage login state locally

  const user = useSelector((store) => store.userState.user);

  useEffect(() => {
    setLoggedIn(!!user);
  }, [user]);

  return (
    <Wrapper>
      <nav
        className="sm:flex hidden items-center justify-between px-8 py-4"
        style={defaultStyle}
      >
        <Link to="/" className="text-2xl text-white hidden md:block">
          Wanderwise
        </Link>

        <div className="hidden sm:flex items-center justify-between sm:gap-2 sm:w-full md:w-auto lg:gap-8">
          {navbarLink.map((navlink) => {
            const { id, url, text } = navlink;

            // Skip rendering "Sign In" and "Register" links when the user is logged in
            if (loggedIn && (text === "Sign In" || text === "Register")) {
              return null;
            }

            // Skip rendering "Profile" and "New Adventure" links when the user is not logged in
            if (
              !loggedIn &&
              (text === "My Account" || text === "New Adventure")
            ) {
              return null;
            }

            return (
              <Link className="text-white" to={url} key={id}>
                {text}
              </Link>
            );
          })}

          {loggedIn ? (
            <>
              {/* Display username when user is logged in */}
              <Link
                to={`/user/profile/${user.id}/${user.name}`}
                style={{ color: "#47B5FF" }}
              >
                {user.name}
              </Link>
            </>
          ) : null}
        </div>
      </nav>
    </Wrapper>
  );
};

LandingNavbar.propTypes = {
  style: PropTypes.object,
};

export default LandingNavbar;
