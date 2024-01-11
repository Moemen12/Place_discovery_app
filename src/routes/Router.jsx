import { createBrowserRouter } from "react-router-dom";
import {
  Error,
  Landing,
  Login,
  Profile,
  Register,
  Saved,
  SettingLayout,
  Settings,
  SingleTrip,
  Trips,
} from "../pages";
import {
  loginAction,
  registerAction,
  reviewAction,
  updateProfileAction,
} from "../actions/actions";
import { store } from "../store";
import { singleProductLoader, userProfileLoader } from "../loaders/loaders";
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
    action: ({ params, request }) => reviewAction(params, request, store),
  },
  {
    path: "/trips/saved/",
    element: <Saved />,
  },
  {
    element: <SettingLayout />,
    loader: () => userProfileLoader(store),
    errorElement: <Error />,
    children: [
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
      },
    ],
  },
]);
