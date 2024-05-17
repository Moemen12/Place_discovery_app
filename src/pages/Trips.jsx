import {
  Footer,
  LandingNavbar,
  Loading,
  MobileNavbar,
  Tours,
  TripCategory,
} from "../components";
import TripHeader from "../components/TripHeader";
import { useLoaderData, useNavigation } from "react-router-dom";
const Trips = () => {
  const loadedData = useLoaderData();
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <>
      {isPageLoading ? (
        <Loading />
      ) : (
        <section className="sm:mb-0 lg:m-auto lg:max-w-[90rem]">
          <div className="sm:h-auto h-[calc(100dvh-65px)] hide-scrollBar overflow-y-scroll">
            <LandingNavbar />
            <TripHeader data={loadedData} />
            <TripCategory data={loadedData} />
            <Tours data={loadedData.trips.countries} />
            <Footer />
          </div>
          <MobileNavbar />
        </section>
      )}
    </>
  );
};

export default Trips;
