// store/auth/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  categories: [],
  skills: [],
  minDuration: 0,
  maxDuration: 6,
  searchValue: "",
  location: false,
  error: null,
  success: false,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setSkills: (state, action) => {
      state.skills = action.payload;
    },
    setMinDuration: (state, action) => {
      state.minDuration = action.payload;
    },
    setMaxDuration: (state, action) => {
      state.maxDuration = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    clearState: (state) => {
      state.loading = initialState.loading;
      state.categories = initialState.categories;
      state.skills = initialState.skills;
      state.duration = initialState.duration;
      state.error = initialState.error;
      state.success = initialState.success;
    },
  },
  extraReducers: {},
});

export const {
  setCategories,
  setMaxDuration,
  setMinDuration,
  setSkills,
  setLocation,
  setLoading,
  setSearchValue,
  clearState,
} = filterSlice.actions;
export default filterSlice.reducer;
