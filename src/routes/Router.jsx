import { createBrowserRouter } from "react-router-dom";
import {
  CreateTrip,
  Error,
  Landing,
  Login,
  Profile,
  Register,
  Saved,
  Settings,
  SingleTrip,
  Trips,
} from "../pages";
import {
  // createTripAction,
  loginAction,
  registerAction,
  updateProfileAction,
  updateSettingsAction,
} from "../actions/actions";
import { store } from "../store";
import {
  createTripLoader,
  landingLoader,
  singleProductLoader,
  tripsLoader,
  userProfileLoader,
} from "../loaders/loaders";
import { multiFormAction } from "../actions/multiformActions";

export const router = createBrowserRouter([
  {
    path: "/",

    element: <Landing />,
    errorElement: <Error />,
    loader: landingLoader,
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
    path: "/trips/:category?/:stars?:country?",
    element: <Trips />,
    errorElement: <Error />,
    loader: tripsLoader,
    // /trips with parameters here
  },
  {
    path: "/trip/:id/:slug",
    element: <SingleTrip />,
    errorElement: <Error />,
    loader: singleProductLoader,
    action: ({ params, request }) => multiFormAction(params, request, store),
  },
  {
    path: "/trips/saved/",
    element: <Saved />,
  },
  {
    path: "/trips/add/",
    element: <CreateTrip />,
    // action: (request) => createTripAction(request, store),
    errorElement: <Error />,
    loader: () => createTripLoader(store),
  },
  {
    path: "auth/profile/",
    element: <Profile />,
    errorElement: <Error />,
    action: (request) => updateProfileAction(request, store),
    loader: () => userProfileLoader(store),
  },
  {
    element: <Settings />,
    path: "/auth/settings/",
    errorElement: <Error />,
    action: (request) => updateSettingsAction(request, store),
    loader: () => userProfileLoader(store),
  },
]);
