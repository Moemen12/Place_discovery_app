import { createBrowserRouter } from "react-router-dom";
import { Landing } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
]);
