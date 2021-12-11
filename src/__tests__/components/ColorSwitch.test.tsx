import { fireEvent, render } from "@testing-library/react";
import ColorSwitch from "../../components/ColorSwitch";

describe("ColorSwitch", (): void => {
  it("should handle color switch", (): void => {
    Storage.prototype.setItem = jest.fn(() => {});
    jest.spyOn(document.body, "removeAttribute");
    const { getByText, getByTestId, queryByText } = render(<ColorSwitch />);

    expect(window.localStorage.setItem).toHaveBeenNthCalledWith(
      1,
      "color",
      "160"
    );

    fireEvent.click(getByText("pallete.svg"));
    expect(getByText("Choose your favourite color")).toBeInTheDocument();

    fireEvent.click(getByTestId("color-item-100"));
    expect(window.localStorage.setItem).toHaveBeenNthCalledWith(
      2,
      "color",
      "100"
    );
    expect(queryByText("Choose your favourite color")).not.toBeInTheDocument();
  });

  it("should get hue color from local storage", (): void => {
    Storage.prototype.getItem = jest.fn(() => "200");
    Storage.prototype.setItem = jest.fn(() => {});
    jest.spyOn(document.body, "removeAttribute");

    render(<ColorSwitch />);

    expect(window.localStorage.getItem).toHaveBeenNthCalledWith(1, "color");
    expect(window.localStorage.setItem).toHaveBeenNthCalledWith(
      1,
      "color",
      "200"
    );
  });

  it("should handle modal close", (): void => {
    const { getByText, queryByText } = render(<ColorSwitch />);

    fireEvent.click(getByText("pallete.svg"));
    expect(getByText("Choose your favourite color")).toBeInTheDocument();

    fireEvent.click(getByText("close.svg"));
    expect(queryByText("Choose your favourite color")).not.toBeInTheDocument();
  });
});
