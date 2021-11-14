import Section from "./Section";

import "./Contact.css";

const Contact = () => {
  return (
    <Section id="contact">
      <div className="contact">
        <h2 className="contact-title">Contact</h2>
        <h3 className="contact-subtitle">Don't hesitate to ask anything</h3>
        <form action="" className="contact-form">
          <input type="text" placeholder="Enter your name" />
          <input type="text" placeholder="Enter your email" />
          <textarea
            type="textarea"
            maxLength="400"
            placeholder="Your message ..."
          />
          <button className="btn-primary">Send</button>
        </form>
      </div>
    </Section>
  );
};

export default Contact;
