import { useEffect, useState } from "react";
import { image1 } from "../assets/images";
import { IoIosAddCircleOutline } from "react-icons/io";
import axios from "axios";
import { BsCardImage } from "react-icons/bs";
import { useLoaderData } from "react-router-dom";
const CreateTrip = () => {
  const [countries, setCountries] = useState([]);
  const trip_types = useLoaderData();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://countriesnow.space/api/v0.1/countries/flag/images"
        );
        setCountries(response.data.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <section>
      <div className="px-2 sm:px-10 flex items-center justify-between sm:bg-slate-200 py-2 mt-4 sm:mt-0">
        <p className="font-bold sm:font-normal">Saved</p>
        <img className="w-8 h-8 rounded-full hidden sm:block" src={image1} />
      </div>
      <section className="px-2 sm:px-10 flex gap-16">
        <div className="flex flex-col w-1/2 mt-4 gap-8">
          <article className="flex flex-col">
            <b>Add Photo</b>
            <div className="h-60 flex flex-col shadow-xl justify-center items-center">
              <IoIosAddCircleOutline
                className="cursor-pointer"
                size={"4rem"}
                color="silver"
              />
              <p>Add Photo</p>
            </div>
          </article>
          <article className="flex flex-col">
            <b>Add Description</b>
            <textarea
              className="textarea h-20 border-none outline-0 shadow-xl"
              placeholder="Add Description"
            ></textarea>
          </article>

          <article className="flex flex-col">
            <b>Select Location</b>
            <select className="select select-bordered w-full">
              {countries.map((country) => (
                <option key={country.name}>{country.name}</option>
              ))}
            </select>
          </article>

          <article className="flex flex-col">
            <b>Add Trip</b>
            <select className="select select-bordered w-full">
              {trip_types.map((trip_type, index) => (
                <option key={index}>{trip_type}</option>
              ))}
            </select>
          </article>
        </div>
        <div className="w-1/2 mt-4 gap-2 grid grid-cols-2">
          {/* displaying all selected images here  */}
        </div>
      </section>
    </section>
  );
};

export default CreateTrip;
