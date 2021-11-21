import { ReactComponent as ArrowUpIcon } from "../assets/icons/arrow-up.svg";
import { ReactComponent as GithubIcon } from "../assets/icons/github.svg";
import { ReactComponent as LinkedinIcon } from "../assets/icons/linkedin.svg";

import "./Footer.css";

const Footer = (): JSX.Element => (
  <div className="footer">
    <a href="#home" className="footer-back-to-top">
      <ArrowUpIcon />
    </a>
    <div className="footer-links">
      <a href="https://github.com/k-rade">
        <GithubIcon />
      </a>
      <a href="https://www.linkedin.com/in/radivoje-katanic">
        <LinkedinIcon />
      </a>
    </div>
    <ul className="nav-list">
      <li className="nav-item">
        <a href="#home" className="nav-link ">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a href="#about" className="nav-link">
          About
        </a>
      </li>
      <li className="nav-item">
        <a href="#contact" className="nav-link">
          Contact
        </a>
      </li>
    </ul>
    <div className="footer-divider">
      <hr />
      <div className="center-diamond"></div>
    </div>
    <p>Created by:&nbsp; Radivoje Katanic</p>
  </div>
);

export default Footer;
