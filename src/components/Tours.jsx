import { useEffect, useState } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import Slider from "./Slider";
import SliderHelper from "./SliderHelper";
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";
import { Form } from "react-router-dom";
import { useSelector } from "react-redux";
import { customFetch } from "../utils";
import { IoSadOutline } from "react-icons/io5";

const Tours = ({ data }) => {
  const [flagData, setFlagData] = useState([]);

  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries/flag/images")
      .then((response) => response.json())
      .then((data) => {
        setFlagData(data.data);
      });
  }, []);

  // Function to find the flag URL based on the country name
  const findFlagUrl = (countryName) => {
    const country = flagData.find((c) => c.name === countryName);
    return country ? country.flag : null;
  };

  const baseUrl = useSelector((store) => store.baseUrl);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [newImages, setNewImages] = useState([]);

  const submitForm = (country) => {
    setSelectedCountry(country);

    customFetch
      .get(`/trips?country=${country}`)
      .then((response) => {
        setNewImages(response.data.images);
      })
      .catch((error) => {
        console.error("Error making API request:", error);
      });
  };

  return (
    <section className="pt-8 px-8 pb-8 hidden sm:block">
      <p className="text-center font-black sm:text-4xl sm:tracking-widest">
        Popular Tours
      </p>
      <p className="text-center mt-8 text-lg">
        Exploring the diverse destinations on our website has become a <br />
        favorite pastime for me.
      </p>
      <Slider
        perView={"4"}
        delayTime={3000}
        loop={true}
        spaceBetween={"20"}
        className="mt-10"
      >
        {data.map((country) => (
          <SliderHelper key={country}>
            <div
              type="button"
              onClick={() => submitForm(country)}
              className="flex items-center justify-around gap-3 shadow-2xl rounded-lg p-2 bg-white cursor-pointer"
            >
              <div className="w-24 h-12">
                <img
                  src={findFlagUrl(country)}
                  alt=""
                  className="w-full h-full"
                />
              </div>
              <p className="">{country}</p>
            </div>
          </SliderHelper>
        ))}
      </Slider>
      <Form onSubmit={submitForm}>
        <input type="hidden" name="country" value={selectedCountry} />
      </Form>
      {newImages.length > 0 ? (
        <div className="w-4/5 mx-auto mt-20">
          <Splide
            hasTrack={false}
            options={{
              perPage: 3,
              fixedWidth: "23rem",
              fixedHeight: "15rem",
              gap: "1rem",
              pagination: false,
            }}
          >
            <SplideTrack>
              {newImages.map((image) => {
                const { id, image_url } = image;
                return (
                  <SplideSlide key={id}>
                    <img
                      className="h-full w-full object-cover"
                      src={`${baseUrl}/storage${image_url}`}
                      alt="Image 1"
                    />
                  </SplideSlide>
                );
              })}
            </SplideTrack>

            <div className="splide__arrows absolute flex justify-between w-full top-28">
              <button className="splide__arrow splide__arrow--prev right-20 relative">
                <BsArrowLeftCircle size={"2.5rem"} />
              </button>
              <button className="splide__arrow splide__arrow--next left-20 relative">
                <BsArrowRightCircle size={"2.5rem"} />
              </button>
            </div>
          </Splide>
        </div>
      ) : (
        <div className="flex h-48 items-center justify-center mt-8">
          <div className="flex flex-col items-center">
            <b className="text-2xl mb-4">Opps! Sorry No Result found</b>
            <IoSadOutline size={"3rem"} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Tours;
