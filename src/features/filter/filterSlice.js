import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFilterSideBarOpened: false,
  isAccordionSelected: {
    category: "",
    stars: "",
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    toggleSideBar: (state) => {
      state.isFilterSideBarOpened = !state.isFilterSideBarOpened;
    },
    setSelectedValues: (state, action) => {
      state.isAccordionSelected = {
        ...state.isAccordionSelected,
        ...action.payload,
      };
    },
    clearFilterValues: (state) => {
      state.isAccordionSelected = {
        category: "",
        stars: "",
      };
    },
  },
});

export const { toggleSideBar, clearFilterValues, setSelectedValues } =
  filterSlice.actions;

export default filterSlice.reducer;
