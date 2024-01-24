import PropTypes from "prop-types";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsTelegram } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";

const ShareComponent = ({ url, id, message = "Check out this link: " }) => {
  const baseUrl = window.location.origin;
  const fullUrl = `${baseUrl}/trip/${id}/${url}`;

  const encodedUrl = encodeURIComponent(fullUrl);
  const encodedMessage = encodeURIComponent(message);

  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodedMessage} ${encodedUrl}`;

  const telegramShareUrl = `https://t.me/share/url?url=${encodedUrl}&text=${encodedMessage}`;

  const emailShareUrl = `mailto:?subject=${encodedMessage}&body=${encodedUrl}`;

  return (
    <div className="flex flex-col absolute top-0 right-7 bg-slate-200 rounded-md">
      <a
        href={whatsappShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 p-1 border-b hover:bg-slate-300"
      >
        <IoLogoWhatsapp size={"1.5rem"} color="green" />
        <p className="capitalize text-sm">whatsapp</p>
      </a>
      <a
        href={telegramShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 p-1 border-b hover:bg-slate-300"
      >
        <BsTelegram size={"1.5rem"} color="#4299e1" />
        <p className="capitalize text-sm">telegram</p>
      </a>
      <a
        href={emailShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 p-1 border-b hover:bg-slate-300"
      >
        <MdOutlineMailOutline size={"1.5rem"} color="#e74c3c" />
        <p className="capitalize text-sm">email</p>
      </a>
    </div>
  );
};

ShareComponent.propTypes = {
  url: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  message: PropTypes.string,
};

export default ShareComponent;
