import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import baseUrlSlice from "./features/config/baseUrlSlice ";
import algoliaSlice from "./features/config/algoliaSlice";
import filterSlice from "./features/filter/filterSlice";

export const store = configureStore({
  reducer: {
    userState: userSlice,
    baseUrl: baseUrlSlice,
    algoliaState: algoliaSlice,
    filterState: filterSlice,
  },
});
