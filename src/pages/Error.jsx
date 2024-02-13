import { Link, useRouteError } from "react-router-dom";
import { ErrorPage } from "../assets/images";
const Error = () => {
  const error = useRouteError();
  console.log(error.status);

  // if (error.status === 404) {
  return (
    <div
      style={{ background: "#e4eafc" }}
      className="h-screen flex flex-col items-center justify-center gap-4 text-black"
    >
      <img src={ErrorPage} className="h-80" />
      <p className="font-black text-2xl">Oops!!</p>
      <p className="text-xl font-medium">Page Not Found</p>
      <p className="font-medium text-center">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        className="btn hover:bg-slate-950 w-fit font-medium tracking-widest px-8 bg-slate-950 border-0 text-white"
        to="/"
      >
        Back to Home
      </Link>
    </div>
  );
  // }
  // return <>There was an error</>;
};

export default Error;
