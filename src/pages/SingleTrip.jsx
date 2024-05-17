import { Form, Link, useLoaderData, useNavigation } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import { format } from "date-fns";
import { GoPeople } from "react-icons/go";
import { FaStar, FaRegComment } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  Footer,
  ImageCard,
  InputForm,
  Loading,
  MobileNavbar,
  Modal,
  ReviewMobile,
  Reviews,
  SinglePageCard,
  Slider,
  SliderHelper,
} from "../components";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Viewer from "react-viewer";

const SingleTrip = () => {
  const { trip } = useLoaderData();
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  const {
    address,
    user_id,
    title,
    created_at,
    description,
    rating,
    profile_image,
    reviews,
    username,
    average_rating,
    images,
  } = trip.trip;

  console.log(title);

  const [seeReviews, setSeeReviews] = useState(false);

  const openReviewBar = () => {
    document.getElementById("single-slider").style.cssText =
      "width:50%;margin-left:0";
    document.getElementById("single-info").style.display = "none";
    document.getElementById("review").style.display = "flex";
    setSeeReviews(!seeReviews);
  };

  const openReviewBarOnMobile = () => {
    document.querySelector(".review-mobile").style.display = "flex";
  };

  const [perView, setPerView] = useState(window.innerWidth > 640 ? "4" : "3");

  useEffect(() => {
    const handleResize = () => {
      setPerView(window.innerWidth > 640 ? "4" : "3");
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const baseUrl = useSelector((store) => store.baseUrl);
  const [viewerVisible, setViewerVisible] = useState(false);

  // Create image objects for the viewer
  const viewerImages = images.map((image) => ({
    src: `${baseUrl}/storage${image.image_url}`,
    alt: image.description || "Image",
  }));

  return (
    <>
      {isPageLoading ? (
        <Loading />
      ) : (
        <div className="lg:m-auto lg:max-w-[90rem]">
          <Modal username={username} />
          <section
            className="px-4 md:px-12 overflow-y-scroll mb-4 h-[calc(100dvh-65px)] sm:h-auto hide-scrollBar"
            id="single-mobile"
          >
            <Reviews reviews={reviews} baseUrl={baseUrl} />
            <ReviewMobile reviews={reviews} baseUrl={baseUrl} />
            <div className="flex gap-12 py-8">
              <ImageCard
                singleImg={images[0]?.image_url}
                profile_image={profile_image}
                baseUrl={baseUrl}
                user_id={user_id}
                username={username}
                country={address}
              />
              <div
                className="flex-col justify-center gap-6 hidden md:flex"
                id="single-info"
              >
                <Link
                  className="flex items-center gap-4"
                  to={`/user/profile/${user_id}/${username}`}
                >
                  <img
                    src={
                      profile_image
                        ? `${baseUrl}/storage${profile_image}`
                        : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/768px-Default_pfp.svg.png"
                    }
                    className="rounded-full h-14 w-14 object-cover"
                    alt=""
                  />
                  <p className="font-bold text-base capitalize">
                    {username || <Skeleton />}
                  </p>
                </Link>
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
                              person.image_url
                                ? `${baseUrl}/storage${person.image_url}`
                                : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/768px-Default_pfp.svg.png"
                            }
                            alt={`Person ${index + 1}`}
                          />
                        </div>
                      </div>
                    ))}

                    <div className="avatar placeholder">
                      <div className="w-12 bg-slate-600 text-white">
                        <span>+{rating.rating_people_count}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="flex items-center gap-4 cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                >
                  <FaStar size={"1.75rem"} />
                  <b>{average_rating} out of 5</b>
                </div>

                <div
                  className="flex items-center gap-4 cursor-pointer"
                  onClick={openReviewBar}
                >
                  <FaRegComment size={"1.75rem"} />
                  <p>+{reviews.length} reviews</p>
                </div>
              </div>
            </div>

            <Viewer
              visible={viewerVisible}
              onClose={() => setViewerVisible(false)}
              images={viewerImages}
            />

            <Slider id="single-slider" perView={perView}>
              {images.map((image) => (
                <SliderHelper key={image.id} className="mx-2">
                  <img
                    onClick={() => setViewerVisible(true)}
                    src={`${baseUrl}/storage${image.image_url}`}
                    className="h-28 w-48 sm:w-72 sm:h-48 rounded-xl object-cover"
                    alt=""
                  />
                </SliderHelper>
              ))}
            </Slider>

            <SinglePageCard trip={trip} baseUrl={baseUrl} />

            <div className="mt-6">
              <b className="text-xl">Title</b>
              <p className="font-sans mt-4 mb-8">{title}</p>
            </div>

            <div className="mt-6">
              <b className="text-xl">Description</b>
              <p className="font-sans mt-4 mb-8 break-words">{description}</p>

              <div
                className="w-full h-12 sm:hidden border border-b-slate-700 rounded-md flex items-center pl-4 text-sm sm:text-md"
                style={{
                  maxWidth: "none",
                }}
                onClick={openReviewBarOnMobile}
              >
                Share your thoughts in a review...
              </div>

              <div className="sm:mb-8">
                <Form
                  method="POST"
                  className="items-center gap-4 hidden sm:flex"
                >
                  <InputForm
                    className="w-full"
                    name="review"
                    style={{
                      maxWidth: "none",
                    }}
                    placeholder="Share your thoughts in a review..."
                  />
                  <button type="submit" name="reviewSubmit" value="review">
                    <IoSend className="cursor-pointer" size={"2rem"} />
                  </button>
                </Form>
              </div>
            </div>
          </section>
          <Footer />
          <MobileNavbar />
        </div>
      )}
    </>
  );
};

export default SingleTrip;
