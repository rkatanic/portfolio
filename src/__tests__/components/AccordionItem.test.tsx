import { fireEvent, getByRole, render } from "@testing-library/react";
import AccordionItem from "../../components/AccordionItem";

describe("AccordionItem", (): void => {
  it("should render", (): void => {
    const { baseElement } = render(
      <AccordionItem
        label="test label"
        text="test text"
        onToggle={jest.fn()}
        active={false}
      />
    );

    expect(baseElement).toMatchSnapshot();
  });

  it("should render open accordion item", (): void => {
    const { baseElement } = render(
      <AccordionItem
        label="test label"
        text="test text"
        onToggle={jest.fn()}
        active={true}
      />
    );

    expect(baseElement).toMatchSnapshot();
  });

  it("should handle onToggle when clicked", (): void => {
    const mockOnToggle = jest.fn();
    const { getByText } = render(
      <AccordionItem
        label="test label"
        text="test text"
        onToggle={mockOnToggle}
        active={true}
      />
    );

    fireEvent.click(getByText("test label"));

    expect(mockOnToggle).toHaveBeenCalledTimes(1);
  });
});
