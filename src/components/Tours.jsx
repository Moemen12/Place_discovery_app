const Tours = () => {
  return (
    <section className="hidden sm:block h-96" style={{ background: "#F3F6FF" }}>
      <p className="text-center font-black sm:text-4xl sm:tracking-widest">
        popular tours
      </p>
      <p className="text-center mt-8 text-lg">
        Discovering new places on the website has become a <br />
        favorite pastime for me
      </p>

      <div>
        <div className="flex items-center gap-3 shadow-2xl rounded-lg w-fit p-2 bg-white cursor-pointer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/67/Flag_of_Christmas_Island.svg"
            alt=""
            className="h-auto w-24"
          />
          <p className="">Algeria</p>
        </div>
      </div>
    </section>
  );
};

export default Tours;
