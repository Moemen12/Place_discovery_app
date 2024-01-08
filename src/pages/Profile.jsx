import { Info } from "../components";
import { GrUpdate } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Profile = () => {
  const store = useSelector((store) => store.userState);

  const { name, email, published_trip_number, bio } = store.user;

  return (
    <>
      <div className="flex flex-col">
        <b className="text-2xl capitalize tracking-wider py-8">profile</b>
        <div className="flex flex-col gap-8">
          <Info label="Name" data={name} />
          <Info label="Email" data={email} />
          <Info
            label="Published Trip Number"
            data={published_trip_number}
            className="w-1/6"
          />
          <Info label="Bio" data={bio} />
        </div>
      </div>
      <Link
        className="capitalize text-white flex items-center w-fit rounded-md fixed right-8 bottom-8 gap-2 py-4 px-6"
        style={{ background: "rgb(0, 14, 48)" }}
      >
        <GrUpdate />
        <p>update</p>
      </Link>
    </>
  );
};

export default Profile;
