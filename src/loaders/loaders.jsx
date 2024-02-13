import { redirect } from "react-router-dom";
import { customFetch } from "../utils";

/* Single Trip Loader */

export const singleProductLoader = async ({ params }) => {
  try {
    const response = await customFetch(`/trip/${params.id}/${params.slug}`);
    return { trip: response.data };
  } catch (error) {
    console.log(error);
    return null;
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

/* Trips Loader */

export const tripsLoader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  try {
    // Check if the user exists in local storage
    const user = JSON.parse(localStorage.getItem("user"));

    // Construct the endpoint URL based on user existence
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

    // Construct request headers
    const headers = {};
    if (user) {
      headers.Authorization = `Bearer ${user.token}`;
    }

    // Make the request with the constructed endpoint URL and headers
    const response = await customFetch.get(endpoint, { headers });

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

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
    console.error(error);
    return null;
  }
};

/* landing loaders */

export const landingLoader = async () => {
  try {
    const response = await customFetch(`/users/general/info`);
    return response;
  } catch (error) {
    return null;
  }
};

/* GlobalProfileLoader loaders */

export const GlobalProfileLoader = async ({ params }) => {
  try {
    const response = await customFetch(
      `/profile/${params.id}/${params.username}`
    );
    return response.data;
  } catch (error) {
    return null;
  }
};
