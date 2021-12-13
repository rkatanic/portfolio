import { useEffect } from "react";
import {
  useHasCurvedBorders,
  useIsRowSwap,
  useToggleCurvedBorders,
  useToggleRowSwap,
} from "../context/GlobalContext";
import me1 from "../assets/images/me1.png";
import ColorSwitch from "./ColorSwitch";
import DarkModeSwitch from "./DarkModeSwitch";
import { ReactComponent as GithubIcon } from "../assets/icons/github.svg";
import { ReactComponent as LinkedinIcon } from "../assets/icons/linkedin.svg";
import { ReactComponent as RowSwapIcon } from "../assets/icons/row-swap.svg";
import { ReactComponent as CornerCurvedIcon } from "../assets/icons/corner-curved.svg";
import { ReactComponent as CornerSharpIcon } from "../assets/icons/corner-sharp.svg";
import { GITHUB_LINK, LINKEDIN_LINK } from "../util/constants/links";

import "./Footer.css";

const Footer = (): JSX.Element => {
  const hasCurvedBorders = useHasCurvedBorders();
  const isRowSwap = useIsRowSwap();
  const toggleCurvedBorders = useToggleCurvedBorders();
  const toggleRowSwap = useToggleRowSwap();

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
    const shouldSwapRows = (): void => {
      if (isRowSwap) {
        window.document.body.classList.add("row-swap");
        window.localStorage.setItem("row-swap", "true");
      } else {
        window.document.body.classList.remove("row-swap");
        window.localStorage.removeItem("row-swap");
      }
    };
    shouldHaveCurvedBorders();
    shouldSwapRows();
  }, [hasCurvedBorders, isRowSwap]);

  return (
    <div className="footer">
      <div className="footer-content">
        <img className="footer-image" src={me1} alt="" />
        <div className="footer-links">
          <a
            className="footer-link"
            href={LINKEDIN_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="footer-link-icon">
              <LinkedinIcon />
            </div>
            <span className="footer-link-label">LinkedIn</span>
          </a>
          <a
            className="footer-link"
            href={GITHUB_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="footer-link-icon">
              <GithubIcon />
            </div>
            <span className="footer-link-label">GitHub</span>
          </a>
        </div>
      </div>
      <div className="footer-actions">
        <ColorSwitch />
        <DarkModeSwitch />
        <div className="footer-link-icon" onClick={toggleCurvedBorders}>
          {hasCurvedBorders ? <CornerSharpIcon /> : <CornerCurvedIcon />}
        </div>

        <div
          id="row-swap-icon"
          className="footer-link-icon"
          onClick={toggleRowSwap}
        >
          <RowSwapIcon />
        </div>
      </div>
    </div>
  );
};

export default Footer;
