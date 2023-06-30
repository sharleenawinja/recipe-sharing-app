import { createSlice } from "@reduxjs/toolkit";

export const authenticationDetailsSlice = createSlice({
  name: "authenticationDetails",
  initialState: {
    loggedIn: false,
    user: "",
    profilePhoto: "",
  },
  reducers: {
    authenticated: (state, action) => {
      const { user, photoURL } = action.payload;
      state.loggedIn = true;
      state.user = user;
      state.profilePhoto = photoURL;
    },
    loggedOut: (state) => {
      state.loggedIn = false;
      state.user = "User";
      state.profilePhoto = "";
    },
  },
});

export const { authenticated, loggedOut } = authenticationDetailsSlice.actions;
export default authenticationDetailsSlice.reducer;
