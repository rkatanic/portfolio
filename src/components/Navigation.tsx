import { useState } from "react";
import { ReactComponent as MenuIcon } from "../assets/icons/menu.svg";
import { ReactComponent as CloseIcon } from "../assets/icons/close.svg";
import Scrollspy from "react-scrollspy";

import "./Navigation.css";

const Navigation = (): JSX.Element => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = (): void => setShowMenu((prevState) => !prevState);

  return (
    <nav className="nav">
      <div
        className={showMenu ? `nav-menu show-menu` : `nav-menu`}
        data-testid="nav-menu"
      >
        <Scrollspy
          offset={-30}
          className="nav-list"
          currentClassName="active"
          items={["about", "skills", "faq", "contact"]}
        >
          <li className="nav-item" onClick={() => setShowMenu(false)}>
            <a href="#about" className="nav-link">
              <div className="number">01</div>
              <div className="dash"></div>
              <span>About</span>
            </a>
          </li>
          <li className="nav-item" onClick={() => setShowMenu(false)}>
            <a href="#skills" className="nav-link">
              <div className="number">02</div>
              <div className="dash"></div>
              <span>Skills</span>
            </a>
          </li>
          <li className="nav-item" onClick={() => setShowMenu(false)}>
            <a href="#faq" className="nav-link">
              <div className="number">03</div>
              <div className="dash"></div>
              <span>FAQ</span>
            </a>
          </li>
          <li className="nav-item" onClick={() => setShowMenu(false)}>
            <a href="#contact" className="nav-link">
              <div className="number">04</div>
              <div className="dash"></div>
              <span>Contact</span>
            </a>
          </li>
        </Scrollspy>
      </div>
      <div
        className={`nav-toggle ${showMenu ? "close" : ""}`}
        onClick={handleMenuToggle}
        data-testid="nav-toggle"
      >
        <div className="nav-toggle-dash"></div>
      </div>
    </nav>
  );
};

export default Navigation;
