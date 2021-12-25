import Section from "../components/Section";
import ContactForm from "../components/contact/ContactForm";

import "./Contact.css";
import Card from "../components/Card";
import Scroll from "../components/Scroll";

const Contact = (): JSX.Element => (
  <Scroll>
    <h1 className="section-title txt-lg txt-800">
      <span className="txt-outlined">0</span>4
    </h1>

    <h3 className="side-section-title txt-xxs txt-400">
      Have A Question? Reach Me Out.
    </h3>

    <ContactForm />
  </Scroll>
);

export default Contact;
