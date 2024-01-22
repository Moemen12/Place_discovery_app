import { ratingAction, reviewAction } from "./actions";

// Single Page Actions

export const multiFormAction = async (params, request, store) => {
  const formData = await request.formData();
  const formId = formData.get("reviewSubmit");

  if (formId === "select_Start") {
    const data = Object.fromEntries(formData);
    await ratingAction(params, data, store);
    return null;
  } else if (formId === "review") {
    const data = Object.fromEntries(formData);
    await reviewAction(params, data, store);
    return null;
  }
};
