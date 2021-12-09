import Section from "./Section";
import ContactForm from "./contact/ContactForm";

import "./Contact.css";

const Contact = (): JSX.Element => (
  <Section id="contact">
    <h3 className="headline">
      Have a question<span className="primary">?</span> ask me anything
    </h3>
    <ContactForm />
  </Section>
);

export default Contact;
