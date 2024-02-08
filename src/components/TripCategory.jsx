import PropTypes from "prop-types";
import { Form, Link } from "react-router-dom";
import Accordion from "./Accordion";
import Card from "./Card";
import Slider from "./Slider";
import SliderHelper from "./SliderHelper";
import CategorySlider from "./CategorySlider";
import { TbSearchOff } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { clearFilterValues } from "../features/filter/filterSlice";
import AppAutocomplete from "./AppAutocomplete";
import { useEffect, useState } from "react";

const TripCategory = ({ data }) => {
  const {
    trips: { trips },
  } = data;
  const [perView, setPerView] = useState(
    window.innerWidth < 640 ? true : false
  );
  useEffect(() => {
    const handleResize = () => {
      setPerView(window.innerWidth < 640 ? true : false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const store = useSelector((state) => state.filterState);
  const algolia = useSelector((store) => store.algoliaState);
  const dispatch = useDispatch();
  return (
    <section>
      <div className="grid grid-cols-12 sm:p-4 p-2">
        {store.isFilterSideBarOpened && (
          <div className="col-span-3 bg-white p-4 shadow-xl">
            <div className="flex items-center flex-wrap justify-between border-b border-b-slate-800 pb-4">
              <h2 className="text-2xl font-bold text-black">Filters</h2>
              <Link
                to="/trips"
                className="btn text-white min-h-0 h-10"
                style={{ background: "rgb(0, 14, 48)" }}
                onClick={() => dispatch(clearFilterValues())}
              >
                Reset All
              </Link>
            </div>

            <Form>
              <Accordion
                name="category type"
                type="list"
                input_name="category"
                isOpen={true}
                data={data.trips.trip_types}
              />
              <Accordion
                name="rating"
                input_name="stars"
                type="btn"
                isOpen={true}
              />

              <button
                className="capitalize mt-4 btn w-full text-white tracking-widest"
                style={{ background: "rgb(0, 14, 48)" }}
                type="submit"
              >
                filter
              </button>
            </Form>
          </div>
        )}

        <div
          className={
            store.isFilterSideBarOpened
              ? "col-span-9 p-4"
              : "col-span-12 sm:p-4"
          }
        >
          <p className="capitalize text-center font-black sm:font-bold text-xl sm:text-4xl tracking-wide sm:tracking-widest py-2 sm:p-0">
            latest trip
          </p>

          {!perView && (
            <div className="mt-8 w-1/2 mx-auto">
              <AppAutocomplete
                algoliaAppId={algolia.ALGOLIA_ID}
                algoliaAppKey={algolia.ALGOLIA_KEY}
              />
            </div>
          )}

          <CategorySlider
            count={data.trips.trips.length}
            categories={data.trips.trip_types}
          />

          <Slider
            className="sm:hidden w-fit pt-2 pb-4"
            perView={"auto"}
            spaceBetween={"20"}
          >
            {data.trips.trip_types.map((tripType, index) => {
              return (
                <SliderHelper key={index}>
                  <Link className="cursor-pointer" to={`?category=${tripType}`}>
                    {tripType}
                  </Link>
                </SliderHelper>
              );
            })}
          </Slider>

          {trips.length > 0 ? (
            <Slider
              perView={"auto"}
              spaceBetween={"15"}
              className="sm:w-[27rem] w-60"
            >
              {trips.map((trip, index) => {
                return (
                  <SliderHelper key={index}>
                    <Card key={trip.id} trip={trip} />
                    <Link
                      to={`/trip/${trip.id}/${trip.slug}`}
                      className="rounded-3xl hidden text-white py-1 px-3 mt-4 sm:block w-fit"
                      style={{ background: "rgb(0, 14, 48)" }}
                    >
                      see more
                    </Link>
                  </SliderHelper>
                );
              })}
            </Slider>
          ) : (
            <div className="flex flex-col items-center gap-8">
              <TbSearchOff size={"4rem"} />
              <b className="text-sm sm:text-2xl text-center">
                Sorry, we havent&apos;t found any results matching this category
              </b>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

TripCategory.propTypes = {
  data: PropTypes.shape({
    trips: PropTypes.shape({
      trips: PropTypes.array,
      trip_types: PropTypes.array,
    }).isRequired,
  }).isRequired,
};

export default TripCategory;
