import { redirect } from "react-router-dom";
import { loginUser, setMessage } from "../features/user/userSlice";
import { customFetch } from "../utils";
import { toast } from "react-toastify";

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

export const reviewAction = async (params, data, store) => {
  const { dispatch } = store;
  const user = store.getState().userState.user;

  const ReviewData = {
    trip_id: params.id,
    review: data.review,
  };

  console.log(ReviewData);

  try {
    const response = await customFetch.post(`trip/create/review/`, ReviewData, {
      headers: {
        Authorization: `Bearer ${user?.token}`,
      },
    });

    return response;
  } catch (error) {
    console.log(error);
    dispatch(setMessage(error.response.data.message));
    toast.error(error.response.data.message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
};

/* Rating Action */

export const ratingAction = async (params, data, store) => {
  const starsRating = data.stars_rating;
  const tripId = params.id;

  const ratingData = {
    stars_rating: starsRating,
    trip_id: tripId,
  };

  const { dispatch } = store;
  const user = store.getState().userState.user;

  try {
    const response = await customFetch.post(
      `/trip/make/rating/`,

      ratingData,
      {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      }
    );

    return response;
  } catch (error) {
    dispatch(setMessage(error.response.data.message));
    toast.error(error.response.data.message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
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
    if (response.data.new_image) {
      const updatedUser = {
        ...user,
        image: `/images/profile/${response.data.new_image}`,
      };
      localStorage.setItem("user", JSON.stringify(updatedUser));
    }

    return response;
  } catch (error) {
    dispatch(setMessage(error.response.data.message));
    return error;
  }
};

/* Update Settings Action */

export const updateSettingsAction = async ({ request }, store) => {
  const { dispatch } = store;

  const newData = new FormData(document.getElementById("update_form"));

  const user = store.getState().userState.user;

  if (!user || user.id === null) {
    const errorMessage = "Unauthorized, Please Login";
    dispatch(setMessage({ error: true, message: errorMessage }));

    return redirect("/auth/login");
  }
  try {
    const response = await customFetch.put(`/auth/user/settings`, newData, {
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
