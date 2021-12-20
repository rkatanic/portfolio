import Link from "./Link";
import Settings from "./Settings";
import IconButton from "./IconButton";
import me1 from "../assets/images/me1.png";
import { ReactComponent as GithubIcon } from "../assets/icons/github.svg";
import { ReactComponent as LinkedinIcon } from "../assets/icons/linkedin.svg";
import { GITHUB_LINK, LINKEDIN_LINK } from "../util/constants/links";

import "./Footer.css";

const Footer = (): JSX.Element => (
  <div className="footer">
    <div className="footer-links">
      <Link label="LinkedIn" href={LINKEDIN_LINK} icon={<LinkedinIcon />} />
      <Link label="GitHub" href={GITHUB_LINK} icon={<GithubIcon />} />
    </div>
    <div className="footer-copyright">
      © {new Date().getFullYear()} Radivoje Katanić
    </div>
  </div>
);

export default Footer;
