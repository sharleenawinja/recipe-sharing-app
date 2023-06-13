import { createSlice } from "@reduxjs/toolkit";

export const loggedinSlice = createSlice({
  name: "loggedIn",
  initialState: {
    loggedIn: false,
  },
  reducers: {
    authenticated: (state, action) => {
      state.loggedIn = action.payload;
    },
  },
});

export const { authenticated } = loggedinSlice.actions;
export default loggedinSlice.reducer;
