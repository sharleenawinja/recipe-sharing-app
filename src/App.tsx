import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tips from "./components/Tips-Tricks/tips.component";
import LoginComponent from "./pages/Login/LoginComponent";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/tips" element={<Tips />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
