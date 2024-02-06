import { createSlice } from "@reduxjs/toolkit";

const themes = {
  light: "light",
  night: "night",
};

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem("theme") || themes.light;
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};

const initialState = {
  theme: getThemeFromLocalStorage(),
};

const userSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    changeMode: (state) => {
      const { night, light } = themes;
      state.theme = state.theme === night ? light : night;
      document.documentElement.setAttribute("data-theme", state.theme);
      localStorage.setItem("theme", state.theme);
    },
  },
});

export const { changeMode } = userSlice.actions;

export default userSlice.reducer;
