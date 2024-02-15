import { useState } from "react";
import { useSelector } from "react-redux";
import { Form, Link, useLoaderData } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { enUS } from "date-fns/locale";
import { FaCopy } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";

const GlobalProfile = () => {
  const data = useLoaderData();
  const {
    username,
    bio,
    profile_image,
    trip_count,
    join_date,
    global_rating,
    first_image_trip,
  } = data;

  const utcDate = new Date(join_date);
  const baseUrl = useSelector((store) => store.baseUrl);
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000); // Reset copied text after 2 seconds
  };

  return (
    <section className="relative bg-blueGray-200 mt-8 mb-8 text-black">
      <div className="container mx-auto px-4">
        <div className="relative flex flex-col break-words bg-white w-full mb-6 shadow-xl rounded-lg">
          <div className="px-3 sm:px-6 pt-4">
            <img
              className="sm:w-56 sm:h-56 w-36 h-36 rounded-full object-cover mx-auto"
              src={
                profile_image
                  ? baseUrl + `/storage` + profile_image
                  : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/768px-Default_pfp.svg.png"
              }
              alt=""
            />

            <div className="flex items-center justify-center gap-4 sm:gap-16 mt-4">
              <div className="text-center">
                <span className="sm:text-xl text-base block text-blueGray-600">
                  {formatDistanceToNow(utcDate, {
                    addSuffix: true,
                    locale: enUS,
                  })}
                </span>
                <span className="text-md text-blueGray-400 font-bold">
                  Join date
                </span>
              </div>
              <div className="text-center">
                <span className="sm:text-xl text-base block text-blueGray-600">
                  {trip_count} trips
                </span>
                <span className="text-md text-blueGray-400 font-bold">
                  Published trips
                </span>
              </div>
              <div className="text-center">
                <span className="sm:text-xl text-base block text-blueGray-600">
                  {global_rating} out of 5
                </span>
                <span className="text-md text-blueGray-400 font-bold">
                  Rating
                </span>
              </div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center gap-4 mt-8 mb-4">
                <h3 className="text-md sm:text-4xl font-semibold leading-normal text-blueGray-700">
                  @{username}
                </h3>
                <FaCopy
                  className="cursor-pointer"
                  size={"1.5rem"}
                  onClick={handleCopyClick}
                  onTouchStart={handleCopyClick} // Add onTouchStart event
                />

                {copied && (
                  <span className="ml-2 text-sm text-green-600">Copied!</span>
                )}
              </div>

              <div className="mb-2 text-blueGray-600 mx-auto w-3/4">{bio}</div>
            </div>
            <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
              <div
                className={`${
                  first_image_trip.length === 0 ? "" : "grid "
                }gap-4 mx-2 grid-cols-12 lg:gap-8 sm:gap-4 sm:mx-10 mb-8`}
              >
                {first_image_trip.length === 0 ? (
                  <div className="text-center">No trips published yet</div>
                ) : (
                  first_image_trip.map((first_image) => {
                    const { trip_id, trip_slug, trip_address, image_url } =
                      first_image;

                    return (
                      <div
                        className="col-span-12 relative sm:col-span-6 lg:col-span-4 flex flex-col cursor-pointer sm:rounded-lg shadow-2xl"
                        key={trip_id}
                      >
                        <Link to={`/trip/${trip_id}/${trip_slug}`}>
                          <div
                            className="top-0 z-10 text-white sm:rounded-lg absolute right-0 h-6 px-2"
                            style={{ background: "rgb(0,0,0,0.6)" }}
                          >
                            {trip_address}
                          </div>
                          <div className="relative overflow-hidden w-full h-full sm:rounded-lg">
                            <img
                              className={`w-full object-cover sm:rounded-lg transition-transform duration-300 transform hover:scale-110 h-full`}
                              src={baseUrl + `/storage` + image_url}
                              alt=""
                            />
                          </div>
                        </Link>
                        <Form method="POST">
                          <input type="hidden" name="trip_id" value={trip_id} />
                          <button
                            style={{ background: "rgb(0, 14, 48)" }}
                            type="submit"
                            className="flex gap-2 items-center justify-center sm:rounded-lg my-4 mx-auto py-2 px-4"
                          >
                            <RiDeleteBin5Fill color="red" />
                            <span className="text-white font-mono">Delete</span>
                          </button>
                        </Form>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="relative bg-blueGray-200 sm:pt-8 sm:pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-6/12 px-4 mx-auto text-center">
              <div className="text-sm text-slate-500 font-semibold py-1">
                Made with{" "}
                <a
                  href="https://github.com/Moemen12/"
                  className="text-red-600"
                  target="_blank"
                  rel="noreferrer"
                >
                  Moemen Saadeh
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default GlobalProfile;
