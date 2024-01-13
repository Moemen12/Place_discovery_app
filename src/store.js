import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import baseUrlSlice from "./features/config/baseUrlSlice ";

export const store = configureStore({
  reducer: {
    userState: userSlice,
    baseUrl: baseUrlSlice,
  },
});
