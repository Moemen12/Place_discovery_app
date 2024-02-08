import { useNavigation } from "react-router-dom";
import {
  ClientSays,
  Header,
  LandingNavbar,
  Letters,
  Loading,
  Statistic,
} from "../components";

const Landing = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <>
      {isPageLoading ? (
        <Loading />
      ) : (
        <>
          <div className="h-screen flex flex-col">
            <LandingNavbar />
            <Header />
          </div>

          <Statistic />
          <ClientSays />
          <Letters />
        </>
      )}
    </>
  );
};

export default Landing;
