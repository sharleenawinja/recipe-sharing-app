import { Reducer, configureStore } from "@reduxjs/toolkit";
import authenticatedDetailsReducer from "./loggedIn";

export interface Authenticated {
  loggedIn: boolean;
  user: string;
}

// eslint-disable-next-line react-refresh/only-export-components
export default configureStore({
  reducer: {
    authenticated: authenticatedDetailsReducer as Reducer<Authenticated>,
  },
});
