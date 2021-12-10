import { useEffect } from "react";
import { useIsDarkMode, useToggleDarkMode } from "../context/GlobalContext";
import { ReactComponent as SunIcon } from "../assets/icons/sun.svg";
import { ReactComponent as MoonIcon } from "../assets/icons/moon.svg";

import "./DarkModeSwitch.css";

const DarkModeSwitch = (): JSX.Element => {
  const isDarkMode = useIsDarkMode();
  const toggleDarkMode = useToggleDarkMode();

  const shouldShowDarkMode = (): void => {
    if (isDarkMode) {
      window.localStorage.removeItem("dark-mode");
      window.document.body.removeAttribute("class");
    } else {
      window.localStorage.setItem("dark-mode", "false");
      window.document.body.setAttribute("class", "day-mode");
    }
  };

  useEffect(() => {
    shouldShowDarkMode();
  }, [isDarkMode]);

  return (
    <div tabIndex={0} className="night-mode-switch" onClick={toggleDarkMode}>
      {isDarkMode ? <SunIcon /> : <MoonIcon />}
    </div>
  );
};

export default DarkModeSwitch;
