import { useRef, useState, useEffect } from "react";
import { ReactComponent as PalleteIcon } from "../assets/icons/pallete.svg";

import "./ColorDropdown.css";

const ColorDropdown = (): JSX.Element => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdrownRef = useRef<any>();

  const colors: { key: string; value: number }[] = [
    { key: "red", value: 0 },
    { key: "orange", value: 20 },
    { key: "yellow", value: 45 },
    { key: "green", value: 110 },
    { key: "teal", value: 140 },
    { key: "aqua", value: 190 },
    { key: "lightblue", value: 210 },
    { key: "blue", value: 230 },
    { key: "purple", value: 270 },
  ];

  const handleDropdownToggle = (): void =>
    setIsDropdownOpen((prevState: boolean) => !prevState);

  const handleColorSwitch = (value: number): void => {
    window.document.documentElement.style.setProperty(
      "--color-hue",
      value.toString()
    );
    setIsDropdownOpen(false);
  };

  const handleClickOutside = (event: Event): void => {
    if (dropdrownRef.current && !dropdrownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return (): void => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div className="color-dropdown">
      <div className="color-dropdown-header" onClick={handleDropdownToggle}>
        <PalleteIcon />
      </div>
      {isDropdownOpen && (
        <div ref={dropdrownRef} className="color-dropdown-list">
          {colors.map(
            ({ key, value }): JSX.Element => (
              <div
                onClick={() => handleColorSwitch(value)}
                key={key}
                className="color-dropdown-item"
                style={{
                  background: `hsl(${value},70%,60%)`,
                }}
              ></div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default ColorDropdown;