import { redirect } from "react-router-dom";
import { loginUser, setMessage } from "../features/user/userSlice";
import { customFetch } from "../utils";

/* Registration Action */

export const registerAction = async ({ request }, store) => {
  const { dispatch } = store;
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await customFetch.post("/auth/register", data);
    dispatch(setMessage(response.data));
    return redirect("/auth/login");
  } catch (error) {
    dispatch(setMessage(error.response.data));
    return null;
  }
};

/* Login Action */

export const loginAction = async ({ request }, store) => {
  const { dispatch } = store;
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await customFetch.post("/auth/login", data);
    dispatch(loginUser(response.data));
    return redirect("/trips");
  } catch (error) {
    dispatch(setMessage(error.response.data));
    return null;
  }
};

/* Review Action */

export const reviewAction = async (params, request, store) => {
  const { dispatch } = store;
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const user = store.getState().userState.user;

  try {
    if (!user || user.id === null) {
      const errorMessage = "Unauthorized, Please Login";
      dispatch(setMessage({ error: true, message: errorMessage }));

      return redirect("/auth/login");
    }

    const response = await customFetch.post(
      `trip/${params.id}/${user.id}/create/review/`,
      data,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );

    return response;
  } catch (error) {
    dispatch(setMessage(error.response.data.message));
    return error;
  }
};

/* Update Profile Action */

export const updateProfileAction = async ({ request }, store) => {
  const { dispatch } = store;

  const newData = new FormData(document.getElementById("update_form"));

  const user = store.getState().userState.user;

  try {
    if (!user || user.id === null) {
      const errorMessage = "Unauthorized, Please Login";
      dispatch(setMessage({ error: true, message: errorMessage }));

      return redirect("/auth/login");
    }

    const response = await customFetch.put(`/auth/user/profile`, newData, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    return response;
  } catch (error) {
    dispatch(setMessage(error.response.data.message));
    return error;
  }
};
