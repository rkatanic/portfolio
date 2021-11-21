import Section from "./Section";
import ContactForm from "./contact/ContactForm";
import ContactLinks from "./contact/ContactLinks";

import "./Contact.css";

const Contact = (): JSX.Element => (
  <Section id="contact">
    <div className="contact">
      <h2 className="title">Contact</h2>
      <h3 className="subtitle">Don't hesitate to ask anything</h3>

      <div className="contact-container">
        <ContactLinks />
        <ContactForm />
      </div>
    </div>
  </Section>
);

export default Contact;
