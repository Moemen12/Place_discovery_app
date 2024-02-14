import { createBrowserRouter } from "react-router-dom";
import {
  CreateTrip,
  Error,
  GlobalProfile,
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
  deleteTripAction,
  // createTripAction,
  loginAction,
  registerAction,
  updateProfileAction,
  updateSettingsAction,
} from "../actions/actions";
import { store } from "../store";
import {
  globalProfileLoader,
  createTripLoader,
  landingLoader,
  singleProductLoader,
  tripsLoader,
  userProfileLoader,
} from "../loaders/loaders";
import { multiFormAction } from "../actions/multiformActions";
import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      cacheTime: 1000 * 60 * 60, // 1 hour
    },
  },
});
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
    loader: tripsLoader(queryClient),
  },
  {
    path: "/trip/:id/:slug",
    element: <SingleTrip />,
    errorElement: <Error />,
    loader: singleProductLoader(queryClient),
    action: ({ params, request }) => multiFormAction(params, request, store),
  },
  {
    path: "/trips/saved/",
    element: <Saved />,
  },
  {
    path: "/trips/add/",
    element: <CreateTrip />,
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
    path: "user/profile/:id?/:username?",
    element: <GlobalProfile />,
    errorElement: <Error />,
    action: (request) => deleteTripAction(request, store),
    loader: globalProfileLoader(queryClient),
  },
  {
    element: <Settings />,
    path: "/auth/settings/",
    errorElement: <Error />,
    action: (request) => updateSettingsAction(request, store),
    loader: () => userProfileLoader(store),
  },
]);
