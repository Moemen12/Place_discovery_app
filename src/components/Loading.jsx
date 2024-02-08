import { logoLight, logoDark } from "../assets/images";

const Loading = () => {
  const theme = localStorage.getItem("theme");

  return (
    <section
      className="fixed w-screen h-screen flex items-center justify-center z-50"
      style={
        theme === "night"
          ? { background: "rgb(0, 14, 48)" }
          : { background: "#f3f6ff" }
      }
    >
      <img
        className="w-80"
        src={theme === "night" ? logoLight : logoDark}
        alt=""
      />
    </section>
  );
};

export default Loading;
