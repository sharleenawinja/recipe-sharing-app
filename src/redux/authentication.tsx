import { createSlice } from "@reduxjs/toolkit";

export const authenticationDetailsSlice = createSlice({
  name: "authenticationDetails",
  initialState: {
    loggedIn: false,
    user: "User",
  },
  reducers: {
    authenticated: (state, action) => {
      const { user } = action.payload;
      state.loggedIn = true;
      state.user = user;
    },
    loggedOut: (state) => {
      state.loggedIn = false;
      state.user = "User";
    },
  },
});

export const { authenticated, loggedOut } = authenticationDetailsSlice.actions;
export default authenticationDetailsSlice.reducer;
