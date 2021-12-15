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
import Link from "./Link";

const Footer = (): JSX.Element => (
  <div className="footer">
    <div className="footer-content">
      <img className="footer-image" src={me1} alt="" />
      <div className="footer-links">
        <Link
          icon={
            <div className="footer-link-icon">
              <LinkedinIcon />
            </div>
          }
          label="LinkedIn"
          href={LINKEDIN_LINK}
        />

        <Link
          icon={
            <div className="footer-link-icon">
              <GithubIcon />
            </div>
          }
          label="GitHub"
          href={GITHUB_LINK}
        />
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
