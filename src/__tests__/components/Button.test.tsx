import { fireEvent, render } from "@testing-library/react";
import Button from "../../components/Button";

describe("Button", (): void => {
  it("should render primary button as default", (): void => {
    const { baseElement } = render(<Button>test button</Button>);

    expect(baseElement).toMatchSnapshot();
  });

  it("should render outline button", (): void => {
    const { baseElement } = render(
      <Button variant="btn-outline">test button</Button>
    );

    expect(baseElement).toMatchSnapshot();
  });

  it("should render button type as default", (): void => {
    const { getByText } = render(<Button>test button</Button>);

    expect(getByText("test button")).toHaveAttribute("type", "button");
  });

  it("should handle onClick function", (): void => {
    const mockOnClick = jest.fn();
    const { baseElement, getByText } = render(
      <Button onClick={mockOnClick}>test button</Button>
    );

    fireEvent.click(getByText("test button"));

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
