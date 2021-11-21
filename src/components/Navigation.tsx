import { useEffect, useState } from "react";
import { useIsDarkMode, useToggleDarkMode } from "../context/GlobalContext";
import ColorDropdown from "./ColorDropdown";
import { ReactComponent as MenuIcon } from "../assets/icons/menu.svg";
import { ReactComponent as SunIcon } from "../assets/icons/sun.svg";
import { ReactComponent as MoonIcon } from "../assets/icons/moon.svg";
import { ReactComponent as CloseIcon } from "../assets/icons/close.svg";

import "./Navigation.css";

const Navigation = (): JSX.Element => {
  const [showMenu, setShowMenu] = useState(false);

  const isDarkMode = useIsDarkMode();
  const toggleDarkMode = useToggleDarkMode();

  const shouldShowDarkMode = (): void => {
    if (isDarkMode) {
      window.document.body.setAttribute("class", "dark-mode");
    } else {
      window.document.body.removeAttribute("class");
    }
  };

  useEffect(() => {
    shouldShowDarkMode();
  }, [isDarkMode]);

  const handleMenuToggle = (): void => setShowMenu((prevState) => !prevState);

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-left">
          <ColorDropdown />
          <div className="night-mode-switch" onClick={toggleDarkMode}>
            {isDarkMode ? <SunIcon /> : <MoonIcon />}
          </div>
        </div>
        <div className={showMenu ? `nav-menu show-menu` : `nav-menu`}>
          <ul className="nav-list">
            <li className="nav-item" onClick={() => setShowMenu(false)}>
              <a href="#home" className="nav-link ">
                Home
              </a>
            </li>
            <li className="nav-item" onClick={() => setShowMenu(false)}>
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item" onClick={() => setShowMenu(false)}>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>

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
