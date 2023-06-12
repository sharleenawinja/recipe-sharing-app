import { createContext } from "react";

export interface AppContext {
  loggedIn: boolean;
  setLoggedIn: (value: boolean) => void;
}

const defaultContext: AppContext = {
  loggedIn: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setLoggedIn: () => {},
};

export const Context = createContext(defaultContext);
