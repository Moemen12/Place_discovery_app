import { image1 } from "../assets/images";
import { IoStar } from "react-icons/io5";

const Card = ({ trip }) => {
  const { address, images, slug, title, user_name } = trip;
  return (
    <div className="flex h-64">
      <img
        loading="lazy"
        className="w-[45%] rounded-l-md object-cover"
        src={images.image_url}
        alt=""
      />

      <article className="bg-slate-700 flex-1 rounded-r-md">
        <div className="flex items-center justify-between">
          <b>{address}</b>
          <div className="flex">
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
          </div>
        </div>
        <div className="flex">
          <img src={image1} className="w-8 h-8 rounded-full" alt="" />
        </div>
      </article>
    </div>
  );
};

export default Card;
