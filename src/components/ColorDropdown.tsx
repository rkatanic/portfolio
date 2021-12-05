import { useEffect, useState } from "react";
import ColorModal from "./ColorModal";
import { ReactComponent as PalleteIcon } from "../assets/icons/pallete.svg";
import { COLORS, DEFAULT_COLOR_HUE } from "../util/constants/colors";

import "./ColorDropdown.css";

const ColorDropdown = (): JSX.Element => {
  const [isColorModalOpen, setIsColorModalOpen] = useState(false);

  const handleColorModalClose = (): void => setIsColorModalOpen(false);

  const handleDropdownToggle = (): void =>
    setIsColorModalOpen((prevState: boolean) => !prevState);

  const handleColorSwitch = (value: number): void => {
    setColorToLocalStorage(value);
    window.document.documentElement.style.setProperty(
      "--color-hue",
      value.toString()
    );
    setIsColorModalOpen(false);
  };

  const setColorToLocalStorage = (value: number) =>
    window.localStorage.setItem("color", value.toString());

  useEffect(() => {
    const colorValueFromLocalStorage = Number(
      window.localStorage.getItem("color")?.valueOf()
    );

    if (!COLORS.some(({ value }) => value === colorValueFromLocalStorage)) {
      setColorToLocalStorage(DEFAULT_COLOR_HUE);
    } else {
      handleColorSwitch(colorValueFromLocalStorage);
    }
  }, []);

  return (
    <>
      <div className="color-dropdown-header" onClick={handleDropdownToggle}>
        <PalleteIcon />
      </div>
      <ColorModal
        isOpen={isColorModalOpen}
        closeModal={handleColorModalClose}
        switchColor={handleColorSwitch}
      />
    </>
  );
};

export default ColorDropdown;
