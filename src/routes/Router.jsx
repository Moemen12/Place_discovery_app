import { createBrowserRouter } from "react-router-dom";
import { Error, Landing, Login, Register, SingleTrip, Trips } from "../pages";
import { loginAction, registerAction } from "../actions/actions";
import { store } from "../store";
import { singleProductLoader } from "../loaders/loaders";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <Error />,
  },
  {
    path: "/auth/login",
    element: <Login />,
    errorElement: <Error />,
    action: (request) => loginAction(request, store),
  },
  {
    path: "/auth/register",
    element: <Register />,
    errorElement: <Error />,
    action: (request) => registerAction(request, store),
  },
  {
    path: "/trips",
    element: <Trips />,
    errorElement: <Error />,
  },
  {
    path: "/trip/:id/:slug",
    element: <SingleTrip />,
    errorElement: <Error />,
    loader: singleProductLoader,
  },
]);
