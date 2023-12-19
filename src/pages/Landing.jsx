import { ClientSays, Header, Letters, Slider, Statistic } from "../components";

const Landing = () => {
  return (
    <>
      <div className="h-screen flex flex-col">
        <Header />
      </div>
      <Slider />
      <Statistic />
      <ClientSays />
      <Letters />
    </>
  );
};

export default Landing;
