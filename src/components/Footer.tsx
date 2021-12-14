import me1 from "../assets/images/me1.png";
import ColorSwitch from "./ColorSwitch";
import DarkModeSwitch from "./DarkModeSwitch";
import RowSwap from "./RowSwap";
import CurvedBorderSwitch from "./CurvedBordersSwitch";
import { GlobalContextProvider } from "../context/GlobalContext";
import { ReactComponent as GithubIcon } from "../assets/icons/github.svg";
import { ReactComponent as LinkedinIcon } from "../assets/icons/linkedin.svg";
import { GITHUB_LINK, LINKEDIN_LINK } from "../util/constants/links";

import "./Footer.css";

const Footer = (): JSX.Element => (
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
          LinkedIn
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
          GitHub
        </a>
      </div>
    </div>
    <div className="footer-actions">
      <GlobalContextProvider>
        <ColorSwitch />
        <DarkModeSwitch />
        <CurvedBorderSwitch />
        <RowSwap />
      </GlobalContextProvider>
    </div>
  </div>
);

export default Footer;
