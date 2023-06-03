import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tips from "./components/Tips-Tricks/tips.component";
import LogIn from "./pages/auth/LogIn";
import SignUp from "./pages/auth/SignUp";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/tips" element={<Tips />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
