import { Info, InputForm } from "../components";
import { GrUpdate } from "react-icons/gr";
import { Form, useNavigation } from "react-router-dom";
import { useSelector } from "react-redux";

const Profile = () => {
  const store = useSelector((store) => store.userState);

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const { name, email, published_trip_number, bio } = store.user;

  return (
    <Form method="post" id="update_form">
      <div className="flex flex-col">
        <b className="text-2xl capitalize tracking-wider py-8">profile</b>
        <div className="flex flex-col gap-8">
          <div className="font-bold text-lg capitalize">name</div>
          <InputForm value={name} name="name" />
          <Info label="Email" data={email} />
          <Info
            label="Published Trip Number"
            data={published_trip_number}
            className="w-1/6"
          />

          <div className="font-bold text-lg capitalize">bio</div>
          <InputForm value={bio} name="bio" />
        </div>
      </div>
      <input type="hidden" name="image_url" value={store.profile_image || ""} />
      <button
        type="submit"
        className="capitalize text-white flex items-center w-fit rounded-md fixed right-8 bottom-8 gap-2 py-4 px-6"
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
  );
};

export default Profile;
