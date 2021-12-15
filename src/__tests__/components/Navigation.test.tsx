import { fireEvent, render } from "@testing-library/react";
import Navigation from "../../components/Navigation";

describe("Navigation", (): void => {
  it("should render", (): void => {
    const { baseElement } = render(<Navigation />);

    expect(baseElement).toMatchSnapshot();
  });

  it("should handle menu open", (): void => {
    const { getByTestId } = render(<Navigation />);
    const navToggle = getByTestId("nav-toggle");
    const navMenu = getByTestId("nav-menu");

    fireEvent.click(navToggle);

    expect(navToggle).toHaveClass("close");
    expect(navMenu).toHaveClass("show-menu");
  });

  it("should close menu when clicked on settings", (): void => {
    const { getByTestId } = render(<Navigation />);
    const navToggle = getByTestId("nav-toggle");
    const navMenu = getByTestId("nav-menu");

    fireEvent.click(getByTestId("nav-settings"));

    expect(navToggle).not.toHaveClass("close");
    expect(navMenu).not.toHaveClass("show-menu");
  });

  it.each(["About", "Skills", "FAQ", "Contact"])(
    "should close menu when clicked on %s navigation link",
    (navLinkText: string): void => {
      const { getByTestId, getByText } = render(<Navigation />);
      const navToggle = getByTestId("nav-toggle");
      const navMenu = getByTestId("nav-menu");

      fireEvent.click(getByText(navLinkText));

      expect(navToggle).not.toHaveClass("close");
      expect(navMenu).not.toHaveClass("show-menu");
    }
  );
});
