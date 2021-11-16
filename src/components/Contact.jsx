import Section from "./Section";
import { ReactComponent as EmailIcon } from "../assets/icons/email.svg";
import { ReactComponent as GithubIcon } from "../assets/icons/github.svg";
import { ReactComponent as LinkedinIcon } from "../assets/icons/linkedin.svg";
import emailjs from "emailjs-com";
import "./Contact.css";
import { useState } from "react";

const Contact = () => {
  const [isSendingEmail, setIsSendingEmail] = useState(false);

  const handleEmailSend = async (e) => {
    e.preventDefault();

    try {
      setIsSendingEmail(true);
      await emailjs.sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAIL_USER_ID
      );
      setIsSendingEmail(false);
    } catch (err) {
      alert(err.text);
      setIsSendingEmail(false);
    }
  };

  return (
    <Section id="contact">
      <div className="contact">
        <h2 className="contact-title">Contact</h2>
        <h3 className="contact-subtitle">Don't hesitate to ask anything</h3>

        <div className="contact-container">
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
                <p>k.rade313@gmail.com</p>
              </div>
            </div>
            <div className="contact-link">
              <GithubIcon />
              <div className="contact-link-info">
                <h3>GitHub</h3>
                <p>k.rade313@gmail.com</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleEmailSend}>
            <input type="text" placeholder="Enter your name" name="name" />
            <input type="text" placeholder="Enter your email" name="email" />
            <input type="text" placeholder="Enter subject" name="subject" />

            <textarea
              type="textarea"
              maxLength="400"
              placeholder="Your message ..."
              name="message"
            />
            <button
              type="submit"
              disabled={isSendingEmail}
              className="btn btn-primary"
            >
              {isSendingEmail ? "Sending ..." : "Send email"}
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
