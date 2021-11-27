import { useEffect, useState } from "react";
import { useIsDarkMode, useToggleDarkMode } from "../context/GlobalContext";
import ColorDropdown from "./ColorDropdown";
import { ReactComponent as MenuIcon } from "../assets/icons/menu.svg";
import { ReactComponent as SunIcon } from "../assets/icons/sun.svg";
import { ReactComponent as MoonIcon } from "../assets/icons/moon.svg";
import { ReactComponent as CloseIcon } from "../assets/icons/close.svg";
import Scrollspy from "react-scrollspy";

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
        <div className={showMenu ? `nav-menu show-menu` : `nav-menu`}>
          <Scrollspy
            offset={-30}
            className="nav-list"
            currentClassName="active"
            items={["home", "about", "skills", "contact"]}
          >
            <li className="nav-item" onClick={() => setShowMenu(false)}>
              <a href="#home" className="nav-link ">
                {"<"}
                <b className="color-primary">Home</b>
                {"/>"}
              </a>
            </li>
            <li className="nav-item" onClick={() => setShowMenu(false)}>
              <a href="#about" className="nav-link">
                {"<"}
                <b className="color-primary">About</b>
                {"/>"}
              </a>
            </li>
            <li className="nav-item" onClick={() => setShowMenu(false)}>
              <a href="#skills" className="nav-link">
                {"<"}
                <b className="color-primary">Skills</b>
                {"/>"}
              </a>
            </li>
            <li className="nav-item" onClick={() => setShowMenu(false)}>
              <a href="#contact" className="nav-link">
                {"<"}
                <b className="color-primary">Contact</b>
                {"/>"}
              </a>
            </li>
          </Scrollspy>

          <ColorDropdown />

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
