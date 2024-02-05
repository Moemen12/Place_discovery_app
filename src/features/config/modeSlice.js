import { createSlice } from "@reduxjs/toolkit";

const getInitialMode = () => {
  // Check if mode is stored in local storage, otherwise default to "light"
  return localStorage.getItem("mode") || "light";
};

const initialState = {
  screen_mode: getInitialMode(),
};

const userSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    changeMode: (state) => {
      // Toggle between "light" and "night"
      const newMode = state.screen_mode === "light" ? "night" : "light";
      document.querySelector("html").setAttribute("data-theme", newMode);
      state.screen_mode = newMode;

      // Save mode in local storage
      localStorage.setItem("mode", newMode);
    },
  },
});

export const { changeMode } = userSlice.actions;

export default userSlice.reducer;
