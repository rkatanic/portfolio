import { useEffect, useState } from "react";
import { useIsDarkMode, useToggleDarkMode } from "../context/GlobalContext";
import { ReactComponent as MenuIcon } from "../assets/icons/menu.svg";
import { ReactComponent as SunIcon } from "../assets/icons/sun.svg";
import { ReactComponent as MoonIcon } from "../assets/icons/moon.svg";

import "./Navigation.css";

const Navigation = () => {
  const hueColors = [
    { key: "red", value: 5 },
    { key: "green", value: 145 },
    { key: "blue", value: 210 },
    { key: "purple", value: 270 },
  ];

  const [showMenu, setShowMenu] = useState(false);

  const isDarkMode = useIsDarkMode();
  const toggleDarkMode = useToggleDarkMode();

  const shouldShowDarkMode = () => {
    if (isDarkMode) {
      window.document.body.setAttribute("class", "dark-mode");
    } else {
      window.document.body.removeAttribute("class");
    }
  };

  useEffect(() => {
    shouldShowDarkMode();
  }, [isDarkMode]);

  const handleMenuToggle = () => setShowMenu((prevState) => !prevState);

  const handleColorSwitch = (colorValue) => {
    window.document.documentElement.style.setProperty(
      "--color-hue",
      colorValue
    );
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-left">
          <div className="color-switch-container">
            {hueColors.map((hueColor) => (
              <div
                onClick={() => handleColorSwitch(hueColor.value)}
                key={hueColor.key}
                className="color-indicator"
                style={{
                  backgroundColor: `hsl(${hueColor.value},70%,60%)`,
                  border: `2px solid hsl(${hueColor.value},90%,75%)`,
                }}
              ></div>
            ))}
          </div>
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
          <div className="nav-close" onClick={handleMenuToggle}>
            x
          </div>
        </div>
        <div className="nav-btns">
          <div className="nav-toggle">
            <MenuIcon onClick={handleMenuToggle} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
