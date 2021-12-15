import { ReactComponent as CloseIcon } from "../assets/icons/arrow-up.svg";

import "./AccordionItem.css";

interface Props {
  label: string;
  text: string | JSX.Element;
  active: boolean;
  onToggle: () => void;
}

const AccordionItem = ({
  label,
  text,
  active,
  onToggle,
}: Props): JSX.Element => (
  <li
    className={`accordion-item ${active ? "accordion-item-active" : ""}`}
    onClick={onToggle}
  >
    <div className="accordion-item-label">
      <p className="accordion-item-label-headline">
        {label}
        <span className="primary">?</span>
      </p>
      <CloseIcon />
    </div>
    <p
      className={`accordion-item-text ${
        active ? "accordion-item-text-open" : ""
      }`}
    >
      {text}
      <br />
      <br />
    </p>
  </li>
);

export default AccordionItem;
