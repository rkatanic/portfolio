import Accordion from "../components/Accordion";
import Section from "../components/Section";

import "./Faq.css";

const Faq = (): JSX.Element => (
  <Section id="faq">
    <h3 className="headline">Frequently Asked Questions</h3>
    <Accordion />
  </Section>
);

export default Faq;
