import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/LandingNavbar";
import { navbarLink } from "../utils";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
const LandingNavbar = ({ style }) => {
  const defaultStyle = { background: "#000E30", ...style };
  const [loggedIn, setLoggedIn] = useState(false); // Manage login state locally

  const user = useSelector((store) => store.userState.user);

  const navigate = useNavigate();
  useEffect(() => {
    // Update local state based on user presence
    setLoggedIn(!!user);
  }, [user]);

  const logout = () => {
    // Perform logout actions, e.g., remove user from local storage
    localStorage.removeItem("user");
    // Update local state to trigger re-render
    setLoggedIn(false);
    // redirect("/auth/login");
    navigate("/auth/login");
  };

  return (
    <Wrapper>
      <nav
        className="sm:flex hidden items-center justify-between px-8 py-4"
        style={defaultStyle}
      >
        <Link to="/" className="text-2xl text-white hidden md:block">
          Wanderwise
        </Link>

        <div className="hidden sm:flex items-center justify-between sm:gap-4 sm:w-full md:w-auto lg:gap-8">
          {navbarLink.map((navlink) => {
            const { id, url, text } = navlink;

            // Skip rendering "Sign In" and "Register" links when the user is logged in
            if (loggedIn && (text === "Sign In" || text === "Register")) {
              return null;
            }

            // Skip rendering "Profile" and "New Adventure" links when the user is not logged in
            if (!loggedIn && (text === "Profile" || text === "New Adventure")) {
              return null;
            }

            return (
              <Link className="text-white" to={url} key={id}>
                {text}
              </Link>
            );
          })}

          {loggedIn ? (
            // User is logged in, display logout link
            <Link className="text-white" onClick={logout}>
              Logout
            </Link>
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
