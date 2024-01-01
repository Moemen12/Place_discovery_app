import Accordion from "./Accordion";
import Card from "./Card";
import Slider from "./Slider";
import SliderHelper from "./SliderHelper";

const TripCategory = () => {
  return (
    <section style={{ background: "#F3F6FF" }}>
      <div className="grid grid-cols-12 p-4">
        <div className="col-span-3 bg-white p-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-b-slate-800 pb-4">
            <h2>Filters</h2>
            <button className="btn">Reset All</button>
          </div>

          <Accordion name="category type" type="list" isOpen={true} />
          <Accordion name="rating" type="btn" isOpen={true} />
        </div>
        <div className="col-span-9 p-4">
          <p className="capitalize text-center font-bold text-3xl mb-10">
            latest trip
          </p>

          <p>Results: 30 Trips found</p>
          <Slider perView={2} loop={false}>
            <SliderHelper className="flex">
              <Card />
            </SliderHelper>
            <SliderHelper className="flex">
              <Card />
            </SliderHelper>
            <SliderHelper className="flex">
              <Card />
            </SliderHelper>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TripCategory;
