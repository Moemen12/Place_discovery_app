import { Link } from "react-router-dom";
import Accordion from "./Accordion";
import Card from "./Card";
// import CategorySlider from "./CategorySlider";
import Slider from "./Slider";
import SliderHelper from "./SliderHelper";

const TripCategory = ({ data }) => {
  const {
    trips: { trips },
  } = data;
  return (
    <>
      <section className="hidden sm:block" style={{ background: "#F3F6FF" }}>
        <div className="grid grid-cols-12 p-4">
          <div className="col-span-3 bg-white p-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-b-slate-800 pb-4">
              <h2>Filters</h2>
              <Link to="/trips" className="btn">
                Reset All
              </Link>
            </div>

            <Accordion
              name="category type"
              type="list"
              isOpen={true}
              data={data.trips.trip_types}
            />
            <Accordion name="rating" type="btn" isOpen={true} />
          </div>
          <div className="col-span-9 p-4">
            <p className="capitalize text-center font-bold text-3xl mb-10">
              latest trip
            </p>

            <p>Results: 30 Trips found</p>
            <Slider perView={"auto"}>
              {trips.map((trip, index) => {
                return (
                  <SliderHelper key={index}>
                    <Card key={trip.id} trip={trip} />
                  </SliderHelper>
                );
              })}
            </Slider>
          </div>
        </div>
      </section>

      {/* <CategorySlider categories={categories} /> */}

      <b className="sm:hidden capitalize mx-4 text-black text-lg my-4 block">
        popular destinations
      </b>
    </>
  );
};

export default TripCategory;
