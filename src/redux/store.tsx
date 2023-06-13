import { configureStore } from "@reduxjs/toolkit";
import loggedInReducer from "./loggedIn";

// eslint-disable-next-line react-refresh/only-export-components
export default configureStore({
  reducer: {
    loggedIn: loggedInReducer,
  },
});
