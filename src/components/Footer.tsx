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
    <div className="footer-content">
      <img className="footer-image" src={me1} alt="" />
      <div className="footer-links">
        <Link
          icon={<IconButton icon={<LinkedinIcon />} />}
          label="LinkedIn"
          href={LINKEDIN_LINK}
        />
        <Link
          icon={<IconButton icon={<GithubIcon />} />}
          label="GitHub"
          href={GITHUB_LINK}
        />
      </div>
    </div>
    <div className="footer-settings">
      <Settings />
    </div>
  </div>
);

export default Footer;
