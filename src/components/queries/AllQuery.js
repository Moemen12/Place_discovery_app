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
    queryKey: ["TripQuery", endpoint], // Changed from id to endpoint
    queryFn: async () => {
      try {
        const response = await customFetch(endpoint, { headers }); // Use endpoint and headers directly
        return response.data;
      } catch (error) {
        throw new Error("Failed to fetch trip data: " + error.message);
      }
    },
  };
};
