import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navigation from "./components/Navigation";

import "./App.css";
import Background from "./components/Background";

const App = () => {
  return (
    <div className="App">
      <Background />
      <Router>
        <Navigation />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
