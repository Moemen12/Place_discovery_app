import { useLoaderData } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { format } from "date-fns";
import { GoPeople } from "react-icons/go";
import { FaRegComment } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SingleTrip = () => {
  const { trip } = useLoaderData();

  const { address, created_at, rating, profile_image, reviews, username } =
    trip.trip;

  return (
    <section className="px-12">
      <div className="flex gap-12 py-8">
        <div
          className="rounded-2xl basis-1/2"
          style={{
            backgroundImage: `url(${`https://img.freepik.com/free-photo/beautiful-natural-waterfall-landscape_23-2150787954.jpg?t=st=1704119403~exp=1704123003~hmac=40307196b1ea6f0da3bc6f545753424bd06182c548c77b7d1f4b333ee1fd645e&w=900`})`,
            height: "30rem",
          }}
        ></div>
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <img
              src={profile_image || <Skeleton />}
              className="rounded-full bg-slate-400 w-14"
              alt=""
            />
            <p className="font-bold text-base capitalize">
              {username || <Skeleton />}
            </p>
          </div>
          <div className="flex items-center text-lg capitalize gap-4">
            <GrLocation size={"1.75rem"} />
            <p>{address || <Skeleton />}</p>
          </div>
          {created_at && (
            <div className="flex items-center text-lg capitalize gap-4">
              <MdOutlineCalendarMonth size={"1.75rem"} />
              <p>{format(new Date(created_at), "dd/MM/yyyy")}</p>
            </div>
          )}
          <div className="flex items-center gap-4">
            <GoPeople size={"1.75rem"} />
            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
              {rating.lastFive_People_image.map((person, index) => (
                <div key={index} className="avatar">
                  <div className="w-12">
                    <img
                      src={person.image_url || <Skeleton />}
                      alt={`Person ${index + 1}`}
                    />
                  </div>
                </div>
              ))}

              <div className="avatar placeholder">
                <div className="w-12 bg-neutral text-neutral-content">
                  <span>+{rating.rating_people_count || <Skeleton />}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaRegComment size={"1.75rem"} />
            <p>+{reviews.length || <Skeleton />} reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleTrip;
