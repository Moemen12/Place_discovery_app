import { createSlice } from "@reduxjs/toolkit";
const algoliaAppId = import.meta.env.VITE_APP_ALGOLIA_APP_ID;
const algoliaAppKey = import.meta.env.VITE_APP_API_KEY;

const algoliaSlice = createSlice({
  name: "algolia_identifier",
  initialState: {
    ALGOLIA_ID: algoliaAppId,
    ALGOLIA_KEY: algoliaAppKey,
  },
});

export default algoliaSlice.reducer;
