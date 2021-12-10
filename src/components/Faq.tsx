import Accordion from "./Accordion";
import "./Faq.css";
import Section from "./Section";

const Faq = (): JSX.Element => (
  <Section id="faq">
    <h3 className="headline">Frequently Asked Questions</h3>
    <Accordion />
  </Section>
);

export default Faq;
