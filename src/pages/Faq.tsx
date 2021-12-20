import Accordion from "../components/Accordion";
import Card from "../components/Card";
import Section from "../components/Section";

import "./Faq.css";

const Faq = (): JSX.Element => (
  <Section id="faq">
    <Card title="Frequently Asked Questions">
      <Accordion />
    </Card>
  </Section>
);

export default Faq;
