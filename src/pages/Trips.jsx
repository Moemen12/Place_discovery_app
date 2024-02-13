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
        <section className="h-screen sm:mb-0">
          <div className="mb-[68px]">
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
