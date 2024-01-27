import { Link } from "react-router-dom";
import { Footer, MobileNavbar } from "../components";
import { FaMapLocationDot } from "react-icons/fa6";
import { format } from "date-fns";
import { image1 } from "../assets/images";
import { FaExclamationCircle } from "react-icons/fa";
import { useState } from "react";
import { BsBookmarkPlus } from "react-icons/bs";
const Saved = () => {
  const [rerender, setRerender] = useState(false);

  const savedItems = JSON.parse(localStorage.getItem("bookmarkedItems")) || [];

  const closeModal = () => {
    localStorage.removeItem("bookmarkedItems");
    var dialog = document.getElementById("my_modal_3");

    if (dialog) {
      dialog.close();
      // Trigger re-render by toggling the state
      setRerender((prev) => !prev);
    }
  };

  return (
    <>
      <div className="px-2 sm:px-10 flex items-center justify-between sm:bg-slate-200 py-2 mb-4 mt-4 sm:mt-0">
        <p className="font-bold sm:font-normal">Saved</p>
        <img className="w-8 h-8 rounded-full hidden sm:block" src={image1} />
      </div>

      {savedItems.length > 0 && (
        <button
          type="button"
          onClick={() => document.getElementById("my_modal_3").showModal()}
          className="bg-red-600 text-white mb-2 px-4 py-2 rounded block ml-auto"
        >
          Clear Saved Trips
        </button>
      )}

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box relative">
          <div className="flex items-center gap-4">
            <FaExclamationCircle color="red" size={"2rem"} />
            <p className="py-4">
              Are you sure you want to clear all saved trips?
            </p>
          </div>
          <button
            onClick={closeModal}
            className="ml-auto block px-4 py-2 bg-red-500 text-white rounded-md"
          >
            Clear All
          </button>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <div
        className={`saved ${
          savedItems.length > 0 ? "grid " : ""
        }gap-4 mx-2 grid-cols-12 lg:gap-8 sm:gap-4 sm:mx-10 mb-8`}
      >
        {savedItems.length > 0 ? (
          savedItems.map((item) => (
            <Link
              to={`/trip/${item.id}/${item.slug}`}
              key={item.id}
              className="col-span-12 sm:col-span-6 lg:col-span-4 flex sm:flex-col shadow-lg cursor-pointer"
            >
              <div className="sm:flex-grow max-w-[155px] min-w-[155px] sm:max-w-none sm:h-56">
                <img
                  className="object-cover h-full rounded-md  sm:w-full"
                  src={item.imageUrl}
                  alt=""
                />
              </div>
              <div className="min-h-[7rem] px-4 py-2 flex-col flex">
                <div className="flex items-center justify-between flex-wrap flex-col sm:flex-row">
                  <b className="text-lg font-bold text-gray-800">
                    {item.title}
                  </b>
                  <div className="flex items-center gap-2">
                    <FaMapLocationDot className="text-blue-500" />
                    <p className="text-gray-600">{item.location}</p>
                  </div>
                </div>
                <p className="font-sans text-base text-blue-500 font-medium mt-8">
                  Published by: {item.user_name}
                </p>
                <p className="font-sans gap-2 flex-1 items-end italic text-sm text-gray-600 self-end flex flex-wrap">
                  Posted on:{" "}
                  <span className="not-italic">
                    {format(new Date(item.date), "MMM d, yyyy")}
                  </span>
                </p>
              </div>
            </Link>
          ))
        ) : (
          <div className="h-80">
            <div className="flex flex-col items-center mt-24">
              <BsBookmarkPlus size={"5rem"} />
              <p className="text-lg mt-4 text-center">
                You have no saved trips.{" "}
                <Link to="/trips" className="text-blue-500">
                  Click here to explore and add trips!
                </Link>
              </p>
            </div>
          </div>
        )}
      </div>

      <MobileNavbar />
      <Footer />
    </>
  );
};

export default Saved;
