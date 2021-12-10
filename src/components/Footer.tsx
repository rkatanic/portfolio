import me1 from "../assets/images/me1.png";
import ColorSwitch from "./ColorSwitch";
import DarkModeSwitch from "./DarkModeSwitch";
import { ReactComponent as GithubIcon } from "../assets/icons/github.svg";
import { ReactComponent as LinkedinIcon } from "../assets/icons/linkedin.svg";

import "./Footer.css";

const Footer = (): JSX.Element => (
  <div className="footer">
    <div className="footer-content">
      <img className="footer-image" src={me1} alt="" />
      <div className="footer-links">
        <a
          className="footer-link"
          href="https://www.linkedin.com/in/radivoje-katanic"
        >
          <div className="footer-link-icon">
            <LinkedinIcon />
          </div>
          LinkedIn
        </a>
        <a className="footer-link" href="https://github.com/k-rade">
          <div className="footer-link-icon">
            <GithubIcon />
          </div>
          GitHub
        </a>
      </div>
    </div>
    <div className="footer-actions">
      <ColorSwitch />
      <DarkModeSwitch />
    </div>
  </div>
);

export default Footer;
