import { FaRegEdit } from "react-icons/fa";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfileImage } from "../features/user/userSlice";
import { Link, useLoaderData } from "react-router-dom";

const SideBar = ({ profile_image }) => {
  // const store = useSelector((store) => store.userState);

  const dispatch = useDispatch();
  // const { image } = store.user;
  const [isFileInputOpen, setIsFileInputOpen] = useState(false);
  // const [profileImage, setProfileImage] = useState(image);

  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    // Trigger click on the hidden file input
    fileInputRef.current.click();
  };

  const handleFileInputChange = (event) => {
    // Handle the selected file here
    const selectedFile = event.target.files[0];

    // Update the profile image with the selected file
    if (selectedFile) {
      const imageURL = URL.createObjectURL(selectedFile);
      // setProfileImage(imageURL);

      const reader = new FileReader();

      reader.onload = (e) => {
        const base64String = e.target.result.split(",")[1];
        dispatch(updateProfileImage(base64String));
      };

      reader.readAsDataURL(selectedFile);
    }

    // Close the file input after handling the file
    setIsFileInputOpen(false);
  };

  return (
    <aside
      className="h-screen flex flex-col items-center fixed"
      style={{ width: "inherit" }}
    >
      <div
        className="relative w-48 h-48 rounded-full cursor-pointer"
        style={{
          backgroundImage: `url('${
            profile_image ||
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/768px-Default_pfp.svg.png"
          }')`,
          backgroundSize: "cover",
        }}
        onClick={handleImageClick}
      >
        <FaRegEdit className="absolute right-5 bottom-3" size="1.5rem" />
        <input
          name="image_url"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileInputChange}
          ref={fileInputRef}
        />
      </div>
      <b className="text-2xl mt-8">Moemen Saadeh</b>
      <div className="flex flex-col w-full px-8 text-xl mt-16">
        <Link className="pb-4" to="/auth/profile">
          Profile
        </Link>
        <Link className="pb-4" to="/auth/Settings">
          Settings
        </Link>
        <div className="form-control pb-4">
          <label className="label cursor-pointer p-0">
            <span className="label-text text-xl">Dark Mode</span>
            <input
              type="checkbox"
              className="toggle bg-white [--tglbg:#DDDDDD] border-transparent h-8"
              checked
            />
          </label>
        </div>
        <Link className="pb-4">Logout</Link>
      </div>
    </aside>
  );
};

export default SideBar;
