import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";

import "./App.css";

const App = () => (
  <div data-testid="app" className="app">
    <div className="app-main-container">
      <div className="top-shadow"></div>
      <div className="app-main-container-column-left">
        <Home />
      </div>
      <div className="app-main-container-column-right">
        <About />
        <Skills />
        <Faq />
        <Contact />
      </div>
    </div>
  </div>
);

export default App;
