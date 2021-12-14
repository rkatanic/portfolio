import { render } from "@testing-library/react";
import Footer from "../../components/Footer";

describe("Footer", (): void => {
  it("should render", (): void => {
    const { baseElement } = render(<Footer />);

    expect(baseElement).toMatchSnapshot();
  });

  it("should redirect to correct github link", (): void => {
    const { getByText } = render(<Footer />);

    expect(getByText("GitHub")).toHaveAttribute(
      "href",
      "https://github.com/k-rade"
    );
  });

  it("should redirect to correct linkedin link", (): void => {
    const { getByText } = render(<Footer />);

    expect(getByText("LinkedIn")).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/radivoje-katanic"
    );
  });
});
