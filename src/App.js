import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import Settings from "./components/Settings";

import "./App.css";
import List from "./components/List";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
  Routes,
  useLocation,
} from "react-router-dom";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import ProgressBar from "./components/ProgressBar";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <>
      <div data-testid="app" className="App">
        <div className="grid-wrapper">
          <div className="grid-line"></div>
          <div className="grid-line"></div>
          <div className="grid-line"></div>
        </div>
        <Home /> <Navigation />
      </div>
    </>
  );
};

export default App;
