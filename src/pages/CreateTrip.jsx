import { useEffect, useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import axios from "axios";
import { selected_images } from "../assets/images";
import { useLoaderData } from "react-router-dom";
import { customFetch } from "../utils";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { store } from "../store";
import {
  BreadCrumbs,
  Footer,
  LandingNavbar,
  MobileNavbar,
} from "../components";

const CreateTrip = () => {
  const [countries, setCountries] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [description, setDescription] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedTrip, setSelectedTrip] = useState("");
  const [title, setTitleTrip] = useState("");
  const dataCollection = useLoaderData();

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

  const handleImageUpload = (e) => {
    const files = e.target.files;
    const imageUrls = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const imageUrl = URL.createObjectURL(file);
      imageUrls.push(imageUrl);
    }

    setSelectedImages([...selectedImages, ...imageUrls]);
  };

  const removeItem = (index) => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
  };

  const handleUpload = async () => {
    const user = store.getState().userState.user;
    try {
      const formData = new FormData();

      for (let i = 0; i < selectedImages.length; i++) {
        const imageUrl = selectedImages[i];
        const blob = await fetch(imageUrl).then((r) => r.blob());
        formData.append("images[]", blob, `image_${i + 1}.png`);
      }

      formData.append("title", title);
      formData.append("description", description);
      formData.append("address", selectedLocation);
      formData.append("trip_type", selectedTrip);

      const response = await customFetch.post(
        "/trip/create/new_trip",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      console.log("Upload successful:", response.data);
      // Add any additional logic or state updates after successful upload
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  return (
    <>
      <LandingNavbar />
      <section>
        <BreadCrumbs title={"add"} image={dataCollection.profile_image} />
        <section className="px-2 sm:px-10 flex sm:gap-16 gap-4">
          <div className="flex flex-col w-1/2 mt-4 gap-4 sm:gap-8">
            <article className="flex flex-col bg-white">
              <b>Add Photo</b>
              <div className="sm:h-60 h-32 flex flex-col shadow-xl justify-center items-center">
                <label htmlFor="imageUpload" className="cursor-pointer">
                  <IoIosAddCircleOutline size={"4rem"} color="silver" />
                  <p>Add Photos</p>
                  <input
                    id="imageUpload"
                    type="file"
                    name="images[]"
                    accept="image/*"
                    multiple
                    style={{ display: "none" }}
                    onChange={handleImageUpload}
                  />
                </label>
              </div>
            </article>
            <article className="flex flex-col">
              <b>Add title</b>
              <input
                type="hidden"
                id="titleHidden"
                name="title"
                value={title}
              />
              <textarea
                className="textarea h-20 border-none outline-0 shadow-xl"
                placeholder="Add title"
                onChange={(e) => setTitleTrip(e.target.value)}
              ></textarea>
            </article>

            <article className="flex flex-col">
              <b>Add Description</b>
              <input
                type="hidden"
                id="descriptionHidden"
                name="description"
                value={description}
              />
              <textarea
                className="textarea h-20 border-none outline-0 shadow-xl"
                placeholder="Add Description"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </article>

            <article className="flex flex-col">
              <b>Select Location</b>
              <select
                id="trip_types"
                className="select select-bordered w-full"
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                <option disabled selected value="">
                  Select trip location
                </option>
                {countries.map((country) => (
                  <option key={country.name}>{country.name}</option>
                ))}
              </select>
              <input
                type="hidden"
                id="countryNameHidden"
                name="country_name"
                value={selectedLocation}
              />
            </article>

            <article className="flex flex-col">
              <b>Add Trip</b>
              <select
                className="select select-bordered w-full"
                onChange={(e) => setSelectedTrip(e.target.value)}
              >
                <option disabled selected value="">
                  Select trip type
                </option>
                {dataCollection.trip_types.map((trip_type, index) => (
                  <option key={index}>{trip_type}</option>
                ))}
              </select>
              <input
                type="hidden"
                id="tripTypeHidden"
                name="trip_type"
                value={selectedTrip}
              />
            </article>
          </div>
          <div
            className={`w-1/2 mt-4 gap-2 ${
              selectedImages.length > 0 && "grid"
            } sm:grid-cols-2 h-max`}
          >
            {selectedImages.length > 0 ? (
              selectedImages.map((image, index) => (
                <div className="sm:h-44 h-44 sm:w-auto relative" key={index}>
                  <RiDeleteBin5Fill
                    onClick={() => removeItem(index)}
                    className="absolute right-0 top-0 cursor-pointer"
                    color="red"
                    size={"1.2rem"}
                  />
                  <img
                    src={image}
                    alt={`Selected Image ${index + 1}`}
                    className="w-full h-full rounded-md object-cover"
                  />
                </div>
              ))
            ) : (
              <img src={selected_images} />
            )}
          </div>
        </section>
        <button className="btn mt-4 mx-2 sm:mx-10" onClick={handleUpload}>
          Submit
        </button>
      </section>

      <Footer />
      <MobileNavbar />
    </>
  );
};

export default CreateTrip;
