import { MobileNavbar, Tours, TripCategory } from "../components";
import TripHeader from "../components/TripHeader";
import { useLoaderData } from "react-router-dom";
const Trips = () => {
  const loadedData = useLoaderData();

  return (
    <section className="h-screen" style={{ background: "#F3F6FF" }}>
      <TripHeader data={loadedData} />
      <TripCategory data={loadedData} />
      <Tours />
      <MobileNavbar />
    </section>
  );
};

export default Trips;
