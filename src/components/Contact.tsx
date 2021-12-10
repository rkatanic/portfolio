import Section from "./Section";
import ContactForm from "./contact/ContactForm";

import "./Contact.css";

const Contact = (): JSX.Element => (
  <Section id="contact">
    <h3 className="headline">
      Still have a question<span className="primary">?</span> Reach me out
    </h3>
    <ContactForm />
  </Section>
);

export default Contact;
