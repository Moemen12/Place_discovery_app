import PropTypes from "prop-types";
const ImageCard = ({
  singleImg,
  profile_image,
  baseUrl,
  username,
  country,
}) => {
  return (
    <div className="w-full md:w-1/2 relative max-h-[345px]">
      <img
        className="rounded-2xl h-full w-full object-cover"
        src={`${baseUrl}/storage${singleImg}`}
        alt=""
      />
      <article
        className="absolute left-0 bottom-0 w-full pt-2 px-4 flex flex-col gap-2 sm:hidden"
        style={{ background: "rgb(0,0,0,0.7)" }}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img
              src={
                profile_image
                  ? `${baseUrl}/storage${profile_image}`
                  : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/768px-Default_pfp.svg.png"
              }
              className="rounded-full h-10 w-10 object-cover"
              alt=""
            />
            <p className="text-white font-sans">{username}</p>
          </div>
          <p className="text-white">{country}</p>
        </div>
      </article>
    </div>
  );
};

ImageCard.propTypes = {
  trip: PropTypes.object,
  baseUrl: PropTypes.string,
  singleImg: PropTypes.string,
  profile_image: PropTypes.string,
  username: PropTypes.string,
  country: PropTypes.string,
};

export default ImageCard;
