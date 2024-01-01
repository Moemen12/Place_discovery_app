import { Link } from "react-router-dom";

const TripsNavbar = () => {
  return (
    <div className="text-white absolute z-30 flex items-center w-full justify-around pt-4">
      <Link className="font-bold tracking-wider">Wanderwise</Link>
      <div className="flex gap-8">
        <Link>home</Link>
        <Link>home</Link>
        <Link>home</Link>
        <Link>home</Link>
      </div>
      <div>
        <Link to="/auth/login" className="btn bg-white min-h-0 h-8 rounded-md">
          log in
        </Link>
        <Link
          to="/auth/register"
          className="btn bg-transparent text-white min-h-0 h-8 ml-4 rounded-md"
        >
          sign up
        </Link>
      </div>
    </div>
  );
};

export default TripsNavbar;
