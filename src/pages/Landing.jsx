import { ClientSays, Header, Letters, Statistic } from "../components";

const Landing = () => {
  return (
    <>
      <div className="h-screen flex flex-col">
        <Header />
      </div>

      <Statistic />
      <ClientSays />
      <Letters />
    </>
  );
};

export default Landing;
