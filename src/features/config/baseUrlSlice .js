import { createSlice } from "@reduxjs/toolkit";

const Base_APP_URL = import.meta.env.VITE_APP_BASE_URL;

const baseUrlSlice = createSlice({
  name: "baseUrl",
  initialState: Base_APP_URL,
});

export default baseUrlSlice.reducer;
