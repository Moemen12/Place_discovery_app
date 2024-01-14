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
      className={`w-full h-44 relative profile-sidebar${
        className ? ` ${className}` : ""
      }`}
      style={{
        borderBottomLeftRadius: "75%",
        borderBottomRightRadius: "75%",
        background: "linear-gradient(#000719, #002e87)",
      }}
    >
      <div
        className="absolute w-48 h-48 rounded-full cursor-pointer left-2/4 top-36 profile-circle"
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
          accept="image/*"
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
