import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Form, Link, useNavigate } from "react-router-dom";
import { LoginImage } from "../assets/images/";
import { InputForm, SubmitBtn } from "../components";
import { resetMessage } from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Register = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.userState.message);

  const userFromLocalStorage = localStorage.getItem("user");
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(resetMessage());
    if (
      userFromLocalStorage &&
      userFromLocalStorage !== "null" &&
      userFromLocalStorage !== "undefined"
    ) {
      navigate("/trips");
    }
  }, [dispatch, navigate, userFromLocalStorage]);

  return (
    <div
      style={{ background: "#000E30" }}
      className="h-screen flex items-center justify-center"
    >
      <div className="flex items-center rounded-xl border-2 m-8 w-11/12 background-box md:overflow-x-auto">
        <img className=" h-full hidden md:block" src={LoginImage} alt="" />
        <Form
          className="flex items-center flex-col px-4 flex-1"
          method="post"
          style={{ height: "-webkit-fill-available" }}
        >
          <h1 className="text-white text-xl py-6 font-semibold">
            Create an Account
          </h1>
          {message && (
            <p
              role="alert"
              className={`alert rounded-lg max-w-xs ${
                message.error ? "alert-button" : "alert-success"
              }`}
            >
              {message.message}
            </p>
          )}
          <label className="form-control w-full max-w-xs md:w-full relative">
            <div className="label">
              <span className="label-text text-white text-xs">Enter Name</span>
            </div>
            <InputForm name="name" style={{ background: "#DDDDDD" }} />
          </label>
          <label className="form-control w-full max-w-xs relative">
            <div className="label">
              <span className="label-text text-white text-xs">
                Email Address
              </span>
            </div>
            <MdOutlineMail className="absolute left-4 top-12 text-gray-500 text-xl" />
            <InputForm
              name="email"
              type="email"
              className="pl-10"
              style={{ background: "#DDDDDD" }}
            />
          </label>
          <label className="form-control w-full max-w-xs relative">
            <div className="label">
              <span className="label-text text-white text-xs">Password</span>
            </div>
            <RiLockPasswordFill className="absolute left-4 top-12 text-gray-500 text-xl" />
            <InputForm
              name="password"
              type="password"
              className="pl-10"
              style={{ background: "#DDDDDD" }}
            />
          </label>
          <label className="form-control w-full max-w-xs relative">
            <div className="label">
              <span className="label-text text-white text-xs">
                Confirm Password
              </span>
            </div>
            <RiLockPasswordFill className="absolute left-4 top-12 text-gray-500 text-xl" />
            <InputForm
              name="password_confirmation"
              type="password"
              className="pl-10"
              style={{ background: "#DDDDDD" }}
            />
          </label>

          <br />
          <SubmitBtn
            style={{ minHeight: "1rem" }}
            className="btn px-8 h-8 rounded-md bg-slate-200 text-black"
            text="Sign up"
          />
          <p className="text-white text-xs my-4">
            Already have an Account? <Link to="/auth/login">Login</Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Register;
