import Section from "../components/Section";
import ContactForm from "../components/contact/ContactForm";

import "./Contact.css";
import Card from "../components/Card";

const Contact = (): JSX.Element => (
  <Section id="contact">
    <Card title="Still have a question? Reach me out">
      <ContactForm />
    </Card>
  </Section>
);

export default Contact;
