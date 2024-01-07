import { Form, useLoaderData } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import { format } from "date-fns";
import { GoPeople } from "react-icons/go";
import { FaRegComment } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import { IoStar } from "react-icons/io5";

import "react-loading-skeleton/dist/skeleton.css";
import {
  Footer,
  InputForm,
  Reviews,
  Slider,
  SliderHelper,
} from "../components";
import { useState } from "react";
import { useSelector } from "react-redux";

const SingleTrip = () => {
  const { trip } = useLoaderData();
  const store = useSelector((store) => store.userState);

  const [seeReviews, setSeeReviews] = useState(false);

  const openReviewBar = () => {
    document.getElementById("single-slider").style.cssText =
      "width:50%;margin-left:0";
    document.getElementById("single-info").style.display = "none";
    document.getElementById("review").style.display = "flex";
    setSeeReviews(!seeReviews);
  };

  const {
    address,
    created_at,
    description,
    rating,
    profile_image,
    reviews,
    username,
    images,
  } = trip.trip;

  return (
    <>
      <section className="px-4 md:px-12">
        <Reviews reviews={reviews} />
        <div className="flex gap-12 py-8">
          <div className="w-full md:w-1/2">
            <img className="rounded-2xl" src={images[0].image_url} alt="" />
          </div>
          <div className="flex-col gap-8 hidden md:flex" id="single-info">
            <div className="flex items-center gap-4">
              <img
                src={
                  profile_image ||
                  "https://cdn-icons-png.flaticon.com/512/1144/1144760.png?ga=GA1.1.1229095363.1703014299&"
                }
                className="rounded-full w-14"
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
                        src={
                          person.image_url ||
                          "https://cdn-icons-png.flaticon.com/512/1144/1144760.png?ga=GA1.1.1229095363.1703014299&"
                        }
                        alt={`Person ${index + 1}`}
                      />
                    </div>
                  </div>
                ))}

                <div className="avatar placeholder">
                  <div className="w-12 bg-slate-600 text-white">
                    <span>+{rating.rating_people_count || <Skeleton />}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaRegComment size={"1.75rem"} onClick={openReviewBar} />
              <p>+{reviews.length || <Skeleton />} reviews</p>
            </div>
          </div>
        </div>
        <Slider id="single-slider" perView={4}>
          {images.map((image) => {
            return (
              <SliderHelper key={image.id} className="mx-2">
                <img
                  src={image.image_url}
                  className="w-72 h-48 rounded-xl object-cover"
                  alt=""
                />
              </SliderHelper>
            );
          })}
        </Slider>

        <div className="md:hidden">
          <div className="flex items-center justify-around my-4">
            <div className="flex">
              <div className="flex flex-col items-center gap-4">
                <IoStar size={"2rem"} />
                <b>9.04/10</b>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center gap-4">
                <GoPeople size={"2rem"} />
                <b>+30</b>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center gap-4">
                <GrLocation size={"2rem"} />
                <b>Paris</b>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <img
                src={
                  profile_image ||
                  "https://cdn-icons-png.flaticon.com/512/1144/1144760.png?ga=GA1.1.1229095363.1703014299&"
                }
                className="rounded-full w-10"
                alt=""
              />
              <p className="font-bold text-base capitalize">
                {username || <Skeleton />}
              </p>
            </div>

            {created_at && (
              <div className="flex items-center text-lg capitalize gap-4">
                <MdOutlineCalendarMonth size={"1.75rem"} />
                <p>{format(new Date(created_at), "dd/MM/yyyy")}</p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6">
          <b className="text-xl">Description</b>
          <p className="font-sans mt-4 mb-12">{description}</p>

          {store.message && (
            <p
              style={{ width: "calc(100% - 50px)" }}
              role="alert"
              className={`alert rounded-lg mb-4 ${
                store.message ? "alert-button" : "alert-success"
              }`}
            >
              {store.message}
            </p>
          )}

          <Form method="POST" className="flex items-center gap-4">
            <InputForm
              className="w-full"
              name="review"
              style={{
                background: "rgb(221 221 221 / 41%)",
                maxWidth: "none",
              }}
              placeholder="Share your thoughts in a review..."
            />
            <button type="submit">
              <IoSend className="cursor-pointer" size={"2rem"} />
            </button>
          </Form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SingleTrip;
