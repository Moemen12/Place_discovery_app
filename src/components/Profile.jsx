import { FaRegEdit } from "react-icons/fa";
import PropTypes from "prop-types";

const Profile = ({
  imageUrl,
  handleImageClick,
  handleFileInputChange,
  fileInputRef,
  className,
  showIcon,
}) => {
  return (
    <div
      className={`w-full h-44 relative mt-8 profile-sidebar${
        className ? ` ${className}` : ""
      }`}
    >
      <div
        className="absolute w-48 bg-center h-48 rounded-full cursor-pointer left-2/4 top-36 profile-circle"
        style={{
          backgroundImage: `url('${imageUrl}')`,
          backgroundSize: "cover",
          transform: "translate(-50%,-50%)",
        }}
        onClick={handleImageClick}
      >
        {showIcon && (
          <FaRegEdit className="absolute right-5 bottom-3" size="1.5rem" />
        )}
        <input
          name="image_url"
          type="file"
          className="hidden"
          onChange={handleFileInputChange}
          ref={fileInputRef}
        />
      </div>
    </div>
  );
};

Profile.propTypes = {
  imageUrl: PropTypes.string,
  handleImageClick: PropTypes.func,
  className: PropTypes.string,
  handleFileInputChange: PropTypes.func,
  fileInputRef: PropTypes.object,
  showIcon: PropTypes.bool,
};

export default Profile;
