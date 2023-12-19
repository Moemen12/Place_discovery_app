const Letters = () => {
  return (
    <div style={{ background: "#e4eafc" }} className="text-center pt-6 pb-20">
      <p className="text-xl text-black">
        Subscribe to get information <br />
        latest news and others
      </p>
      <div
        className="join md:mx-auto mt-10 mx-4"
        style={{ width: "fit-content" }}
      >
        <input
          placeholder="Enter Your Email"
          type="text"
          style={{ background: "#D9D9D9" }}
          className="input join-item focus:shadow-none focus:outline-none focus:border-none text-xs md:w-80 w-full mt-2 md:mt-0"
        />
        <button className="btn uppercase join-item bg-black text-white px-8 md:px-16 tracking-wider mt-2 md:mt-0">
          subscribe
        </button>
      </div>
    </div>
  );
};

export default Letters;
