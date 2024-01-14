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
