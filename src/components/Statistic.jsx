import Wrapper from "../assets/wrappers/Statistic";

const Statistic = () => {
  return (
    <Wrapper>
      <div className="p-12 flex flex-col items-center justify-between md:flex-row gap-16 mx-auto">
        <div className="flex items-center justify-center flex-col">
          <b className="text-5xl md:text-8xl">0+</b>
          <p>User Trust</p>
        </div>

        <div className="flex items-center justify-center flex-col">
          <b className="text-5xl md:text-8xl">0+</b>
          <p className="text-center">
            Number of users <br />
            of this site
          </p>
        </div>

        <div className="flex items-center justify-center flex-col">
          <b className="text-5xl md:text-8xl">0k</b>
          <p>Happy customer</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Statistic;
