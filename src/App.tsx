import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from "./components/testcomponent";
import Tips from "./components/Tips-Tricks/tips.component";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Test />} />
          <Route path="/tips" element={<Tips />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
