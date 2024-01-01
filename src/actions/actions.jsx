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
