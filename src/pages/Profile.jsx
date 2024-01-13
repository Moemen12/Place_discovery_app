import { useState } from "react";
import { Info, InputForm, ProfileSide } from "../components";
import { GrUpdate } from "react-icons/gr";
import { useSelector } from "react-redux";
import { Form, useLoaderData, useNavigation } from "react-router-dom";

const Profile = () => {
  const responseData = useLoaderData();
  const {
    data: { name, email, published_trip_num, bio },
  } = responseData;

  const user = useSelector((state) => state.userState);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const profileImage = useSelector((state) => state.userState.profile_image);

  console.log(responseData);

  const [bioValue, setBioValue] = useState(bio);

  const handleBioChange = (e) => {
    setBioValue(e.target.value);
  };

  return (
    <>
      <ProfileSide className="sm:hidden" />
      <Form method="post" id="update_form" className="px-6">
        <div className="flex flex-col">
          <b className="text-2xl capitalize tracking-wider py-4 sm:py-8">
            profile
          </b>
          <div className="flex flex-col gap-8">
            <div className="font-bold text-lg capitalize">name</div>
            <InputForm
              className="max-w-none w-full sm:max-w-[30rem]"
              value={name}
              name="name"
            />
            <Info
              className="w-full text-sm sm:text-base sm:max-w-[30rem]"
              label="Email"
              data={email}
            />
            <Info
              label="Published Trip Number"
              data={published_trip_num}
              className="w-full sm:w-1/6"
            />

            <div className="font-bold text-lg capitalize">bio</div>
            <textarea
              className="textarea-lg text-sm md:text-lg sm:max-w-[30rem]"
              onChange={handleBioChange}
              placeholder="Bio"
              name="bio"
              value={bioValue}
            ></textarea>
          </div>
        </div>

        <input
          type="hidden"
          id="image_url"
          name="image_url"
          value={user.profile_image || ""}
        />
        <button
          type="submit"
          className="static mt-4 ml-auto capitalize text-white flex items-center w-fit rounded-md lg:fixed right-8 bottom-8 gap-2 py-2 px-3 sm:py-4 sm:px-6"
          disabled={isSubmitting}
          style={{ background: "rgb(0, 14, 48)" }}
        >
          {isSubmitting ? (
            <>
              <span className="loading loading-spinner"></span>sending...
            </>
          ) : (
            <>
              <GrUpdate />
              <p>update</p>
            </>
          )}
        </button>
      </Form>
    </>
  );
};

export default Profile;
