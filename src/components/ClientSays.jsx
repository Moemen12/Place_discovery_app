import { butterfly, line_1 } from "../assets/images";
const ClientSays = () => {
  return (
    <div className="h-auto relative" style={{ background: "#000719" }}>
      <img className="top-0 left-0 w-60 md:absolute" src={butterfly} alt="" />
      <p className="uppercase text-white text-2xl md:text-5xl text-center md:pt-8">
        what our clients says
      </p>
      {/* <hr className="mx-auto w-2/3 md:w-2/5 mt-6" /> */}
      <img className="mx-auto mt-8" src={line_1} alt="" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-12 gap-4 md:gap-10 lg:gap-20 md:mt-8 pb-20 pt-12 md:pb-40">
        <article
          className="card gap-6 px-6 py-4 rounded-3xl text-sm md:text-base text-white border cursor-pointer lg:hover:translate-y-2 lg:hover:scale-110 duration-300"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0) 100%)",
            border: "1px solid white",
            borderTop: "none",
          }}
        >
          <div className="flex items-center gap-4">
            <img
              src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/27/08/jennifer-lawrence.jpg"
              className="w-12 h-12 object-cover rounded-full"
            />
            <span>Moemen Saade</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
            consectetur commodi quasi a explicabo praesentium repellat dolores?
            Ducimus, fugit sapiente.
          </p>
        </article>
        <article
          className="card gap-6 px-6 py-4 rounded-3xl text-sm md:text-base text-white border cursor-pointer lg:hover:translate-y-2 lg:hover:scale-110 duration-300"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0) 100%)",
            border: "1px solid white",
            borderTop: "none",
          }}
        >
          <div className="flex items-center gap-4">
            <img
              src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/27/08/jennifer-lawrence.jpg"
              className="w-12 h-12 object-cover rounded-full"
            />
            <span>Moemen Saade</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
            consectetur commodi quasi a explicabo praesentium repellat dolores?
            Ducimus, fugit sapiente.
          </p>
        </article>
        <article
          className="card gap-6 px-6 py-4 rounded-3xl text-sm md:text-base text-white border cursor-pointer lg:hover:translate-y-2 lg:hover:scale-110 duration-300"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0) 100%)",
            border: "1px solid white",
            borderTop: "none",
          }}
        >
          <div className="flex items-center gap-4">
            <img
              src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/27/08/jennifer-lawrence.jpg"
              className="w-12 h-12 object-cover rounded-full"
            />
            <span>Moemen Saade</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
            consectetur commodi quasi a explicabo praesentium repellat dolores?
            Ducimus, fugit sapiente.
          </p>
        </article>
      </div>
    </div>
  );
};

export default ClientSays;
