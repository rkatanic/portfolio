import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Navigation from "./components/Navigation";
import Cursor from "./components/Cursor";

import "./App.css";

const App = () => {
  return (
    <>
      <div id="grid-overlay" className="grid-overlay">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="noise"></div>
      {/* <Cursor /> */}
      <div className="App">
        <div data-testid="app" className="App">
          <div className="grid-wrapper">
            <div className="grid-line"></div>
            <div className="grid-line"></div>
            <div className="grid-line"></div>
          </div>
        </div>
        <Router>
          <Navigation />

          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
