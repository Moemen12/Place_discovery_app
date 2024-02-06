import { newVideo } from "../assets/images";
import {
  Footer,
  LandingNavbar,
  MobileNavbar,
  Tours,
  TripCategory,
} from "../components";
import TripHeader from "../components/TripHeader";
import { useLoaderData } from "react-router-dom";
const Trips = () => {
  const loadedData = useLoaderData();
  return (
    <section className="h-screen mb-32 sm:mb-0">
      <LandingNavbar style={{ background: "black" }} />
      <TripHeader data={loadedData} />
      <TripCategory data={loadedData} />
      <Tours data={loadedData.trips.countries} />
      <img src={newVideo} alt="" />
      <Footer />
      <MobileNavbar />
    </section>
  );
};

export default Trips;
