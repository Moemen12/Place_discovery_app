import {
  ClientSays,
  Header,
  LandingNavbar,
  Letters,
  Statistic,
} from "../components";

const Landing = () => {
  return (
    <>
      <div className="h-screen flex flex-col">
        <LandingNavbar />
        <Header />
      </div>

      <Statistic />
      <ClientSays />
      <Letters />
    </>
  );
};

export default Landing;
