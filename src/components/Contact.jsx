import Section from "./Section";

import "./Contact.css";

const Contact = () => {
  return (
    <Section id="contact">
      <div className="contact">
        <h2>Contact me</h2>
        <h4>Don't hesitate to ask anything</h4>
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
