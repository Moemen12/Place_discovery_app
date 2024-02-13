import { Link, useLoaderData, useNavigation } from "react-router-dom";
import {
  ClientSays,
  Footer,
  Header,
  LandingNavbar,
  Letters,
  Loading,
  Statistic,
} from "../components";

const Landing = () => {
  const data = useLoaderData();
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <>
      {isPageLoading ? (
        <Loading />
      ) : (
        <>
          <Link
            to="/"
            style={{ color: "#002e87" }}
            className="text-xl font-bold sm:hidden absolute top-4 left-8"
          >
            Wanderwise
          </Link>
          <div className="h-screen flex flex-col">
            <LandingNavbar />
            <Header />
          </div>

          <Statistic data={data.data} />
          <ClientSays />
          <Letters />
          <Footer />
        </>
      )}
    </>
  );
};

export default Landing;
