import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/LandingNavbar";
import { useState } from "react";

const LandingNavbar = () => {
  const [checked, setChecked] = useState(false);

  const displaySideBar = () => {
    setChecked(!checked);
    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <Wrapper>
      <nav className="flex items-center justify-between container px-8 mx-auto pt-6 text-xl">
        <b className="top-7 text-2xl md:top-0 relative">Wanderwise</b>
        <div className="space-x-8">
          <div className="hidden md:block">
            <Link className="text-white btn px-12 mr-4" to="/auth/login">
              Log in
            </Link>
            <Link className="border-black btn px-12" to="/auth/register">
              Sign up
            </Link>
          </div>

          <label className="swap swap-rotate md:hidden z-20 top-8 -right-4 text-slate-700">
            <input
              type="checkbox"
              checked={checked}
              onChange={() => displaySideBar()}
            />

            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>

            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
        </div>
      </nav>
      <div
        className={`fixed right-0 top-10 z-10 h-full flex flex-col w-3/4 sidebar pt-12 p-6 md:hidden transition-transform rounded-l-2xl ${
          checked ? "transform translate-x-0" : "transform translate-x-full"
        }`}
      >
        <p className="capitalize text-white text-lg pb-8">wanderwise</p>
        <Link className="pb-2" to="/auth/register">
          Sign up
        </Link>
        <Link className="pb-2" to="/auth/login">
          Log in
        </Link>
      </div>
    </Wrapper>
  );
};

export default LandingNavbar;
