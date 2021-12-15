import { fireEvent, render } from "@testing-library/react";
import Accordion from "../../components/Accordion";

describe("Accordion", (): void => {
  it("should open accordion item on click", (): void => {
    const { getByText } = render(<Accordion />);

    fireEvent.click(getByText("How to pronounce your name correctly"));
    const openedAccordionItem = getByText(
      "When pronounced correctly my first name sounds something like ra-dee-woh-ye."
    );

    expect(openedAccordionItem).toHaveClass("accordion-item-text-open");
  });

  it("should have first accordion item opened initially", (): void => {
    const { getByText } = render(<Accordion />);
    const firstAccordionItemText = getByText(
      "Currently I'm mostly working with React.js on front-end and Spring Boot framework on back-end."
    );

    expect(firstAccordionItemText).toHaveClass("accordion-item-text-open");
  });
});
