import { createSlice } from "@reduxjs/toolkit";

export const authenticationDetailsSlice = createSlice({
  name: "authenticationDetails",
  initialState: {
    loggedIn: false,
    user: "user",
  },
  reducers: {
    authenticated: (state, action) => {
      const { loggedIn, user } = action.payload;
      state.loggedIn = loggedIn;
      state.user = user;
    },
  },
});

export const { authenticated } = authenticationDetailsSlice.actions;
export default authenticationDetailsSlice.reducer;
