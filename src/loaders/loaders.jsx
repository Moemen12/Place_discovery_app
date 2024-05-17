import { redirect } from "react-router-dom";
import { customFetch } from "../utils";
import {
  GlobalQuery,
  SingleTripQuery,
  TripQuery,
} from "../components/queries/AllQuery";

/* landing loaders */

export const landingLoader = async () => {
  try {
    const response = await customFetch(`/users/general/info`);
    return response;
  } catch (error) {
    return null;
  }
};

/* Single Trip Loader */

export const singleProductLoader =
  (queryClient) =>
  async ({ params }) => {
    try {
      const response = await queryClient.ensureQueryData(
        SingleTripQuery({ id: params.id, slug: params.slug })
      );

      return { trip: response.data };
    } catch (error) {
      // console.error("Error fetching single trip:", error.response.status);
      return { trip: {} };
    }
  };

/* User Profile Loader */

export const userProfileLoader = async (store) => {
  const user = store.getState().userState.user;

  if (!user) {
    return redirect("/auth/login");
  }

  try {
    const response = await customFetch.get("/auth/user/profile", {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

/* Start cached Trips Loader */

export const tripsLoader =
  (queryClient) =>
  async ({ request }) => {
    const params = Object.fromEntries(
      new URL(request.url).searchParams.entries()
    );
    const user = JSON.parse(localStorage.getItem("user"));

    let endpoint = "";
    if (user) {
      endpoint = `/user/trips?category=${params.category || ""}&stars=${
        params.stars || ""
      }`;
    } else {
      endpoint = `/trips?category=${params.category || ""}&stars=${
        params.stars || ""
      }`;
    }

    const headers = {};
    if (user) {
      headers.Authorization = `Bearer ${user.token}`;
    }

    try {
      const response = await queryClient.fetchQuery(
        TripQuery(endpoint, { headers })
      );
      return response;
    } catch (error) {
      return error;
    }
  };

/* End cached Trips Loader */

/* Create Trip Loader */

export const createTripLoader = async (store) => {
  const user = store.getState().userState.user;

  if (!user) {
    return redirect("/auth/login");
  }

  try {
    const response = await customFetch.get(`/trips/types`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    return response.data;
  } catch (error) {
    if (error.response.status === 401) {
      localStorage.removeItem("user");
      return redirect("/auth/login");
    }
    return error;
  }
};

/*  Start cached GlobalProfileLoader loaders */

export const globalProfileLoader =
  (queryClient) =>
  async ({ params }) => {
    try {
      const response = await queryClient.ensureQueryData(
        GlobalQuery({ id: params.id, username: params.username })
      );

      return response.data;
    } catch (error) {
      // console.error("Error fetching global profile:", error);
      return error;
    }
  };

/*  End cached GlobalProfileLoader loaders */
