import { useState } from "react";
import { FAQS } from "../util/constants/faq";
import AccordionItem from "./AccordionItem";

import "./Accordion.css";

const Accordion = (): JSX.Element => {
  const [isClicked, setIsClicked] = useState(0);

  const handleAccordionToggle = (index: number): void => {
    setIsClicked(index);
  };

  return (
    <div className="accordion">
      {FAQS.map(({ question, answer }, i) => (
        <AccordionItem
          key={i}
          label={question}
          text={answer}
          active={isClicked === i}
          onToggle={(): void => handleAccordionToggle(i)}
        />
      ))}
    </div>
  );
};

export default Accordion;
