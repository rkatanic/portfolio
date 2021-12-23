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

const App = () => {
  return (
    <div data-testid="app" className="app">
      <div className="navigation">
        <Settings />
        <Link to="/">
          <div>Logo</div>
        </Link>
        <ul className="navigation-links">
          <li className="navigation-link">
            <NavLink
              to="projects"
              activeClassName={(isActive) => (isActive ? "active" : "")}
            >
              projects.
            </NavLink>
          </li>
          <li className="navigation-link">
            <NavLink
              to="blogs"
              activeClassName={(isActive) => (isActive ? "active" : "")}
            >
              blogs.
            </NavLink>
          </li>
          <li className="navigation-link">
            <NavLink
              to="contact"
              activeClassName={(isActive) => (isActive ? "active" : "")}
            >
              contact.
            </NavLink>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
