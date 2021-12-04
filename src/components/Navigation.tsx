import { useState } from "react";
import { ReactComponent as MenuIcon } from "../assets/icons/menu.svg";
import { ReactComponent as CloseIcon } from "../assets/icons/close.svg";
import Scrollspy from "react-scrollspy";

import "./Navigation.css";

const Navigation = (): JSX.Element => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = (): void => setShowMenu((prevState) => !prevState);

  return (
    <header className="header">
      <nav className="nav">
        <div className={showMenu ? `nav-menu show-menu` : `nav-menu`}>
          <Scrollspy
            offset={-30}
            className="nav-list"
            currentClassName="active"
            items={["about", "skills", "contact"]}
          >
            <li className="nav-item" onClick={() => setShowMenu(false)}>
              <a href="#about" className="nav-link">
                <div className="number">01</div>
                <div className="dash"></div>
                <span> About</span>
              </a>
            </li>
            <li className="nav-item" onClick={() => setShowMenu(false)}>
              <a href="#skills" className="nav-link">
                <div className="number">02</div>
                <div className="dash"></div>
                <span> Skills</span>
              </a>
            </li>
            <li className="nav-item" onClick={() => setShowMenu(false)}>
              <a href="#contact" className="nav-link">
                <div className="number">03</div>
                <div className="dash"></div>
                <span> Contact</span>
              </a>
            </li>
          </Scrollspy>

          <CloseIcon className="nav-close" onClick={handleMenuToggle} />
        </div>
        <div className="nav-toggle">
          <MenuIcon onClick={handleMenuToggle} />
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
