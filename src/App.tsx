import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LogIn from "./components/pages/auth/LogIn";
import SignUp from "./components/pages/auth/SignUp";
import Home from "./components/pages/Home/Home";
import ProtectedRoute from "./ProtectedRoutes";
import { useSelector } from "react-redux";

const App = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { authentication } = useSelector((state: any) => state);

  return (
    <>
      <Router>
        <Routes>
          {/* public routes */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* private routes */}
          <Route
            path="/home"
            element={
              <ProtectedRoute isSignedIn={authentication.loggedIn}>
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
