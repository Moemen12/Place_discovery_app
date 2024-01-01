import Wrapper from "../assets/wrappers/TripHeader.jsx";
import { TripSliders } from "../utils/index.js";
import Slider from "./Slider";
import SliderHelper from "./SliderHelper";
import { InputForm, TripsNavbar } from "./index.js";

const TripHeader = () => {
  return (
    <Wrapper>
      <TripsNavbar />
      <Slider perView={1}>
        {TripSliders.map((TripSilder) => {
          const { id, image, shortDesc, longDesc } = TripSilder;
          return (
            <SliderHelper key={id}>
              <img
                className="h-screen w-screen object-cover"
                src={image}
                alt=""
              />
              <div
                className="absolute top-0 left-0 z-10 h-screen w-full flex justify-center items-center"
                style={{ background: "rgba(0, 0, 0, 0.70)" }}
              >
                <div
                  className="w-2/3 h-3/4 bg-cover p-8 relative flex flex-col trip-slider max-w-4xl"
                  style={{
                    backgroundImage: `url(${image})`,
                  }}
                >
                  <InputForm
                    className="mb-12 z-10 mx-auto"
                    placeholder="Search"
                    name="search"
                  />
                  <div className="ml-4 z-20 text-white">
                    <h1 className="font-bold text-3xl my-8">{shortDesc}</h1>
                    <p className="w-auto md:w-96">{longDesc}</p>
                  </div>
                </div>
              </div>
            </SliderHelper>
          );
        })}
      </Slider>
    </Wrapper>
  );
};

export default TripHeader;
