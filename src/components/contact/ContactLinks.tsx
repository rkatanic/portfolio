import { ReactComponent as EmailIcon } from "../../assets/icons/email.svg";
import { ReactComponent as GithubIcon } from "../../assets/icons/github.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/icons/linkedin.svg";

import "./ContactLinks.css";

const ContactLinks = (): JSX.Element => (
  <div className="contact-links">
    <div className="contact-link">
      <EmailIcon />
      <div className="contact-link-info">
        <h3>Email</h3>
        <p>k.rade313@gmail.com</p>
      </div>
    </div>

    <div className="contact-link">
      <LinkedinIcon />
      <div className="contact-link-info">
        <h3>LinkedIn</h3>
        <a href="https://www.linkedin.com/in/radivoje-katanic">
          linkedin.com/in/radivoje-katanic
        </a>
      </div>
    </div>

    <div className="contact-link">
      <GithubIcon />
      <div className="contact-link-info">
        <h3>GitHub</h3>
        <a href="https://github.com/k-rade">github.com/k-rade</a>
      </div>
    </div>
  </div>
);

export default ContactLinks;
