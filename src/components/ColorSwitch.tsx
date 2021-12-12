import { useEffect, useState } from "react";
import ColorModal from "./ColorModal";
import { ReactComponent as PaintBrushIcon } from "../assets/icons/paint-brush.svg";
import { COLORS, DEFAULT_COLOR_HUE } from "../util/constants/colors";

import "./ColorSwitch.css";

const ColorSwitch = (): JSX.Element => {
  const [isColorModalOpen, setIsColorModalOpen] = useState(false);

  const handleColorModalClose = (): void => setIsColorModalOpen(false);

  const handleColorModalToggle = (): void =>
    setIsColorModalOpen((prevState: boolean) => !prevState);

  const handleColorSwitch = (value: number): void => {
    setColorToLocalStorage(value);
    window.document.documentElement.style.setProperty(
      "--color-hue",
      value.toString()
    );
    setIsColorModalOpen(false);
  };

  const setColorToLocalStorage = (value: number): void =>
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
    <div className="color-switch">
      <div className="color-switch-header" onClick={handleColorModalToggle}>
        <PaintBrushIcon />
      </div>
      <ColorModal
        isOpen={isColorModalOpen}
        closeModal={handleColorModalClose}
        switchColor={handleColorSwitch}
      />
    </div>
  );
};

export default ColorSwitch;
