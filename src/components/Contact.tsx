import Section from "./Section";
import ContactForm from "./contact/ContactForm";

import "./Contact.css";

const Contact = (): JSX.Element => (
  <Section id="contact">
    <div className="contact">
      <h3 className="subtitle">Don't hesitate to ask anything</h3>
      <ContactForm />
    </div>
  </Section>
);

export default Contact;
