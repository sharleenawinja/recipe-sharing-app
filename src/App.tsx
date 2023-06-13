import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tips from "./components/Tips-Tricks/tips.component";
import LogIn from "./pages/auth/LogIn";
import SignUp from "./pages/auth/SignUp";
import Home from "./pages/Home/Home";
import ProtectedRoute from "./ProtectedRoutes";
import { useSelector } from "react-redux";

const App = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { loggedIn } = useSelector((state: any) => state.loggedIn);

  return (
    <>
      <Router>
        <Routes>
          {/* public routes */}
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* private routes */}
          <Route
            path="/tips"
            element={
              <ProtectedRoute isSignedIn={loggedIn}>
                <Tips />
              </ProtectedRoute>
            }
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute isSignedIn={loggedIn}>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
