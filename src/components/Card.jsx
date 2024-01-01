import { image1 } from "../assets/images";
import { IoStar } from "react-icons/io5";

const Card = () => {
  return (
    <div className="flex h-40 w-80">
      <img src={image1} alt="" />

      <article className="bg-slate-700 flex-1">
        <div className="flex items-center justify-between">
          <b>Paris</b>
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
