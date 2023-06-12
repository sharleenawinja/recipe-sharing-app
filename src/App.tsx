import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Context, AppContext } from "./Context";
import Tips from "./components/Tips-Tricks/tips.component";
import LogIn from "./pages/auth/LogIn";
import SignUp from "./pages/auth/SignUp";
import Home from "./pages/Home/Home";
import { useEffect, useState } from "react";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const contextValue: AppContext = {
    loggedIn,
    setLoggedIn,
  };

  useEffect(() => {
    console.log("context in app", loggedIn);
  });
  return (
    <>
      <Context.Provider value={contextValue}>
        <Router>
          <Routes>
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/tips" element={<Tips />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>
      </Context.Provider>
    </>
  );
};

export default App;
