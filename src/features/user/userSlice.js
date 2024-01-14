import { createSlice } from "@reduxjs/toolkit";
import { getUserFromLocalStorage } from "../../utils";

const initialState = {
  user: getUserFromLocalStorage(),
  message: null,
  profile_image: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const user = { ...action.payload, token: action.payload.token };
      localStorage.setItem("user", JSON.stringify(user));
      state.user = user;
    },
    logoutUser: () => {
      localStorage.removeItem("user");
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    resetMessage: (state) => {
      state.message = null;
    },
    updateProfileImage: (state, action) => {
      state.profile_image = action.payload;
    },
    resetProfileImage: (state) => {
      state.profile_image = null;
    },
  },
});

export const {
  loginUser,
  setMessage,
  logoutUser,
  resetMessage,
  updateProfileImage,
  resetProfileImage,
} = userSlice.actions;

export default userSlice.reducer;
