import { useState } from "react";
import Scrollspy from "react-scrollspy";
import Settings from "./Settings";

import "./Navigation.css";
import { NavLink } from "react-router-dom";

const Navigation = (): JSX.Element => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = (): void => setShowMenu((prevState) => !prevState);

  const handleLinkClick = (): void => {
    document.getElementById("grid-overlay")?.classList.add("transition");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    setTimeout(() => {
      setShowMenu(false);
    }, 1500);
    setTimeout((): void => {
      document.getElementById("grid-overlay")?.classList.remove("transition");
    }, 2500);
  };
  return (
    <nav className="nav">
      <div
        className={`nav-menu${showMenu ? " show-menu" : ""}`}
        data-testid="nav-menu"
      >
        <div className="grid-wrapper">
          <div className="grid-line"></div>
          <div className="grid-line"></div>
          <div className="grid-line"></div>
        </div>
        <li className="nav-item">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `txt-lg txt-outlined txt-800 nav-link ${isActive ? "active" : ""}`
            }
            onClick={handleLinkClick}
          >
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              `txt-lg txt-outlined txt-800 nav-link ${isActive ? "active" : ""}`
            }
            onClick={handleLinkClick}
          >
            Skills
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `txt-lg txt-outlined txt-800 nav-link ${isActive ? "active" : ""}`
            }
            onClick={handleLinkClick}
          >
            Contact
          </NavLink>
        </li>
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
