import { customFetch } from "../utils";

/* Single Trip Loader */

export const singleProductLoader = async ({ params }) => {
  const response = await customFetch(`/trip/${params.id}/${params.slug}`);
  return { trip: response.data };
};

/* User Profile Loader */

// export const userProfileLoader = ({ params }) => {
//   const response = await customFetch(`/`)
//   return "moemme";
// };
