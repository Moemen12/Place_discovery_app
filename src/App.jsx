import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router";
import { register } from "swiper/element/bundle";
register();

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
