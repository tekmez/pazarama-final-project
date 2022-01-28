import { combineReducers, createSlice } from "@reduxjs/toolkit";
import { getUser, postUser } from "./Services";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    user: [],
    isLoading: false,
  },
  extraReducers: {
    [getUser.pending]: (state) => {
      state.isLoading = true;
    },
    [getUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    [getUser.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const postSlice = createSlice({
  name: "post",
  initialState: {
    user: [],
    isLoading: false,
  },
  extraReducers: {
    [postUser.pending]: (state) => {
      state.isLoading = true;
    },
    [postUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    [postUser.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

const reducer = combineReducers({
  users: userSlice.reducer,
  post: postSlice.reducer,
});

export default reducer;
