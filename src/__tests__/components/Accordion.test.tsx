import { fireEvent, render } from "@testing-library/react";
import Accordion from "../../components/Accordion";

describe("Accordion", (): void => {
  it("should render", (): void => {
    const { baseElement } = render(<Accordion />);

    expect(baseElement).toMatchSnapshot();
  });

  it("should open accordion item on click", (): void => {
    const { getByText } = render(<Accordion />);

    fireEvent.click(getByText("What did you use to build your website"));
    const openedAccordionItem = getByText(
      "This website is built with React.js. If you are interested in source code, you can find it here."
    );

    expect(openedAccordionItem).toHaveClass("accordion-item-text-open");
  });

  it("should open first accordion item on toggle", (): void => {
    const { getByText } = render(<Accordion />);
    const accordionItem = getByText("What did you use to build your website");
    const openedAccordionItemText = getByText(
      "This website is built with React.js. If you are interested in source code, you can find it here."
    );

    fireEvent.click(accordionItem);
    expect(openedAccordionItemText).toHaveClass("accordion-item-text-open");

    fireEvent.click(accordionItem);
    const firstAccordionItemText = getByText(
      "Currently I'm mostly working with React.js on front-end and Spring Boot framework on back-end."
    );
    expect(firstAccordionItemText).toHaveClass("accordion-item-text-open");
  });
});
