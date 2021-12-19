import { useEffect } from "react";
import {
  useHasCurvedBorders,
  useToggleCurvedBorders,
} from "../context/GlobalContext";
import IconButton from "./IconButton";
import { ReactComponent as CornerCurvedIcon } from "../assets/icons/corner-curved.svg";

import "./CurvedBordersSwitch.css";

const CurvedBorderSwitch = (): JSX.Element => {
  const hasCurvedBorders = useHasCurvedBorders();
  const toggleCurvedBorders = useToggleCurvedBorders();

  useEffect(() => {
    const shouldHaveCurvedBorders = (): void => {
      if (hasCurvedBorders) {
        window.document.body.classList.add("curved-borders");
        window.localStorage.setItem("curved-borders", "true");
      } else {
        window.document.body.classList.remove("curved-borders");
        window.localStorage.removeItem("curved-borders");
      }
    };
    shouldHaveCurvedBorders();
  }, [hasCurvedBorders]);

  return (
    <IconButton
      icon={
        hasCurvedBorders ? (
          <CornerCurvedIcon />
        ) : (
          <div className="icon-cirle"></div>
        )
      }
      onClick={toggleCurvedBorders}
    />
  );
};

export default CurvedBorderSwitch;
