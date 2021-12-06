import Section from "./Section";
import ContactForm from "./contact/ContactForm";

import "./Contact.css";

const Contact = (): JSX.Element => (
  <Section id="contact">
    <h3 className="headline">Don't hesitate to ask anything</h3>
    <ContactForm />
  </Section>
);

export default Contact;
