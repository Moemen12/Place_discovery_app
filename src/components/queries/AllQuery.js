import { customFetch } from "../../utils";

export const GlobalQuery = ({ id, username }) => {
  return {
    queryKey: ["globalQuery", id],
    queryFn: () => customFetch(`/profile/${id}/${username}`),
  };
};

export const SingleTripQuery = ({ id, slug }) => {
  return {
    queryKey: ["singleTripQuery", id, slug], // Adjusted queryKey to include both id and slug
    queryFn: () => customFetch(`/trip/${id}/${slug}`),
  };
};

export const TripQuery = (endpoint, { headers }) => {
  return {
    queryKey: ["TripQuery", endpoint],
    queryFn: async () => {
      try {
        const response = await customFetch(endpoint, { headers });
        return response.data;
      } catch (error) {
        if (error.response.status === 401) {
          localStorage.removeItem("user");
          window.location.href = "/auth/login";
        }
      }
    },
  };
};
