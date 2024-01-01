import { customFetch } from "../utils";

export const singleProductLoader = async ({ params }) => {
  const response = await customFetch(`/trip/${params.id}/${params.slug}`);
  return { trip: response.data };
};
