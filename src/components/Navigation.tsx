import { useState } from "react";
import Scrollspy from "react-scrollspy";
import Settings from "./Settings";

import "./Navigation.css";

const Navigation = (): JSX.Element => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = (): void => setShowMenu((prevState) => !prevState);

  return (
    <nav className="nav">
      <div
        className={`nav-menu${showMenu ? " show-menu" : ""}`}
        data-testid="nav-menu"
      >
        <Scrollspy
          offset={-30}
          className="nav-list"
          currentClassName="active"
          items={["about", "skills", "faq", "contact"]}
        >
          <li className="nav-item">
            <a
              href="#about"
              className="nav-link"
              onClick={() => setShowMenu(false)}
            >
              <span>About</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#skills"
              className="nav-link"
              onClick={() => setShowMenu(false)}
            >
              <span>Skills</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#faq"
              className="nav-link"
              onClick={() => setShowMenu(false)}
            >
              <span>FAQ</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              className="nav-link"
              onClick={() => setShowMenu(false)}
            >
              <span>Contact</span>
            </a>
          </li>
        </Scrollspy>
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
