import { useState } from "react";
import ColorModal from "./ColorModal";
import { ReactComponent as PalleteIcon } from "../assets/icons/pallete.svg";

import "./ColorDropdown.css";

const ColorDropdown = (): JSX.Element => {
  const [isColorModalOpen, setIsColorModalOpen] = useState(false);

  const handleColorModalClose = (): void => setIsColorModalOpen(false);

  const handleDropdownToggle = (): void =>
    setIsColorModalOpen((prevState: boolean) => !prevState);

  const handleColorSwitch = (value: number): void => {
    window.document.documentElement.style.setProperty(
      "--color-hue",
      value.toString()
    );
    setIsColorModalOpen(false);
  };

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
