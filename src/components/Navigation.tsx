import { Suspense, useEffect, useRef, useState } from "react";
import Scrollspy from "react-scrollspy";
import Settings from "./Settings";
import { ReactComponent as CloseIcon } from "../assets/icons/close.svg";
import { ReactComponent as ExternalLinkIcon } from "../assets/icons/external-link.svg";
import { ReactComponent as ArrowRightIcon } from "../assets/icons/arrow-right.svg";

import "./Navigation.css";
import { NavLink } from "react-router-dom";

const Navigation = (): JSX.Element => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = (): void => setShowMenu((prevState) => !prevState);

  return (
    <nav className="nav">
      <div className="nav-header">radivoje.katanic</div>
      <div
        className={`nav-toggle${showMenu ? " close" : ""}`}
        onClick={handleMenuToggle}
        data-testid="nav-toggle"
      >
        <div className="nav-toggle-dash"></div>
      </div>

      {showMenu && (
        <div
          className={`nav-menu${showMenu ? " show-menu" : ""}`}
          data-testid="nav-menu"
        >
          <div className="nav-menu-heading">
            <div className="nav-menu-heading-title">Pages</div>
            <div className="nav-menu-heading-close-icon">
              <CloseIcon onClick={() => setShowMenu(false)} />
            </div>
          </div>
          <ul>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/"
                onClick={() => setShowMenu(false)}
              >
                <div className="nav-link-txt">
                  <ExternalLinkIcon />
                  <span>Home</span>
                </div>
                <ArrowRightIcon />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/about"
                onClick={() => setShowMenu(false)}
              >
                <div className="nav-link-txt">
                  <ExternalLinkIcon />
                  <span>About</span>
                </div>
                <ArrowRightIcon />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/contact"
                onClick={() => setShowMenu(false)}
              >
                <div className="nav-link-txt">
                  <ExternalLinkIcon />
                  <span>Contact</span>
                </div>
                <ArrowRightIcon />
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
