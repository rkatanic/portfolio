import { useState } from "react";
import Scrollspy from "react-scrollspy";
import Settings from "./Settings";

import "./Navigation.css";
import { NavLink } from "react-router-dom";

const Navigation = (): JSX.Element => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = (): void => setShowMenu((prevState) => !prevState);

  return (
    <nav className="nav">
      <div
        className={`nav-menu${showMenu ? " show-menu" : ""}`}
        data-testid="nav-menu"
      >
        <li className="nav-item">
          <NavLink
            to="/about"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={() => setShowMenu(false)}
          >
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
            onClick={() => setShowMenu(false)}
          >
            Skills
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/faq"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
            onClick={() => setShowMenu(false)}
          >
            FAQ
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
            onClick={() => setShowMenu(false)}
          >
            Contact
          </NavLink>
        </li>

        <div
          data-testid="nav-settings"
          className="nav-settings"
          onClick={(): void => setShowMenu(false)}
        >
          <Settings />
        </div>
      </div>
      <div
        className={`nav-toggle${showMenu ? " close" : ""}`}
        onClick={handleMenuToggle}
        data-testid="nav-toggle"
      >
        <div className="nav-toggle-dash"></div>
      </div>
    </nav>
  );
};

export default Navigation;
