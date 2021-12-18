import Section from "../components/Section";
import ContactForm from "../components/contact/ContactForm";

import "./Contact.css";

const Contact = (): JSX.Element => (
  <Section id="contact">
    <h3 className="section-headline">
      Still have a question<span className="primary">?</span> Reach me out
    </h3>
    <ContactForm />
  </Section>
);

export default Contact;
