import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tips from "./components/Tips-Tricks/tips.component";
import LogIn from "./pages/auth/LogIn";
import SignUp from "./pages/auth/SignUp";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
